# Architecture — Eden Homes

Version: 1.0  
Date: 2026-10-17  
Author: Senior Software Architect

---

This document describes the architecture for Eden Homes — a small homestay website for Honnavar, Karnataka (1 BHK and 2 BHK). It records inspected repository state, required implementation details, security guidance, database schema proposals, data flows, and future integrations (AI and messaging). Sections marked "Proposed" or "To be decided" require confirmation before implementation.

Repository inspection (current)
- Files present in repo root (inspected): README.md, Design.md.
- Files not found: PRD.md, phase.md, techstack.md, existing architecture.md.
- Status: repo is early-stage. Do not assume features exist unless code/migrations are present.

A. System overview
Eden Homes serves two primary user roles:
- Guest (public): browse properties, view photos and verified metadata, call/WhatsApp owner, submit booking requests.
- Owner (admin): sign in, view booking requests, confirm/reject requests, contact guests.

Main components:
- Static frontend: HTML5/CSS3 + vanilla JavaScript (public pages + owner dashboard UI).
- Supabase: Auth, PostgreSQL, Storage, Edge Functions (server-side/privileged tasks).
- Owner dashboard: authenticated UI within same frontend.
- Future optional components: AI concierge (Gemma or similar), scheduled messaging (email/SMS) provider.

B. Architecture principles
- Simplicity first: prefer Supabase native features and small Edge Functions for privileged operations.
- Mobile-first and low-bandwidth: optimize images, lazy-load, minimal JS.
- Secure handling of guest information: least privilege, RLS, avoid storing unnecessary PII.
- Owner-controlled booking confirmation: requests remain "pending" until explicit owner action.
- Verified data as source-of-truth: DB fields are canonical for UI and AI.
- AI is optional and constrained: must not invent or confirm bookings.
- Explicit separation between implemented vs proposed features.

C. Technology stack (roles & justification)
- Frontend: HTML5/CSS3/vanilla JS
  - Why: low-dependency, easy hosting, aligns with project's stated stack.
- Supabase Auth
  - Why: managed auth that ties to Postgres and RLS, keeps implementation compact.
- Supabase PostgreSQL
  - Why: relational schema, transactional operations, single source of truth.
- Supabase Storage
  - Why: host images alongside DB, keep attributions and verification metadata.
- Supabase Edge Functions (Proposed)
  - Why: run privileged server-side actions (send email, call AI inference) while keeping secrets server-side.
- AI (future): Gemma or similar
  - Why: open-weight model option for local management; must be hosted behind server-side layer.
- Messaging/email (future): approved provider (To be decided)
  - Why: reliable email/SMS delivery for confirmations and reminders; credentials kept server-side.

D. High-level architecture (Mermaid)

```mermaid
flowchart LR
  subgraph Guest
    B[Guest Browser]
  end
  subgraph Frontend
    F[HTML / CSS / vanilla JS]
  end
  subgraph Supabase
    SA[Supabase Auth]
    SP[Postgres DB]
    SS[Storage]
    SF[Edge Functions]
  end
  subgraph Owner
    O[Owner Browser / Dashboard]
  end
  subgraph Future
    AI[AI Inference (Gemma) - Future]
    MSG[Messaging Provider - Future]
  end

  B --> F
  F --> SA
  F --> SP
  F --> SS
  O --> F
  O --> SA
  SF
