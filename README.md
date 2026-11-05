# Eden Homes

Eden Homes is a static website for exploring homestay accommodation and boating enquiries in Honnavar, Karnataka. It presents 1 BHK and 2 BHK accommodation, boating information, contact details, and WhatsApp-only enquiry forms. Enquiries are not confirmed bookings; the owner confirms availability, pricing, and arrangements.

## Current status

- **Implemented:** Responsive homepage, direct 1 BHK, 2 BHK, and boating pages, keyboard-operable mobile navigation, phone links, image placeholders, and browser-side WhatsApp enquiry forms.
- **WhatsApp destination:** Owner-provided number `919448317432` is configured in `frontend/js/config.js`; the site displays `9448317432` for contact. Enquiries open as prefilled drafts for the visitor to review and send.
- **Not implemented:** Database, enquiry storage/history, backend enquiry API, authentication, owner dashboard, and AI concierge.
- **Owner input pending:** Approved photography, verified service details, and contact publication consent.

## Technology

- Frontend: HTML5, CSS3, and browser-native JavaScript (ES6+); no frontend build or compilation step.
- Backend: None; the website is completely static with browser-native WhatsApp Click-to-Chat enquiry forms.
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
│   ├── whatsapp.js
│   └── theme.js
└── tests/
database/       Documentation for deferred database options
docs/           Product, architecture, deployment, and phase records
Md files/       Project decisions and source documentation
.github/        Static-site CI checks
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


## WhatsApp enquiry behavior

The forms collect the documented accommodation or boating fields in the browser, validate them, and prepare a Click-to-Chat URL. No details are sent to a server, written to local storage, session storage, or cookies, or automatically sent through WhatsApp. The visitor reviews the message and manually presses **Send** in WhatsApp.

The owner-provided WhatsApp destination is configured in `frontend/js/config.js` as `919448317432` (international digits only, no `+` or spaces). The forms prepare `https://wa.me/919448317432` links with URL-encoded enquiry messages. The displayed call numbers are `9448317432` and `8660345883`.

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
