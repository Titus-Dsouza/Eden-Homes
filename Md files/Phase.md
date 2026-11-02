# Eden Homes — Current Phase Status

This file records the current delivery order. Completed work is distinguished
from planned or optional functionality. Do not treat archived proposals as
implemented requirements.

## Completed

- **Phase 0 — Repository foundation:** Frontend/backend separation, Git and
  deployment configuration, and project documentation.
- **Phase 1 — Foundation and architecture:** React/Vite/TypeScript frontend,
  Express/TypeScript health service, environment validation, CORS, error
  handling, CI, and Vercel SPA routing.
- **Phase 2 — Homepage:** Responsive homepage, mobile navigation, service
  previews, contact links, placeholder imagery, and design/accessibility
  foundation.

## Completed

- **Phase 3 — Accommodation and boating service pages:** Separate 1 BHK,
  2 BHK, and boating pages with responsive design, verified information only,
  labeled photo placeholders, navigation, and route-specific metadata. Frontend
  and backend checks and browser route/viewport smoke tests passed locally.

## Planned initial release

- **Phase 4 — WhatsApp-only enquiry forms:** Collect the approved accommodation
  or boating fields, prepare a prefilled WhatsApp message in the browser, and
  require the visitor to manually press Send. The WhatsApp destination must be
  confirmed by the owner before implementation. No database or backend
  submission is part of this flow.
- **Phase 5 — Release readiness:** Verify business content, owner-approved
  photos, responsive behavior, and deployment settings. Do not deploy without
  explicit approval.

Every enquiry remains unconfirmed until the owner confirms availability,
pricing, and arrangements.

## Optional future upgrades

Supabase or another database, enquiry history, owner authentication, and an
owner dashboard are not requirements for the initial version. Revisit only
after a separate owner-approved scope and privacy review. The AI concierge
remains excluded.