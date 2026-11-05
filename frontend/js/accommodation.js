(function () {
  const namespace = window.EdenHomes || (window.EdenHomes = {});

  function todayAsLocalDate() {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().slice(0, 10);
  }

  function initializeAccommodationForm(form) {
    if (form.dataset && form.dataset.formsInitialized) {
      return;
    }
    form.dataset.formsInitialized = 'true';
    form.querySelector('[type="submit"]').disabled = false;
    const checkIn = form.elements.checkIn;
    const checkOut = form.elements.checkOut;
    const configurationError = form.querySelector(
      '[data-configuration-error]',
    );
    const status = form.querySelector('[data-form-status]');
    const today = todayAsLocalDate();

    configurationError.textContent =
      namespace.whatsapp.getConfigurationError();
    configurationError.hidden = !configurationError.textContent;
    checkIn.min = today;
    checkOut.min = today;

    function updateDateValidity() {
      checkOut.min = checkIn.value || today;
      checkOut.setCustomValidity(
        checkIn.value && checkOut.value && checkOut.value <= checkIn.value
          ? 'Check-out must be later than check-in.'
          : '',
      );
    }

    checkIn.addEventListener('change', updateDateValidity);
    checkOut.addEventListener('change', updateDateValidity);

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      status.textContent = '';
      updateDateValidity();

      if (!form.reportValidity()) {
        return;
      }

      try {
        const values = new FormData(form);
        const url = namespace.whatsapp.buildWhatsAppUrl('accommodation', {
          name: values.get('name').trim(),
          phone: values.get('phone').trim(),
          property: values.get('property'),
          checkIn: values.get('checkIn'),
          checkOut: values.get('checkOut'),
          guests: values.get('guests'),
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

  namespace.initializeAccommodationForms = function () {
    document
      .querySelectorAll('[data-accommodation-form]')
      .forEach(initializeAccommodationForm);
  };
})();
