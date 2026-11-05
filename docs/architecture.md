# Architecture

## Current repository

`frontend/` is a static website made of HTML pages, CSS, and browser-native
JavaScript. It has no package manifest, framework, build step, or API
dependency. Each route is a physical HTML file so nested pages work on direct
requests. Shared CSS and JavaScript live in `frontend/css/` and `frontend/js/`.

The initial release does not use a database or server-side backend. `database/` is reserved for
optional future database planning; it contains no active schema or migrations.
No backend SDK, database SDK, or credentials are needed.

## Boundaries

- The frontend contains public, non-secret configuration only; values in
  `frontend/js/config.js` are visible to every visitor.
- No customer enquiries are persisted by the current application.
- The frontend deploys to Vercel as a pure static site.
- Frontend checks use Node.js built-in tests and syntax validation.

## WhatsApp enquiry flow

Visitors complete an accommodation or boating form. The browser validates the
fields and prepares a prefilled WhatsApp message for the visitor to review and
manually send to the owner. The owner-provided destination is configured in
`frontend/js/config.js` as `919448317432`; it is not inferred from the
telephone contact numbers. The site does not store enquiries or claim a message
was sent; an enquiry is not a booking.

Accommodation form fields: full name, phone number, selected property (exactly
`1 BHK` or `2 BHK`), check-in, check-out, and guest count. Boating form fields:
full name, phone number, preferred date, participant count, and preferred
duration.

Database storage, enquiry history, authentication, and an owner dashboard are
optional future upgrades, not initial-release requirements.

## Verification status

Phase 1 implementation and verification are tracked in
[`roadmap.md`](roadmap.md). Repository work does not change the live deployment.
