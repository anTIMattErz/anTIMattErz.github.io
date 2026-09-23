# mtwomack.dev

Michael Womack's personal website, served by GitHub Pages at https://mtwomack.dev from the public repo github.com/anTIMattErz/anTIMattErz.github.io. Tab titles read `<Page> \\ Michael Womack`; the double backslash is intentional.
- `main`: the old hand-written HTML site, still live (branch deploy, custom domain via `CNAME`).
- `redesign`: the Hugo rebuild of the academic side, not live yet. README.md maps where each kind of content lives.

The user works on this repo from a Windows PC and a MacBook. This file is committed so both share it; put project facts here, not in Claude's auto-memory, which stays on one machine.

## Rules
- Pushing `main` deploys the live site immediately. Commit when asked; push only when the user explicitly asks.
- Never invent content. Publications, courses, dates, and bio facts come only from material the user provides. Mark anything missing with a visible TODO: `{{< todo >}}...{{< /todo >}}` in Markdown, the `todo.html` partial in templates, `todo: true` in data files. Hugo lists every TODO as a WARN line when it builds.
- The whole repo is public, even files the site doesn't serve. Private drafts and source material go in `drafts/` (gitignored), never in a commit. Git doesn't sync `drafts/`, so drafts on one machine aren't on the other.
- Check visual changes in the local preview at desktop and phone widths before calling them done.

## Local preview (Windows)
- Hugo 0.166.0 extended, installed with winget (`Hugo.Hugo.Extended`). A shell started before the install won't have it on PATH; the binary is at `%LOCALAPPDATA%\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe\hugo.exe`. Run it from the repo root, in the background:
  `hugo server -D --bind 127.0.0.1 --port 1313` → http://localhost:1313 (`-D` includes drafts, such as the style check at /research/style-check/)
- Python is `py` (`python` is the Microsoft Store stub).
- Screenshot with headless Chrome, then read the PNG. Use forward-slash Windows paths (Git Bash mangles backslashes). The separate `--user-data-dir` keeps Chrome from handing off to the user's open browser.
  ```
  "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --no-first-run --user-data-dir="<scratchpad>/chrome-profile" --window-size=1366,800 --virtual-time-budget=10000 --screenshot="<scratchpad>/home.png" http://localhost:1313/
  ```
  Phone width: headless Chrome never lays out narrower than 500px, so `--window-size=390,844` alone renders a 500px page and crops it. Wrap the page in a 390px iframe instead: save this as `<scratchpad>/phone.html`, keep `--window-size=390,844`, and screenshot `file:///<scratchpad>/phone.html#/research/solitons/` (the part after `#` is the page path; a second `#fragment` gets encoded into the path and 404s). A `data:` URL wrapper doesn't work; Chrome blocks the localhost iframe.
  ```html
  <!DOCTYPE html>
  <style>body { margin: 0; } iframe { border: 0; display: block; }</style>
  <iframe id="f" width="390" height="844"></iframe>
  <script>document.getElementById('f').src = 'http://localhost:1313' + (location.hash.slice(1) || '/');</script>
  ```
- Themes: this PC's Windows is in dark mode, so headless Chrome renders the dark theme unless told otherwise. Force one with `--blink-settings=preferredColorScheme=0` (dark) or `=1` (light). A theme picked with the site's button is stored in the Chrome profile's localStorage and overrides both, so clear it after testing the button.
- Headless `--screenshot` draws a URL with a `#fragment` wrong (content stays in its unscrolled position). To check deep links, the phone menu, or anything that needs a click, add a temporary page to `static/` that loads the site in a same-origin iframe and scripts it, then delete that page.
- Not installed: Node, Ruby/Jekyll, ImageMagick, Pillow. Ask before installing anything.

## Local preview (MacBook)
Not set up yet. Install Hugo with `brew install hugo` and run the same `hugo server` command; Chrome is at `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`. Check that this works, then record it here.

## Site plan (from the user, 2026-09-22)
A full redesign is in progress on the `redesign` branch; `main` keeps serving the old site until launch. The user isn't happy with the old design and isn't confident in HTML/CSS, so Claude builds the structure and styling. The academic side's structure and design are built, with TODO placeholders for all content; the personal side comes later.
- Private context (who the site is for, what the Projects section holds) is in `CLAUDE.local.md` at the repo root. It's gitignored, so it exists only on the machine where it was written; if it's missing, ask the user. Keep that context out of every committed file, including page content on pushed branches, until the live site says it.
- Built with Hugo (chosen over Jekyll for build-time image resizing and one folder per page). Math is written in LaTeX and rendered with MathJax 3, which loads only on pages that contain math.
- Academic side: one main page to scroll through, not separate Research/Teaching pages. Order: About, Projects, Research, Publications & theses, Talks, Teaching, CV & résumé, Contact.
- Projects: separate from Research, right under About (see `CLAUDE.local.md`).
- Research: each project gets a summary on the main page plus its own subpage with details and links. Every project has papers/theses; some also have talks/slides, code, and figures. Expect lots of math.
- Publish both a CV and a résumé.
- Personal side (later): fairly separate, with its own feel. Photography (many trips and subjects), programming-based visual art, writing (essays, math posts, occasional blog posts), and a radio show on Twitch once it starts.
- Animated/gradient backgrounds: placement undecided. The user wants to explore making these visuals as a hobby, and they may get complex.
- Academic-side references: LessWrong posts (e.g. https://www.lesswrong.com/posts/HsijShdRdAg5sPKnF/an-unexamined-cause-of-the-openai-hugging-face-hacking) for the minimal look and left sidebar navigation; Richard Bamler's page (https://rbamler.github.io/) for how to present the information (short intro with photo and email, papers as a plain list). Personal-side references are still to come.
- Design as built: Palatino-family serif text with Gill Sans-family labels (system fonts, nothing downloaded), a 40rem reading column, and a sticky left sidebar whose rail marks the section on screen, like LessWrong's but with the names always shown. Below 68rem the sidebar becomes a top bar with a drop-down menu. Colors, fonts, and widths are variables at the top of assets/css/main.css.
- Light and dark themes (the user asked for dark, 2026-09-22): the site follows the device setting, and a button in the sidebar overrides it and remembers the choice. The dark colors are in two identical blocks in main.css; keep them in sync.
- The mountain photo is the main page's banner and the link-preview image: the band from 26–58% of its height, faded into the page.
- The repo stays public during the redesign (the user's call, 2026-09-22), so anything pushed, `redesign` included, is readable on GitHub. The user may move to GitHub Pro later, which allows a private repo with Pages still working; on the free plan, making the repo private takes the site offline (checked 2026-09-22).
- Photos: GitHub Pages caps the published site at 1 GB and recommends source repos stay under 1 GB (checked 2026-09-22). Git keeps every committed version and the repo is public, so commit web-sized exports only, never originals.

## Open decisions (ask the user before acting)
- **Voice and contact details**: first vs third person, and which contact details and profiles to publish.
- **Look**: a headshot beside the intro?

## Launch checklist (`redesign` → live)
1. The user fills in every TODO.
2. Add a GitHub Actions workflow that builds with Hugo 0.166.0 and deploys to GitHub Pages, and have the user switch Settings → Pages → Source to "GitHub Actions". Check then how the custom domain carries over; Actions deploys are configured in Settings rather than by the `CNAME` file.
3. Merge `redesign` into `main` and push, when the user asks.
4. Once the live site states what's in `CLAUDE.local.md`, move those notes here.

The old site's known issues (content under the fixed nav, the 15 MB photo, the phone nav, broken favicon paths, jQuery) all go away with the redesign; don't fix them on `main` unless the user asks.
