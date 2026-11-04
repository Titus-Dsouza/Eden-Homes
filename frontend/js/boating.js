(function () {
  const namespace = window.EdenHomes || (window.EdenHomes = {});

  function todayAsLocalDate() {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().slice(0, 10);
  }

  function initializeBoatingForm(form) {
    if (form.dataset.formsInitialized) {
      return;
    }
    form.querySelector('[type="submit"]').disabled = false;
    const date = form.elements.date;
    const configurationError = form.querySelector(
      '[data-configuration-error]',
    );
    const status = form.querySelector('[data-form-status]');

    configurationError.textContent =
      namespace.whatsapp.getConfigurationError();
    configurationError.hidden = !configurationError.textContent;
    date.min = todayAsLocalDate();
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      status.textContent = '';

      if (!form.reportValidity()) {
        return;
      }

      try {
        const values = new FormData(form);
        const url = namespace.whatsapp.buildWhatsAppUrl('boating', {
          name: values.get('name').trim(),
          phone: values.get('phone').trim(),
          date: values.get('date'),
          participants: values.get('participants'),
          duration: values.get('duration').trim(),
        });
        namespace.whatsapp.openWhatsApp(url);
        status.textContent =
          'Review the draft in WhatsApp and press Send there. The website does not send the message or confirm a booking.';
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : 'Could not prepare the WhatsApp message. Please try again.';
        if (message.includes('WhatsApp enquiries are not configured')) {
          configurationError.hidden = false;
          configurationError.textContent = message;
        } else {
          status.textContent = message;
        }
      }
    });
  }

  namespace.initializeBoatingForms = function () {
    document
      .querySelectorAll('[data-boating-form]')
      .forEach(initializeBoatingForm);
  };
})();
