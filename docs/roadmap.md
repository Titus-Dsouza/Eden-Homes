# Eden Homes delivery roadmap

The project is a homestay and boating enquiry website for Honnavar, Karnataka.
Only verified business details may be shown. An enquiry is not a confirmed
booking; the owner confirms availability, pricing, and arrangements.

## Phase status

| Phase | Status | Verified scope |
|---|---|---|
| 0 — Repository foundation | Complete | Git, independent frontend/backend foundations, deployment and documentation setup |
| 1 — Architecture | Complete | Backend health endpoint and original frontend foundation; React/Vite was the historical frontend and is now removed |
| 2 — Homepage | Complete | Responsive Eden Homes homepage, branding, navigation, service previews, placeholders, and contact links |
| 3 — Service pages | Complete | Direct 1 BHK, 2 BHK, and boating pages with verified copy, placeholders, metadata, and cross-navigation |
| 4 — WhatsApp-only enquiries | Implemented; destination configured | Browser forms, native validation, date checks, and prefilled-message generation are present; `919448317432` is configured |
| 5 — Release readiness | Pending | Owner inputs, final browser/device checks, and separately approved deployment |
| 6 — Production readiness audit | Partially complete | Static code and test audit completed; rendered browser/device checks, console review, and deployment authorization remain pending |

Prior checks for Phases 0–3 are historical records and do not constitute
verification of this vanilla migration. The current static-site checks are
available in `frontend/tests/site.test.mjs`; new browser viewport checks remain
part of release readiness. The older `Md files/Phase.md` AI-concierge proposal
is excluded from this production-readiness scope and remains unimplemented.

## Phase 4 requirements and safeguards

Accommodation collects full name, phone number, a property selection limited
to `1 BHK` or `2 BHK`, check-in, check-out, and guest count. Check-out must be
later than check-in. Boating collects full name, phone number, preferred date,
participant count, and preferred duration.

`frontend/js/config.js` contains the owner-provided
`whatsappDestinationNumber` (`919448317432`) in international digits-only
format. The visitor reviews the prefilled message and manually presses Send.
The site does not store details, report delivery, or confirm a booking.

## Phase 5 owner and release checklist

- Verify the configured WhatsApp destination and approved public contact details.
- Supply owner-approved photographs and verified service descriptions.
- Confirm prices, amenities, capacity, availability, and boating terms before
  publishing any of them.
- Perform browser checks across supported viewport sizes and keyboard
  navigation.
- Confirm static Vercel settings; deployment requires explicit approval.

## Future upgrades

Database storage, enquiry history, owner authentication, and an owner dashboard
are optional future upgrades requiring separate owner approval and a privacy
review. The AI concierge remains excluded from the current scope.
