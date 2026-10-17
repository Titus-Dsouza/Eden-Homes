# Eden Homes — Product Requirements Document (PRD)

**Document status:** Initial draft  
**Product:** Eden Homes website and booking-request system  
**Location:** Honnavar, Karnataka, India  
**Version:** 1.0

---

## 1. Product Overview

Eden Homes is a simple, mobile-friendly website for an existing homestay business in Honnavar. It helps families and tourists explore available 1 BHK and 2 BHK properties, review photos and pricing, and contact the owner or submit a booking request.

The website is designed around a key business need: guests often need to speak with the owner to confirm dates, timings, guest count, and other stay details. Therefore, the website supports **booking requests, not instant guaranteed reservations**. The owner reviews each request and confirms it directly with the guest.

The product will later include an open-weight AI concierge to answer questions using verified property information.

## 2. Problem Statement

Potential guests may not have a clear, convenient way to:
- Discover Eden Homes online.
- Compare 1 BHK and 2 BHK options.
- View property photos, amenities, and pricing.
- Ask questions and discuss their requirements with the owner.
- Send a booking request without assuming that the stay is already confirmed.

The owner also needs a central place to review requests and update their status without relying only on scattered calls and messages.

## 3. Product Goals

1. Give guests a clear, trustworthy overview of Eden Homes.
2. Make it easy to compare 1 BHK and 2 BHK properties.
3. Make calling and WhatsApp enquiries easy to access.
4. Collect structured booking requests with only the information needed to respond.
5. Let the owner review, approve, or reject requests.
6. Add a useful open-weight AI feature without allowing AI to invent property details or booking availability.
7. Keep the initial system affordable and straightforward to maintain.

### Success Measures

- A first real guest can find a property and contact the owner without assistance.
- A guest can submit a booking request successfully on mobile.
- The owner can see a request and update its status.
- All displayed prices, amenities, capacity details, and photos are accurate or clearly marked as temporary.
- AI responses are grounded in approved property information and provide a fallback when unavailable.
- Marketing messages are sent only to guests who explicitly opted in.

## 4. Target Users

### Primary: Guest
Families and tourists looking for a 1 BHK or 2 BHK stay in Honnavar.

**Needs**
- Understand the available property options.
- View genuine or clearly labelled sample photos.
- See pricing and important conditions.
- Ask questions quickly.
- Request a stay and receive confirmation from the owner.

### Secondary: Owner / Administrator
The Eden Homes owner or an authorised administrator.

**Needs**
- Review guest enquiries and booking requests.
- Contact guests to clarify details.
- Approve or reject requests.
- Keep booking statuses up to date.
- Avoid accidental exposure of guest information.

## 5. Scope

### MVP — Required

- Responsive homepage with Eden Homes branding.
- Property selection for 1 BHK and 2 BHK.
- Property detail pages or sections.
- Photo gallery; temporary images must be labelled and replaced before public launch.
- Property amenities, guest capacity, pricing, and conditions sourced from owner-approved information.
- Prominent tap-to-call and WhatsApp enquiry actions.
- Booking request form with date, guest count, contact details, and optional notes.
- Clear notice that submitting a request does not guarantee a reservation.
- Supabase database for properties and booking requests.
- Owner-only access to the booking management dashboard.
- Owner can review requests and mark them pending, approved/confirmed, or rejected.
- Basic validation, loading states, success/error messages, and mobile usability.
- Deployment and a basic end-to-end test with a real user.

### Later Release — AI and Automation

- Open-weight AI concierge (for example, Gemma) that answers questions using verified property data.
- Property recommendation based on guest count and stated needs, using configured property rules.
- Consent-based guest reminders and promotional messages.
- Availability calendar and date-conflict checks, once the owner’s booking workflow is reliable.

### Out of Scope for the Initial MVP

- Instant, automatically confirmed reservations.
- Automatic payment processing or payment reconciliation.
- Aadhaar collection.
- Mandatory guest accounts just to browse or submit an enquiry.
- Claims of live availability unless availability is maintained and checked by the system.
- AI-generated prices, amenities, capacity, or booking confirmations.
- Complex channel-manager or hotel-management integrations.

## 6. Main User Journey

1. Guest opens the Eden Homes homepage.
2. Guest chooses **1 BHK** or **2 BHK**.
3. Guest views photos, amenities, capacity, pricing, and conditions.
4. Guest chooses one of the following:
   - Call the owner.
   - Message through WhatsApp.
   - Submit a booking request.
5. The website validates and saves the request.
6. The website tells the guest that the owner will review the request.
7. The owner opens the secure dashboard and reviews the request.
8. The owner contacts the guest if clarification is needed.
9. The owner updates the request status and confirms the stay directly with the guest.
10. Payment details are shared by the owner when appropriate; payment does not by itself imply confirmation unless the owner explicitly confirms the booking.

