# Technology stack

## Current frontend

| Area | Technology | Status |
|---|---|---|
| Documents | HTML5 | Four directly served page files |
| Styling | CSS3 | Shared brand styles, responsive rules, and form styles |
| Interaction | Browser-native JavaScript (ES6+) | Accessible mobile menu and browser-only WhatsApp form handling |
| Build | None | No compilation or frontend package installation |
| Frontend tests | Node.js built-in test runner | Static route, asset, phone, and WhatsApp URL checks |
| Hosting | Vercel static hosting | No framework build or SPA rewrite |

The former React, React DOM, TypeScript, Vite, Tailwind, React Router, Lucide,
and associated frontend tooling are migration history only. They are not
required by the current frontend.

## Separate backend foundation

The backend remains an independent Node.js/Express/TypeScript service with
Zod-based environment validation and a `GET /health` endpoint. It is not called
by the static website and receives no enquiry data. Backend package files,
tests, and checks remain in place.

## Enquiry flow

The browser validates accommodation or boating form values and prepares a
WhatsApp Click-to-Chat URL. Visitors review the draft and manually press Send.
The form does not persist the details or report a message as delivered. The
destination number is not owner-confirmed; `frontend/js/config.js` therefore
remains blank and the forms show a configuration error. Never use either
telephone number as a substitute.

No database, authentication, enquiry history, owner dashboard, or AI
concierge is part of the current release. Database and owner tools remain
optional future work requiring separate approval.

## Local checks

Use Node.js 22 or later to run:

```sh
cd frontend
node --test tests/*.test.mjs
```

The separate backend retains its own npm scripts, TypeScript configuration,
and CI checks.
