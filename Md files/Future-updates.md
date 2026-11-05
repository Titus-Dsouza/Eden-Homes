## Owner decision: initial enquiry flow without a database

**Recorded:** 2026-11-02

For the initial Eden Homes version, do not use Supabase or any other database.
The website must not store customer enquiries. Do not add database dependencies,
tables, or migrations, and do not build owner authentication or an owner
dashboard.

Customers enter their details through the current website enquiry forms. The
browser prepares a prefilled WhatsApp message only after the owner-confirmed
destination is configured; WhatsApp opens and the customer must manually press
**Send**. The destination is currently missing, so the forms show a
configuration error. The website does not claim delivery. Submitting a form
or opening WhatsApp does not confirm a booking; the owner confirms
availability, pricing, and arrangements.

Accommodation enquiry fields:

- Full name
- Phone number
- Selected property: exactly `1 BHK` or `2 BHK`
- Check-in date
- Check-out date
- Number of guests

Boating enquiry fields:

- Full name
- Phone number
- Preferred date
- Number of participants
- Preferred duration

The WhatsApp destination number must be confirmed by the owner before
implementation. Never assume that either existing telephone contact number is
the WhatsApp destination. Keep the existing contact numbers unchanged.

Database storage, enquiry history, and an owner dashboard remain possible
future optional upgrades and require a separate owner-approved scope.

### Superseding owner decision — WhatsApp destination

**Recorded:** 2026-11-05

The owner supplied `9448317432` as the WhatsApp destination. The current public
configuration uses `919448317432`; forms open a prefilled draft for the visitor
to review and manually send. This supersedes the destination-pending statements
above. The site still does not persist enquiry details or confirm bookings.