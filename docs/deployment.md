# Deployment and environment configuration

## Frontend — Vercel

Configure the Vercel project for repository `Titus-Dsouza/Eden-Homes`:

- Root Directory: `frontend`
- Framework Preset: `Other`
- Install Command: none
- Build Command: none
- Output Directory: project root (`.`); leave the override empty when Vercel
  serves the project root by default.

The site consists of static HTML files and relative CSS/JavaScript references.
There is no SPA rewrite or frontend build. The individual accommodation pages
and `boating/index.html` are served directly. The live site is
<https://eden-homes-chi.vercel.app/>; this migration did not modify that
deployment. Dashboard settings were not independently inspected.

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

- `backend/.env.example`: `PORT` and `NODE_ENV`, validated by
  `backend/src/config/env.ts`.
- `frontend/js/config.js`: public `whatsappDestinationNumber` configuration.
  It is intentionally empty until the owner confirms the WhatsApp destination.
  Never infer it from the telephone contact numbers.
- No database variables are required for the initial release.

Local `.env` files are ignored by Git. Never commit credentials or paste them
into frontend configuration.

## Database

The initial release does not use a database and must not create migrations or
database credentials. Database storage, enquiry history, and an owner dashboard
are possible optional upgrades requiring separate approval. The separate
backend remains a health-check foundation and is not required for static-site
deployment.
