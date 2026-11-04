const WHATSAPP_NUMBER = '919448327432';

(function () {
  const namespace = window.EdenHomes || (window.EdenHomes = {});
  namespace.WHATSAPP_NUMBER = WHATSAPP_NUMBER;

  function getTargetNumber() {
    const configured = window.EDEN_HOMES_CONFIG?.whatsappDestinationNumber?.trim();
    if (configured && /^[1-9]\d{7,14}$/.test(configured)) {
      return configured;
    }
    return WHATSAPP_NUMBER;
  }

  function todayAsLocalDate() {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().slice(0, 10);
  }

  function formatAccommodationMessage(details) {
    const lines = [
      'Eden Homes accommodation enquiry',
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Property: ${details.property}`,
      `Check-in: ${details.checkIn}`,
      `Check-out: ${details.checkOut}`,
      `Guests: ${details.guests}`,
    ];
    return lines.join('\n');
  }

  function formatBoatingMessage(details) {
    const lines = [
      'Eden Homes boating enquiry',
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Preferred date: ${details.date}`,
      `Participants: ${details.participants}`,
      `Preferred duration: ${details.duration}`,
    ];
    return lines.join('\n');
  }

  function buildWhatsAppUrl(kind, details) {
    const targetNumber = getTargetNumber();
    const message =
      kind === 'accommodation'
        ? formatAccommodationMessage(details)
        : formatBoatingMessage(details);
    return `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
  }

  function openWhatsApp(url) {
    const windowRef = window.open(url, '_blank');
    if (windowRef) {
      windowRef.opener = null;
    }
    return windowRef;
  }

  function handleAccommodationSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const status = form.querySelector('[data-form-status]');
    const checkIn = form.elements.checkIn;
    const checkOut = form.elements.checkOut;

    if (status) {
      status.textContent = '';
    }

    if (checkIn && checkOut) {
      if (checkIn.value && checkOut.value && checkOut.value <= checkIn.value) {
        checkOut.setCustomValidity('Check-out must be later than check-in.');
      } else {
        checkOut.setCustomValidity('');
      }
    }

    if (!form.reportValidity()) {
      return;
    }

    const values = new FormData(form);
    const name = (values.get('name') || '').trim();
    const phone = (values.get('phone') || '').trim();
    const property = values.get('property') || '';
    const checkInVal = values.get('checkIn') || '';
    const checkOutVal = values.get('checkOut') || '';
    const guests = values.get('guests') || '';

    if (!name || !phone || !property || !checkInVal || !checkOutVal || !guests) {
      if (status) {
        status.textContent = 'Please fill in all required fields.';
      }
      return;
    }

    const url = buildWhatsAppUrl('accommodation', {
      name,
      phone,
      property,
      checkIn: checkInVal,
      checkOut: checkOutVal,
      guests,
    });

    openWhatsApp(url);

    if (status) {
      status.textContent =
        'Review the draft in WhatsApp and press Send there. The website does not send the message or confirm a booking.';
    }
  }

  function handleBoatingSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const status = form.querySelector('[data-form-status]');

    if (status) {
      status.textContent = '';
    }

    if (!form.reportValidity()) {
      return;
    }

    const values = new FormData(form);
    const name = (values.get('name') || '').trim();
    const phone = (values.get('phone') || '').trim();
    const date = values.get('date') || '';
    const participants = values.get('participants') || '';
    const duration = (values.get('duration') || '').trim();

    if (!name || !phone || !date || !participants || !duration) {
      if (status) {
        status.textContent = 'Please fill in all required fields.';
      }
      return;
    }

    const url = buildWhatsAppUrl('boating', {
      name,
      phone,
      date,
      participants,
      duration,
    });

    openWhatsApp(url);

    if (status) {
      status.textContent =
        'Review the draft in WhatsApp and press Send there. The website does not send the message or confirm a booking.';
    }
  }

  function initAccommodationForm(form) {
    if (form.dataset && form.dataset.formsInitialized) {
      return;
    }
    form.dataset.formsInitialized = 'true';

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
    }

    const configError = form.querySelector('[data-configuration-error]');
    if (configError) {
      configError.hidden = true;
      configError.textContent = '';
    }

    const today = todayAsLocalDate();
    const checkIn = form.elements.checkIn;
    const checkOut = form.elements.checkOut;

    if (checkIn) {
      checkIn.min = today;
      checkIn.addEventListener('change', function () {
        if (checkOut) {
          checkOut.min = checkIn.value || today;
          if (checkIn.value && checkOut.value && checkOut.value <= checkIn.value) {
            checkOut.setCustomValidity('Check-out must be later than check-in.');
          } else {
            checkOut.setCustomValidity('');
          }
        }
      });
    }

    if (checkOut) {
      checkOut.min = today;
      checkOut.addEventListener('change', function () {
        if (checkIn && checkIn.value && checkOut.value && checkOut.value <= checkIn.value) {
          checkOut.setCustomValidity('Check-out must be later than check-in.');
        } else {
          checkOut.setCustomValidity('');
        }
      });
    }

    form.addEventListener('submit', handleAccommodationSubmit);
  }

  function initBoatingForm(form) {
    if (form.dataset && form.dataset.formsInitialized) {
      return;
    }
    form.dataset.formsInitialized = 'true';

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
    }

    const configError = form.querySelector('[data-configuration-error]');
    if (configError) {
      configError.hidden = true;
      configError.textContent = '';
    }

    const today = todayAsLocalDate();
    const dateInput = form.elements.date;
    if (dateInput) {
      dateInput.min = today;
    }

    form.addEventListener('submit', handleBoatingSubmit);
  }

  function initializeForms() {
    document
      .querySelectorAll('[data-accommodation-form]')
      .forEach(initAccommodationForm);
    document
      .querySelectorAll('[data-boating-form]')
      .forEach(initBoatingForm);
  }

  namespace.forms = Object.freeze({
    WHATSAPP_NUMBER,
    getTargetNumber,
    formatAccommodationMessage,
    formatBoatingMessage,
    buildWhatsAppUrl,
    openWhatsApp,
    initializeForms,
  });

  namespace.initializeForms = initializeForms;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeForms);
  } else {
    initializeForms();
  }
})();

