# Eden Homes — Product Requirements Document (PRD)

## 1. Project Overview

**Project Name:** Eden Homes
**Business:** Homestay and Boating Services
**Location:** Honnavar, Karnataka, India
**Product Type:** Responsive Web Application
**Frontend:** React + Vite + TypeScript + Tailwind CSS
**Backend:** Node.js + Express
**Enquiry delivery:** WhatsApp Click-to-Chat (visitor manually sends)
**Database:** None for the initial release
**Deployment:** Vercel (Frontend); existing backend remains a separate foundation.

### 1.1 Description

Eden Homes is a responsive website that allows visitors to explore accommodation and boating services in Honnavar.

The platform provides information about 1 BHK and 2 BHK accommodation options, boating services, and a simple enquiry process.

Enquiries are prepared as WhatsApp messages for visitors to manually send.
There is no database-backed enquiry history, owner authentication, or owner
dashboard in the initial release.

## 2. Problem Statement

Potential visitors need an accessible way to discover Eden Homes, understand its accommodation and boating services, and contact the owners.

The platform aims to simplify this process by providing:

- A central online presence.
- Clear accommodation and boating information.
- Easy enquiry submission.
- WhatsApp communication.
- Direct owner communication through WhatsApp.

## 3. Product Objectives

1. Establish a professional online presence for Eden Homes.
2. Present accommodation and boating services clearly.
3. Provide a mobile-friendly browsing experience.
4. Simplify accommodation and boating enquiries.
5. Prepare enquiry details for visitor-initiated WhatsApp communication.
7. Make direct owner communication accessible.
8. Maintain a scalable and maintainable application architecture.

## 4. Target Users

### 4.1 Visitors

People interested in:
- 1 BHK accommodation.
- 2 BHK accommodation.
- Boating services.
- Contacting Eden Homes for information or enquiries.

### 4.2 Owners

The owners responsible for:
- Receiving and reviewing visitor-sent WhatsApp enquiries.
- Checking availability.
- Communicating with visitors.
- Confirming or rejecting requests.

## 5. Product Scope

### 5.1 Included in Initial Release

- Public homepage.
- 1 BHK accommodation page.
- 2 BHK accommodation page.
- Boating page.
- Image gallery.
- Contact section.
- Accommodation enquiry forms.
- Boating enquiry forms.
- Browser forms that prepare WhatsApp Click-to-Chat messages (planned Phase 4;
  destination number must first be confirmed by the owner).
- Responsive mobile and desktop layouts.

### 5.2 Excluded from Initial Release

- AI concierge or chatbot.
- Supabase or any other database.
- Persisting or centrally managing customer enquiries.
- Owner authentication or owner dashboard.
- Online payment processing.
- Automatic booking confirmation.
- Real-time availability management.
- Automated pricing calculations.
- Native Android or iOS applications.
- Automated messaging campaigns.

These features may be considered in future versions.

## 6. Functional Requirements

### FR-01: Homepage

The system must provide a homepage containing:

- Eden Homes branding.
- Navigation menu.
- Hero section.
- Accommodation highlights.
- Boating highlights.
- Gallery.
- Contact information.
- Footer.

**Acceptance Criteria:**
- Visitors can access all major sections.
- Navigation links work correctly.
- The homepage is responsive.
- Only approved business information is displayed.

### FR-02: Accommodation Information

The system must provide separate pages for:

- 1 BHK accommodation.
- 2 BHK accommodation.

Each page should support:

- Property photographs.
- Owner-verified property description and details only.
- An enquiry/contact action, not a confirmed booking action.
- Clearly labeled placeholders until owner-approved photos are available.

**Acceptance Criteria:**
- Visitors can view both accommodation options.
- Each property has its own details page.
- Information is accurate and owner-approved.

### FR-03: Accommodation Enquiry (planned Phase 4)

Visitors must be able to submit accommodation enquiries.

Required fields:

