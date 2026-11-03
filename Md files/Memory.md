
## Verified project memory

**Recorded:** 2026-11-02
**Project:** Eden Homes, a homestay and boating enquiry website for Honnavar,
Karnataka, India.

### Services and contact details

- The site presents 1 BHK accommodation, 2 BHK accommodation, and boating
  enquiries. No amenities, prices, guest capacities, availability, boating
  terms, or exact property address are verified in the project records.
- `9448327432` and `8660345883` are the two supplied telephone contact numbers
  and remain clickable `tel:` links. Their accuracy and public-use consent
  still require owner confirmation.
- The WhatsApp destination number has **not** been confirmed. Do not infer it
  from either telephone number.

### Current website architecture

- The frontend is static HTML5, CSS3, and browser-native JavaScript (ES6+).
- The homepage is `frontend/index.html`; accommodation pages are
  `frontend/accommodation/1-bhk.html` and `2-bhk.html`; boating is
  `frontend/boating/index.html`.
- Shared styles live in `frontend/css/`; navigation, form logic, and public
  WhatsApp configuration live in `frontend/js/`.
- The website has no React, TypeScript, Vite, router framework, frontend
  package manifest, compilation, API connection, or enquiry persistence.
- The separate Express/TypeScript backend is a health-check foundation only.
  The static site does not depend on it.

### Design and asset decisions

- Preserve the existing Eden Homes page structure, copy, colors, typography,
  spacing, cards, and responsive CSS while moving to static HTML.
- The palette uses forest green, warm cream, sand, charcoal, and restrained
  terracotta accents. Headings use a Georgia serif and body text uses the
  system sans-serif stack.
- Existing visual art is CSS illustration labeled as placeholders. No
  owner-approved property or boating photographs are currently in the
  repository; do not imply placeholder art is a real photo or map.
- No approved image/font assets were found in the tracked frontend.

### Enquiry workflow and privacy

- Accommodation fields: full name, phone number, selection limited to 1 BHK or
  2 BHK, check-in, check-out, and guest count.
- Boating fields: full name, phone number, preferred date, participant count,
  and preferred duration.
- Browser validation prepares a prefilled WhatsApp Click-to-Chat message. The
  visitor reviews it and manually presses Send. The site does not claim
  delivery, automatically send, or confirm a booking.
- No enquiry details are stored in cookies, local storage, session storage, a
  database, or a backend API.
- `frontend/js/config.js` contains an intentionally blank
  `whatsappDestinationNumber`. Until the owner confirms the number and it is
  configured in international digits-only format, the forms show a clear
  configuration error.

### Phases and deployment

- Phases 0, 1, 2, and 3 are recorded complete. Phase 1's React/Vite frontend is
  historical and has been replaced on `migration/vanilla-html-css-js`.
- Phase 4 form behavior is implemented locally, but WhatsApp messaging remains
  disabled pending the destination-number decision.
- Phase 5 release verification and deployment approval remain pending.
- Vercel is the static hosting target: project root `frontend`, Framework
  Preset `Other`, no install command, no build command, and no SPA rewrite.
- No deployment or push has been performed for this migration.

### Owner decisions still required

Confirm the WhatsApp destination, public contact permission/accuracy,
owner-approved images, service descriptions, exact location if a map is wanted,
and any prices, amenities, capacity, availability, or boating terms before
publishing them.

### Restrictions and future scope

Do not add Supabase or another database, enquiry history, authentication,
owner dashboard, backend enquiry API, or AI concierge to the current release.
Database-backed tools remain optional future changes requiring separate owner
approval and a privacy review. Never represent an enquiry as a confirmed
booking.
