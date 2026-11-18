// Shelf Taught: tiny hash-routed site. Routes: #/  #/shelf/<id>  #/guide/<id>  #/search/<words>
const main = document.getElementById("main");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// A shelf has either a plain "guides" list or "sections" (e.g. one per language). Either way, s.guides lists them all.
const shelves = WINGS.flatMap(w => w.shelves.map(s => ({ ...s, wing: w, guides: s.sections ? s.sections.flatMap(x => x.guides) : s.guides })));
const sectionsOf = s => s.sections || [{ guides: s.guides }];
const shelfById = id => shelves.find(s => s.id === id);

// Light per-device memory (progress ticks, teach-back drafts). Fails quietly if storage is blocked.
const store = {
  get(k, d) { try { const v = localStorage.getItem("st:" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("st:" + k, JSON.stringify(v)); } catch {} }
};
const canDoTicks = id => store.get("can:" + id, []);
const guideDone = id => { const g = GUIDES[id]; return g && g.canDo && g.canDo.every((_, i) => canDoTicks(id).includes(i)); };
const levelOf = (s, id) => (s.roadmap || []).findIndex(l => l.guides.includes(id));
const sectionOf = (s, id) => sectionsOf(s).find(x => x.guides.includes(id));

// Spines get different heights so the shelf looks real, but stay the same on every visit.
const spineHeight = name => 9 + ([...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 5) * 0.9;

function home() {
  return `
    <h1>The library</h1>
    <p class="lede">Pick a book off any shelf, or tell the catalog what you want to do.</p>
    ${WINGS.map(w => `
      <section class="wing" aria-labelledby="w-${w.id}">
        <h2 id="w-${w.id}">${esc(w.name)}</h2>
        <div class="shelf">
          ${w.shelves.map(raw => shelfById(raw.id)).map(s => `
            <a class="spine${s.guides.length ? "" : " empty"}" href="#/shelf/${s.id}"
               style="--c:${w.color};--h:${spineHeight(s.name)}rem"
               aria-label="${esc(s.name)}, ${s.guides.length} guide${s.guides.length === 1 ? "" : "s"}">
              <span>${esc(s.name)}</span><span class="count">${s.guides.length}</span>
            </a>`).join("")}
        </div>
      </section>`).join("")}`;
}

function bookItem(id) {
  const g = GUIDES[id];
  const s = shelfById(g.shelf);
  return `<li><a class="book" style="--c:${s.wing.color}" href="#/guide/${id}">
    <strong>${guideDone(id) ? `<span class="done" title="You ticked everything in 'I can do this now'">✓</span> ` : ""}${esc(g.title)}</strong>${esc(g.summary)}
    <span class="tags">${esc(s.name)} · ${esc(g.difficulty)} · ${esc(g.time)}</span></a></li>`;
}

function shelfPage(id) {
  const s = shelfById(id);
  if (!s) return notFound();
  return `
    <p class="crumbs"><a href="#/">Library</a> / ${esc(s.wing.name)}</p>
    <h1>${esc(s.name)}</h1>
    <p class="lede">${esc(s.blurb)}</p>
    ${s.guides.length ? `<button class="pdf" type="button" data-print-shelf="${s.id}">Download the whole shelf as PDF</button>` : ""}
    ${s.roadmap ? roadmapHtml(s) : ""}
    ${s.project ? `<div class="project"><h2>Shelf project: ${esc(s.project.name)}</h2><p>${esc(s.project.goal)}</p>
      <ol>${sectionsOf(s).filter(x => x.project).map(x => `<li><strong>${esc(x.name)}:</strong> ${esc(x.project)}</li>`).join("")}</ol></div>` : ""}
    ${s.guides.length
      ? sectionsOf(s).map(x => `${x.name ? `<h2>${esc(x.name)}</h2>` : ""}${x.blurb ? `<p class="section-blurb">${esc(x.blurb)}</p>` : ""}
          <ul class="book-list">${x.guides.map(bookItem).join("")}</ul>
          ${x.review && REVIEWS[x.review] ? `<p><a class="review-link" href="#/review/${x.review}">${esc(x.name)} review quiz: ${REVIEWS[x.review].quiz.length} mixed questions</a></p>` : ""}`).join("")
      : `<p class="empty-note">This shelf is empty for now. Its first guides are on the way.</p>`}
    ${s.links ? `<h2>Free libraries to borrow from</h2>
      <ul>${s.links.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.title)}</a></li>`).join("")}</ul>` : ""}`;
}

// The 5-level roadmap: where you start, where you're heading, and how you know you're ready to move up.
function roadmapHtml(s, here) {
  return `<div class="roadmap"><h2>Your roadmap: ${s.roadmap.length} levels</h2>
    <ol>${s.roadmap.map((l, i) => {
      const done = l.guides.filter(guideDone).length;
      return `<li class="${i === here ? "here" : ""}">
        <strong>Level ${i + 1}: ${esc(l.name)}</strong>${i === here ? ` <span class="you">you are here</span>` : ""}
        <span class="lvl-count">${done} of ${l.guides.length} guides ticked off</span>
        <p><em>Milestone:</em> ${esc(l.milestone)}</p>
        <p><em>Ready to move up when</em> ${esc(l.ready)}</p></li>`; }).join("")}</ol></div>`;
}

// Ready-to-copy prompts for when you're truly stuck, so a trip to Claude stays short.
function askClaude(g, s) {
  const t = g.title.toLowerCase();
  const prompts = [
    ["Explain it simply", `Explain ${t} like I'm new to it. One everyday analogy, then a 3-step checklist, then one quick question to check I got it. I keep mixing it up with [OTHER THING], so show the difference in a small table.`],
    ["Hint ladder", `I'm stuck on [CHALLENGE] from the Shelf Taught guide "${g.title}". Here's what I tried: [MY ATTEMPT]. Give me the smallest hint first. A bigger hint only if I ask, and the answer only if I say "show me".`],
    ["Quiz me until it clicks", `Quiz me on ${t}, [NUMBER] questions, one at a time, in new wordings and real-life scenarios. Wait for each answer, give a one-line why, and bring back the ones I miss in a new wording. End with my weak spots.`]
  ];
  if (s.id === "coding") prompts.push(["Learn from code", "Explain this code line by line in plain English: [PASTE CODE]. Then show me one other way to do the same thing, and ask me 2 quick questions about it."]);
  return `<h2>Stuck? Ask Claude</h2>
    <p>Try the hint ladders and the quiz first. Still stuck? Copy a prompt, swap the [BRACKETS] for your own words, and paste it into Claude.</p>
    ${prompts.map(([name, text]) => `<div class="prompt"><p><strong>${esc(name)}</strong></p><p class="prompt-text">${esc(text)}</p>
      <button type="button" class="copy" data-copy="${esc(text)}">Copy</button></div>`).join("")}`;
}

