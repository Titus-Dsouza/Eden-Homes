const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

// Property image paths and descriptive alt text are centralized here.
const propertyGalleryImages = [
  { src: "assets/images/properties/room-1.jpeg", alt: "Bedroom with a wooden bed, patterned bedspread, and barred window." },
  { src: "assets/images/properties/room-2.jpeg", alt: "Bedroom with a wooden bed and chairs beside the window." },
  { src: "assets/images/properties/room-3.jpeg", alt: "Bedroom viewed from the doorway, with a bed and window." },
  { src: "assets/images/properties/room-4.jpeg", alt: "Bedroom with a bed, wall mirror, and windows." },
  { src: "assets/images/properties/room-5.jpeg", alt: "Bedroom and seating area shown together." },
  { src: "assets/images/properties/room-6.jpeg", alt: "Covered outdoor seating area beside a staircase at night." }
];

// The same owner-provided image set is intentionally reused for both stay types.
const stays = [
  {
    id: "one-bhk",
    type: "1 BHK",
    name: "Coastal 1 BHK · Sample",
    description: "This is demonstration listing copy. The local property photos are shown as supplied; confirm which images and details apply to this stay type with the owner.",
    cardDescription: "A sample one-bedroom stay idea for your time in Honnavar. Ask the owner for verified details.",
    images: propertyGalleryImages
  },
  {
    id: "two-bhk",
    type: "2 BHK",
    name: "Coastal 2 BHK · Sample",
    description: "This is demonstration listing copy. The local property photos are shown as supplied; confirm which images and details apply to this stay type with the owner.",
    cardDescription: "A sample two-bedroom stay idea with room to spread out. Ask the owner for verified details.",
    images: propertyGalleryImages
  }
];

const listingContainer = document.querySelector("#stay-listings");
const propertyDialog = document.querySelector("#property-dialog");
const dialogContent = document.querySelector("#dialog-content");
let activeStay = null;

function imageMarkup(image, className, loading = "lazy") {
  return `<div class="property-image-wrap ${className}"><img src="${image.src}" alt="${image.alt}" loading="${loading}" decoding="async"><span class="image-fallback" aria-hidden="true">Property photo unavailable</span><span class="sample-label">Eden Homes property photo</span></div>`;
}

if (listingContainer) {
  listingContainer.innerHTML = stays.map((stay, index) => `
    <article class="stay-card">
      ${imageMarkup(stay.images[0], "stay-photo", index === 0 ? "eager" : "lazy")}
      <div class="stay-info"><div><p class="card-kicker">DEMONSTRATION CONTENT</p><h3>${stay.type}</h3></div><span class="card-number">0${index + 1}</span></div>
      <div class="stay-copy"><p class="stay-name">${stay.name}</p><p>${stay.cardDescription}</p></div>
      <div class="stay-actions"><button class="button button-small" type="button" data-view-details="${stay.id}">View Details</button><a class="button button-small button-outline" href="#contact" aria-label="Contact to book the ${stay.type} stay (owner contact details to be confirmed)">Contact to Book</a></div>
    </article>`).join("");
}

function bindImageFallbacks(root) {
  root.querySelectorAll(".property-image-wrap img, .destination-image-wrap img").forEach((image) => {
    image.addEventListener("error", () => image.closest(".property-image-wrap, .destination-image-wrap")?.classList.add("image-unavailable"), { once: true });
    if (image.complete && image.naturalWidth === 0) image.closest(".property-image-wrap, .destination-image-wrap")?.classList.add("image-unavailable");
  });
}

function renderStayDetails(stay, imageIndex = 0) {
  activeStay = stay;
  const image = stay.images[imageIndex];
  dialogContent.innerHTML = `
    <div class="dialog-gallery">
      ${imageMarkup(image, "dialog-main-image", "eager")}
      <div class="gallery-thumbnails" aria-label="${stay.type} sample photo gallery">
        ${stay.images.map((item, index) => `<button class="gallery-thumb ${index === imageIndex ? "is-active" : ""}" type="button" data-gallery-index="${index}" aria-label="Show sample photo ${index + 1}" aria-pressed="${index === imageIndex}">${imageMarkup(item, "", "lazy")}</button>`).join("")}
      </div>
    </div>
    <div class="dialog-property-info"><p class="eyebrow"><span class="eyebrow-line"></span> ${stay.type} · SAMPLE LISTING</p><h2 id="dialog-title">${stay.name}</h2><p>${stay.description}</p><p class="unknown-details">Amenities, guest capacity, price, and availability have not been confirmed.</p><p class="booking-notice">A booking enquiry is not a confirmed reservation. The owner must confirm your stay.</p><a class="button" href="#contact" data-dialog-contact>Contact to Book <span aria-hidden="true">↗</span></a></div>`;
  bindImageFallbacks(dialogContent);
}

if (listingContainer && propertyDialog && dialogContent) {
  listingContainer.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-view-details]");
    if (!trigger) return;
    const stay = stays.find((item) => item.id === trigger.dataset.viewDetails);
    if (!stay) return;
    renderStayDetails(stay);
    propertyDialog.showModal();
  });

  dialogContent.addEventListener("click", (event) => {
    const thumbnail = event.target.closest("[data-gallery-index]");
    if (thumbnail && activeStay) renderStayDetails(activeStay, Number(thumbnail.dataset.galleryIndex));
    if (event.target.closest("[data-dialog-contact]")) propertyDialog.close();
  });

  propertyDialog.querySelector("[data-dialog-close]")?.addEventListener("click", () => propertyDialog.close());
  propertyDialog.addEventListener("click", (event) => {
    if (event.target === propertyDialog) propertyDialog.close();
  });
  propertyDialog.addEventListener("close", () => {
    const trigger = listingContainer.querySelector(`[data-view-details="${activeStay?.id}"]`);
    trigger?.focus();
  });
}

bindImageFallbacks(document);
