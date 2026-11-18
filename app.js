// Shelf Taught: tiny hash-routed site. Routes: #/  #/shelf/<id>  #/guide/<id>  #/search/<words>
const main = document.getElementById("main");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const shelves = WINGS.flatMap(w => w.shelves.map(s => ({ ...s, wing: w })));
const shelfById = id => shelves.find(s => s.id === id);

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
          ${w.shelves.map(s => `
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
    <strong>${esc(g.title)}</strong>${esc(g.summary)}
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
    ${s.guides.length
      ? `<ul class="book-list">${s.guides.map(bookItem).join("")}</ul>`
      : `<p class="empty-note">This shelf is empty for now. Its first guides are on the way.</p>`}`;
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

      <h2>Think of it like this</h2>
      <p class="analogy">${esc(g.analogy)}</p>

      <h2>What you need</h2>
      <div class="table-wrap"><table>
        <tr><th>Item</th><th>Budget pick</th><th>Best pick</th></tr>
        ${g.tools.map(t => `<tr><td>${esc(t.name)}</td><td>${esc(t.budget)}</td><td>${esc(t.best)}</td></tr>`).join("")}
      </table></div>

      <h2>Steps</h2>
      <ol class="steps">${g.steps.map(x => `<li>${esc(x)}</li>`).join("")}</ol>

      <h2>The picture</h2>
      <figure>${g.diagram}<figcaption>${esc(g.diagramCaption)}</figcaption></figure>

      <h2>Side by side</h2>
      <div class="table-wrap"><table>
        <tr>${g.table.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr>
        ${g.table.rows.map(r => `<tr>${r.map((c, i) => `<td>${i === 2 ? `<code>${esc(c)}</code>` : esc(c)}</td>`).join("")}</tr>`).join("")}
      </table></div>

      <h2>Common mistakes</h2>
      <ul>${g.mistakes.map(m => `<li>${esc(m)}</li>`).join("")}</ul>

      <h2>Check yourself</h2>
      ${g.quiz.map((q, qi) => `
        <div class="q" data-q="${qi}">
          <p>${esc(q.q)}</p>
          ${q.options.map((o, oi) => `<button type="button" data-o="${oi}">${esc(o)}</button>`).join("")}
          <p class="why" hidden aria-live="polite"></p>
          <p class="answer-key">Answer: ${esc(q.options[q.answer])}. ${esc(q.why)}</p>
        </div>`).join("")}

      <h2>Go deeper</h2>
      <ul>${g.links.map(l => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.title)}</a></li>`).join("")}</ul>
    </article>`;
}

function searchPage(words) {
  const items = Object.entries(GUIDES).map(([id, g]) => ({ id, title: g.title, summary: g.summary, tags: g.tags.join(" "), shelf: shelfById(g.shelf).name }));
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
    kind === "search" ? searchPage(arg) : home();
  window.scrollTo(0, 0);
  if (location.hash) main.focus();
}

// PDFs: the browser's own "Save as PDF" in the print dialog. Works on phone and laptop, no library needed.
main.addEventListener("click", e => {
  const one = e.target.closest("[data-print]");
  const shelf = e.target.closest("[data-print-shelf]");
  if (one) window.print();
  if (shelf) {
    const s = shelfById(shelf.dataset.printShelf);
    main.innerHTML = `<h1>${esc(s.name)}</h1>` + s.guides.map(id => guidePage(id, false)).join("");
    window.addEventListener("afterprint", route, { once: true });
    window.print();
  }
});

// Quiz: tap an answer, see right or wrong and why.
main.addEventListener("click", e => {
  const btn = e.target.closest(".q button");
  if (!btn) return;
  const box = btn.closest(".q");
  const q = GUIDES[location.hash.split("/")[2]].quiz[box.dataset.q];
  const right = Number(btn.dataset.o) === q.answer;
  box.querySelectorAll("button").forEach(b => b.removeAttribute("data-state"));
  btn.dataset.state = right ? "right" : "wrong";
  const why = box.querySelector(".why");
  why.hidden = false;
  why.textContent = (right ? "Right. " : "Not quite. ") + q.why;
});

document.getElementById("search-form").addEventListener("submit", e => {
  e.preventDefault();
  const v = document.getElementById("q").value.trim();
  if (v) location.hash = "#/search/" + encodeURIComponent(v);
});

window.addEventListener("hashchange", route);
route();
