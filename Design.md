# Design — Eden Homes (Honnavar)

Version: 1.0
Date: 2026-10-17
Author: Project design brief for Eden Homes

---

This Design.md documents a complete, developer-ready design specification for Eden Homes — a homestay business in Honnavar, Karnataka. It preserves the existing tech choices (HTML5/CSS3/vanilla JS frontend; Supabase Auth + PostgreSQL backend) and describes UI, UX, visual system, images, accessibility, performance, and implementation notes so developers can implement the site consistently.

1. Design vision and brand identity

- Vision: A modern, premium-looking yet warm and welcoming coastal website that showcases Eden Homes’ homely hospitality and proximity to Honnavar’s backwaters, Kasarkod (Eco Beach) and coastal Karnataka landscapes.
- Brand attributes: welcoming, authentic, nature-forward, locally rooted, family-friendly, trustworthy.
- Brand tone: conversational, helpful and clear; emphasize local recommendations, safety, and sustainable practices.
- Logo & mark (implementation note): use a simple wordmark "Eden Homes" plus a small icon combining a coconut palm silhouette and a gentle wave. Keep mark horizontal for header and square/stacked for social avatars.

2. Design principles

- Clarity: Property type (1 BHK vs 2 BHK), guest capacity, and how booking requests work must be obvious at a glance.
- Trust first: use verified data, explicit callouts that requests are requests (not confirmed bookings), and visible contact options.
- Mobile-first: start layouts for small screens and scale up.
- Local authenticity: photography, copy, and microcopy grounded in Honnavar & coastal Karnataka.
- Minimal friction: browsing and requesting bookings without forcing account creation.
- Progressive enhancement: work with JS turned off for basic browsing and enquiry flows where possible.

3. Colour palette with CSS variables

Primary brand colours (use these as CSS variables):

:root {
  --ocean-blue: #155E75;      /* primary CTA, links */
  --deep-sea: #123B46;       /* header, footer background */
  --lagoon-teal: #2A9D8F;    /* accents, badges */
  --coconut-green: #496B45;  /* secondary accents */
  --warm-sand: #F5EBDD;      /* page background */
  --shell-white: #FFFCF7;    /* card backgrounds */
  --laterite-coral: #C96F4A; /* alert, emphasis */
  --dark-text: #243238;      /* main text */
  --muted: #6B7B7A;          /* meta text */
  --shadow: rgba(36,50,56,0.08);
}

Accessibility notes: ensure link/CTA contrast meets WCAG AA. Test foreground on each background. Use --ocean-blue or --deep-sea for primary CTAs on light backgrounds.

4. Typography, spacing, borders, shadows, and button styles

Typography
- Heading typeface: Playfair Display or similar serif for warm headings (fallback: Georgia).
- UI / body: Inter or Noto Sans (fallback: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial).
- Scale
  - H1: 36–44px (desktop), 28–32px (mobile)
  - H2: 26–32px
  - H3: 20–24px
  - Body: 16px (1rem)
  - Small: 13–14px
- Line-height: 1.4–1.6 for body copy.

Spacing & layout tokens
- Base spacing: 16px
- Spacing scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Container widths: mobile fluid; tablet max 720px; desktop max 1120px

Borders & radius
- Card border-radius: 12px
- Buttons radius: 10px
- Input radius: 8px

Shadows
- Subtle card shadow: 0 6px 20px var(--shadow)
- Elevation for hero/CTA: 0 12px 30px rgba(18,59,70,0.08)

Buttons
- Primary (filled): background: var(--ocean-blue); color: var(--shell-white); padding: 12px 18px; border-radius: 10px; font-weight: 600; box-shadow subtle.
- Secondary (outline): border 1px solid var(--lagoon-teal); color: var(--deep-sea); background: transparent.
- Ghost/small (for card actions): transparent background, --muted text.
- Disabled: 50% opacity and inert pointer-events.

Animation & motion
- Keep animations subtle and short (transition: 150–220ms easing). Avoid heavy parallax or motion that affects performance or accessibility.

5. Photography direction and image sourcing

Photography style
- Natural light, golden hour coastal shots, candid lifestyle images (families, veranda, local food), environmental portraits of the property and host.
- Use wide landscape shots to show context (backwaters, dunes, palm groves) and intimate interior shots for rooms.
- Avoid images implying Eden Homes is directly beachfront unless property actually has that view. Use captions clearly ("10-minute drive to Kasarkod Eco Beach").

