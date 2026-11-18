# Shelf Taught

A library of simple, broken-down how-to guides to teach yourself from.

- Live site: https://majoraspride.github.io/shelf-taught/
- Plain HTML, CSS and JS. No build step.
- Search uses [Fuse.js](https://www.fusejs.io/) (Apache-2.0), loaded from a CDN.

## Add to the library

All content lives in `data.js`:

- **New shelf:** add it to a wing's `shelves` list.
- **New guide:** add it to `GUIDES`, then put its id in that shelf's `guides` list. The list is in learning order.
- **Tables:** column 3 shows as code by default. Set `table.codeCol` to another column number, or `-1` for none.

## Shelves filled so far

- **Coding** (10 guides): first program, if, loops, lists, functions, reading errors, Linux terminal, Git, first web page, locking down accounts.

Every guide follows the same template: summary, analogy, tools, steps, picture, comparison table, common mistakes, quiz and links.

## PDFs

Every guide has a **Download as PDF** button, and every shelf can be saved as one PDF. It uses the browser's own Save as PDF, so the quiz answers print under each question for offline use.
