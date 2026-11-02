# Eden Homes — System Architecture

## 1. Project Overview

Eden Homes is a homestay and boating enquiry platform for Honnavar, Karnataka.

The platform allows visitors to:
- Explore 1 BHK accommodation.
- Explore 2 BHK accommodation.
- View boating services.
- Submit accommodation and boating enquiries.
- Contact the owners through phone or WhatsApp.

For the initial release, owners receive enquiries through WhatsApp and respond
directly. No owner login or dashboard is included.

**Important:** Submitting an enquiry does not confirm a booking. Final confirmation is provided by the owner.

## 2. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React + Vite | Public website |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS | Responsive UI |
| Backend | Node.js + Express | API and business logic |
| Frontend Hosting | Vercel | Website deployment |
| Backend Hosting | To be finalized | API deployment |
| Enquiry communication | WhatsApp Click-to-Chat | Browser-generated message; visitor manually sends |

*The database and owner-dashboard technologies are not selected or required
for the initial release.*

## 3. High-Level Architecture

```text
                    VISITORS
                       |
                       v
              FRONTEND WEBSITE
                React + Vite
                       |
                       v
          BROWSER ENQUIRY FORM
                       |
                       v
          PREFILLED WHATSAPP MESSAGE
                       |
               Visitor presses Send
                       |
                       v
                 OWNER WHATSAPP

The website does not store enquiries or report a message as sent.
```

## 4. Main System Modules

### 4.1 Public Website

- Homepage
- 1 BHK accommodation page
- 2 BHK accommodation page
- Boating page
- Image gallery
- Contact information
- Responsive navigation

### 4.2 Accommodation Enquiry Module

Visitors can select an accommodation option and submit:

- Full name
- Phone number
- Selected property: exactly `1 BHK` or `2 BHK`
- Check-in date
- Check-out date
- Guest count

The form will validate the required fields in the browser and prepare a
prefilled WhatsApp message. No customer data is stored. The WhatsApp
destination must be confirmed by the owner.

### 4.3 Boating Enquiry Module

Visitors can submit:

- Full name
- Phone number
- Preferred date
- Participant count
- Preferred duration

The form will validate the required fields in the browser and prepare a
prefilled WhatsApp message. No customer data is stored. The WhatsApp
destination must be confirmed by the owner.

### 4.4 Optional future owner tools

Database-backed enquiry history, authentication, and a dashboard are not part
of the initial release. Any future owner tools require separate approval.

### 4.5 Contact Module

Display both owner contact numbers:

- 9448327432
- 8660345883

Both numbers should support click-to-call functionality.

The WhatsApp destination number must be confirmed by the owner before implementation.

## 5. Data and persistence

The initial release has no database, tables, or persisted customer enquiries.
Do not add Supabase or another database as a release dependency. Database
storage and enquiry history may be considered as optional future upgrades
after a separate owner-approved scope.

The Express service currently exposes only its health endpoint. No product
enquiry or property API is planned for the WhatsApp-only initial flow.

## 6. API Architecture

No product API is part of the current initial-release plan. The existing
backend remains a separate health-check foundation.

## 7. Enquiry Workflow

```text
Visitor visits website
        |
        v
Selects a service
        |
        v
Accommodation or Boating
        |
        v
Completes enquiry form
        |
        v
Browser validates required fields
        |
        v
WhatsApp opens with message
        |
        v
Visitor manually sends message
        |
        v
Owner reviews enquiry
        |
        v
Owner responds directly; request remains an enquiry until confirmed
```

## 8. Project Folder Structure

```text
Eden-Homes/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── services/
│       ├── hooks/
│       └── types/
│
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── routes/
│       ├── middleware/
│       ├── services/
│       ├── validators/
│       └── server.ts
│
├── docs/
├── .gitignore
├── README.md
└── architecture.md
```

## 9. Security and privacy

- Do not collect or persist form data in the initial version.
- Do not add a database or owner authentication to the initial release.
- Confirm the WhatsApp destination with the owner before implementation.
- Validate form data in the browser before preparing the message.
- Use HTTPS in production.
- Tell visitors that WhatsApp opens with a draft and they must manually send it.

## 10. Deployment Architecture

| Component | Deployment |
|---|---|
| Frontend | Vercel |
| Backend | Hosting provider to be finalized |
| Source Code | GitHub |

The frontend and backend will remain in separate directories and will be deployed independently.

## 11. Future Scalability

The architecture should allow future additions such as:

- Online payment integration
- Email notifications
- Advanced enquiry analytics
- Additional accommodation options
- Additional boating services

These are future possibilities, not part of the initial implementation scope.

## 12. Development Principles

1. Build the project from scratch.
2. Keep frontend and backend separate.
3. Use verified business information only.
4. Never invent accommodation prices, amenities, availability or boating packages.
5. Keep guest information secure.
6. Test every major feature before marking it complete.
7. Treat all booking requests as enquiries until the owner confirms them.

---

**Project:** Eden Homes
**Location:** Honnavar, Karnataka, India
**Document:** System Architecture
**Status:** Updated for the owner-approved WhatsApp-only initial enquiry
approach; optional persistence and owner tools are deferred.