// A one-page card to keep: words, the steps as a checklist, and the traps.
function cheatSheet(g) {
  const first = t => String(t).split(/(?<=[.!?])\s/)[0];
  return `<section class="cheat" aria-labelledby="cheat-h">
    <h2 id="cheat-h">Cheat sheet: ${esc(g.title)}</h2>
    ${g.words ? `<h3>Key words</h3><ul>${g.words.map(w => `<li><strong>${esc(w.word)}</strong>: ${esc(first(w.meaning))}</li>`).join("")}</ul>` : ""}
    <h3>Every time</h3><ol>${g.steps.map(x => `<li>${esc(first(typeof x === "string" ? x : x.do))}</li>`).join("")}</ol>
    <h3>Traps</h3><ul>${g.mistakes.map(m => `<li>${esc(first(m))}</li>`).join("")}</ul>
    <button type="button" class="pdf" data-print-cheat>Print just this card</button>
  </section>`;
}

function guidePage(id, solo = true) {
  const g = GUIDES[id];
  if (!g) return notFound();
  const s = shelfById(g.shelf);
  return `
    <article class="guide">
      <p class="crumbs"><a href="#/">Library</a> / <a href="#/shelf/${s.id}">${esc(s.name)}</a></p>
      <h1>${esc(g.title)}</h1>
      <ul class="facts"><li>${esc(g.difficulty)}</li><li>${esc(g.time)}</li><li>${esc(g.cost)}</li></ul>
      ${solo ? `<button class="pdf" type="button" data-print>Download as PDF</button>` : ""}
      <p>${esc(g.summary)}</p>

      ${g.canDo ? `<h2>What you can do with this</h2>
      <ul>${g.canDo.map(c => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}

      ${s.roadmap && levelOf(s, id) > -1 ? `<p class="level-tag">Level ${levelOf(s, id) + 1} of ${s.roadmap.length}: <strong>${esc(s.roadmap[levelOf(s, id)].name)}</strong>. Milestone: ${esc(s.roadmap[levelOf(s, id)].milestone)} <a href="#/shelf/${s.id}">See the whole roadmap</a></p>` : ""}
      ${s.project && sectionOf(s, id)?.project ? `<p class="project-tag"><strong>Shelf project (${esc(s.project.name)}):</strong> ${esc(sectionOf(s, id).project)}</p>` : ""}

      ${g.words ? `<h2>Words to know</h2>
      <dl class="words">${g.words.map(w => `<dt>${esc(w.word)}</dt><dd>${esc(w.meaning)}</dd>`).join("")}</dl>` : ""}

      <h2>Think of it like this</h2>
      <p class="analogy">${esc(g.analogy)}</p>

      <h2>What you need</h2>
      <div class="table-wrap"><table>
        <tr><th>Item</th><th>Budget pick</th><th>Best pick</th></tr>
        ${g.tools.map(t => `<tr><td>${esc(t.name)}</td><td>${esc(t.budget)}</td><td>${esc(t.best)}</td></tr>`).join("")}
      </table></div>

      <h2>Steps</h2>
      <ol class="steps">${g.steps.map(x => typeof x === "string" ? `<li>${esc(x)}</li>`
        : `<li>${esc(x.do)}${x.happened ? `<p class="happened"><strong>What just happened:</strong> ${esc(x.happened)}</p>` : ""}</li>`).join("")}</ol>

      <h2>The picture</h2>
      <figure>${g.diagram}<figcaption>${esc(g.diagramCaption)}</figcaption></figure>

      <h2>Side by side</h2>
      <div class="table-wrap"><table>
        <tr>${g.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr>
        ${g.table.rows.map(r => `<tr>${r.map((c, i) => `<td>${i === (g.table.codeCol ?? 2) ?`<code>${esc(c)}</code>` : esc(c)}</td>`).join("")}</tr>`).join("")}
      </table></div>

      <h2>Common mistakes</h2>
      <ul>${g.mistakes.map(m => `<li>${esc(m)}</li>`).join("")}</ul>

      ${g.tryIt ? `<h2>Try it yourself</h2>
      ${g.tryIt.map((t, i) => `<div class="try">
        <p><strong>Challenge ${i + 1}:</strong> ${esc(t.task)}</p>
        ${t.hint ? `<details><summary>Hint 1: a small nudge</summary><p>${esc(t.hint)}</p></details>` : ""}
        ${biggerHint(t) ? `<details><summary>Hint 2: a bigger hint</summary><p>${biggerHint(t)}</p></details>` : ""}
        <details><summary>Show the answer</summary><pre><code>${esc(t.answer)}</code></pre></details>
      </div>`).join("")}` : ""}

      ${g.teachBack ? `<h2>Teach it back</h2>
      <div class="teach">
        <p>Explain ${esc(g.title.toLowerCase())} in your own words, like you're telling a 12-year-old. Type it or say it out loud, then compare.</p>
        <label class="sr" for="tb-${id}">Your explanation</label>
        <textarea id="tb-${id}" data-teach="${id}" rows="4" placeholder="In my own words...">${esc(store.get("teach:" + id, ""))}</textarea>
        <details><summary>Compare with a model answer</summary>
          <p>${esc(g.teachBack.model)}</p>
          <p><strong>A good explanation includes:</strong></p>
          <ul class="checks">${g.teachBack.mustHave.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
          <p>Missed one? Reread that step, then explain it again.</p>
        </details>
      </div>` : ""}

      <h2>Check yourself</h2>
      <p class="quiz-note">One right answer doesn't mean it's stuck yet. Questions you miss come back at the end.</p>
      <div class="quiz" data-src="g:${id}">${quizHtml(g.quiz, "g:" + id)}<div class="retry-slot"></div></div>

      ${cheatSheet(g)}

      ${g.canDo ? `<h2>I can do this now</h2>
      <p>Tick each one when you can do it without looking. Your ticks stay on this device.</p>
      <ul class="cando">${g.canDo.map((c, i) => `<li><label><input type="checkbox" data-can="${id}" data-i="${i}"${canDoTicks(id).includes(i) ? " checked" : ""}> ${esc(c)}</label></li>`).join("")}</ul>` : ""}

      ${askClaude(g, s)}

      <h2>Go deeper</h2>
      <ul>${g.links.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.title)}</a></li>`).join("")}</ul>
      ${solo ? nextBook(id) : ""}
    </article>`;
}

// Tap-to-answer questions. src says where the questions live: "g:<guide id>" or "r:<review id>".
// Options are shown in a shuffled order that's the same on every visit (seeded by the question),
// so the right answer isn't always in the same spot. data-o keeps each option's real number.
function shuffledOrder(q) {
  let seed = [...q.q].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 17);
  const order = q.options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) >>> 0;
    const j = seed % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

