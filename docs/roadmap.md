# EDEN HOMES — COMPLETE DEVELOPMENT ROADMAP
## Phase 0 to Phase 8

**Project:** Eden Homes  
**Business:** Homestay and boating enquiries  
**Location:** Honnavar, Karnataka, India  
**Repository:** https://github.com/Titus-Dsouza/Eden-Homes

> Phase 0 and Phase 1 status are tracked below. The AI concierge described in the original
> Phase 6 is excluded from the initial project scope; do not implement it without
> a separate owner-approved change. The remaining phases below are future plans,
> not evidence of implemented or verified features.

---

# PHASE 0 — REPOSITORY AUDIT AND FOUNDATION

## Objective

Audit the repository and prepare independent frontend and backend foundations
without implementing customer-facing product features.

## Acceptance checklist

- [x] Repository fully audited.
- [x] Existing code and assets reviewed.
- [x] Unnecessary files safely removed.
- [x] Frontend and backend separated.
- [x] Git configuration prepared.
- [x] Environment examples prepared.
- [x] Vercel configuration prepared.
- [x] Backend deployment approach documented.
- [x] Documentation organized.
- [x] Frontend build verified.
- [x] Backend checks completed where possible.
- [x] GitHub changes committed and pushed.
- [x] Phase 0 completion report documented.

Items are checked only after verification. The local checks passed; the
foundation was merged into `main` through pull request #1.

---

# PHASE 1 — PROJECT FOUNDATION AND ARCHITECTURE

## Objective
Verify and complete the maintainable frontend and backend foundations while
preserving the Phase 0 separation and deployment setup. Do not build product
pages, enquiry flows, database integration, or an AI concierge in this phase.

### Tasks

1. Verify frontend and backend ownership and independent dependencies.
2. Keep the React/Vite/TypeScript/Tailwind/React Router/Lucide frontend.
3. Keep the Node.js/Express/TypeScript/Zod backend.
4. Separate backend routes, controllers, middleware, and configuration.
5. Validate environment values and restrict browser CORS to the configured
   frontend origin.
6. Preserve the health endpoint and add centralized 404/error responses.
7. Keep Supabase PostgreSQL planned, without connecting it in this phase.
8. Verify lint, TypeScript, tests, builds, Vercel SPA routing, and CI.
9. Document implemented, tested, planned, and pending work.

### Acceptance Criteria

- [x] Phase 0 implementation inspected and preserved.
- [x] Frontend and backend remain independently configured.
- [x] Frontend routing, global CSS, Tailwind, TypeScript, and lint configuration verified.
- [x] Reusable responsive page container established.
- [x] Backend environment validation, CORS, routes, controllers, 404, and error handling implemented.
- [x] Health endpoint retained and covered by tests.
- [x] Environment examples document public frontend and server-only backend settings.
- [x] Vercel SPA rewrite and CI workflow verified.
- [x] Documentation updated; no product/database feature is claimed.
- [x] Frontend lint, typecheck, and production build pass.
- [x] Backend lint, typecheck, tests, and production build pass.
- [x] Backend health endpoint verified at runtime.
- [x] Changes committed locally to `phase-1/project-foundation`; not pushed.

### Deliverable

An independently configured frontend and backend foundation, ready for a
separately approved customer-facing product phase. This phase does not implement
service pages, enquiry forms, or database integration.

### Verification record

Local checks use Node.js 26.11.1 and npm 11.20.0; CI specifies Node.js 22.
Dependency installation, frontend lint/typecheck/build, backend lint/typecheck/
tests/build, and backend runtime health checks passed on this Phase 1 worktree.
The live Vercel site and a nested route returned HTTP 200 during inspection; no
deployment was performed. GitHub CI and the checked-in Vercel config were
inspected. The Vercel dashboard Root Directory setting was not independently
accessible from this workspace.

The configured lint tool is Oxlint rather than ESLint. An ESLint TypeScript
plugin install is blocked by its declared TypeScript peer range (`<6.1.0`)
against the existing frontend TypeScript 7. The existing linter and TypeScript
checks pass; adopting ESLint specifically requires an approved toolchain
alignment.

The root `README.md` is a new repository overview. The original README and other
source Markdown files are preserved unchanged under `Md files/`.

The website design tasks from the previous roadmap wording are deferred to
Phase 2, together with the service listing/enquiry interface. Existing service
and enquiry requirements remain future scope and require owner verification.

