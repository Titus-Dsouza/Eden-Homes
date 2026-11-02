# EDEN HOMES — DEVELOPMENT ROADMAP
## Phase 0 to Phase 5

**Project:** Eden Homes  
**Business:** Homestay and boating enquiries  
**Location:** Honnavar, Karnataka, India  
**Repository:** https://github.com/Titus-Dsouza/Eden-Homes

> The owner-approved no-database, WhatsApp-only initial enquiry decision
> supersedes older database and dashboard proposals in historical phase notes.
> Current delivery phases are Phase 3 service pages, Phase 4 WhatsApp forms, and
> Phase 5 release readiness.

> Phase 0, Phase 1, and Phase 2 status are tracked below. The AI concierge described in the original
> Phase 6 is excluded from the initial project scope; do not implement it without
> a separate owner-approved change. The remaining phases below are future plans,
> not evidence of implemented or verified features.

---

# PHASE 0 — REPOSITORY AUDIT AND FOUNDATION

## Objective

Audit the repository and prepare independent frontend and backend foundations
without implementing customer-facing product features.

## Acceptance checklist

- [x] Repository fully audited.
- [x] Existing code and assets reviewed.
- [x] Unnecessary files safely removed.
- [x] Frontend and backend separated.
- [x] Git configuration prepared.
- [x] Environment examples prepared.
- [x] Vercel configuration prepared.
- [x] Backend deployment approach documented.
- [x] Documentation organized.
- [x] Frontend build verified.
- [x] Backend checks completed where possible.
- [x] GitHub changes committed and pushed.
- [x] Phase 0 completion report documented.

Items are checked only after verification. The local checks passed; the
foundation was merged into `main` through pull request #1.

---

# PHASE 1 — PROJECT FOUNDATION AND ARCHITECTURE

## Objective
Verify and complete the maintainable frontend and backend foundations while
preserving the Phase 0 separation and deployment setup. Do not build product
pages, enquiry flows, database integration, or an AI concierge in this phase.

### Tasks

1. Verify frontend and backend ownership and independent dependencies.
2. Keep the React/Vite/TypeScript/Tailwind/React Router/Lucide frontend.
3. Keep the Node.js/Express/TypeScript/Zod backend.
4. Separate backend routes, controllers, middleware, and configuration.
5. Validate environment values and restrict browser CORS to the configured
   frontend origin.
6. Preserve the health endpoint and add centralized 404/error responses.
7. Keep Supabase PostgreSQL planned, without connecting it in this phase.
8. Verify lint, TypeScript, tests, builds, Vercel SPA routing, and CI.
9. Document implemented, tested, planned, and pending work.

### Acceptance Criteria

- [x] Phase 0 implementation inspected and preserved.
- [x] Frontend and backend remain independently configured.
- [x] Frontend routing, global CSS, Tailwind, TypeScript, and lint configuration verified.
- [x] Reusable responsive page container established.
- [x] Backend environment validation, CORS, routes, controllers, 404, and error handling implemented.
- [x] Health endpoint retained and covered by tests.
- [x] Environment examples document public frontend and server-only backend settings.
- [x] Vercel SPA rewrite and CI workflow verified.
- [x] Documentation updated; no product/database feature is claimed.
- [x] Frontend lint, typecheck, and production build pass.
- [x] Backend lint, typecheck, tests, and production build pass.
- [x] Backend health endpoint verified at runtime.
- [x] Changes committed locally to `phase-1/project-foundation`; not pushed.

### Deliverable

An independently configured frontend and backend foundation, ready for a
separately approved customer-facing product phase. This phase does not implement
service pages, enquiry forms, or database integration.

### Verification record

Local checks use Node.js 26.11.1 and npm 11.20.0; CI specifies Node.js 22.
Dependency installation, frontend lint/typecheck/build, backend lint/typecheck/
tests/build, and backend runtime health checks passed on this Phase 1 worktree.
The live Vercel site and a nested route returned HTTP 200 during inspection; no
deployment was performed. GitHub CI and the checked-in Vercel config were
inspected. The Vercel dashboard Root Directory setting was not independently
accessible from this workspace.