- Full name.
- Phone number.
- Selected property.
- Check-in date.
- Check-out date.
- Guest count.

**Acceptance Criteria:**
- Required fields are validated in the browser.
- Check-out must be later than check-in.
- The selected property value is exactly `1 BHK` or `2 BHK`.
- The website prepares a WhatsApp Click-to-Chat message for review.
- The visitor manually presses Send; the site does not claim delivery.
- No enquiry is stored in a database.
- The WhatsApp destination number is confirmed by the owner before release.
- The visitor is told the request is not a confirmed booking.

### FR-04: Boating Information

The system must provide a dedicated boating page.

It should display:

- Boating photographs.
- Verified service information.
- Available options, if confirmed.
- Enquiry action.

**Acceptance Criteria:**
- Visitors can access boating information.
- All displayed details are verified.
- Visitors can initiate a boating enquiry.

### FR-05: Boating Enquiry (planned Phase 4)

Required fields:

- Full name.
- Phone number.
- Preferred date.
- Participant count.
- Preferred duration.

**Acceptance Criteria:**
- Required fields are validated in the browser.
- The website prepares a WhatsApp Click-to-Chat message for review.
- The visitor manually presses Send; the site does not claim delivery.
- No enquiry is stored in a database.
- The WhatsApp destination number is confirmed by the owner before release.
- The visitor is told the request is not a confirmed booking.

### FR-06: WhatsApp Integration

After a successful enquiry submission, the website should open WhatsApp with a prefilled enquiry message.

Requirements:

- Include the visitor's enquiry details.
- Include the selected accommodation or boating service.
- Use the owner-approved WhatsApp destination number.
- Support mobile and desktop browsers.

**Acceptance Criteria:**
- Correct enquiry information appears in the message.
- WhatsApp opens using Click-to-Chat.
- The visitor manually presses Send.
- The system does not claim that the WhatsApp message was sent automatically.

### FR-07: Contact Information

Display both owner contact numbers:

- 9448327432
- 8660345883

**Acceptance Criteria:**
- Both numbers are visible.
- Both support click-to-call.
- The WhatsApp destination is confirmed by the owner.

### FR-08: Optional future owner authentication

Owner authentication is not part of the initial release. Any future owner
authentication requires separate approval and a security design.

### FR-09: Optional future owner dashboard

An owner dashboard and stored enquiry history are not initial-release
requirements. They may be considered later only with separate owner approval.

### FR-10: Responsive Design

The website must support:

- Android smartphones.
- iPhones.
- Tablets.
- Laptops.
- Desktop computers.

**Acceptance Criteria:**
- Layouts adapt to different screen sizes.
- Navigation works on mobile.
- Forms are easy to use.
- Images resize appropriately.
- No unintended horizontal scrolling occurs.

## 7. Non-Functional Requirements

### 7.1 Performance

- Optimize images.
- Minimize unnecessary dependencies.
- Lazy-load suitable images.
- Avoid unnecessary API requests.
- Ensure acceptable performance on mobile networks.

### 7.2 Security

- Do not persist enquiry form data in the initial release.
- Confirm the WhatsApp destination number with the owner.
- Keep any future secrets out of frontend variables.
- Use HTTPS in production.

### 7.3 Usability

- Simple navigation.
- Clear enquiry actions.
- Readable typography.
- Consistent interface components.
- Accessible forms and feedback messages.

### 7.4 Reliability

- Display meaningful error messages.
- Prevent invalid submissions.
- Never report a WhatsApp message as sent by the website.

### 7.5 Maintainability

- Separate frontend and backend.
- Use reusable React components.
- Maintain organized API routes and services.
- Use TypeScript consistently.
- Document environment variables and setup instructions.

## 8. Core User Workflows

### 8.1 Accommodation Enquiry

