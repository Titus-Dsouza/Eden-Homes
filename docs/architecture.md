# Architecture

## Current repository

`frontend/` and `backend/` are independent Node.js applications with their own
package manifests, lockfiles, TypeScript configuration, lint commands, and
environment examples. The frontend is a Vite-built React single-page application
with React Router, Tailwind CSS, a shared page container, and a public API base
URL parser. The backend is an Express service with Zod-validated configuration,
a health endpoint, origin-restricted CORS, and centralized 404/error handling.
The apps are not connected to one another yet.

`database/` holds database-specific planning and future migrations. Supabase
PostgreSQL is the proposed database, but there is no project connection, schema,
or migration in this repository. No Supabase SDK or credentials are needed yet.

## Boundaries

- Frontend code may contain public configuration only. Vite-exposed variables
  are embedded in client assets and must never contain secrets.
- Backend-only credentials, if introduced later, belong in the backend host's
  environment configuration and must never be copied into frontend variables.
- Database schema changes belong in `database/migrations/`, separate from
  application source.
- The frontend deploys independently to Vercel; any production API deploys to a
  separate Node.js host.
- Backend request handling is separated into `routes/`, `controllers/`,
  `middleware/`, and `config/`; only the health route exists.
- `FRONTEND_URL` is the backend's permitted browser origin. Set it to the exact
  deployed frontend origin in production; production configuration fails if it
  is omitted.
- Frontend and backend lint/type checks use Oxlint and TypeScript. Their
  dependencies remain independent.

## Intended flow (planned, not implemented)

Visitors will browse verified accommodation and boating information and send
enquiries. The owner will review requests and confirm details directly.
Enquiries are not bookings. Persistent storage, authorization, privacy controls,
and any owner interface require their own design and tests before release.

## Backend scope

The Express `/health` endpoint exists to verify the service starts. Unknown
routes return JSON 404 responses; unhandled errors return a generic response
and are logged server-side. CORS emits an allow-origin header only for the
configured frontend origin (or requests without an `Origin` header).

No product routes, Supabase integration, authentication, or owner operations
are present. Add backend features only when required by an approved product
phase.

## Verification status

Phase 1 implementation and verification are tracked in
[`roadmap.md`](roadmap.md). Repository work does not change the live deployment.