The configured lint tool is Oxlint rather than ESLint. An ESLint TypeScript
plugin install is blocked by its declared TypeScript peer range (`<6.1.0`)
against the existing frontend TypeScript 7. The existing linter and TypeScript
checks pass; adopting ESLint specifically requires an approved toolchain
alignment.

The root `README.md` is a new repository overview. The original README and other
source Markdown files are preserved unchanged under `Md files/`.

The website design tasks from the previous roadmap wording are deferred to
Phase 2, together with the service listing/enquiry interface. Existing service
and enquiry requirements remain future scope and require owner verification.

---

# PHASE 2 — HOMEPAGE AND WEBSITE DESIGN

## Objective
Replace the neutral foundation screen with a responsive Eden Homes homepage
that introduces accommodation and boating enquiries without implementing
booking, enquiry submission, or backend functionality.

### Tasks

1. Add responsive sticky navigation and a keyboard-operable mobile menu.
2. Create the hero, introduction, accommodation preview, boating, contact, and footer sections.
3. Use a reusable visual placeholder component until owner-approved photography is available.
4. Add reusable cards, section headings, and the shared page container.
5. Link on-page navigation and enquiry calls to action to their matching sections.
6. Publish both supplied telephone numbers using `tel:` links.
7. Add title and description metadata, semantic headings, focus styles, and reduced-motion support.
8. Avoid unverified prices, amenities, capacity, availability, testimonials, and boating terms.
9. Verify browser behavior across phone, tablet, and desktop viewport widths.

### Acceptance Criteria

- [x] Responsive homepage implemented with hero, introduction, accommodation preview, boating, location/contact, and footer.
- [x] Desktop navigation and mobile menu navigate to the correct page sections.
- [x] Mobile menu opens/closes by button, closes after navigation, and closes with Escape.
- [x] 1 BHK, 2 BHK, and boating information is presented without unsupported business claims.
- [x] All visual areas clearly identify themselves as placeholders pending owner-approved photography.
- [x] Both supplied contact numbers appear as `tel:` links.
- [x] Enquiry CTAs lead to the contact section; no enquiry submission is claimed.
- [x] Page title, meta description, semantic structure, keyboard focus, and reduced-motion styles are present.
- [x] Browser checks at 320, 375, 600, 768, 1024, and 1440px found no horizontal overflow or console/page errors.
- [x] Frontend lint, TypeScript check, and production build pass.
- [x] Existing backend tests continue to pass.
- [x] Design, mobile, README, and roadmap documentation updated.

### Deliverable

A polished, responsive homepage foundation. It does not implement service
detail pages, enquiry forms, WhatsApp, database persistence, or booking
confirmation.

### Future enquiry requirements (not implemented in Phase 2)

The existing product requirements call for accommodation enquiries to collect
name, phone number, check-in, check-out, and guest count; boating enquiries to
collect name, phone number, preferred date, participant count, and preferred
duration. Validation and submission belong to a later approved phase. Enquiries
must never be presented as confirmed bookings.

### Content and asset follow-up

The owner should supply approved photographs for the homepage, accommodation,
boating, and location areas. The current graphics are abstract placeholders,
not property photos or a map. Exact property location, pricing, amenities,
capacity, availability, boating services/terms, and confirmation of public
contact details remain owner-dependent.

### Verification record

Frontend dependency install, lint, typecheck, and production build passed.
Playwright/Chromium browser smoke tests at 320, 375, 600, 768, 1024, and 1440px
checked page rendering, horizontal overflow, section targets, phone links,
desktop navigation, and mobile menu/button/Escape behavior. No browser console
or page errors were observed. Playwright was used from a temporary npm cache;
it was not added as a project dependency. No deployment was performed.

---

# PHASE 3 — ACCOMMODATION AND BOATING SERVICE PAGES

## Objective
Add dedicated 1 BHK, 2 BHK, and boating pages using the completed Phase 2
visual system. This phase does not implement enquiry forms or backend features.

### Tasks