---

# PHASE 2 — WEBSITE DESIGN, PROPERTY LISTINGS AND SERVICE ENQUIRY INTERFACE

## Objective
Create the responsive customer-facing website and allow visitors to explore
accommodation and boating services.

### Tasks

1. Create the Eden Homes homepage, responsive navigation, hero, footer and contact section.
2. Introduce the 1 BHK Accommodation, 2 BHK Accommodation and Boating services.
3. Create reusable buttons, cards and layout components as needed.
4. Establish approved typography, colours, spacing and responsive behavior.
5. Create a dedicated 1 BHK section.
6. Create a dedicated 2 BHK section.
7. Create a dedicated Boating section.
8. Add genuine, owner-approved property photographs and descriptions.
9. Display amenities and guest capacity only after owner verification.
10. Add pricing, house rules and conditions only after owner verification.
11. Add the separate accommodation and boating enquiry forms described below.

### Service Actions

| Service | Button |
|---|---|
| 1 BHK | Book Now |
| 2 BHK | Book Now |
| Boating | Enquire Now |

### Accommodation Enquiry Form

Fields:

- Full name
- Phone number
- Selected property
- Check-in date
- Check-out date
- Number of guests

### Boating Enquiry Form

Fields:

- Full name
- Phone number
- Preferred boating date
- Number of participants
- Preferred duration

### Validation

- Required fields cannot be empty.
- Phone number must be valid.
- Check-out must be after check-in.
- Guest and participant counts must be valid.
- Display useful validation messages.

### Acceptance Criteria

- Visitors can explore all three services.
- Correct forms appear for each service.
- Form validation works.
- Service selection is retained in the form.
- Mobile experience is smooth.

### Deliverable

A complete service-selection and enquiry interface.

---

# PHASE 3 — SUPABASE CONFIGURATION AND DATABASE

## Objective
Establish secure and persistent storage for property information and enquiries.

### Tasks

1. Create and configure a Supabase project.
2. Connect the frontend to Supabase.
3. Configure environment variables.
4. Create the properties table.
5. Create the booking enquiries table.
6. Create the boating enquiries table.
7. Create the owner profile and role structure.
8. Configure database relationships.
9. Enable Row Level Security (RLS).
10. Configure and test database policies.

### Suggested Database Tables

**Properties**

- id
- property_type
- title
- description
- amenities
- guest_capacity
- price_details
- images
- active_status
- created_at

**Accommodation Enquiries**

- id
- guest_name
- phone_number
- property_type
- check_in
- check_out
- guest_count
- status
- created_at

**Boating Enquiries**

- id
- guest_name
- phone_number
- preferred_date
- participants
- preferred_duration
- status
- created_at

**Owner Profiles**

- id
- user_id
- role
- created_at

### Security Requirements

- Enable RLS.
- Prevent public access to private guest records.
- Allow only authorized owners to manage enquiries.
- Never expose service-role keys in frontend code.
- Collect only necessary guest information.

### Acceptance Criteria

- Database tables are created.
- Relationships are configured.
- RLS policies are tested.
- Private guest information is protected.
- Frontend database integration works.

### Deliverable

A configured and secured Supabase database.

---

# PHASE 4 — AUTHENTICATION AND OWNER ACCESS

## Objective
Create secure access for the Eden Homes owner.

### Tasks

1. Implement Supabase authentication.
2. Create the owner login interface.
3. Implement logout.
4. Protect owner-only pages.
5. Configure owner roles and permissions.
6. Handle authentication errors.
7. Maintain authenticated sessions.
8. Protect private booking and boating enquiries.
9. Ensure public visitors do not need accounts to browse or enquire.

### Owner Dashboard Access

Only authorized owner accounts should be able to access:

- Accommodation enquiries
- Boating enquiries
- Guest contact details
- Enquiry statuses
- Property management information

### Acceptance Criteria

- Owner can log in.
- Owner can log out.
- Unauthorized users cannot access the dashboard.
- Public visitors can browse without registration.
- Private guest information remains protected.

### Deliverable

Secure owner authentication and dashboard access.

---

# PHASE 5 — ENQUIRY MANAGEMENT AND WHATSAPP INTEGRATION

## Objective
Implement the complete enquiry workflow for 1 BHK, 2 BHK and Boating.