Suggested image filenames (place under /assets/images/):
- hero-honnavar-golden-hour.jpg (site hero; wide 1920px)
- honnavar-sharavathi-backwater-boat-1.jpg
- kasarkod-eco-beach-dunes-1.jpg
- coastal-coconut-palms-sunset.jpg
- eden-interior-1-sample.jpg (temporary sample; label clearly as SAMPLE)
- eden-exterior-sample.jpg (temporary sample)
- room-1bhk-living.jpg (SAMPLE)
- room-2bhk-bedroom.jpg (SAMPLE)

Image sourcing and verification
- Only use images where reuse permissions are verified. Prefer:
  - Commissioned photos by local photographer (recommended).
  - Licensed stock with a commercial license (Shutterstock, Adobe Stock, or equivalent).
  - Free images only when license permits commercial reuse (Unsplash/Pexels) but verify attribution rules.
- DO NOT embed images whose reuse can't be verified. Instead, list source links and suggested filenames.

Working reference links (research sources to verify images & local info):
- Honnavar Sharavathi Backwaters: https://uttarakannada.nic.in/en/gallery/sharavati-backwater-honnavar/
- Backwater tourist info: https://uttarakannada.nic.in/en/tourist-place/sharavati-backwater-honnavar/
- Kasarkod Beach (Blue Flag): https://karnatakatourism.org/en/destinations/kasarkod-beach-karnataka-indias-first-blue-flag-beach-you-must-visit
- Honnavar tourism overview: https://old.karnatakatourism.org/places-to-visit-in-honnavar/

Attribution rules
- Track source, photographer, license, and a permalink in a manifest (assets/images/ATTRIBUTIONS.md) next to the image. Include exact license text or link. Do not publish images without verified rights.

6. Sitemap and navigation

Primary nav (top-level): Home / Explore Honnavar / Properties / Experiences / About / Contact
Footer nav: Privacy Policy / Terms / Booking Info / Directions / Local Tips

Header: left logo, center nav (collapses to hamburger on mobile), right: Call & WhatsApp buttons and "Request Booking" CTA.

7. Homepage layout

Mobile-first structure (stacked):

Header/navigation
- Compact header with logo (left), hamburger menu (right) and persistent Call/WhatsApp buttons in a top-right area or as a sticky bottom bar on mobile.

Coastal hero section
- Large image or short muted loop (6s) showing coastal context; overlay: short headline, subcopy, and search/enquiry bar (destination pre-filled "Honnavar, Uttara Kannada").
- Headline example: "Eden Homes — Comfortable stays near Honnavar’s backwaters and beaches"
- Subcopy: "1 BHK and 2 BHK homestays for families and travellers. Request a booking — owner confirms." (include small note about request-only flow)

1 BHK and 2 BHK property cards
- Card elements: thumbnail, property title, type badge (1 BHK / 2 BHK), guest capacity, short features list (AC, kitchen, parking — only show features verified in DB), distance to notable place (e.g., "7 km to Kasarkod Eco Beach"), price placeholder: show "Price on request" or "Price shown after enquiry" if price not yet verified.
- Action buttons: Call, WhatsApp, Request Booking.
- Visual treatment: rounded card, shadow, tag row with lagoon-teal badges for features and a laterite-coral badge for limited availability or special note.

Why choose Eden Homes
- Short bullet points: Family-friendly, Local hosts, Clean linen & hygiene, Eco practices, Nearby experiences (backwater boating, birdwatching).
- Small iconography row for quick scanning.

Explore Honnavar section
- Grid of experience cards: Sharavathi backwater boating, Kasarkod Eco Beach visit, Boat festival, Local markets & seafood.
- Each card links to an Experience detail page with recommended images, difficulty/safety notes, and booking contact.

Booking call-to-action
- Prominent sticky CTA on mobile: "Request Booking" (opens booking request modal/form); on desktop show sticky right rail or sticky bottom bar.
- Clear microcopy: "Submitting a request does not guarantee a reservation. Owner will confirm within X hours." (set X to an operationally realistic timeframe e.g., 24–48 hours).

Footer
- Contact details, short about text, links, social icons, small map embed (lazy loaded) and an attribution/photography credits link.

8. Property listing and property detail layouts