1. Add direct routes for both accommodation options and boating.
2. Reuse homepage navigation, typography, colors, spacing, and responsive styles.
3. Use clearly labeled image placeholders until owner-approved photos exist.
4. Display only confirmed facts and link back to the homepage and related services.
5. Add route-specific page titles and descriptions.
6. Link service CTAs to the existing owner contact section without claiming that
   an enquiry was submitted or a booking confirmed.
7. Verify routes, navigation, responsive behavior, accessibility basics, and builds.

### Acceptance Criteria

- [x] Dedicated 1 BHK, 2 BHK, and boating pages load directly and through homepage links.
- [x] Service pages provide cross-navigation and return paths to the homepage.
- [x] No unverified business details or misleading photos are displayed.
- [x] Contact numbers and click-to-call behavior remain unchanged.
- [x] Responsive, keyboard, reduced-motion, title/meta, and route checks pass.
- [x] Frontend lint, TypeScript, build, and existing backend checks pass.
- [x] Documentation records implementation and missing owner inputs.

### Current Status

Completed locally on `phase-3/service-pages`. Direct browser checks covered the
homepage and all three service routes at 320, 375, 600, 768, 1024, and 1440px;
all routes had correct title/meta, no horizontal overflow, functional service
links and mobile menu, and no console/page errors. Frontend lint, TypeScript,
and production build passed. Backend lint, TypeScript, tests (2/2), and
production build passed. No deployment was performed.

### Owner inputs still needed

Approved photos for each service, verified service descriptions, exact property
location if a map is desired, and confirmation of published contact information.
Prices, amenities, capacity, availability, and boating terms must not be added
without verification.

---

# PHASE 4 — WHATSAPP-ONLY ENQUIRY FORMS

## Objective
Let a visitor enter the requested details in a website form and open WhatsApp
with a prefilled message that the visitor reviews and manually sends.

### Accommodation fields

- Full name
- Phone number
- Selected property: exactly `1 BHK` or `2 BHK`
- Check-in date
- Check-out date
- Number of guests

### Boating fields

- Full name
- Phone number
- Preferred date
- Number of participants
- Preferred duration

### Requirements

- Confirm the WhatsApp destination number with the owner before implementation;
  never infer it from the existing telephone numbers.
- Build the message in the browser and open WhatsApp Click-to-Chat.
- The visitor must manually press Send; the site must not claim delivery.
- Do not persist enquiry details or build a backend submission API.
- Clearly state that an enquiry does not confirm a booking; the owner confirms
  availability, pricing, and arrangements.
- Validate required fields and date relationships without inventing allowed
  duration, capacity, or availability options.

This phase is planned, not implemented.

---

# PHASE 5 — CONTENT VERIFICATION AND RELEASE READINESS

## Objective
Verify business content and test the public experience before an owner-approved
launch. Deployment requires separate explicit approval.

### Release checks

- Owner-approved photographs and verified service descriptions.
- Confirmed contact publication consent and WhatsApp destination.
- Responsive and keyboard checks for the homepage, service pages, and forms.
- Check that no message is described as automatically sent and no request is
  described as a confirmed booking.
- Confirm deployment configuration and test the deployed site only after approval.

This phase is future work.

---

# OPTIONAL FUTURE UPGRADES — SEPARATE OWNER APPROVAL REQUIRED

The initial version does not require Supabase or another database, enquiry
storage/history, owner authentication, or an owner dashboard. These may be
considered later only after a separate owner-approved scope, privacy review, and
technical design. They are not dependencies or acceptance criteria for Phases
3–5. The AI concierge remains excluded from the initial scope.

---

# PROJECT-WIDE REQUIREMENTS

- Keep the frontend and backend separated; do not add backend product behavior
  unless an approved phase requires it.
- Do not add a database dependency, schema, or migration for the initial release.
- Preserve the existing Phase 0–2 implementation and the original source docs.
- Use only verified business information and clearly label image placeholders.
- Treat every request as an enquiry until the owner confirms arrangements.
- Run and report checks actually executed; do not claim unverified deployment.