// Hint 2: the guide's own bigger hint, or the first line of the answer for multi-line answers.
function biggerHint(t) {
  if (t.hint2) return esc(t.hint2);
  const lines = String(t.answer).split("\n").filter(l => l.trim());
  return lines.length > 1 ? `Here's how the answer starts: <code>${esc(lines[0])}</code>` : "";
}

function quizHtml(quiz, src) {
  return quiz.map((q, qi) => `
    <div class="q" data-src="${src}" data-q="${qi}">
      <p>${esc(q.q)}</p>
      ${shuffledOrder(q).map(oi => `<button type="button" data-o="${oi}">${esc(q.options[oi])}</button>`).join("")}
      <p class="why" hidden aria-live="polite"></p>
      <p class="answer-key">Answer: ${esc(q.options[q.answer])}. ${esc(q.why)}</p>
    </div>`).join("");
}
const quizFor = src => src.startsWith("r:") ? REVIEWS[src.slice(2)].quiz : GUIDES[src.slice(2)].quiz;

// The next book on the same shelf, or the section's review quiz when it's the last book in a section.
function nextBook(id) {
  const s = shelfById(GUIDES[id].shelf);
  const sec = sectionsOf(s).find(x => x.guides.includes(id));
  const i = sec.guides.indexOf(id);
  if (i < sec.guides.length - 1) {
    const n = sec.guides[i + 1];
    return `<p class="next"><a href="#/guide/${n}">Next book: ${esc(GUIDES[n].title)} →</a></p>`;
  }
  return sec.review && REVIEWS[sec.review] ? `<p class="next"><a href="#/review/${sec.review}">Next: the ${esc(sec.name)} review quiz →</a></p>` : "";
}

