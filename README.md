# mtwomack.dev

The source for [mtwomack.dev](https://mtwomack.dev), built with [Hugo](https://gohugo.io).

## Preview on your computer

1. Install Hugo once: `winget install Hugo.Hugo.Extended` on Windows, `brew install hugo` on a Mac.
2. In this folder, run `hugo server -D` and open http://localhost:1313. Pages reload as you save.

`-D` includes drafts, such as the page at /research/style-check/ for checking how text, math, and figures look.

## Where things are

| To change | Edit |
|---|---|
| The line under your name, email, profiles | `hugo.toml`, under `[params]` |
| About | `content/_index.md` |
| Projects | `content/projects/NAME/index.md`, one folder per project |
| Research topics | `content/research/NAME/index.md`, with that topic's figures and PDFs in the same folder |
| Publications and theses, talks, teaching | `data/publications.yaml`, `data/talks.yaml`, `data/teaching.yaml` |
| Résumé and CV | Save them as `static/resume.pdf` and `static/cv.pdf` |
| Banner photo | `assets/images/agnewmeadowsmountains.jpg` |
| Colors, fonts, spacing | `assets/css/main.css` |
| Page structure | `layouts/` |

To add a project or research topic, run `hugo new content projects/NAME/index.md` (or `research/NAME/index.md`). It creates the folder with the fields to fill in, each explained in a comment.

## Writing

- **Math** is LaTeX, rendered by MathJax: `$...$` inline, and `$$...$$` on lines of their own for displayed equations. Put `\begin{equation} ... \label{name} \end{equation}` inside `$$...$$` to number an equation, and refer to it with `\eqref{name}`. Write a dollar sign that isn't math as `\$`. Your LaTeX macros go in `layouts/_partials/mathjax.html`.
- **Figures**: put the image in the page's folder and write `![what it shows](plot.png "Caption")` on a line of its own. Hugo resizes it.
- **Sections**: each `##` heading on a project or research page becomes an entry in that page's sidebar.
- **TODOs**: missing content shows as a yellow TODO box, and `hugo` lists every remaining one when it builds.

Private notes and drafts go in `drafts/`, which git ignores; this repository is public.
