(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const namespace = window.EdenHomes || {};
    namespace.initializeNavigation?.();
    namespace.initializeAccommodationForms?.();
    namespace.initializeBoatingForms?.();

    document.querySelectorAll('[data-current-year]').forEach(function (element) {
      element.textContent = String(new Date().getFullYear());
    });
  });
})();
