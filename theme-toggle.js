(() => {
  'use strict';

  const storageKey = 'ben-portfolio-theme';
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const themes = ['dark', 'light', 'purple'];
  const details = {
    dark:   { label: 'Dark',   icon: '☾', color: '#0b1210' },
    light:  { label: 'Light',  icon: '☼', color: '#f4f1e8' },
    purple: { label: 'Purple', icon: '✦', color: '#f4effb' }
  };

  function readSavedTheme() {
    try {
      const saved = localStorage.getItem(storageKey);
      return themes.includes(saved) ? saved : 'dark';
    } catch (error) {
      return 'dark';
    }
  }

  function nextTheme(current) {
    const index = themes.indexOf(current);
    return themes[(index + 1) % themes.length];
  }

  function applyTheme(theme, save = true) {
    const selected = themes.includes(theme) ? theme : 'dark';
    const current = details[selected];
    const next = details[nextTheme(selected)];
    root.dataset.theme = selected;

    if (toggle) {
      const icon = toggle.querySelector('.theme-toggle-icon');
      const label = toggle.querySelector('.theme-toggle-text');
      if (icon) icon.textContent = current.icon;
      if (label) label.textContent = `Theme: ${current.label}`;
      toggle.setAttribute(
        'aria-label',
        `Current theme: ${current.label}. Activate to switch to ${next.label} theme.`
      );
      toggle.title = `Current: ${current.label}. Click for ${next.label}.`;
    }

    if (metaTheme) metaTheme.setAttribute('content', current.color);

    if (save) {
      try {
        localStorage.setItem(storageKey, selected);
      } catch (error) {
        // The theme still works for this page even when storage is unavailable.
      }
    }
  }

  applyTheme(readSavedTheme(), false);

  if (toggle) {
    toggle.addEventListener('click', () => {
      applyTheme(nextTheme(root.dataset.theme || 'dark'));
    });
  }

  window.addEventListener('storage', (event) => {
    if (event.key === storageKey && themes.includes(event.newValue)) {
      applyTheme(event.newValue, false);
    }
  });
})();
