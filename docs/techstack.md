# Technology stack

## Approved foundation

| Area | Technology | Status |
|---|---|---|
| Frontend | React, Vite, TypeScript | Scaffolded |
| Styling | Tailwind CSS | Configured |
| Routing | React Router DOM | Configured |
| Icons | Lucide React | Installed |
| Backend | Node.js, Express, TypeScript | Minimal health service |
| Validation | Zod | Used for backend environment validation |
| Database | Supabase PostgreSQL | Proposed; not connected |
| Frontend hosting | Vercel | Configuration prepared; not deployed |
| Backend hosting | Separate Node.js host | Provider not selected |

Frontend and backend dependencies are installed and managed independently.
Supabase SDK, authentication, database schema, and migration tooling are
intentionally deferred until the relevant product phase.

## Runtime

Node.js 22 is used in CI. Select a Vite-supported Node.js release locally and on
the frontend host.
