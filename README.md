# Eden Homes

Eden Homes is a planned homestay and boating enquiry website for Honnavar,
Karnataka, India. Enquiries are not confirmed bookings: availability and terms
must be confirmed by the owner. The current website is a foundation placeholder;
customer-facing service pages and enquiry workflows are not implemented.

## Project status

- **Implemented:** React/Vite frontend shell, Express health endpoint, validated
  backend configuration, independent app dependencies, and Vercel SPA routing.
- **Tested:** See [Phase 1 status in the roadmap](docs/roadmap.md) and
  [verification record](docs/phase-0-audit.md).
- **Planned:** Verified service information and future accommodation and boating
  enquiry experiences.
- **Pending owner confirmation:** Pricing, facilities, capacities, availability,
  boating details, and public use of contact information.
- **Excluded from the initial scope:** An AI concierge.

## Technology

- Frontend: React, Vite, TypeScript, Tailwind CSS, React Router DOM, Lucide React
- Backend: Node.js, Express, TypeScript, Zod
- Planned database: Supabase PostgreSQL; not connected
- Frontend hosting: Vercel
- Backend hosting: separate Node.js provider; selection pending

## Repository structure

```text
frontend/       Independent Vite single-page application
backend/        Independent Express service and health endpoint
database/       Database planning and future migrations
docs/           Architecture, deployment, product, design, and roadmap docs
Md files/       Preserved source Markdown documents
.github/        Frontend and backend CI workflow
```

The frontend and backend have separate manifests, lockfiles, TypeScript
configuration, and environment examples. They do not currently call one another.

## Requirements

Use Node.js 22 and npm. Run each application from its own directory.

### Frontend

```sh
cd frontend
npm ci
cp .env.example .env
npm run dev
```

Available checks and build:

```sh
npm run lint
npm run typecheck
npm run build
```

`VITE_API_BASE_URL` is optional and public in browser assets. No product API
calls are implemented.

### Backend

```sh
cd backend
npm ci
cp .env.example .env
npm run dev
```

The backend currently exposes only `GET /health`. Run:

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

`npm start` starts the compiled server. `FRONTEND_URL` configures the allowed
browser origin for CORS. Production must set it to the frontend's exact origin.
There is no Supabase connection or product API.

## Environment and secrets

Copy the relevant `.env.example` to `.env` within the corresponding app.
Frontend variables must use the `VITE_` prefix and must not contain secrets.
Backend variables are server-side only. `.env` files are ignored by Git; the
examples contain names and safe local defaults only.

## Frontend deployment

The live frontend is available at <https://eden-homes-chi.vercel.app/>.
The Vercel project should use repository `Titus-Dsouza/Eden-Homes` with:

- Root Directory: `frontend`
- Framework Preset: Vite
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

`frontend/vercel.json` sends unmatched SPA routes to `index.html`. No deployment
was performed as part of this phase.

## Backend deployment

Deploy `backend/` separately to a Node.js host; the provider is not selected.
Use Node.js 22, `npm ci`, `npm run build`, and `npm start`. Configure `PORT`,
`NODE_ENV`, and the production `FRONTEND_URL` in the host environment. Supabase
credentials are not required until a database integration is approved.

More detail: [architecture](docs/architecture.md),
[deployment](docs/deployment.md), [technology stack](docs/techstack.md), and
[roadmap](docs/roadmap.md).
