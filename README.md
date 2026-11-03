# Eden Homes

Eden Homes is a static website for exploring homestay accommodation and boating enquiries in Honnavar, Karnataka. It presents 1 BHK and 2 BHK accommodation, boating information, contact details, and WhatsApp-only enquiry forms. Enquiries are not confirmed bookings; the owner confirms availability, pricing, and arrangements.

## Current status

- **Implemented:** Responsive homepage, direct 1 BHK, 2 BHK, and boating pages, keyboard-operable mobile navigation, phone links, image placeholders, and browser-side WhatsApp enquiry forms.
- **WhatsApp destination:** Not confirmed by the owner. The forms display a configuration error until `frontend/js/config.js` contains an owner-confirmed destination number. The site does not use either contact number as the WhatsApp destination.
- **Not implemented:** Database, enquiry storage/history, backend enquiry API, authentication, owner dashboard, and AI concierge.
- **Owner input pending:** WhatsApp destination, approved photography, verified service details, and contact publication consent.

## Technology

- Frontend: HTML5, CSS3, and browser-native JavaScript (ES6+); no frontend build or compilation step.
- Backend: Separate Node.js/Express/TypeScript health-check foundation only; it is not required by the website.
- Database: None in the initial release.
- Deployment: Static Vercel hosting.

## Project structure

```text
frontend/
├── index.html
├── accommodation/
│   ├── 1-bhk.html
│   └── 2-bhk.html
├── boating/
│   └── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── forms.css
├── js/
│   ├── config.js
│   ├── main.js
│   ├── navigation.js
│   ├── accommodation.js
│   ├── boating.js
│   └── whatsapp.js
└── tests/
backend/        Independent health-check service
database/       Documentation for deferred database options
docs/           Product, architecture, deployment, and phase records
Md files/       Project decisions and source documentation
.github/        Static-site and backend CI checks
```

## Local development

The website can be opened directly as `frontend/index.html`. For local URL paths that match deployment, run a static file server from the repository root:

```sh
python3 -m http.server 8000 --directory frontend
```

Open <http://localhost:8000/>. The service pages are directly available at `/accommodation/1-bhk.html`, `/accommodation/2-bhk.html`, and `/boating/`. No frontend package installation or build is needed.

Run the frontend checks with Node.js 22 or later:

```sh
cd frontend
node --test tests/*.test.mjs
```

The separate backend remains an optional health-check service; see its own `package.json` for its Node.js commands. It does not receive or store website enquiries.

## WhatsApp enquiry behavior

The forms collect the documented accommodation or boating fields in the browser, validate them, and prepare a Click-to-Chat URL. No details are sent to a server, written to local storage, session storage, or cookies, or automatically sent through WhatsApp. The visitor reviews the message and manually presses **Send** in WhatsApp.

Before enabling messages, the owner must provide the WhatsApp destination in `frontend/js/config.js` as international digits only (country code and number, no `+` or spaces). Until then the form displays a clear configuration error. The displayed call numbers remain `9448327432` and `8660345883`; neither is assumed to be the WhatsApp destination.

## Vercel deployment

Create a static Vercel project with:

- Root Directory: `frontend`
- Framework Preset: `Other`
- Install Command: none
- Build Command: none
- Output Directory: project root (`.`) / leave the override empty

Do not configure an SPA rewrite. Vercel serves `index.html` and the nested HTML pages as static files. No deployment was performed as part of this migration.

## Project records

The source [roadmap](docs/roadmap.md) tracks completed phases and pending owner decisions. The original React/Vite implementation is recorded as migration history; it is no longer used by the frontend.
