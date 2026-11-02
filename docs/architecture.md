# Architecture

## Current repository

`frontend/` and `backend/` are independent Node.js applications with their own
package manifests, lockfiles, TypeScript configuration, lint commands, and
environment examples. The frontend is a Vite-built React single-page application
with React Router, Tailwind CSS, a shared page container, and a public API base
URL parser. The backend is an Express service with Zod-validated configuration,
a health endpoint, origin-restricted CORS, and centralized 404/error handling.
The apps are not connected to one another yet.

The initial release does not use a database. `database/` is reserved for
optional future database planning; it contains no active schema or migrations.
Supabase is not selected for the initial version, and no database SDK or
credentials are needed.

## Boundaries

- Frontend code may contain public configuration only. Vite-exposed variables
  are embedded in client assets and must never contain secrets.
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
- Frontend and backend lint/type checks use Oxlint and TypeScript. Their
  dependencies remain independent.

## Initial enquiry approach (planned, not implemented)

Visitors will browse service information and complete an accommodation or
boating form. The browser will prepare a prefilled WhatsApp message for the
visitor to review and manually send to the owner. The WhatsApp destination
number must be confirmed by the owner before implementation. The site will not
store the enquiry or claim the message was sent; enquiries are not bookings.

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
are present. The planned WhatsApp form flow is browser-only and requires no
backend product API. Add backend features only after a separately approved
requirement.

## Verification status

Phase 1 implementation and verification are tracked in
[`roadmap.md`](roadmap.md). Repository work does not change the live deployment.
