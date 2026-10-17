# Eden Homes — Development Phases

**Project:** Eden Homes homestay website  
**Location:** Honnavar, Karnataka, India  
**Purpose:** Help tourists explore 1 BHK and 2 BHK stays, contact the owner, and submit booking requests. Include a meaningful open-source AI feature for the Side Hustle challenge.

## Product Principles

- Keep the guest experience simple, mobile-friendly, and focused on direct enquiries.
- Guests can browse properties without creating an account.
- Booking requests are **not confirmed** until the owner personally confirms the details.
- Use temporary, clearly identified stock images or placeholders during development. Replace them with real property photos before launch.
- Do not invent property prices, amenities, capacity, address details, availability, contact information, or payment details.
- Collect only necessary customer information. Do not collect Aadhaar numbers for routine enquiries.
- Promotional messages require clear consent and an easy opt-out.
- Open-source AI must perform a useful task; it must not be a decorative chatbot or the only source of truth for bookings.

## Technology Direction

- **Frontend:** HTML5, CSS3, vanilla JavaScript
- **Authentication:** Supabase Auth
- **Database:** Supabase PostgreSQL
- **Property image storage:** Supabase Storage, if needed
- **Open-source AI:** Gemma or another suitable open-weight model through a compatible inference runtime such as Ollama during development
- **Optional messaging assistance:** Claude may be considered for drafting messages, but it must not replace the open-source AI feature
- **Deployment:** Select hosting after validating the frontend, database, and AI inference requirements

Do not introduce a separate Django backend unless a specific requirement demonstrates that Supabase and the chosen supporting services are insufficient.

---

## Phase 1 — Project Foundation and Homepage

### Goal
Create the visual foundation and a responsive homepage for Eden Homes.

### Tasks
- Establish a clear project folder structure.
- Build the homepage with Eden Homes branding and Honnavar as the destination.
- Add responsive navigation and a clear “Explore Stays” call to action.
- Introduce 1 BHK and 2 BHK options.
- Create reusable property-card styles.
- Use temporary stock images or neutral placeholders, clearly treated as sample imagery.
- Add footer and contact-section placeholders without inventing business details.
- Ensure the site works on mobile, tablet, and desktop.

### Acceptance Criteria
- The homepage loads without errors.
- Navigation and calls to action work.
- The layout adapts to narrow and wide screens.
- No fictional phone numbers, prices, addresses, or property claims are shown as real.
- Temporary images can be replaced easily.

### Deliverable
A polished static homepage with sample property content.

## Phase 2 — Property Listings and Booking UI

### Goal
Allow guests to explore each property type and understand the next steps.

### Tasks
- Build a property selection page with 1 BHK and 2 BHK options.
- Build property detail views with a photo gallery, amenities, guest capacity, house rules, and price fields.
- Use clearly marked sample data until the owner provides verified details.
- Add a “Book Now” action for each property.
- Add a concise booking-request form with guest name, phone number, preferred check-in/check-out dates, guest count, and selected property.
- Add “Call Owner” and “WhatsApp Enquiry” actions using configurable contact details.
- Make the WhatsApp action open a prefilled enquiry message when a real number is configured.
- Add a clear notice that submitting a request does not confirm a booking.

### Acceptance Criteria
- Guests can move from the homepage to a property and then to the booking/contact flow.
- Form validation catches missing or invalid required fields.
- Dates are validated; check-out must be after check-in.
- No payment or reservation is falsely presented as confirmed.
- The interface remains usable on mobile.

### Deliverable
A functional frontend prototype using local sample data.

## Phase 3 — Supabase Setup and Data Model

### Goal
Set up persistent data for properties, profiles, and booking requests.

### Tasks
- Create and configure a Supabase project.
- Create a `profiles` table linked to Supabase Auth users.
- Create a `properties` table for property type, description, price, guest capacity, amenities, house rules, active status, and image references.
- Create a `booking_requests` table for property, requested dates, guest count, guest contact details, status, and timestamps.
- Define sensible status values such as `pending`, `approved`, `rejected`, and `cancelled`.
- Configure Row Level Security (RLS) policies before using real customer data.
- Keep public property information separate from private customer and booking information.
- Add only verified business data when it becomes available.

### Acceptance Criteria
- Tables and relationships are documented.
- RLS is enabled and policies are tested.
- Public visitors can read only intended public listing data.
- Customers cannot read or modify other customers’ private booking records.
- Privileged owner operations are not exposed through public credentials.

### Deliverable
A secured Supabase schema and documented configuration.

## Phase 4 — Authentication and Owner Access

### Goal
Add secure authentication for the owner and, only if useful, customers.

### Tasks
- Implement Supabase Auth for the owner dashboard.
- Protect owner-only pages and actions.
- Decide whether guest accounts are truly needed; do not require sign-up just to browse or enquire.
- If guest accounts are implemented, collect only necessary details such as name, phone, and email.
- Store marketing consent separately from account creation and booking communications.
- Never store passwords directly in application tables.
- Keep secret service-role keys out of frontend code and source control.

### Acceptance Criteria
- Only authorized owner accounts can access owner-management functions.
- Public visitors can browse without signing in.
- Authentication errors are handled clearly.
- Secrets are stored in environment configuration, not committed to Git.

### Deliverable
Secure owner authentication and access control.

## Phase 5 — Booking Requests and Owner Dashboard

