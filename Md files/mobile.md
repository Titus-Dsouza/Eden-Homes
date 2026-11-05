# Eden Homes — Mobile Responsiveness Guide

## 1. Overview

Eden Homes is a mobile-first, responsive static website using HTML, CSS, and
browser-native JavaScript.

The website must provide a smooth and consistent experience across:

- Android smartphones
- iPhones
- Tablets
- Laptops
- Desktop computers

A separate mobile application is not required. The same website will adapt to different screen sizes.

## 2. Frontend Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Responsive styling |
| Vanilla JavaScript | Navigation and form behavior |

## 3. Mobile-First Design

Development should begin with the mobile layout and progressively adapt to larger screens.

### Mobile Layout

- Compact navigation with a hamburger menu.
- Single-column content layouts where appropriate.
- Full-width accommodation cards.
- Touch-friendly buttons and links.
- Readable typography.
- Easy-to-use enquiry forms.
- Optimized images.
- Simple and accessible page navigation.

### Tablet Layout

- Improved spacing and content alignment.
- Two-column layouts where appropriate.
- Responsive navigation.
- Optimized image galleries.
- Comfortable form layouts.

### Desktop Layout

- Full navigation bar.
- Wider content sections.
- Multi-column accommodation layouts.
- Larger image galleries.
- Expanded service-page layouts; any owner dashboard is an optional future upgrade.
- Appropriate spacing and typography.

## 4. Responsive Breakpoints

The current CSS uses breakpoints at 1100px, 800px, 600px, and 370px.

| Screen | Breakpoint | Design approach |
|---|---|---|
| Small mobile | Below 640px | Single-column layout |
| Large mobile | 640px and above | Flexible mobile layout |
| Tablet | 768px and above | Two-column layouts where suitable |
| Laptop | 1024px and above | Expanded layouts |
| Desktop | 1280px and above | Full desktop experience |

Breakpoints should be adjusted based on actual content rather than relying only on device categories.

## 5. Mobile Navigation

The mobile navigation should include:

- Eden Homes logo.
- Hamburger menu.
- Home.
- 1 BHK.
- 2 BHK.
- Boating.
- Contact.

Requirements:

- Menu should open and close smoothly.
- Navigation links should be easy to tap.
- Menu should close after selecting a page.
- Navigation should not overflow smaller screens.
- Desktop navigation should remain separate from the mobile menu when appropriate.

## 6. Mobile Homepage

The homepage should provide:

- Attractive hero section.
- Clear introduction to Eden Homes.
- Accommodation highlights.
- Boating service highlights.
- Image gallery.
- Contact information.
- WhatsApp enquiry access.
- Footer.

Requirements:

- Use appropriately sized images.
- Avoid excessive text.
- Maintain readable contrast.
- Keep important actions visible.
- Ensure the page does not create horizontal scrolling.

## 7. Accommodation Pages

Both 1 BHK and 2 BHK pages must work properly on mobile devices.

Requirements:

- Responsive property photographs.
- Readable property information.
- Clearly displayed amenities, using verified information only.
- Clear contact/enquiry action, without implying a confirmed booking.
- Mobile-friendly enquiry forms.

### WhatsApp accommodation enquiry form

Fields:

- Full name
- Phone number
- Selected property: exactly `1 BHK` or `2 BHK`
- Check-in date
- Check-out date
- Guest count

The form uses native mobile inputs and validation. WhatsApp opens with a
prefilled message for the visitor to manually send; the website does not store
the request or present it as a confirmed booking. The owner-provided destination
is configured in `frontend/js/config.js`.

## 8. Boating Page

The boating page must include:

- Responsive boating photographs.
- Verified boating information.
- Available enquiry options.
- Clearly visible Enquire Now button.

### WhatsApp boating enquiry form

Fields:

- Full name
- Phone number
- Preferred date
- Participant count
- Preferred duration

Do not display unverified prices, packages, durations or availability.
WhatsApp should open with a prefilled message for the visitor to manually send;
the website does not store the request or present it as a confirmed booking.

## 9. Optional future owner dashboard

An owner dashboard is not part of the initial release. If separately approved
for a future version, it must be responsive.

Requirements:

- Mobile-friendly login page.
- Responsive dashboard navigation.
- Enquiry cards or responsive tables.
- Easy-to-read enquiry details.
- Touch-friendly status update controls.
- Search and filtering.
- Proper loading, empty and error states.

On smaller screens, wide tables should be converted into cards or made horizontally scrollable.

## 10. Mobile Performance

The website should load efficiently, including on slower mobile networks.

Requirements:

- Compress images without noticeably reducing quality.
- Use modern image formats such as WebP where appropriate.
- Lazy-load images that are below the initial viewport.
- Avoid unnecessary JavaScript.
- Minimize unused CSS and dependencies.
- Prevent layout shifts while images load.
- Optimize fonts and assets.
- Use production builds for deployment.

## 11. Mobile Accessibility

- Provide readable font sizes.
- Maintain sufficient colour contrast.
- Add meaningful image alt text.
- Use properly labelled form inputs.
- Ensure keyboard accessibility.
- Provide visible focus states.
- Do not rely only on colour to communicate status.
- Make buttons and interactive elements easy to operate by touch.

## 12. Mobile Testing Checklist

### Devices and Screen Sizes

- [ ] Small Android smartphone.
- [ ] Large Android smartphone.
- [ ] iPhone.
- [ ] Tablet.
- [ ] Laptop.
- [ ] Desktop.

### Functional Testing

- [ ] Mobile navigation works.
- [ ] All pages display correctly.
- [ ] Images resize correctly.
- [ ] Forms are usable.
- [ ] Date inputs work.
- [ ] Buttons and links are accessible.
- [ ] Click-to-call works.
- [ ] WhatsApp opens with the correct prefilled message.
- [ ] Optional future owner dashboard works on mobile (not initial scope).
- [ ] No unwanted horizontal scrolling.

### Performance Testing

- [ ] Images are optimized.
- [ ] Pages load efficiently.
- [ ] No major layout shifts.
- [ ] No console errors.
- [ ] No broken links or images.

## 13. Development Rules

1. Follow a mobile-first development approach.
2. Share CSS and JavaScript behavior across static pages.
3. Keep responsive rules in the shared CSS files.
4. Test layouts at multiple screen widths.
5. Do not create separate desktop and mobile websites.
6. Keep forms simple and mobile-friendly.
7. Prioritize performance on mobile networks.
8. Verify functionality on actual devices before launch.

## 14. Final Goal

Deliver one responsive Eden Homes website that works smoothly across smartphones, tablets and desktop computers.

**Project:** Eden Homes
**Frontend:** HTML5 + CSS3 + Vanilla JavaScript
**Design Strategy:** Mobile-first responsive design
**Status:** Development requirements