function reviewPage(rid) {
  const r = REVIEWS[rid];
  if (!r) return notFound();
  const s = shelfById(r.shelf);
  const secs = sectionsOf(s);
  const at = secs.findIndex(x => x.review === rid);
  const after = secs[at + 1];
  return `
    <article class="guide">
      <p class="crumbs"><a href="#/">Library</a> / <a href="#/shelf/${s.id}">${esc(s.name)}</a></p>
      <h1>${esc(r.title)}</h1>
      <p>${esc(r.intro)}</p>
      <div class="quiz" data-src="r:${rid}">${quizHtml(r.quiz, "r:" + rid)}<div class="retry-slot"></div></div>
      ${after ? `<p class="next"><a href="#/guide/${after.guides[0]}">Next section, ${esc(after.name)}: ${esc(GUIDES[after.guides[0]].title)} →</a></p>` : ""}
    </article>`;
}

function searchPage(words) {
  const items = Object.entries(GUIDES).map(([id, g]) => ({ id, title: g.title, summary: g.summary, tags: g.tags.concat((g.words || []).map(w => w.word)).join(" "), shelf: shelfById(g.shelf).name }));
  let hits;
  if (window.Fuse) {
    hits = new Fuse(items, { keys: ["title", "tags", "shelf", "summary"], threshold: 0.4, ignoreLocation: true }).search(words).map(r => r.item);
  } else {
    const t = words.toLowerCase();
    hits = items.filter(i => Object.values(i).join(" ").toLowerCase().includes(t));
  }
  const shelfHits = shelves.filter(s => (s.name + " " + s.blurb).toLowerCase().includes(words.toLowerCase()));
  return `
    <h1>I want to ${esc(words)}</h1>
    ${hits.length ? `<ul class="book-list">${hits.map(h => bookItem(h.id)).join("")}</ul>` : `<p class="empty-note">No guide for that yet. Try fewer words, or browse the shelves below.</p>`}
    ${shelfHits.length ? `<h2>Shelves that match</h2><ul>${shelfHits.map(s => `<li><a href="#/shelf/${s.id}">${esc(s.name)}</a> in ${esc(s.wing.name)}</li>`).join("")}</ul>` : ""}`;
}

const notFound = () => `<h1>That book isn't on the shelf</h1><p><a href="#/">Back to the library</a></p>`;

