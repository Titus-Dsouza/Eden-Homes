# Mobile experience

## Requirements

The site supports mobile, tablet, and desktop layouts. Enquiry forms use
touch-friendly fields and native validation; telephone and WhatsApp links are
browser-operable. No enquiry is represented as a booking confirmation.

## Phase 2 status

The homepage now has responsive layouts for desktop, tablet, and narrow phone
widths, plus a collapsible mobile navigation. CSS breakpoints are defined at
1100px, 800px, 600px, and 370px. The page uses fluid gutters and responsive
image-placeholder dimensions; reduced-motion preferences are respected.

The frontend was tested in Chromium at 320, 375, 600, 768, 1024, and 1440px.
Those viewports had no horizontal overflow; section links, phone links, and
mobile menu open/close, selection, Escape behavior, the skip-link target, and
reduced-motion behavior were exercised. No page or console errors were
observed. This is a focused smoke test, not exhaustive cross-browser or
assistive-technology certification.

## Follow-up verification

Phase 3 direct routes were checked in Chromium at 320, 375, 600, 768, 1024, and
1440px. The homepage and each service route had no horizontal overflow;
navigation, service cross-links, phone links, mobile-menu open/Escape behavior,
skip targets, reduced motion, route-specific metadata, and console errors were
checked. This is a focused smoke test, not exhaustive cross-browser or
assistive-technology certification. Phase 4 forms now prepare a WhatsApp draft
for manual sending, state that the request is not a confirmed booking, and do
not persist the submitted information. Browser-level viewport testing of the
new static migration remains a release-readiness check.
