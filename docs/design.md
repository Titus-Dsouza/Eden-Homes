# Design

## Current design implementation

The current frontend is static HTML, CSS, and Vanilla JavaScript. Older React
component references in this design record describe the previous
implementation, not the current runtime.

The homepage uses a coastal-inspired palette of forest green, warm cream, sand,
charcoal, and a restrained terracotta accent. System sans-serif text is paired
with serif display headings. Spacing and typography scale responsively; cards,
navigation, CTAs, and placeholder art share the same visual language.
This is the current interface direction, not an owner-approved formal brand
identity.

The frontend has no owner-approved photographs or map location. Image areas are
clearly labeled abstract illustration placeholders and must be replaced with
approved Eden Homes/property/boating imagery before representing real places.
The location graphic is not a map and does not imply a property address or
coordinates.

## Interaction and accessibility

- Sticky navigation provides section links and an accessible mobile menu with
  Escape-to-close behavior.
- Focus indicators, a skip link, semantic headings, descriptive placeholder
  labels, and telephone links support keyboard and assistive-technology use.
- Reduced-motion preferences disable smooth scrolling and transitions.
- The homepage links to the individual 1 BHK, 2 BHK, and boating service pages.
- Service pages include browser-side WhatsApp enquiry forms using the
  owner-provided configured destination; an enquiry never confirms a booking.
- Normal-size secondary text and interactive hover colors retain at least
  4.5:1 contrast on their light surfaces. The terracotta display accent is
  limited to large heading text, where it meets the 3:1 large-text threshold.

## Content that still requires owner input

Supply approved photos for the homepage, each accommodation option, boating,
and Honnavar location. Confirm exact business descriptions, whether contact
numbers should be published, and an exact property location before adding a
map. Prices, amenities, capacity, availability, and boating terms remain
unpublished pending verification. The WhatsApp form uses the owner-provided
number configured in `frontend/js/config.js`.
