# Eden Homes — Product Requirements

## Purpose and services

Eden Homes is a homestay and boating enquiry website for Honnavar, Karnataka.
Visitors can explore 1 BHK and 2 BHK accommodation, boating information, and
contact the owner. Enquiries are not confirmed bookings.

## Current implementation

- Static homepage and directly accessible 1 BHK, 2 BHK, and boating pages.
- Responsive Eden Homes design, accessible mobile navigation, image
  placeholders, footer, and contact section.
- Click-to-call links for the supplied numbers `9448317432` and `8660345883`.
- Accommodation and boating forms that validate in the browser and prepare a
  WhatsApp Click-to-Chat message for review and manual sending.
- Frontend stack: HTML5, CSS3, and browser-native JavaScript; no frontend
  framework, package installation, or compilation.
- The separate Express/TypeScript backend exposes only its health endpoint and
  is not used by the website.

## Enquiry fields

**Accommodation**

- Full name
- Phone number
- Property selection limited to `1 BHK` or `2 BHK`
- Check-in date
- Check-out date (later than check-in)
- Number of guests

**Boating**

- Full name
- Phone number
- Preferred date
- Number of participants
- Preferred duration

## WhatsApp-only workflow

The forms validate values locally and prepare a prefilled WhatsApp URL. The
visitor reviews the draft and manually presses **Send** in WhatsApp. The
website never automatically sends the message, claims delivery, or confirms a
booking.

The owner-provided destination `919448317432` is configured in
`frontend/js/config.js` in international digits-only format. Never infer a
destination from the telephone contacts without owner approval.

## Privacy and out-of-scope work

Form data is not sent to an API or saved in cookies, local storage, session
storage, or a database. No Supabase or other database, enquiry history, owner
authentication, dashboard, online payment, AI concierge, or automatic booking
is part of the current release.

Database storage, owner authentication, and owner tools may be considered only
under a separate owner-approved scope and privacy review.

## Owner confirmations pending

Confirm accuracy and publication consent for the phone contacts, owner-approved
photos, verified service details, and exact property location if a map is
requested. Prices, amenities, capacity,
availability, and boating terms must not be invented.

## Historical technology

The project previously used React, Vite, TypeScript, Tailwind CSS, React Router,
and Lucide React. That frontend has been migrated to the static stack and is
not part of the current website runtime.
