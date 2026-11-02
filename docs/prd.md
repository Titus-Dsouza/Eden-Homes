# Product requirements

## Purpose

Provide a responsive web presence for Eden Homes in Honnavar, Karnataka, where
visitors can learn about accommodation and boating and contact the owner with
enquiries.

## Requirements recorded in the source roadmap

- Accommodation options are described as 1 BHK and 2 BHK.
- Boating is listed as a service.
- Enquiries should be clearly distinguished from confirmed bookings.
- Availability and terms require direct owner confirmation.
- Planned enquiry flows should collect only the information needed to respond.

These are requirements carried forward from repository documentation, not
evidence that property details or boating terms have been verified with the
business owner.

## Current enquiry decision

The initial release will not use Supabase or any other database. Visitors will
eventually submit accommodation or boating details through website forms; the
browser will prepare a WhatsApp Click-to-Chat message and the visitor must
manually press Send. The WhatsApp destination number must be confirmed by the
owner before implementation. The site must not claim a message was sent or a
booking confirmed, and it will not store enquiries.

Accommodation fields: full name, phone number, selected property (exactly
`1 BHK` or `2 BHK`), check-in, check-out, guest count.

Boating fields: full name, phone number, preferred date, participant count,
preferred duration.

Database-backed enquiry history and an owner dashboard are possible future
optional upgrades, not initial-release requirements.

## Excluded from the initial scope

The AI concierge mentioned in the source roadmap is explicitly excluded from the
initial project scope. Do not implement or advertise it without a separate
owner-approved change.

## Not yet confirmed

Pricing, amenities, guest capacity, property rules, boating packages and
durations, operating times, availability, and launch terms require owner
confirmation. The existing roadmap contains contact numbers; confirm their
accuracy and consent before using them on a public site.

## Implementation status

The homepage and service pages are present in the Phase 2/Phase 3 worktree. The
backend health endpoint remains infrastructure only. Enquiry forms, WhatsApp
message generation, persistence, authentication, and owner management are not
implemented. Database persistence, authentication, and owner management are
not part of the initial release.
