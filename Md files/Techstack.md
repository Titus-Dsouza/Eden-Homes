# Eden Homes — Technology Stack

## 1. Project Overview

Eden Homes will be developed as a responsive, full-stack web application for accommodation and boating enquiries.

The technology stack is selected to support:

- Modern user interfaces.
- Mobile-first responsive design.
- Secure enquiry management.
- Owner authentication.
- Scalable backend architecture.
- Reliable database operations.
- Independent frontend and backend deployment.

## 2. Frontend Technologies

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Frontend development and build tool |
| TypeScript | Static typing and maintainability |
| Tailwind CSS | Responsive styling |
| React Router DOM | Client-side navigation |
| Lucide React | Icons |
| React Hook Form | Form management |
| Zod | Form and data validation |

### Frontend Responsibilities

- Public homepage.
- 1 BHK accommodation page.
- 2 BHK accommodation page.
- Boating page.
- Image gallery.
- Enquiry forms.
- Contact section.
- Owner dashboard.
- Responsive mobile interface.

## 3. Backend Technologies

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| TypeScript | Backend type safety |
| Zod | API request validation |
| Supabase JavaScript Client | Database and authentication integration |

### Backend Responsibilities

- REST API development.
- Enquiry submission.
- Database operations.
- Request validation.
- Authentication verification.
- Authorization.
- Error handling.
- Secure communication with Supabase.

## 4. Database and Authentication

| Technology | Purpose |
|---|---|
| Supabase PostgreSQL | Relational database |
| Supabase Auth | Owner authentication |
| Supabase Row Level Security | Database access control |
| Supabase Storage | Image storage, if required |

### Initial Database Tables

- `properties`
- `accommodation_enquiries`
- `boating_enquiries`
- `owner_profiles`

Database access must be restricted according to user permissions.

## 5. Communication Integration

| Technology | Purpose |
|---|---|
| WhatsApp Click-to-Chat | Prefilled enquiry messages |
| `tel:` links | Direct owner phone calls |

WhatsApp messages will be generated with enquiry details. Visitors must manually press Send.

## 6. UI and Design Tools

| Tool | Purpose |
|---|---|
| Tailwind CSS | Styling |
| Lucide React | Icons |
| Google Fonts | Typography |
| Figma | UI/UX design and prototyping |

### Design Fonts

- Playfair Display — headings.
- Inter — body text and interface elements.

### Design Approach

- Mobile-first.
- Responsive layouts.
- Natural coastal-inspired colour palette.
- Reusable React components.
- Accessible interface elements.

## 7. Development Tools

| Tool | Purpose |
|---|---|
| Visual Studio Code | Code editor |
| Git | Version control |
| GitHub | Source code hosting |
| Postman | API testing |
| npm | Package management |
| ESLint | Code quality |
| Prettier | Code formatting |
| Chrome DevTools | Responsive and browser testing |

## 8. Deployment and Hosting

| Platform | Purpose |
|---|---|
| Vercel | Frontend hosting |
| Render or equivalent | Backend hosting |
| Supabase | Database and authentication |
| GitHub | Repository and source control |

Frontend and backend will be maintained in separate directories and deployed independently.

## 9. Testing Technologies

| Tool | Purpose |
|---|---|
| Vitest | Frontend and TypeScript unit testing |
| React Testing Library | React component testing |
| Supertest | Backend API testing |
| Playwright | End-to-end testing |
| Postman | Manual API testing |

## 10. Project Architecture

```text
Eden-Homes/
│
├── frontend/
│   ├── React
│   ├── Vite
│   ├── TypeScript
│   └── Tailwind CSS
│
├── backend/
│   ├── Node.js
│   ├── Express.js
│   └── TypeScript
│
├── database/
│   └── Supabase PostgreSQL
│
├── docs/
│
├── README.md
├── architecture.md
├── design.md
├── mobile.md
├── prd.md
└── techstack.md
```

## 11. Security Considerations

- Store sensitive environment variables securely.
- Never expose Supabase service-role keys in frontend code.
- Enable Row Level Security.
- Verify authentication on protected backend routes.
- Validate API requests.
- Protect personal enquiry information.
- Use HTTPS in production.
- Apply appropriate database permissions.

## 12. Technology Selection Principles

1. Prefer stable and well-maintained technologies.
2. Avoid unnecessary dependencies.
3. Keep frontend and backend separate.
4. Prioritize mobile performance.
5. Follow secure development practices.
6. Use reusable and maintainable code.
7. Test technologies together before production deployment.

## 13. Final Technology Stack Summary

| Category | Selected Technology |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Forms | React Hook Form |
| Validation | Zod |
| Backend | Node.js + Express |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| Database Security | Supabase RLS |
| Communication | WhatsApp Click-to-Chat |
| Icons | Lucide React |
| Version Control | Git + GitHub |
| Frontend Hosting | Vercel |
| Backend Hosting | Render or equivalent |
| Testing | Vitest + Playwright + Supertest |

---

**Project:** Eden Homes  
**Technology Stack Version:** 1.0  
**Status:** Proposed — dependencies and versions to be finalized during setup.