### 1. Accommodation Enquiry Workflow

1. Visitor selects 1 BHK or 2 BHK.
2. Visitor clicks Book Now.
3. Enquiry form appears.
4. Visitor enters name, phone number, dates and guest count.
5. Website validates the details.
6. Enquiry is saved to Supabase.
7. WhatsApp opens with a pre-filled enquiry message.
8. Visitor manually sends the message.
9. Owner receives and reviews the enquiry.
10. Visitor can call the owner to discuss details.

### 2. Boating Enquiry Workflow

1. Visitor selects Boating.
2. Visitor clicks Enquire Now.
3. Boating enquiry form appears.
4. Visitor enters name, phone number, preferred date, participants and duration.
5. Website validates the details.
6. Enquiry is saved to Supabase.
7. WhatsApp opens with a pre-filled boating enquiry.
8. Visitor manually sends the message.
9. Owner receives and reviews the enquiry.

### 3. WhatsApp Message Format

**Accommodation**

New Eden Homes Accommodation Enquiry

Name: [Name]  
Phone: [Phone]  
Room Type: [1 BHK / 2 BHK]  
Check-in: [Date]  
Check-out: [Date]  
Guests: [Number]

Status: Pending owner confirmation.

**Boating**

New Eden Homes Boating Enquiry

Name: [Name]  
Phone: [Phone]  
Service: Boating  
Preferred Date: [Date]  
Participants: [Number]  
Duration: [Duration]

Status: Pending owner confirmation.

### 4. Owner Contact Information

Display both contact numbers after enquiry submission:

**9448327432**

**8660345883**

Requirements:

- Both numbers must be clickable.
- Provide Call buttons.
- Make the numbers visible on mobile.
- Provide WhatsApp contact where configured.
- Do not invent or change contact details.

### 5. Owner Dashboard

Create separate sections for:

- Accommodation enquiries
- Boating enquiries

Allow the owner to:

- View enquiry details.
- View visitor contact information.
- Review requested dates.
- Update enquiry status.
- Mark enquiries as pending, approved/confirmed or rejected.
- Contact visitors.

### Important Rules

- WhatsApp Click-to-Chat must not be described as automatic background delivery.
- The visitor must manually press Send.
- Enquiries are not confirmed bookings.
- The owner personally confirms availability and pricing.
- Do not display false availability.

### Acceptance Criteria

- Both accommodation enquiry paths work.
- Boating enquiry works.
- WhatsApp messages contain correct details.
- Enquiries persist in Supabase.
- Owner dashboard displays the enquiries.
- Both contact numbers work.
- No false booking confirmation is displayed.

### Deliverable

A working enquiry and owner-management system.

---

# PHASE 6 — OPEN-SOURCE AI CONCIERGE

## Objective
Introduce a useful AI assistant to improve the visitor experience.

### Tasks

1. Select a suitable open-weight AI model, such as Gemma.
2. Evaluate its licence and hardware requirements.
3. Configure a compatible inference runtime such as Ollama during development, or another suitable deployment option.
4. Integrate the AI assistant into the website.
5. Create a conversational interface.
6. Ground responses in verified Eden Homes information.
7. Allow visitors to ask questions about:
   - 1 BHK
   - 2 BHK
   - Property amenities
   - House rules
   - Guest capacity
   - Boating enquiries
8. Guide visitors towards the appropriate enquiry form.
9. Add error handling and offline fallback.
10. Test the AI with questions about unknown information.

### AI Safety Requirements

The AI must never invent:

- Property prices
- Amenities
- Guest capacity
- Availability
- Boating prices
- Discounts
- Booking confirmations

When information is unavailable, the AI should direct visitors to contact the owner.

The AI must not independently approve or confirm bookings.

### Acceptance Criteria

- AI responds using verified information.
- AI handles unknown questions honestly.
- AI directs visitors to relevant services.
- AI does not invent booking information.
- Website functionality remains available if AI is offline.

### Deliverable

A functional open-weight AI concierge.

---

# PHASE 7 — GUEST COMMUNICATIONS AND AUTOMATION

## Objective
Introduce reliable communication and follow-up workflows.

### Tasks

