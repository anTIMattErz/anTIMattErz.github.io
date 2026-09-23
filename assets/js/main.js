// Theme button: the site follows the device's light/dark setting until the visitor picks one here.
// The pick is remembered (head.html applies it before the page is drawn).
(() => {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;
  const root = document.documentElement;
  const label = toggle.querySelector('.theme-label');
  const deviceDark = window.matchMedia('(prefers-color-scheme: dark)');
  const current = () => root.dataset.theme || (deviceDark.matches ? 'dark' : 'light');
  // The button names the theme it switches to.
  const show = () => {
    toggle.dataset.current = current();
    label.textContent = current() === 'dark' ? 'Light theme' : 'Dark theme';
  };

  toggle.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    show();
  });
  deviceDark.addEventListener('change', show);
  show();
})();

// Sidebar: highlight the section on screen, and open and close the menu on narrow screens.
(() => {
  const sidebar = document.querySelector('[data-sidebar]');
  if (!sidebar) return;

  // Narrow screens: the button in the top bar shows and hides the list of sections.
  const toggle = sidebar.querySelector('.menu-toggle');
  const setOpen = (open) => {
    sidebar.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(!sidebar.classList.contains('is-open')));
  sidebar.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  // Tapping outside the menu, or pressing Escape, closes it too.
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  // Mark the link whose section is at the top of the screen.
  const links = [...sidebar.querySelectorAll('[data-spy] a[href^="#"]')];
  const targets = links.map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1))));
  let current = null;

  const update = () => {
    const readingLine = window.innerHeight * 0.3;
    let index = 0;
    targets.forEach((target, i) => {
      if (target && target.getBoundingClientRect().top <= readingLine) index = i;
    });
    // The last sections may be too short to reach the line; at the bottom of the page, pick the last one.
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) index = targets.length - 1;

    const link = links[index];
    if (link === current) return;
    if (current) current.removeAttribute('aria-current');
    if (link) link.setAttribute('aria-current', 'true');
    current = link;
  };

  let queued = false;
  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      update();
      queued = false;
    });
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