### Goal
Connect the guest form to the database and provide a way to manage enquiries.

### Tasks
- Save booking requests to Supabase.
- Build a private owner dashboard with pending, approved, rejected, and cancelled requests.
- Display the selected property, requested dates, guest count, and contact details.
- Allow the owner to approve or reject a request.
- Check for date conflicts before approval; do not rely only on frontend checks.
- Make the approval workflow clear: a request remains pending until the owner confirms it.
- Add owner contact actions and a simple way to update property availability.
- Add appropriate error, loading, and success states.

### Acceptance Criteria
- Requests persist after page reload.
- Unauthorized users cannot view or manage requests.
- Conflicting confirmed bookings cannot be approved through normal application flows.
- The guest-facing status is not misleading.
- Errors do not silently discard a booking request.

### Deliverable
A working direct-enquiry and owner-management workflow.

## Phase 6 — Open-Source AI Concierge

### Goal
Add an AI feature that materially improves the guest experience and supports the Side Hustle challenge.

### Initial AI Features
- Answer questions about verified property details, amenities, house rules, and guest capacity.
- Recommend 1 BHK or 2 BHK based on the guest’s stated needs and verified listing information.
- Direct guests to the booking request, phone, or WhatsApp flow.
- Admit when information is unknown and recommend contacting the owner.

### Tasks
- Choose a Gemma or other suitable open-weight model after checking its licence and hardware requirements.
- Run a local model during development where practical, using a compatible runtime such as Ollama.
- Provide the model with only the relevant, verified property information needed to answer.
- Keep availability, prices, booking statuses, and approval decisions controlled by application data and backend rules—not by model-generated claims.
- Do not send personal guest information to an AI provider unless necessary, disclosed, and appropriately protected.
- Add a graceful fallback when the model is offline or unavailable.
- Test hallucination resistance with questions about missing amenities, prices, capacity, and availability.

### Acceptance Criteria
- The assistant answers using supplied property information.
- It does not invent facilities, prices, availability, or booking confirmations.
- It clearly communicates uncertainty.
- The website’s core booking and contact functions still work when AI is unavailable.
- The project documentation explains which model is used, how it runs, and why the open approach matters.

### Deliverable
A demonstrable open-weight AI concierge with tested fallback behaviour.

## Phase 7 — Reminders and Guest Communications

### Goal
Support useful follow-up without spamming guests or exposing private information.

### Tasks
- Keep booking-related communications separate from promotional messages.
- Record explicit marketing consent and the date/source of consent.
- Provide an easy opt-out and honour it across all promotional channels.
- Decide on an appropriate reminder frequency and prevent duplicate messages.
- Use a scheduled backend task and a suitable email or WhatsApp provider if automated delivery is required.
- If Claude is used to draft messages, treat it as optional assistance; review the cost, privacy implications, and provider terms.
- Never expose API keys in frontend code.
- Test the workflow with test accounts before contacting real customers.

### Acceptance Criteria
- Only eligible, opted-in guests receive promotions.
- Opt-outs are respected.
- Messages do not claim a booking exists when it does not.
- Failed sends are logged safely and do not create repeated unwanted messages.

### Deliverable
A consent-aware communication workflow, or a documented manual-first version if automation is not yet justified.

## Phase 8 — Testing, Deployment, and First User

### Goal
Launch a reliable pilot and gather real feedback.

### Tasks
- Test mobile, tablet, and desktop layouts.
- Test authentication, RLS, form validation, booking conflicts, and owner permissions.
- Check all phone, WhatsApp, and payment links before launch.
- Replace sample content with verified property information and real photos.
- Configure production environment variables and database policies.
- Deploy the frontend and configure any required AI service separately.
- Confirm what happens when the AI service is offline.
- Add a privacy notice and clear booking/cancellation terms.
- Invite at least one real guest or potential customer to test the website.
- Record feedback honestly, including issues and requested improvements.

### Acceptance Criteria
- No critical security or booking-flow defects remain.
- The site clearly distinguishes booking requests from confirmed stays.
- All business claims and contact/payment details are verified.
- A real user has tried the pilot, or the submission clearly states that user testing is still pending.
- Setup and deployment instructions are documented.

### Deliverable
A deployed Eden Homes pilot and evidence-based Side Hustle submission.

---

## Out of Scope for the First Release

Defer these until the basic business workflow works:
- Online payment processing or automatic payment verification
- Complex dynamic pricing
- Integration with third-party booking marketplaces
- A custom-trained AI model
- Multi-property owner roles or staff permissions
- Automated promotions before consent and delivery are fully tested

## Project-Wide Definition of Done

A phase is complete only when:
1. Its acceptance criteria pass.
2. The website remains functional on mobile and desktop.
3. Existing completed phases are not broken.
4. No secrets or real customer data are committed to Git.
5. Documentation is updated with changes, setup steps, and known limitations.
6. The project is committed to version control with a clear commit message.

## Suggested Repository Documentation

Maintain these files as the project evolves:
- `README.md` — project overview, setup, and run instructions
- `architecture.md` — components, data flow, and security boundaries
- `techstack.md` — chosen technologies and reasons
- `phase.md` — this implementation roadmap and progress
- `memory.md` — current project state, completed work, decisions, and next task
- `.env.example` — names of required environment variables with no real secrets

**Important:** Do not mark a phase complete just because code was generated. Run it, test it, and verify the acceptance criteria first.
