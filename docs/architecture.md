# Architecture

## Current repository

`frontend/` and `backend/` are independent Node.js applications with their own
package manifests, lockfiles, TypeScript configuration, and environment files.
The frontend is a Vite-built React single-page application. The backend is a
small Express service with a health endpoint and validated runtime configuration.
They are not connected to one another yet.

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

## Intended flow (planned, not implemented)

Visitors will browse verified accommodation and boating information and send
enquiries. The owner will review requests and confirm details directly.
Enquiries are not bookings. Persistent storage, authorization, privacy controls,
and any owner interface require their own design and tests before release.

## Backend scope

The Express `/health` endpoint exists to verify the service starts. No product
routes, Supabase integration, authentication, or owner operations are present.
Add backend features only when required by an approved product phase.
