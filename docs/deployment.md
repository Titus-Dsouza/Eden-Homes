# Deployment and environment configuration

## Frontend — Vercel

The Vercel project should use repository `Titus-Dsouza/Eden-Homes`, root
directory `frontend`, Vite framework preset, `npm install`, `npm run build`, and
`dist` as the output directory. `frontend/vercel.json` sends SPA routes to
`index.html`. The live site is <https://eden-homes-chi.vercel.app/>; this phase
does not modify that deployment. The Vercel project dashboard's Root Directory
setting could not be independently inspected from the local workspace.

`VITE_API_BASE_URL` is an optional, public URL read by the frontend service
configuration. Set it only after a backend API is deployed. Any `VITE_`
variable is exposed to visitors and must not contain credentials.

## Backend — separate Node.js host

There is no backend deployment manifest because no provider has been chosen.
Deploy the `backend/` application separately from Vercel using Node.js 22:

- Install: `npm ci`
- Build: `npm run build`
- Start: `npm start`
- Health check: `GET /health`

Configure `PORT` and `NODE_ENV` in the host environment. Provider-specific
configuration, production URLs, CORS, authentication, and secrets should be
added only when an actual API integration and hosting provider are selected.

## Environment files

- `frontend/.env.example`: `VITE_API_BASE_URL` (optional; no product API calls
  are implemented).
- `backend/.env.example`: `PORT` and `NODE_ENV`, validated by
  `backend/src/config/env.ts`.
- No database variables are required for the initial release. The planned
  WhatsApp Click-to-Chat destination number must be confirmed by the owner
  before implementation and must not be invented or inferred from the existing
  telephone numbers.

Local `.env` files are ignored by Git. Never commit credentials or paste them
into frontend configuration.

## Database

The initial release does not use a database and must not create migrations or
database credentials. Database storage, enquiry history, and an owner dashboard
are possible optional upgrades requiring separate approval.
