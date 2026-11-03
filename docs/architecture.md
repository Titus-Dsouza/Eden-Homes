# Architecture

## Current repository

`frontend/` is a static website made of HTML pages, CSS, and browser-native
JavaScript. It has no package manifest, framework, build step, or API
dependency. Each route is a physical HTML file so nested pages work on direct
requests. Shared CSS and JavaScript live in `frontend/css/` and `frontend/js/`.

`backend/` remains an independent Node.js/Express/TypeScript health-check
service with Zod-validated configuration, origin-restricted CORS, and
centralized 404/error handling. The public website does not call it.

The initial release does not use a database. `database/` is reserved for
optional future database planning; it contains no active schema or migrations.
Supabase is not selected for the initial version, and no database SDK or
credentials are needed.

## Boundaries

- The frontend contains public, non-secret configuration only; values in
  `frontend/js/config.js` are visible to every visitor.
- Backend-only credentials, if introduced later, belong in the backend host's
  environment configuration and must never be copied into frontend variables.
- No customer enquiries are persisted by the current application.
- The frontend deploys independently to Vercel; any production API deploys to a
  separate Node.js host.
- Backend request handling is separated into `routes/`, `controllers/`,
  `middleware/`, and `config/`; only the health route exists.
- `FRONTEND_URL` is the backend's permitted browser origin. Set it to the exact
  deployed frontend origin in production; production configuration fails if it
  is omitted.
- Frontend checks use Node.js built-in tests; the backend retains independent
  Oxlint and TypeScript checks.

## WhatsApp enquiry flow

Visitors complete an accommodation or boating form. The browser validates the
fields and prepares a prefilled WhatsApp message for the visitor to review and
manually send to the owner. The destination is currently unconfirmed and is
blank in `frontend/js/config.js`; the form displays a configuration error until
the owner confirms and configures a number. It is never inferred from the
telephone contact numbers. The site does not store enquiries or claim a message
was sent; an enquiry is not a booking.

Accommodation form fields: full name, phone number, selected property (exactly
`1 BHK` or `2 BHK`), check-in, check-out, and guest count. Boating form fields:
full name, phone number, preferred date, participant count, and preferred
duration.

Database storage, enquiry history, authentication, and an owner dashboard are
optional future upgrades, not initial-release requirements.

## Backend scope

The Express `/health` endpoint exists to verify the service starts. Unknown
routes return JSON 404 responses; unhandled errors return a generic response
and are logged server-side. CORS emits an allow-origin header only for the
configured frontend origin (or requests without an `Origin` header).

No product routes, database integration, authentication, or owner operations
are present. The WhatsApp form flow is browser-only and requires no backend
product API. Add backend features only after a separately approved requirement.

## Verification status

Phase 1 implementation and verification are tracked in
[`roadmap.md`](roadmap.md). Repository work does not change the live deployment.