function route() {
  const [, kind, ...rest] = location.hash.replace(/^#/, "").split("/");
  const arg = decodeURIComponent(rest.join("/"));
  main.innerHTML =
    kind === "shelf" ? shelfPage(arg) :
    kind === "guide" ? guidePage(arg) :
    kind === "review" ? reviewPage(arg) :
    kind === "search" ? searchPage(arg) : home();
  window.scrollTo(0, 0);
  if (location.hash) main.focus();
}

// PDFs: the browser's own "Save as PDF" in the print dialog. Works on phone and laptop, no library needed.
main.addEventListener("click", e => {
  const one = e.target.closest("[data-print]");
  const shelf = e.target.closest("[data-print-shelf]");
  if (one) window.print();
  if (e.target.closest("[data-print-cheat]")) {
    document.body.classList.add("print-cheat");
    window.addEventListener("afterprint", () => document.body.classList.remove("print-cheat"), { once: true });
    window.print();
  }
  if (shelf) {
    const s = shelfById(shelf.dataset.printShelf);
    main.innerHTML = `<h1>${esc(s.name)}</h1>` + sectionsOf(s).map(x =>
      (x.name ? `<h2 class="print-section">${esc(x.name)}</h2>` : "") + x.guides.map(id => guidePage(id, false)).join("")).join("");
    window.addEventListener("afterprint", route, { once: true });
    window.print();
  }
});

// Quiz: tap an answer, see right or wrong and why.
main.addEventListener("click", e => {
  const btn = e.target.closest(".q button");
  if (!btn) return;
  const box = btn.closest(".q");
  const q = quizFor(box.dataset.src)[box.dataset.q];
  const right = Number(btn.dataset.o) === q.answer;
  box.querySelectorAll("button").forEach(b => b.removeAttribute("data-state"));
  btn.dataset.state = right ? "right" : "wrong";
  const why = box.querySelector(".why");
  why.hidden = false;
  why.textContent = (right ? "Right. " : "Not quite. ") + q.why;
  // First try counts. Missed questions come back at the end, with the options in a new order.
  if (!box.dataset.tried) {
    box.dataset.tried = "1";
    if (!right) box.dataset.missed = "1";
    const quiz = box.closest(".quiz");
    if (quiz && !box.classList.contains("again")) {
      const all = quiz.querySelectorAll(":scope > .q");
      const missed = [...all].filter(b => b.dataset.missed).map(b => Number(b.dataset.q));
      if ([...all].every(b => b.dataset.tried) && missed.length) {
        const slot = quiz.querySelector(".retry-slot");
        slot.innerHTML = `<p class="retry-note"><strong>You missed ${missed.length}.</strong> Here they are again in a new order. Answer without scrolling up.</p>`
          + missed.map(qi => quizHtml([quizFor(quiz.dataset.src)[qi]], quiz.dataset.src).replace('data-q="0"', `data-q="${qi}"`).replace('class="q"', 'class="q again"')).join("");
        slot.querySelectorAll(".q.again").forEach(b => { const bs = [...b.querySelectorAll("button")]; bs.reverse().forEach(x => x.parentNode.insertBefore(x, b.querySelector(".why"))); });
      }
    }
  }
});

// Progress ticks and teach-back drafts, saved on this device only.
main.addEventListener("change", e => {
  const c = e.target.closest("[data-can]");
  if (!c) return;
  const id = c.dataset.can, i = Number(c.dataset.i);
  const ticks = canDoTicks(id).filter(x => x !== i);
  store.set("can:" + id, c.checked ? ticks.concat(i) : ticks);
});
main.addEventListener("input", e => {
  const t = e.target.closest("[data-teach]");
  if (t) store.set("teach:" + t.dataset.teach, t.value);
});

// Copy a prompt; select the text instead if the clipboard is blocked.
main.addEventListener("click", async e => {
  const b = e.target.closest("[data-copy]");
  if (!b) return;
  try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = "Copied"; }
  catch { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); getSelection().removeAllRanges(); getSelection().addRange(r); b.textContent = "Selected: copy it"; }
  setTimeout(() => { b.textContent = "Copy"; }, 2000);
});

document.getElementById("search-form").addEventListener("submit", e => {
  e.preventDefault();
  const v = document.getElementById("q").value.trim();
  if (v) location.hash = "#/search/" + encodeURIComponent(v);
});

// In a PDF, hints and answers to the challenges print open.
window.addEventListener("beforeprint", () => main.querySelectorAll("details").forEach(d => { d.open = true; }));

window.addEventListener("hashchange", route);
route();
