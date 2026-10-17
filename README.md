# Eden Homes

**A simple, mobile-friendly homestay website for families and tourists visiting Honnavar, Karnataka.**

Eden Homes helps guests explore available 1 BHK and 2 BHK properties, view property details, contact the owner, and submit booking requests. The owner reviews each request and confirms the reservation directly with the guest.

> **Booking notice:** Submitting a request does not guarantee a reservation. A stay is confirmed only after the owner confirms it.

## Project Goals

- Make it easy to discover Eden Homes online.
- Let guests compare 1 BHK and 2 BHK options.
- Display owner-verified photos, amenities, pricing, and house rules.
- Make calling and WhatsApp enquiries simple.
- Give the owner a secure place to review and manage booking requests.
- Add an open-weight AI concierge in a later phase, grounded in verified property information.

## Planned Features

### MVP
- Responsive homepage and property listings.
- Separate 1 BHK and 2 BHK options.
- Property photo galleries.
- Pricing, amenities, capacity, and conditions.
- Tap-to-call and WhatsApp enquiry actions.
- Booking request form with guest count and stay dates.
- Supabase database for property information and requests.
- Secure owner-only dashboard to review and update request status.

### Planned for Later
- Open-weight AI concierge, such as Gemma, for property questions and property-type recommendations.
- Consent-based guest reminders and promotions.
- Availability calendar and date-conflict checks.

## Technology Stack

| Area | Technology |
|---|---|
| Frontend | HTML, CSS, vanilla JavaScript |
| Authentication | Supabase Auth |
| Database | Supabase PostgreSQL |
| Database access control | Supabase Row Level Security (RLS) |
| AI assistant (planned) | Open-weight model such as Gemma, using a suitable inference runtime or hosted endpoint |
| Guest messaging (planned) | Approved email or messaging provider |

The MVP does not require a separate Django backend by default. Additional server-side functions or an API can be introduced when needed for secure privileged operations, AI inference, or scheduled messaging.

## Guest Journey

1. Open the Eden Homes website.
2. Choose a 1 BHK or 2 BHK property.
3. Review property details, photos, amenities, and pricing.
4. Call the owner, message on WhatsApp, or submit a booking request.
5. Wait for the owner to review the request and confirm the stay.

## Project Structure

The structure may evolve as development progresses. A simple starting layout could be:

```text
eden-homes/
├── index.html
├── properties/
│   ├── 1-bhk.html
│   └── 2-bhk.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── supabase.js
├── assets/
│   └── images/
├── docs/
│   ├── PRD.md
│   ├── phase.md
│   ├── architecture.md
│   └── techstack.md
├── .env.example
├── .gitignore
└── README.md
```

This is a proposed structure, not a guarantee of the repository's current files. Adapt it to the actual project as implementation begins.

## Getting Started

### Prerequisites

- A code editor such as Visual Studio Code.
- A modern web browser.
- Git.
- A Supabase project when database and authentication integration begins.

### 1. Clone the repository

Replace the placeholder below with the actual repository URL:

```bash
git clone <your-repository-url>
cd eden-homes
```

### 2. Run the frontend

For the initial static frontend, open `index.html` in a browser or use a local development server extension such as Live Server in VS Code.

### 3. Configure Supabase

When Supabase integration is implemented:

1. Create a Supabase project.
2. Create the required tables and access policies.
3. Configure the project's public URL and publishable/anon key in the frontend environment appropriate to the chosen build setup.
4. Enable Row Level Security (RLS) and test permissions for guest and owner roles.
5. Keep service-role keys, database passwords, and other privileged secrets out of browser code and source control.

Do not assume database integration is complete until the app has been connected and tested.

## Privacy and Security

- Do not collect Aadhaar for routine booking enquiries.
- Collect only the details needed to respond to a guest.
- Make promotional-message consent separate and optional.
- Protect booking requests with Supabase RLS and owner-only access rules.
- Never expose private guest records publicly.
- Never put service-role keys or messaging-provider secrets in frontend JavaScript.
- Clearly distinguish booking requests from confirmed reservations.

## AI Principles

The planned AI concierge should:

- Use verified Eden Homes property data.
- Avoid inventing prices, amenities, capacity, availability, discounts, or booking confirmations.
- Admit when information is unknown and direct the guest to contact the owner.
- Provide a helpful fallback if the AI service or network is unavailable.
- Be clearly identified as an AI assistant.

AI is a later phase; the core website and booking-request workflow should work independently of it.

## Development Roadmap

The project is planned in eight phases:

1. **Project Foundation and Homepage**
2. **Property Listings and Booking UI**
3. **Supabase Setup and Data Model**
4. **Authentication and Owner Access**
5. **Booking Requests and Owner Dashboard**
6. **Open-Weight AI Concierge**
7. **Reminders and Guest Communications**
8. **Testing, Deployment, and First User**

See `phase.md` and `PRD.md` for the detailed requirements and acceptance criteria.

## Before Public Launch

- [ ] Replace sample images with genuine property photos.
- [ ] Verify all amenities, capacities, prices, and house rules with the owner.
- [ ] Configure the correct phone and WhatsApp number.
- [ ] Test booking requests from a mobile device.
- [ ] Verify owner-only dashboard access and database policies.
- [ ] Confirm the guest sees a clear request/confirmation notice.
- [ ] Test errors and slow or unavailable network conditions.
- [ ] Publish a privacy notice explaining how guest details are used.
- [ ] Test the complete journey with a real user.

## Contributing

This project is being developed in phases. Before making a change, review the PRD and phase plan, preserve the agreed technology choices, and test the guest and owner journeys affected by the change.

## License

No license has been selected yet. Add a `LICENSE` file before describing the project as open source. If the project is intended to be open source, choose a license that fits the owner's goals and the use of any third-party assets.
