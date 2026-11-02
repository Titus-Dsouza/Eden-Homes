# Technology stack

## Approved foundation

| Area | Technology | Status |
|---|---|---|
| Frontend | React, Vite, TypeScript | Foundation implemented |
| Styling | Tailwind CSS | Configured with the Vite plugin |
| Routing | React Router DOM | Root and not-found routes implemented |
| Icons | Lucide React | Installed; not yet used by product UI |
| Frontend lint/type checks | Oxlint and TypeScript | Configured |
| Backend | Node.js, Express, TypeScript | Health service and middleware foundation |
| Validation | Zod | Validates backend environment configuration |
| Backend lint/type checks | Oxlint and TypeScript | Configured |
| Database | Supabase PostgreSQL | Proposed; not connected |
| Frontend hosting | Vercel | Live deployment reported and URL verified; unchanged by this phase |
| Backend hosting | Separate Node.js host | Provider not selected |

Frontend and backend dependencies are managed independently. Supabase SDK,
authentication, database schema, and migration tooling are intentionally
deferred until the relevant product phase.

## Runtime

Node.js 22 is used in CI and is the documented runtime. Local and deployment
environments should use Node.js 22.

## Deployment

The SPA rewrite is configured in `frontend/vercel.json`; target project settings
are `frontend` as the root, Vite framework, `npm install`, `npm run build`, and
`dist`. The backend is prepared for separate Node.js hosting; no provider or
database has been selected.

## Verification

CI checks are configured in `.github/workflows/ci.yml`. Phase 1 local check
results are recorded in [`roadmap.md`](roadmap.md). No database, enquiry flow,
authentication, owner dashboard, or AI concierge is implemented.

The configured linter is Oxlint, not ESLint. An ESLint TypeScript plugin install
was rejected because the frontend currently uses TypeScript 7 while
`typescript-eslint` declares a peer range below TypeScript 6.1. No forced
dependency install or TypeScript downgrade was made; decide whether to align
the TypeScript version before adopting ESLint specifically.
