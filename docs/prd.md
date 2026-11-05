# Product requirements

## Purpose

Provide a responsive web presence for Eden Homes in Honnavar, Karnataka, where
visitors can explore 1 BHK and 2 BHK accommodation, learn about boating, and
contact the owner. Property and boating details must remain limited to verified
information. Enquiries are not confirmed bookings.

## Included features

- Homepage with shared navigation, accommodation previews, boating section,
  contact details, image placeholders, and footer.
- Directly loadable 1 BHK, 2 BHK, and boating pages.
- Responsive layouts, keyboard-operable mobile navigation, accessible labels,
  focus behavior, and page metadata.
- Click-to-call links for `9448317432` and `8660345883`.
- Accommodation and boating enquiry forms that validate in the browser and
  prepare a prefilled WhatsApp message for visitor review and manual sending.

## Enquiry fields

**Accommodation:** full name, phone number, property (`1 BHK` or `2 BHK`),
check-in date, check-out date, and number of guests. Check-out must be later
than check-in.

**Boating:** full name, phone number, preferred date, number of participants,
and preferred duration. No unsupported duration or participant options are
suggested.

## Enquiry limits and privacy

- WhatsApp destination must be explicitly confirmed by the owner. It is
  configured in `frontend/js/config.js`; the blank default makes the form show
  a clear configuration error.
- Never infer the WhatsApp destination from the two telephone numbers.
- Form data stays in browser memory only for the current interaction. The site
  does not send it to a backend, database, local storage, session storage, or
  cookies.
- Visitors must review the prepared message and press Send in WhatsApp.
- The site does not claim delivery, booking confirmation, availability, pricing,
  or arrangements. The owner confirms those directly.

## Current implementation and stack

The public website is HTML5, CSS3, and browser-native JavaScript with no
frontend build step. Static pages live under `frontend/`; Vercel serves the
homepage and nested HTML routes directly. The separate Express/TypeScript
backend remains a health-check foundation only and is not part of enquiry
handling.

## Not included

No database, enquiry history, API submission, owner authentication, owner
dashboard, payments, AI concierge, or automatic booking/availability handling
is implemented. Database and owner tools are possible future upgrades only
after a separately approved scope and privacy review.

## Owner decisions still required

- WhatsApp destination number.
- Approved photographs and verified service descriptions.
- Whether contact numbers may be published.
- Exact property location if a map is later requested.
- Pricing, amenities, capacities, availability, and boating terms.

## Historical architecture

The earlier React/Vite/TypeScript frontend was replaced by the static
implementation on the `migration/vanilla-html-css-js` branch. References to
that stack in older phase records describe history, not the current runtime.
