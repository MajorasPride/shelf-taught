# Shelf Taught

A library of simple, broken-down how-to guides to teach yourself from, starting from zero experience.

- Live site: https://majoraspride.github.io/shelf-taught/
- Plain HTML, CSS and JS. No build step.
- Search uses [Fuse.js](https://www.fusejs.io/) (Apache-2.0), loaded from a CDN.

## Where things live

- `data.js`: the wings and shelves, and which guides sit on each shelf, in learning order.
- `guides/<shelf>-<section>.js`: the guides themselves, one file per section (for example `guides/coding-python.js`). Each file adds to `GUIDES`.
- `guides/<shelf>-reviews.js`: end-of-section review quizzes, added to `REVIEWS`.
- `guides/diagrams.js`: the pictures (SVG), kept apart so guide files stay readable.
- A new guide file needs a `<script>` line in `index.html`.
- **Version tags:** every file in `index.html` ends in `?v=8`. When you change any file, raise the number on all of them (v=9, v=10...) so visitors' browsers fetch the new copies instead of mixing old cached files with new ones.

## Add to the library

- **New shelf:** add it to a wing's `shelves` list in `data.js`.
- **New guide:** add it to `GUIDES` in its section's file, then put its id in that shelf's `guides` or `sections` list.
- **Sections:** a big shelf can use `sections` instead of `guides`, one heading each. A section can name a `review` quiz from `REVIEWS`; mix in questions from earlier sections.
- **Tables:** column 3 shows as code by default. Set `table.codeCol` to another column number, or `-1` for none.

## The guide template

Every guide has, in this order: summary; what you can do with this (`canDo`); words to know (`words`); an everyday analogy; tools (budget pick vs best pick); steps, each with a "what just happened" (`steps: [{ do, happened }]`); a picture; a comparison table; common mistakes; 2–3 "Try it yourself" challenges with a hint and a tap-to-show answer (`tryIt`); 6–8 scenario quiz questions, each with a short "why"; go-deeper links; and difficulty, time and cost tags. The page adds a "Next book" link at the end.

Quiz options are shown in a shuffled order that stays the same on every visit, so the right answer isn't always in the same spot. Write the right answer anywhere in `options` and set `answer` to its number (0 = first).

## Shelves filled so far

- **Coding** (15 guides, 161 quiz questions): Start here (4), Python (7), Linux terminal (1), Git (1), HTML (1), Security (1), with a review quiz at the end of each section.

## PDFs

Every guide has a **Download as PDF** button, and every shelf can be saved as one PDF. It uses the browser's own Save as PDF: quiz answers print under each question, and challenge hints and answers print open, for offline use.
