# Phase 0 repository audit

> Historical record from the repository foundation phase. The subsequent
> Phase 2/3 site implementation and vanilla frontend migration supersede
> statements below about the frontend being a placeholder, React/Vite
> deployment, and prior local repository state. Current status is recorded in
> [`roadmap.md`](roadmap.md).

## Baseline

- The supplied local directory (`EDEN HOMES 2`) was not a Git repository and
  contained ten Markdown files, no source code, assets, package manifests,
  dependencies, tests, environment files, deployment config, CI, or database
  migrations.
- Most local documents were empty. The local README described frontend/backend
  and Supabase as undecided and listed an AI visitor assistant, owner dashboard,
  accommodation, boating, forms, and WhatsApp as features despite no code.
- The local workflow described future enquiry steps, not an implemented system.
- The GitHub repository was separate: `main` had two commits, one branch, and
  only `LICENSE` and `Phase.md`. The license is MIT and is retained.
- The remote roadmap documents future service and enquiry concepts, but includes
  no application code, assets, tests, package files, CI, database migrations,
  environment configuration, or deployment setup.
- The roadmap's AI concierge phase conflicts with the user's explicit
  instruction; AI is excluded from the initial scope in the current PRD.

## Safety and history

No application secrets or private environment files were present in either
audited file inventory. No code existed to assess for broken imports or
dependencies. The original local directory was left unchanged. Work is based on
a fresh clone and a new branch from `main`; existing Git history is preserved.

## Current foundation

The Phase 0 changes establish separate frontend/backend apps, root Git
configuration, environment examples, Vercel SPA routing, CI checks, and status
documentation. The frontend is intentionally a placeholder and the backend is
limited to a health endpoint. Product and database behavior is not claimed as
implemented.

## Verification

- Frontend: `npm ci`, `npm run lint`, and `npm run build` passed.
- Backend: `npm ci`, `npm run typecheck`, `npm test` (one passing health check),
  and `npm run build` passed.
- Runtime: the compiled backend returned `{"status":"ok"}` from `/health`; the
  production frontend preview served `index.html` for a deep route.
- Configuration: the Vercel SPA rewrite parsed as JSON; `.env` files are
  ignored and both `.env.example` files remain trackable.
- Dependency installation reported zero known vulnerabilities for each
  application.

The foundation is verified and committed to
`phase-0/repository-foundation`, which was pushed to GitHub. No production
deployment has occurred; product features and owner verification remain future
work.