## 7. Functional Requirements

### FR-01: Homepage
- Display Eden Homes name and a short description.
- Explain that the property is in Honnavar.
- Provide clear navigation to property options and contact actions.
- Work on mobile, tablet, and desktop.

### FR-02: Property Listings
- Show separate 1 BHK and 2 BHK options.
- Each listing displays an image, short description, amenities, capacity, price, and relevant conditions.
- Do not publish unverified claims. Unknown details must remain unpublished until confirmed by the owner.

### FR-03: Property Gallery
- Allow guests to browse multiple images per property.
- Label placeholder/sample images clearly during development.
- Replace placeholders with genuine property images before public launch.

### FR-04: Contact Actions
- A tap-to-call link opens the device's calling interface.
- A WhatsApp action opens a conversation with the configured business number.
- Contact details must be configurable, not hard-coded across multiple files.

### FR-05: Booking Request Form
Collect only information required to respond:
- Guest name.
- Phone number.
- Email address (optional unless operationally required).
- Requested check-in and check-out dates or stay timing.
- Number of guests.
- Selected property type.
- Optional message or special request.
- Separate optional consent for promotional communication, unchecked by default.

The form must validate required fields, reject invalid date ranges, and show a clear success or failure message. It must not collect Aadhaar or other unnecessary identity information.

### FR-06: Booking Request Status
- A new request starts as **Pending**.
- The owner can mark it **Approved/Confirmed** or **Rejected** after reviewing details.
- The guest must be told that the request is not confirmed until the owner confirms it.
- The system must not claim a date is available unless the source of availability is reliable and current.

### FR-07: Owner Dashboard
- Only authorised owner/admin users can access booking records.
- Show the request date, requested stay dates, property type, guest count, contact details, notes, and status.
- Allow the owner to review and update statuses.
- Prevent public visitors and ordinary guest accounts from reading other guests' requests.

### FR-08: Open-Weight AI Concierge (Later Phase)
- Answer property questions using owner-approved listing data and configured policies.
- Recommend 1 BHK or 2 BHK only from verified capacity and property information.
- If information is missing, say so and suggest calling or messaging the owner.
- Never invent prices, amenities, availability, discounts, payment status, or confirmations.
- Do not expose booking records or personal information to the model unless strictly necessary and explicitly designed with appropriate safeguards.
- Provide a clear fallback when the model or network is unavailable.
- Identify the AI assistant as AI, not as a human representative.

### FR-09: Guest Reminders and Promotions (Later Phase)
- Keep booking-related updates separate from marketing promotions.
- Send promotions only when the guest has explicitly opted in.
- Record consent and support opt-out.
- Use an approved messaging/email provider and secure server-side credentials.
- Do not send automated messages until scheduling, consent, and delivery behaviour have been tested.

### FR-10: Error and Offline Handling
- Show understandable messages when requests fail.
- Do not show a success message until the request is actually saved.
- Property information may be cached for browsing where practical, but submitting a request requires a working connection.
- Do not imply that a request was received if the network is unavailable.

## 8. Non-Functional Requirements

### Usability and Accessibility
- Mobile-first responsive layout.
- Readable typography, clear buttons, and simple navigation.
- Forms must have visible labels and understandable validation.
- Contact actions must be easy to find.

### Security and Privacy
- Use Supabase Row Level Security (RLS) to protect booking records.
- Restrict owner dashboard access to authorised users.
- Never expose Supabase service-role keys or other privileged secrets in browser code.
- Validate input on the trusted side as well as in the UI.
- Collect minimal personal data and define a retention approach for old requests.
- Keep marketing consent separate from the booking request itself.
- Avoid public access to guest contact details and booking notes.

### Reliability
- Do not report success before database writes succeed.
- Handle network and AI service failures gracefully.
- Store the booking status as structured data rather than inferring it from messages.

### Maintainability and Cost
- Start with a small architecture and add services only when needed.
- Prefer Supabase Auth, PostgreSQL, and RLS for the MVP.
- A separate Django backend is not required initially unless later requirements justify it.
- Keep AI inference and messaging credentials on a trusted server/service, not in frontend JavaScript.

## 9. Technical Approach

### Proposed Stack
- **Frontend:** HTML, CSS, vanilla JavaScript.
- **Authentication:** Supabase Auth, primarily for the owner dashboard.
- **Database:** Supabase PostgreSQL.
- **Security:** Supabase Row Level Security and server-side validation where needed.
- **AI (later):** An open-weight model such as Gemma, accessed through a suitable inference runtime or hosted endpoint.
- **Messaging (later):** An approved email or messaging provider with server-side credentials.
- **Hosting:** To be selected based on the chosen deployment workflow and service limits.

