# mtwomack.dev

Michael Womack's personal website (research + teaching): hand-written static HTML/CSS with one small jQuery script, served by GitHub Pages from `main` at https://mtwomack.dev (custom domain via `CNAME`). The repo, github.com/anTIMattErz/anTIMattErz.github.io, is public. Pages: Home, Research (sub-topics: Solitons, Discrete Ricci Flow, Wavelet Transforms), Teaching. Tab titles read `<Page> \\ Michael Womack`; the double backslash is intentional.

The user works on this repo from a Windows PC and a MacBook. This file is committed so both share it; put project facts here, not in Claude's auto-memory, which stays on one machine.

## Rules
- Pushing `main` deploys the live site immediately. Commit when asked; push only when the user explicitly asks.
- Never invent content. Publications, courses, dates, and bio facts come only from material the user provides; leave a visible TODO where something is missing.
- The whole repo is public, even files the site doesn't serve. Private drafts and source material go in `drafts/` (gitignored), never in a commit. Git doesn't sync `drafts/`, so drafts on one machine aren't on the other.
- Check visual changes in the local preview at desktop and phone widths before calling them done.

## Local preview (Windows)
- Python is `py` (`python` is the Microsoft Store stub). Serve from the repo root, in the background:
  `py -m http.server 8000 --bind 127.0.0.1` → http://localhost:8000
- Screenshot with headless Chrome, then read the PNG. Use forward-slash Windows paths (Git Bash mangles backslashes). The separate `--user-data-dir` keeps Chrome from handing off to the user's open browser.
  ```
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --no-first-run --user-data-dir="<scratchpad>/chrome-profile" --window-size=1366,800 --virtual-time-budget=10000 --screenshot="<scratchpad>/home.png" http://localhost:8000/
  ```
  Phone width: headless Chrome never lays out narrower than 500px, so `--window-size=390,844` alone renders a 500px page and crops it. Wrap the page in a 390px iframe instead: save this as `<scratchpad>/phone.html`, keep `--window-size=390,844`, and screenshot `file:///<scratchpad>/phone.html#/research.html` (the part after `#` is the page path). A `data:` URL wrapper doesn't work; Chrome blocks the localhost iframe.
  ```html
  <!DOCTYPE html>
  <style>body { margin: 0; } iframe { border: 0; display: block; }</style>
  <iframe id="f" width="390" height="844"></iframe>
  <script>document.getElementById('f').src = 'http://localhost:8000' + (location.hash.slice(1) || '/');</script>
  ```
- Not installed: Node, Ruby/Jekyll, ImageMagick, Pillow. Ask before installing anything.

## Local preview (MacBook)
Not set up yet. Adapt the Windows commands: probably `python3` instead of `py`, and Chrome at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`. Check that they work, then record them here.

## Open decisions (ask the user before acting)
- **Page structure.** Every page repeats the `<head>` and the nav.
  - Recommended: Jekyll layouts/includes. GitHub Pages builds them natively with no Actions setup. Content moves to Markdown, lists (papers, talks, courses) go in `_data/*.yml`, and KaTeX/MathJax handles equations. A local Jekyll preview needs Ruby.
  - Alternative: stay plain HTML and keep the nav copies in sync.
- **Voice and audience**: first vs third person, who the site is for, and which contact details to publish.

## Known issues (found 2026-09-22; delete each line once fixed)
- research.html and teaching.html render their content underneath the fixed nav, because only `.home-content` has a left offset.
- index.html photo is 15 MB (3456×5184). Its `max-width`/`height` are written as HTML attributes, which browsers ignore, and it has no `alt`.
- At phone width (390px), the fixed nav (~171px) covers nearly half the page. Even on desktop it is wider than `.home-content`'s 10% offset, so it hides the left ~35px of the Home photo.
- main.css: `.navbar ul li.active a` also underlines the Research sub-links; use `li.active > a`.
- favicon_files/site.webmanifest and browserconfig.xml point at root icon paths (404); the icons live in /favicon_files/. The manifest `name` is empty.
- navbar_active.js pulls in jQuery (87 KB) and misses extensionless URLs like `/research`, which Pages also serves.