Property listing (list & grid views)
- Filter bar: property type (1 BHK / 2 BHK), guests, amenities (toggle), distance to beach/backwater, availability window, sustainability badge.
- Listing card: image, title, snippet, badges, guest capacity, "Request Booking" button.

Property detail
- Hero gallery: full-width carousel with thumbnails. Include a SAMPLE overlay when property images are not yet verified.
- Quick facts row: Type (1 BHK / 2 BHK), Guests, Bedrooms, Bathrooms, Verified price (or price-note), Cancellation policy excerpt, Check-in/out times, Host contact methods.
- Amenities & safety: show only items from verified property data in Supabase.
- Local access: approximate travel times to Honnavar station, Kasarkod Eco Beach, Sharavathi backwater launch points.
- Experiences module: bookable activities with host or third-party operator (backwater boating). Show capacity, safety notes and pricing only when verified.
- Booking request area: prominent form (see section 9), contact buttons, and timeline for confirmation.
- Reviews (future): reserve space but do not fabricate content.

9. Booking request form and interaction states

Form purpose: collect guest enquiry data only. Do not confirm bookings automatically.

Fields (minimum):
- Property (auto-filled if opened from property page)
- Name (required)
- Email (required)
- Phone (required) — optional country code picker default +91
- Arrival date
- Departure date
- Guests (adults, children)
- Message / special requests
- Consent checkbox: "I understand this is a booking request; my reservation is confirmed only after the owner confirms." (required)

Optional: promo code input

Submission flow
- Validate client-side with clear inline errors. Minimal keyboard-friendly layout.
- On submit: show immediate acknowledgement UI that request is submitted + ticket/reference id from backend (Supabase function or server). Also send email to guest and owner (backend responsibility) and create booking_request row in PostgreSQL.

States
- Idle: form ready
- Validating: show inline progress
- Submitting: disable fields, show spinner and message
- Success: delta message "Request submitted — owner will confirm within 24–48 hours. Reference: ABC123"; show Call & WhatsApp buttons to follow up.
- Error: show friendly message and retry option. Log error to client analytics.

Security & data rules
- Do not collect Aadhaar or other sensitive IDs. Only collect essential contact info.
- Mask phone numbers in owner-facing views (optionally) to comply with privacy guidelines.

10. Mobile-first responsive behaviour

- Navigation collapses to hamburger; Search pinned under hero.
- Listing grid: 1 column mobile, 2 columns tablet (≥720px), 3 columns desktop (≥1120px).
- Sticky booking CTA on mobile (bottom) with space for tab bar.
- Images use responsive srcset and lazy-loading; serve WebP/AVIF when possible.
- Touch targets: minimum 44x44px.

11. Call and WhatsApp buttons

- Call button: tel: link to property owner/manager number. Prominent icon and label "Call". On mobile, open dialer; on desktop show a tooltip with number and copy-to-clipboard.
- WhatsApp: wa.me link with pre-filled message template (e.g., "Hi, I'm enquiring about [Property Name], dates [arrival]–[departure]."). Use official wa.me URI with E.164 phone number.
- Accessibility: include aria-label and visible focus states.
- Analytics: track clicks for Call and WhatsApp actions.

12. Future AI concierge UI

Overview: An open-weight model (e.g., Gemma) will later act as a property-information concierge. Design the UI so the chat can be added as a side-panel or modal on property pages and explore pages.

Constrained behaviour rules for the AI
- Must read only verified property fields from Supabase and metadata store.
- Must not invent or assert confirmed bookings.
- Must not provide host personal data beyond what is public and verified.
- For unknown or missing data, respond with "I don't know — please contact the owner at [phone/WhatsApp]."

Suggested UI elements
- Chat toggle (bottom-right) opening to 50–80% width modal on mobile and 380–460px side panel on desktop.
- Quick prompts (chips): "Check availability", "What's included?", "How far to Kasarkod Eco Beach?", "Recommend backwater boating".
- Request escalation flow: "Ask to book" should create the booking_request record but not confirm; require owner action.

Suggested prompts and examples (developer-friendly)
- "Show me 2 BHKs for 4 adults arriving on [date]" → return verified properties only.
- "What amenities are present in [Property Name]?" → read from property. If missing: "Amenity information isn't available for this property yet. Contact the owner to confirm."
- "Is this beachfront?" → read property boolean field is_beachfront; if false, reply correct distance: "This property is not beachfront; the nearest beach is Kasarkod Eco Beach, approximately 7 km away." Use stored travel-time fields if available.

