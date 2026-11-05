# Eden Homes — Current Technology Stack

## Public website

| Area | Technology | Status |
|---|---|---|
| Markup | HTML5 | Four static pages |
| Styling | CSS3 | Shared brand, responsive, and form stylesheets |
| Behavior | Browser-native JavaScript (ES6+) | Navigation and browser-only WhatsApp form handling |
| Build/runtime dependencies | None | No frontend compilation or runtime framework |
| Checks | Node.js built-in test runner | Static route, asset, link, and message URL tests |
| Hosting | Vercel static hosting | No SPA rewrite |

The previous React, React DOM, TypeScript, Vite, Tailwind, React Router DOM,
Lucide React, and their plugins/tooling are migration history only.

## Separate backend foundation

`backend/` remains an independent Node.js/Express/TypeScript service with
Zod-based environment validation and a health endpoint. The public website does
not call it and it does not receive enquiry data. Backend tooling and checks
remain independent from the static frontend.

## Enquiry communication and privacy

The browser prepares a WhatsApp Click-to-Chat URL after native form validation.
Visitors must review the draft and manually press Send. The owner-provided
destination `919448317432` is configured in `frontend/js/config.js`. The website
does not persist form details or claim delivery or booking confirmation.

No database, authentication, enquiry history, or owner dashboard is required
for the current release. Such items remain possible future work subject to
separate approval.
