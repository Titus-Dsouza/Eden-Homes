# Eden Homes

Eden Homes is a homestay and boating enquiry website for Honnavar, Karnataka,
India. Enquiries are not confirmed bookings: availability and terms must be
confirmed by the owner. The current Phase 2 worktree contains a responsive
homepage and dedicated 1 BHK, 2 BHK, and boating service pages. Website enquiry
forms and WhatsApp message preparation are planned; no enquiry has been sent
or booking confirmed by this site.

## Project status

- **Implemented:** Responsive homepage, section navigation, accommodation and
  boating previews, dedicated service pages, contact links, labeled image
  placeholders, Express health endpoint, and Vercel SPA routing.
- **Phase 3:** Dedicated service pages are implemented and verified locally on
  `phase-3/service-pages`; see the [roadmap](docs/roadmap.md) for details.
- **Tested:** Frontend checks and browser viewport smoke tests are recorded in
  [Phase 2 of the roadmap](docs/roadmap.md); Phase 1 checks are in the
  [Phase 0 verification record](docs/phase-0-audit.md).
- **Planned:** Owner-approved photography and WhatsApp-only accommodation and
  boating enquiry forms. The WhatsApp destination number must be confirmed by
  the owner before that functionality is implemented.
- **Pending owner confirmation:** Pricing, facilities, capacities, availability,
  boating details, approved photography, exact property location, and public
  use of contact information.
- **Not in the initial release:** Supabase or another database, enquiry
  storage/history, owner authentication, and an owner dashboard. These remain
  possible future upgrades requiring separate approval.
- **Excluded from the initial scope:** An AI concierge.

## Technology

- Frontend: React, Vite, TypeScript, Tailwind CSS, React Router DOM, Lucide React
- Backend: Node.js, Express, TypeScript, Zod
- Enquiry delivery: Browser-generated WhatsApp Click-to-Chat message (planned;
  destination number pending owner confirmation)
- Database: None for the initial release; no enquiry persistence
- Frontend hosting: Vercel
- Backend hosting: separate Node.js provider; selection pending

## Repository structure

```text
frontend/       Independent Vite single-page application
backend/        Independent Express service and health endpoint
database/       Reserved for optional future database planning; no migrations
docs/           Architecture, deployment, product, design, and roadmap docs
Md files/       Source Markdown and current phase/decision records
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
There is no database connection, customer enquiry API, form submission, or
owner dashboard.

## Environment and secrets

Copy the relevant `.env.example` to `.env` within the corresponding app.
Frontend variables must use the `VITE_` prefix and must not contain secrets.
Backend variables are server-side only. `.env` files are ignored by Git; the
examples contain names and safe local defaults only.

## Frontend deployment

The existing live frontend is available at <https://eden-homes-chi.vercel.app/>.
Current Phase 2/3 work is local and has not been deployed.
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
credentials are not required; no database integration is planned for the
initial release.

More detail: [architecture](docs/architecture.md),
[deployment](docs/deployment.md), [technology stack](docs/techstack.md), and
[roadmap](docs/roadmap.md).
