(function () {
  const namespace = window.EdenHomes || (window.EdenHomes = {});
  const storageKey = 'theme';

  function readStoredTheme() {
    try {
      const stored = window.localStorage?.getItem(storageKey);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch (error) {
      console.warn('Unable to read the saved theme preference.', error);
      return null;
    }
  }

  const storedTheme = readStoredTheme();
  const initialTheme =
    storedTheme ||
    (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function updateThemeColor(theme) {
    const meta = document.getElementById('theme-color');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#171c16' : '#f3eedf');
    }
  }

  function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeColor(theme);
    const button = document.getElementById('theme-toggle');
    if (button) {
      const isDark = theme === 'dark';
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute(
        'aria-label',
        isDark ? 'Switch to light theme' : 'Switch to dark theme',
      );
      const icon = button.querySelector('.theme-toggle-icon');
      if (icon) {
        icon.textContent = isDark ? '☀️' : '🌙';
      }
    }

    try {
      window.localStorage?.setItem(storageKey, theme);
    } catch (error) {
      console.warn('Unable to save the theme preference.', error);
    }
  }

  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeColor(initialTheme);

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    updateTheme(current === 'dark' ? 'light' : 'dark');
  }

  function init() {
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
      const isDark = initialTheme === 'dark';
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute(
        'aria-label',
        isDark ? 'Switch to light theme' : 'Switch to dark theme',
      );
      const icon = button.querySelector('.theme-toggle-icon');
      if (icon) {
        icon.textContent = isDark ? '☀️' : '🌙';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  namespace.toggleTheme = toggleTheme;
})();
