(function () {
  const namespace = window.EdenHomes || (window.EdenHomes = {});

  function getDestination() {
    const number = window.EDEN_HOMES_CONFIG?.whatsappDestinationNumber?.trim();
    if (!number || !/^[1-9]\d{7,14}$/.test(number)) {
      throw new Error(
        'WhatsApp enquiries are not configured. Set whatsappDestinationNumber in js/config.js to the owner-confirmed WhatsApp number in international digits-only format.',
      );
    }

    return number;
  }

  function getConfigurationError() {
    try {
      getDestination();
      return '';
    } catch (error) {
      return error instanceof Error
        ? error.message
        : 'WhatsApp enquiries are not configured.';
    }
  }

  function buildMessage(kind, details) {
    const lines = [
      `Eden Homes ${kind} enquiry`,
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
    ];

    if (kind === 'accommodation') {
      lines.push(
        `Property: ${details.property}`,
        `Check-in: ${details.checkIn}`,
        `Check-out: ${details.checkOut}`,
        `Guests: ${details.guests}`,
      );
    } else {
      lines.push(
        `Preferred date: ${details.date}`,
        `Participants: ${details.participants}`,
        `Preferred duration: ${details.duration}`,
      );
    }

    return lines.join('\n');
  }

  function buildWhatsAppUrl(kind, details) {
    const number = getDestination();
    const message = buildMessage(kind, details);
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  function openWhatsApp(url) {
    const windowReference = window.open(url, '_blank');
    if (!windowReference) {
      throw new Error(
        'Your browser blocked the WhatsApp window. Allow pop-ups for this site and try again.',
      );
    }

    windowReference.opener = null;
  }

  namespace.whatsapp = Object.freeze({
    buildWhatsAppUrl,
    getConfigurationError,
    openWhatsApp,
  });
})();
