# Eden Homes

Eden Homes is planned as a responsive homestay and boating enquiry website for
Honnavar, Karnataka, India. Enquiries are not confirmed bookings: the owner must
confirm availability and terms directly. No customer-facing product features are
implemented yet.

## Technology

- Frontend: React, Vite, TypeScript, Tailwind CSS, React Router DOM, Lucide React
- Backend: Node.js, Express, TypeScript, Zod
- Planned database: Supabase PostgreSQL; no database connection or migrations yet
- Frontend hosting target: Vercel
- Backend hosting: a separate Node.js host; provider selection is pending

## Repository structure

```text
frontend/       Independent Vite single-page application
backend/        Independent Express API foundation and health check
database/       Database planning and future migrations
docs/           Product, architecture, design, mobile, deployment, and roadmap docs
.github/        Frontend and backend CI checks
```

## Requirements

Use Node.js 22 (or a Vite-supported Node.js version) and npm. Frontend and backend
have separate manifests, lockfiles, dependencies, and commands.

## Frontend development

```sh
cd frontend
npm ci
cp .env.example .env
npm run dev
```

`npm run lint` checks the frontend and `npm run build` performs TypeScript
project checks and creates the production bundle in `frontend/dist/`.
`VITE_API_BASE_URL` is an optional API base URL; no API-backed product feature
uses it yet.

## Backend development

```sh
cd backend
npm ci
cp .env.example .env
npm run dev
```

The backend currently exposes only `GET /health`. Run `npm run typecheck`,
`npm test`, and `npm run build` for checks. `npm start` starts the compiled
server. No Supabase credentials are currently required; never place a
service-role key in the frontend.

## Environment configuration

Copy the relevant `.env.example` to `.env` in that application directory.
Frontend variables must use the `VITE_` prefix and are public in built assets.
Backend variables are read only by the backend. `.env` files are ignored by
Git; only the examples are tracked. See [deployment and environment notes](docs/deployment.md).

## Vercel frontend deployment

Create a Vercel project for `Titus-Dsouza/Eden-Homes` with:

- Root Directory: `frontend`
- Framework Preset: Vite
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

The SPA rewrite is in `frontend/vercel.json`. Add `VITE_API_BASE_URL` in Vercel
only when an API endpoint is available. No deployment has been performed.

## Backend deployment

Deploy `backend/` separately to a Node.js host. Use Node.js 22, install with
`npm ci`, build with `npm run build`, and start with `npm start`. The current
health endpoint is only a foundation; there is no production API or database
integration. See [deployment notes](docs/deployment.md).

## Current status

The repository foundation and checks are being established. The frontend is a
starter shell, not the finished website; the backend contains only a health
check. Listings, enquiry submission, authentication, owner tools, and database
integration are planned, not implemented or tested. Business details such as
pricing, amenities, capacity, availability, and boating terms require owner
confirmation before publication.

See [the roadmap](docs/roadmap.md) and [the Phase 0 audit](docs/phase-0-audit.md).
