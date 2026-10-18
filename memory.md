# Eden Homes — Project Memory

Updated: 2026-10-18

## Current state

Phase 1 (Project Foundation and Homepage) remains intact. Phase 2 now adds demonstration stay listings and accessible detail views using static HTML, CSS, and vanilla JavaScript. Git status was inspected; changes are uncommitted as requested.

## Phase 1 implementation

- Added a responsive branded homepage for Eden Homes in Honnavar, Karnataka.
- Added accessible primary navigation, mobile menu, skip link, hero calls to action, About introduction, 1 BHK and 2 BHK option cards, contact placeholder, and footer.
- Used original CSS landscape and home illustrations. Labels clarify that these are illustrations, not photographs of Eden Homes.
- Used design tokens inspired by `Design (1).md`, with a warm sand, coastal blue, green, and shell palette.
- Avoided invented pricing, amenities, capacity, ratings, reviews, availability, property imagery, address details, and contact information. Property details and owner contact are explicitly left for owner verification.
- Kept the implementation static and dependency-free, apart from optional Google Fonts loaded by the browser. Supabase is not configured or used in this phase.

## Phase 2 implementation

- Replaced the two illustrated stay cards with image-led 1 BHK and 2 BHK sample listings and clearly labeled demonstration content.
- Added a native HTML `<dialog>` property view with a large main image, selectable six-image gallery, property type/name, description, unknown-details notice, contact-to-book action, and booking-request-not-confirmed notice.
- Native dialog behavior supplies keyboard focus containment and Escape dismissal; close and backdrop controls are also provided. Focus returns to the originating View Details control after close.
- Replaced external Unsplash property image URLs with `assets/images/properties/room-1.jpeg` through `room-6.jpeg`. The same six local photos are used for both 1 BHK and 2 BHK galleries; `room-1.jpeg` is the card image for both. Image paths and descriptive alt text are centralized in `propertyGalleryImages` in `js/app.js`.
- Added a general destination-photo section based on the planned Explore Honnavar section in `Design.md`; it uses `hnr3.webp` and `hnr6.webp` only, with generic descriptions and no attraction claims.
- Visually inspected all six destination photos. `hnr1.jpg` and `hnr2.jpg` contain Adobe Stock marks, `hnr4.webp` contains Shutterstock branding, and `hnr5.webp` has a visible date/time overlay; these are excluded. The two displayed photos had no visible watermark.
- Replaced the Unsplash attribution file with a local image inventory documenting usage, watermark checks, exclusions, and rights follow-up. Local property and destination image licensing/provenance are not documented; confirm usage rights before public/commercial deployment.
- Contact actions lead to the existing contact section. No phone or WhatsApp number is configured; no made-up number/link or false booking confirmation was added.
- No booking form was added: this scoped Phase 2 work implements listings, details, and enquiry links; the remaining form and call/WhatsApp setup are recorded in `phase.md` pending verified owner contact and a form handling destination.

## Phase 2 checks

- `node --check js/app.js` and `node --check app.js` — passed.
- Python standard-library HTML parsing — passed; checked unique IDs, in-page anchors, and local CSS/JS paths.
- In-memory Node interaction check — passed; verified both listing cards render, View Details opens the correct content, gallery selection changes the main image, and close restores focus to the opener.
- Static checks — passed for six image alt descriptions, image fallback hooks, native modal hooks, responsive CSS breakpoints, and absence of duplicate IDs.
- For the local-image update: `node --check js/app.js` and `node --check app.js` passed; a mock-DOM check verified both cards use `room-1.jpeg` and each detail gallery contains the same six local images; Python HTML checks passed for unique IDs, in-page anchors, local image and script paths, alt text, and exclusion of the four watermarked/overlaid destination images; `git diff --check` passed.
- Browser-based rendering, visual responsive verification, and browser console inspection remain unavailable because browser tooling is not installed. Watermark inspection was performed visually on all six destination images using the local files.

## Phase 1 files added

- `index.html` — homepage structure and content.
- `css/styles.css` — design tokens, components, responsive layouts, focus states, and reduced-motion handling.
- `js/app.js` — accessible mobile navigation behavior and current footer year.
- `memory.md` — project state and implementation notes.

## Phase 2 files changed or added

- `index.html` — image-led Our Stays listings and property details dialog shell.
- `css/styles.css` — listing image, action, dialog, and responsive styles.
- `js/app.js` — centralized local property photo data, card rendering, gallery, dialog, and image fallback behavior.
- `assets/images/ATTRIBUTIONS.md` — local property/destination image inventory and watermark review.
- `phase.md` and `memory.md` — Phase 2 progress, checks, and remaining work.

## Checks performed

- `node --check js/app.js` — passed.
- Python standard-library HTML parsing — passed; checked unique IDs, all in-page links, and local CSS/JS paths.
- In-memory Node interaction check — passed; verified mobile menu open/close state and footer year initialization.
- Static stylesheet check — passed for mobile and tablet breakpoints, responsive card layout, and reduced-motion support.
- Local HTTP smoke test — unable to run: the sandbox denied binding to a localhost socket.
- `tidy -qe index.html` — not a usable HTML5 validation result in this environment: the installed Tidy reports HTML5 semantic elements and inline SVG as unknown. It did identify and prompt correction of unescaped ampersands in the font URL.
- Browser rendering, actual viewport/responsive inspection, and browser console/network checks could not be performed because no browser automation or browser binary was available.

## Known limitations and next steps

- Owner-verified pricing, amenities, capacity, availability, and contact details are not available in the repository. Confirm property-specific photo assignments and facts with the owner; confirm rights for local images before public/commercial use.
- The hero continues to use the existing coastal illustration; destination and property photography are separate local assets.
- Optional Google Fonts require a network connection; system serif and sans-serif fallbacks are defined.
- Remaining Phase 2 work: add a booking request form after deciding a safe submission destination; configure verified owner phone/WhatsApp actions; replace demonstration listing copy with owner-confirmed facts.
- Subsequent phases: Supabase schema, Auth, RLS, owner dashboard, AI concierge, and messaging remain later-phase work.