Fallback behaviour
- If the model attempts to hallucinate or lacks data, enforce a deterministic fallback: "I don't have verified information on that. Would you like me to contact the owner to check?"
- Log all AI responses and present a "Report incorrect info" action for users.

13. Accessibility and performance requirements for slower mobile connections

Accessibility
- All images include descriptive alt text.
- Keyboard navigable components; clear focus outlines.
- Form labels and aria attributes for inputs and dynamic content.
- Color contrast: body text minimum 4.5:1 on background.
- Provide transcripts for short autoplay videos and captions for guided experiences.

Performance for slow networks
- Mobile-first, prioritize content: LCP image is compressed and preloaded; defer non-critical JS.
- Use responsive images with sizes & srcset; provide low-quality image placeholders (LQIP) or blurred placeholders.
- Lazy-load below-the-fold images and map components. Map should lazy-init on user interaction.
- Limit main bundle to a small vanilla JS footprint; prefer server-side-rendered HTML where possible.
- Use caching headers for images and SSR pages.

14. Trust, privacy, and content accuracy rules

- Always state: "Submitting a booking request does not guarantee a reservation. The owner must confirm the request." Small-print must be present on booking forms and checkout.
- Do not invent prices, amenities, reviews, or availability. If data is missing, show "Not provided" or "Contact owner to confirm".
- Do not collect Aadhaar or other national ID info for normal booking requests.
- Consent for marketing: separate opt-in checkbox (not pre-checked).
- Privacy: store contact details securely in Supabase; follow local data-protection guidance for retention and deletion. Include a link to a privacy policy in the footer.

15. Reusable CSS design tokens

Provide a tokens file to be used in CSS/SCSS (example variables already shown). Additional tokens:
- --radius-card: 12px
- --radius-btn: 10px
- --shadow-card: 0 6px 20px var(--shadow)
- --shadow-cta: 0 12px 30px rgba(18,59,70,0.08)
- --font-heading: 'Playfair Display', serif
- --font-body: 'Inter', 'Noto Sans', system-ui, sans-serif
- --spacing-base: 16px
- --max-width-desktop: 1120px

16. Definition of design completion

A design is considered complete when:
- All page templates exist as static HTML mockups: Home, Explore, Property Listing, Property Detail, Experiences, Contact, About.
- All components are implemented in vanilla HTML/CSS/JS (hero, listing card, gallery carousel, booking request modal, chat placeholder, filters, call/WhatsApp buttons).
- Responsive behavior validated on mobile/tablet/desktop
- Accessibility checklist passed (keyboard nav, alt texts, contrast, forms).
- Asset manifest exists (assets/images/ATTRIBUTIONS.md) listing image sources, licenses, and confirmation that property images are verified.
- Bookings flow wired to backend endpoints storing booking_request rows in Supabase and sending notification emails.
- QA sign-off by owner: confirm copy about distances, amenities, and booking policy is accurate.

17. Reference links and image attribution requirements

Mandatory link list for image research & tourism context (use to verify images & copy):
- Honnavar Sharavathi Backwaters gallery: https://uttarakannada.nic.in/en/gallery/sharavati-backwater-honnavar/
- Sharavathi backwater tourist info: https://uttarakannada.nic.in/en/tourist-place/sharavati-backwater-honnavar/
- Kasarkod Beach (Karnataka Tourism): https://karnatakatourism.org/en/destinations/kasarkod-beach-karnataka-indias-first-blue-flag-beach-you-must-visit
- Honnavar places overview: https://old.karnatakatourism.org/places-to-visit-in-honnavar/

Image attribution manifest (implementation step)
- Create /assets/images/ATTRIBUTIONS.md that records for each image: filename, source URL, photographer, license type, date added, and status (VERIFIED / SAMPLE / LICENSE_PENDING).

---

Implementation notes & next steps

- I inspected the repository root and will now add this Design.md at the path below. The design preserves the current frontend and backend tech stack and only adds documentation.
- Next recommended tasks for developer: create HTML mockups for Home and Property Detail, scaffold tokens.css with variables above, wire booking_request endpoints in Supabase, and gather verified photography with attributions.

