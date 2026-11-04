/* Theme toggle script – light/dark mode */
(function () {
  const namespace = window.EdenHomes || (window.EdenHomes = {});

  // Determine initial theme
  const stored = window.localStorage && window.localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initial);

  // Expose toggle function
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    if (window.localStorage) {
      window.localStorage.setItem('theme', next);
    }
    // Update button icon
    const icon = document.querySelector('.theme-toggle-icon');
    if (icon) {
      icon.textContent = next === 'dark' ? '☀️' : '🌙';
      const btn = document.getElementById('theme-toggle');
      if (btn) btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  // Attach handler on DOM ready
  function init() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
    // Set initial icon
    const icon = document.querySelector('.theme-toggle-icon');
    if (icon) {
      icon.textContent = initial === 'dark' ? '☀️' : '🌙';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for testing if needed
  namespace.toggleTheme = toggleTheme;
})();
