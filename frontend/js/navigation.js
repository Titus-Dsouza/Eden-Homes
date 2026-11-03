(function () {
  const namespace = window.EdenHomes || (window.EdenHomes = {});

  namespace.initializeNavigation = function () {
    const button = document.querySelector('.mobile-menu-toggle');
    const menu = document.getElementById('mobile-navigation');
    if (!button || !menu) {
      return;
    }

    function closeMenu(returnFocus) {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation menu');
      menu.classList.remove('mobile-nav--open');
      menu.hidden = true;
      if (returnFocus) {
        button.focus();
      }
    }

    button.addEventListener('click', function () {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu(false);
        return;
      }

      menu.hidden = false;
      menu.classList.add('mobile-nav--open');
      button.setAttribute('aria-expanded', 'true');
      button.setAttribute('aria-label', 'Close navigation menu');
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        closeMenu(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !menu.hidden) {
        closeMenu(true);
      }
    });

    window.addEventListener('resize', function () {
      if (window.matchMedia('(min-width: 801px)').matches && !menu.hidden) {
        closeMenu(false);
      }
    });
  };
})();