### High-Level Architecture

```text
Guest Browser
    |
    |-- Browse properties and contact owner
    |
    |-- Submit booking request
              |
              v
      Supabase / Trusted API
              |
              v
       PostgreSQL Database
              |
       Owner-only Dashboard

Later additions:
Guest question --> AI service --> Verified property data
Consent + schedule --> Messaging provider --> Guest
```

**Important:** The browser must never contain privileged database or messaging secrets. Public configuration keys may be used only with correctly configured access policies.

## 10. Core Data Model (Initial Proposal)

### Properties
- `id`
- `property_type` (1 BHK or 2 BHK)
- `title`
- `description`
- `amenities`
- `guest_capacity`
- `price_details`
- `photos`
- `is_published`
- `created_at`
- `updated_at`

### Booking Requests
- `id`
- `property_id`
- `guest_name`
- `phone`
- `email` (nullable)
- `check_in`
- `check_out`
- `guest_count`
- `message` (nullable)
- `marketing_consent` (boolean, default false)
- `status` (pending, approved/confirmed, rejected)
- `created_at`
- `updated_at`

### Profiles / Roles
- `user_id`
- `role` (owner/admin; add other roles only if needed)
- `created_at`

Use database constraints and access policies to validate values and protect private records. Exact columns and status names may be refined during implementation.

## 11. Acceptance Criteria

The MVP is ready for its first real user when:

- [ ] A guest can open the website on a phone and understand the 1 BHK and 2 BHK options.
- [ ] Listing information is owner-verified; no sample photos are mistaken for real property photos.
- [ ] Pricing and important conditions are visible or guests are clearly told to contact the owner for a quote.
- [ ] Call and WhatsApp actions open the correct contact destination.
- [ ] A guest can submit a valid booking request.
- [ ] Invalid dates and missing required fields are rejected with helpful messages.
- [ ] A successful submission is saved and receives a truthful acknowledgement.
- [ ] The owner can securely view and update requests.
- [ ] Guests cannot read other guests' private information.
- [ ] The website clearly distinguishes a request from a confirmed reservation.
- [ ] Secrets are not exposed in frontend code.
- [ ] The core journey has been tested on mobile and desktop.
- [ ] A first user can complete the journey without the developer guiding every step.

## 12. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Guests assume a request is a confirmed booking | Show the pending status and confirmation policy prominently |
| Temporary images misrepresent the property | Label placeholders in development and replace before launch |
| Incorrect pricing or amenities reduce trust | Use owner-approved data as the single source of truth |
| Booking records are exposed | Enforce RLS and test permissions using separate roles |
| AI gives inaccurate answers | Ground responses in verified data and provide a contact fallback |
| Marketing messages annoy guests | Require separate opt-in, record consent, and support opt-out |
| Backend becomes unnecessarily complex | Deliver the booking MVP before AI and automation |

## 13. Delivery Plan

The project will be delivered in eight phases:

1. **Project Foundation and Homepage** — establish the project structure, visual style, navigation, and responsive homepage.
2. **Property Listings and Booking UI** — build 1 BHK/2 BHK details, galleries, pricing display, contact actions, and the request form UI.
3. **Supabase Setup and Data Model** — configure the database, properties, booking requests, and access policies.
4. **Authentication and Owner Access** — protect the owner dashboard.
5. **Booking Requests and Owner Dashboard** — connect submissions to the database and implement request review/status updates.
6. **Open-Weight AI Concierge** — add grounded property Q&A and property-type recommendations.
7. **Reminders and Guest Communications** — add consent-based reminders/promotions after core flows are stable.
8. **Testing, Deployment, and First User** — validate security, mobile UX, and end-to-end behaviour; deploy and observe a first real guest journey.

## 14. Open Questions

Resolve these with the owner before public launch:
- Exact address or area description to publish.
- Verified 1 BHK and 2 BHK capacity.
- Exact prices, whether they vary by date, and any extra charges.
- Check-in/check-out timings and house rules.
- Verified amenities and parking availability.
- Official phone and WhatsApp number.
- Whether online payment is actually required, and which trusted payment link to use.
- Which email or messaging channel will be used for booking updates.
- Hosting and AI inference provider.
- How long booking enquiries should be retained.

## 15. Product Principles

1. **Trust before automation:** clearly distinguish requests from confirmations.
2. **Owner-approved facts:** listing content and prices come from verified information.
3. **Minimal data collection:** ask only what is needed to manage the enquiry.
4. **AI with boundaries:** the model helps with questions but does not make booking decisions.
5. **Build in layers:** launch a dependable booking flow before adding AI and marketing automation.
