# Eden Homes

Eden Homes is a static website for exploring homestay accommodation and
boating enquiries in Honnavar, Karnataka. The public website uses HTML5, CSS3,
and browser-native JavaScript; it does not need React, TypeScript, Vite, npm, or
a frontend build.

## Current features

- Homepage and directly served 1 BHK, 2 BHK, and boating pages.
- Responsive navigation, labeled placeholder artwork, contact section, and
  click-to-call links.
- Accommodation and boating forms that validate in the browser and prepare a
  WhatsApp message for the visitor to review and manually send.
- No enquiry database, persistence, API submission, or booking confirmation.

## WhatsApp configuration

The owner supplied `9448317432` as the destination, configured in
`frontend/js/config.js` as international digits only (`919448317432`). The
forms use it to create WhatsApp Click-to-Chat links with URL-encoded enquiry
messages. The other supplied telephone contact is `8660345883`.

## Local use and deployment

Open `frontend/index.html` directly or serve the `frontend/` directory with a
static file server. Vercel uses `frontend` as its root, the `Other` framework
preset, and no install or build command. Nested HTML pages are static routes;
no SPA rewrite is required. See the repository `README.md` and
`docs/deployment.md`.

## Phase records

Phases 0–3 are complete. Phase 4 form code is implemented locally but cannot
open WhatsApp until the owner confirms and configures the destination. Phase 5
release verification and deployment approval remain pending. Database storage,
enquiry history, authentication, and an owner dashboard are future options,
not current features.