1. Implement booking-related communication.
2. Separate transactional communication from promotional messages.
3. Store guest marketing consent separately.
4. Provide an opt-out mechanism.
5. Plan booking enquiry follow-ups.
6. Introduce reminders where appropriate.
7. Prevent duplicate messages.
8. Configure a suitable messaging provider if automated delivery is required.
9. Keep API credentials secure on the backend.
10. Test all communication workflows before using real customer data.

### Potential Features

- Booking enquiry acknowledgement.
- Owner follow-up reminders.
- Guest communication records.
- Boating enquiry follow-ups.
- Consent-based promotional messages.
- AI-assisted message drafting.

### Acceptance Criteria

- Communication details are accurate.
- Promotional messages are sent only to opted-in guests.
- Opt-outs are respected.
- No message falsely claims a booking is confirmed.
- Failed deliveries are handled safely.
- No unwanted repeated messages are sent.

### Deliverable

A reliable, consent-aware communication system.

---

# PHASE 8 — TESTING, DEPLOYMENT AND LAUNCH

## Objective
Prepare Eden Homes for a reliable public launch.

### 1. Functional Testing

Test:

- Homepage navigation.
- 1 BHK selection.
- 2 BHK selection.
- Boating selection.
- Accommodation enquiry forms.
- Boating enquiry forms.
- Form validation.
- WhatsApp integration.
- Telephone links.
- Owner authentication.
- Owner dashboard.
- Enquiry management.
- AI concierge.
- Communication workflows.

### 2. Security Testing

- Verify Supabase RLS.
- Test owner permissions.
- Test unauthorized access.
- Verify environment variables.
- Ensure secrets are not committed to Git.
- Verify private customer information is protected.

### 3. Responsive Testing

Test on:

- Mobile phones.
- Tablets.
- Desktop browsers.

### 4. Business Verification

Before launch, verify:

- Genuine property photographs.
- Actual amenities.
- Guest capacity.
- Property pricing.
- Boating details.
- Contact numbers.
- Check-in/check-out conditions.
- Privacy notice.
- Booking and cancellation terms.

### 5. Deployment

- Configure Vercel.
- Set `frontend/` as the Vercel Root Directory.
- Configure production environment variables.
- Deploy the frontend.
- Deploy any required backend separately.
- Verify database connectivity.
- Verify WhatsApp and telephone links.
- Test the live website.

### 6. First User Testing

Invite at least one real visitor or potential guest to test the website.

Record:

- Problems encountered.
- User feedback.
- Form usability.
- Mobile experience.
- Enquiry completion.
- Requested improvements.

### Acceptance Criteria

- No critical security issues remain.
- All three service enquiry paths work.
- Owner access is protected.
- Website is responsive.
- Business information is verified.
- Deployment is successful.
- First-user testing is documented honestly.

### Deliverable

A deployed Eden Homes website ready for its first real users.

---

# PROJECT-WIDE REQUIREMENTS

## Repository Structure

Maintain separate frontend and backend folders.

```text
Eden-Homes/
│
├── frontend/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── pages/
│   └── index.html
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── config/
│
├── docs/
│   ├── PRD.md
│   ├── phase.md
│   ├── architecture.md
│   ├── techstack.md
│   └── deployment.md
│
├── .env.example
├── .gitignore
└── README.md
```

This is the target organization. Inspect the actual repository before moving existing files.

Do not create unnecessary backend services. Introduce backend functionality only when required for secure operations, AI inference or scheduled messaging.

## Project-Wide Definition of Done

A phase can be marked complete only when:

1. All phase tasks are implemented.
2. Acceptance criteria are tested.
3. Existing functionality remains intact.
4. No secrets are committed to Git.
5. Documentation is updated.
6. Known limitations are recorded.
7. Changes are committed with a meaningful Git commit message.

Never mark a phase complete merely because code has been generated.

---

# FINAL PRODUCT WORKFLOW

1. Visitor opens Eden Homes.
2. Visitor chooses 1 BHK, 2 BHK or Boating.
3. Visitor fills the appropriate enquiry form.
4. Enquiry is saved.
5. WhatsApp opens with the enquiry details.
6. Visitor manually sends the message.
7. Visitor sees contact numbers 9448327432 and 8660345883.
8. Owner reviews the enquiry.
9. Owner contacts the visitor.
10. Owner discusses pricing and availability.
11. Owner manually confirms the booking.

**Core principle:** Eden Homes is an enquiry-first platform. The owner remains responsible for confirming accommodation and boating arrangements.