1. Visitor opens the website.
2. Visitor selects 1 BHK or 2 BHK.
3. Visitor views accommodation details.
4. Visitor chooses to ask the owner about the stay.
5. Visitor fills out the enquiry form.
6. The browser validates the information and prepares a WhatsApp message.
7. WhatsApp opens; the visitor reviews the message and manually presses Send.
8. The owner reviews the received message and communicates directly.
9. The owner confirms arrangements; form submission itself is not a booking.

### 8.2 Boating Enquiry

1. Visitor opens the boating page.
2. Visitor views boating information.
3. Visitor selects Enquire Now.
4. Visitor fills out the boating enquiry form.
5. The browser validates the information and prepares a WhatsApp message.
6. WhatsApp opens; the visitor reviews the message and manually presses Send.
7. The owner reviews the received message and responds directly.

### 8.3 Owner Workflow

The owner reviews the WhatsApp message sent by the visitor and responds
directly. No website dashboard or enquiry history is included in the initial
release.

**Important:** An enquiry is not a confirmed booking. Only the owner can confirm a booking after checking availability and arrangements.

## 9. Persistence

The initial release has no database and does not store enquiries. Supabase or
another database, enquiry history, and an owner dashboard are optional future
upgrades requiring separate owner approval.

## 10. Design Requirements

The website should follow the guidelines in `design.md`.

Design direction:

- Modern.
- Premium.
- Natural.
- Coastal-inspired.
- Minimal and welcoming.

Proposed colours:

- Forest Green.
- Sage Green.
- Warm Cream.
- Sand Beige.
- Charcoal.
- White.

Typography:

- Playfair Display for headings.
- Inter for body text.

The website must follow a mobile-first responsive design approach described in `mobile.md`.

## 11. Technical Architecture

Follow the architecture documented in `architecture.md`.

### Frontend
- React.
- Vite.
- TypeScript.
- Tailwind CSS.
- React Router.

### Backend
- Node.js.
- Express.
- REST API.

### Enquiry delivery
- Browser-prepared WhatsApp Click-to-Chat message.
- Visitor manually presses Send.
- No initial-release database or authentication.

### Deployment
- Frontend: Vercel.
- Backend: Separate hosting provider.

## 12. Assumptions and Dependencies

- Owner-approved photographs will be provided.
- Business descriptions and amenities will be verified.
- Accommodation prices and capacity will be confirmed by the owner.
- Boating options and durations will be confirmed by the owner.
- The WhatsApp destination number will be confirmed by the owner.
- Owner must confirm the WhatsApp destination number before Phase 4 is built.

Unconfirmed business information must not be invented.

## 13. Success Criteria

The initial release will be considered successful when:

- Visitors can explore all three services.
- Accommodation and boating WhatsApp forms prepare correct messages after
  Phase 4 is implemented and the destination is owner-confirmed.
- The site does not store enquiries or claim that WhatsApp sent the message.
- Owner contact numbers work.
- The website works across mobile and desktop devices.
- Security and functional tests pass.
- The owner approves the final website.

## 14. Future Enhancements

Possible future improvements, subject to separate approval:

- Database-backed enquiry history.
- Owner authentication and dashboard.
- Online payment integration.
- Email notifications.
- Enquiry analytics.
- Advanced availability management.
- Additional accommodation options.
- Additional boating services.

These are not requirements for the initial release.

## 15. Development Principles

1. Rebuild the application from scratch.
2. Follow the approved project architecture.
3. Develop in clearly defined phases.
4. Use verified business information only.
5. Never invent prices, amenities or availability.
6. Protect guest and owner information.
7. Test every feature before marking it complete.
8. Keep the website responsive throughout development.
9. Document implementation decisions.
10. Do not mark incomplete functionality as completed.

---

**Document:** Product Requirements Document
**Project:** Eden Homes
**Location:** Honnavar, Karnataka, India
**Version:** 1.0
**Status:** Updated to reflect the approved initial-release approach; features
remain subject to implementation and verification.
