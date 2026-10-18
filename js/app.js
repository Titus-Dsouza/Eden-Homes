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
      <div class="stay-actions"><button class="button button-small" type="button" data-view-details="${stay.id}">View Details</button><button class="button button-small button-outline" type="button" data-book-property="${stay.type}" aria-label="Book Now for the ${stay.type} stay">Book Now</button></div>
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
    <div class="dialog-property-info"><p class="eyebrow"><span class="eyebrow-line"></span> ${stay.type} · SAMPLE LISTING</p><h2 id="dialog-title">${stay.name}</h2><p>${stay.description}</p><p class="unknown-details">Amenities, guest capacity, price, and availability have not been confirmed.</p><p class="booking-notice">A booking enquiry is not a confirmed reservation. The owner must confirm your stay.</p><button class="button" type="button" data-book-property="${stay.type}">Book Now for ${stay.type}</button></div>`;
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
    if (event.target.closest("[data-book-property]")) propertyDialog.close();
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

// Public booking enquiries remain disabled until the database schema and insert-only RLS are verified.
const bookingDialog = document.querySelector("#booking-dialog");
const bookingForm = document.querySelector("#booking-enquiry-form");
const bookingProperty = document.querySelector("#booking-property");
const bookingName = document.querySelector("#booking-name");
const bookingPhone = document.querySelector("#booking-phone");
const bookingEmail = document.querySelector("#booking-email");
const bookingMessage = document.querySelector("#booking-message");
const bookingCopyStatus = document.querySelector("#booking-copy-status");
const bookingSubmitButton = document.querySelector("#booking-submit");
let bookingSubmissionInProgress = false;

function showBookingMessage(message, isError = false) {
  if (!bookingMessage) return;
  bookingMessage.textContent = message;
  bookingMessage.classList.toggle("is-error", isError);
}

function openBookingDialog(propertyType) {
  if (!bookingDialog || !bookingForm || !["1 BHK", "2 BHK"].includes(propertyType)) return;
  if (propertyDialog?.open) propertyDialog.close();
  bookingForm.reset();
  bookingProperty.value = propertyType;
  showBookingMessage("");
  bookingDialog.showModal();
  bookingName?.focus();
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-book-property]");
  if (trigger) openBookingDialog(trigger.dataset.bookProperty);
});

document.querySelectorAll("[data-booking-close]").forEach((button) => {
  button.addEventListener("click", () => bookingDialog?.close());
});
bookingDialog?.addEventListener("click", (event) => {
  if (event.target === bookingDialog) bookingDialog.close();
});

async function getBookingFunctionError(error) {
  if (error?.name === "FunctionsFetchError" || error instanceof TypeError) {
    return "We couldn't reach the online enquiry service. Check your connection or contact the owner directly.";
  }

  const status = error?.context?.status;
  if (status === 401 || status === 403) return "The online enquiry service couldn't authorize this request. Please contact the owner directly.";
  if (status === 404) return "The online enquiry service is unavailable at the moment. Please contact the owner directly.";
  if (status === 429) return "Too many enquiries were submitted in a short time. Please wait and try again, or contact the owner.";
  if (status >= 500) return "The online enquiry service is having a problem. Please try again later or contact the owner.";
  return "We couldn't submit your enquiry online right now. Please contact the owner directly.";
}

bookingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (bookingSubmissionInProgress) return;

  bookingName.value = bookingName.value.trim();
  bookingPhone.value = bookingPhone.value.trim();
  bookingEmail.value = bookingEmail.value.trim();
  if (!bookingForm.reportValidity()) return;

  const fullName = bookingName.value;
  if (!fullName) {
    bookingName.setCustomValidity("Enter your full name.");
    bookingName.reportValidity();
    bookingName.setCustomValidity("");
    showBookingMessage("Enter your full name to continue.", true);
    return;
  }

  const phone = bookingPhone.value;
  const normalizedPhone = phone.replace(/[()\s-]/g, "");
  if (!/^(?:\+91)?[6-9]\d{9}$/.test(normalizedPhone)) {
    bookingPhone.setCustomValidity("Enter a valid 10-digit Indian mobile number, optionally with +91.");
    bookingPhone.reportValidity();
    bookingPhone.setCustomValidity("");
    showBookingMessage("Enter a valid Indian mobile number, with or without the +91 prefix.", true);
    return;
  }

  const property = bookingProperty.value;
  if (!["1 BHK", "2 BHK"].includes(property)) {
    showBookingMessage("Please select a stay type and try again.", true);
    return;
  }

  const bookingClient = window.edenSupabase;
  if (!bookingClient?.functions) {
    showBookingMessage("The online enquiry service isn't available right now. Please contact the owner directly.", true);
    return;
  }

  bookingSubmissionInProgress = true;
  if (bookingSubmitButton) {
    bookingSubmitButton.disabled = true;
    bookingSubmitButton.textContent = "Submitting…";
  }
  showBookingMessage("Sending your enquiry…");

  try {
    const { data, error } = await bookingClient.functions.invoke("submit-booking-enquiry", {
      body: { name: fullName, phone, email: bookingEmail.value, property }
    });

    if (error) {
      showBookingMessage(await getBookingFunctionError(error), true);
      return;
    }

    const confirmed = data && typeof data === "object" && (data.success === true || data.ok === true);
    if (!confirmed) {
      showBookingMessage("The enquiry service returned an unexpected response, so we couldn't confirm submission. Please contact the owner directly.", true);
      return;
    }

    showBookingMessage("Your enquiry was submitted. This is not a confirmed booking; the owner will confirm your stay.");
  } catch (error) {
    showBookingMessage(await getBookingFunctionError(error), true);
  } finally {
    bookingSubmissionInProgress = false;
    if (bookingSubmitButton) {
      bookingSubmitButton.disabled = false;
      bookingSubmitButton.textContent = "Submit Enquiry";
    }
  }
});

async function copyContactNumber(number) {
  if (!bookingCopyStatus) return;
  const copyWithFallback = () => {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = number;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.append(temporaryInput);
    temporaryInput.select();
    const copied = document.execCommand("copy");
    temporaryInput.remove();
    if (!copied) throw new Error("Clipboard copy was unavailable");
  };

  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(number);
      } catch {
        copyWithFallback();
      }
    } else {
      copyWithFallback();
    }
    bookingCopyStatus.textContent = `Copied ${number}.`;
  } catch {
    bookingCopyStatus.textContent = `Could not copy automatically. Select and copy ${number} above.`;
  }
  window.setTimeout(() => {
    if (bookingCopyStatus.textContent.includes(number)) bookingCopyStatus.textContent = "";
  }, 2500);
}

document.querySelectorAll("[data-copy-number]").forEach((button) => {
  button.addEventListener("click", () => copyContactNumber(button.dataset.copyNumber));
});

// Supabase email/password authentication. The publishable client is shared from supabase.js.
const authClient = window.edenSupabase;
const authDialog = document.querySelector("#auth-dialog");
const authOpenButton = document.querySelector("#auth-open");
const authCloseButton = document.querySelector("[data-auth-close]");
const authAccount = document.querySelector("#auth-account");
const authEmail = document.querySelector("#auth-email");
const authLogoutButton = document.querySelector("#auth-logout");
const authStateMessage = document.querySelector("#auth-state-message");
const authMessage = document.querySelector("#auth-message");
const authTitle = document.querySelector("#auth-title");
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const authModeButtons = document.querySelectorAll("[data-auth-mode]");

function showAuthMessage(message, isError = false) {
  if (!authMessage) return;
  authMessage.textContent = message;
  authMessage.classList.toggle("is-error", isError);
}

function setAuthMode(mode) {
  const isSignup = mode === "signup";
  if (!loginForm || !signupForm || !authTitle) return;
  loginForm.hidden = isSignup;
  signupForm.hidden = !isSignup;
  authTitle.textContent = isSignup ? "Create your account" : "Welcome back";
  authModeButtons.forEach((button) => {
    const selected = button.dataset.authMode === mode;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  showAuthMessage("");
}

function updateAuthControls(user) {
  if (!authOpenButton || !authAccount || !authEmail) return;
  const isSignedIn = Boolean(user);
  authOpenButton.hidden = isSignedIn;
  authAccount.hidden = !isSignedIn;
  authEmail.textContent = user?.email || "Signed in";
}

function showHeaderAuthMessage(message) {
  if (!authStateMessage) return;
  authStateMessage.textContent = message;
  authStateMessage.hidden = !message;
}

function authErrorMessage(error, action) {
  const code = String(error?.code || "").toLowerCase();
  const message = String(error?.message || "").toLowerCase();

  if (code.includes("invalid_credentials") || message.includes("invalid login credentials")) {
    return "Those details did not match. Check your email and password and try again.";
  }
  if (code.includes("email_not_confirmed") || message.includes("email not confirmed")) {
    return "Please confirm your email from the message we sent, then log in.";
  }
  if (code.includes("weak_password") || message.includes("password should be")) {
    return "Choose a stronger password that meets the requirements and try again.";
  }
  if (code.includes("rate_limit") || code.includes("too_many") || message.includes("rate limit")) {
    return "Too many attempts were made. Please wait a little and try again.";
  }
  if (error instanceof TypeError || message.includes("fetch")) {
    return "We could not reach the sign-in service. Check your connection and try again.";
  }
  return action === "signup"
    ? "We could not create your account right now. Check your details and try again later."
    : "We could not log you in right now. Check your details and try again later.";
}

function setFormBusy(form, isBusy, busyLabel, readyLabel) {
  const submit = form?.querySelector("[type='submit']");
  if (!submit) return;
  submit.disabled = isBusy;
  submit.textContent = isBusy ? busyLabel : readyLabel;
}

if (authDialog && authOpenButton) {
  authOpenButton.addEventListener("click", () => {
    setAuthMode("login");
    showHeaderAuthMessage("");
    authDialog.showModal();
    if (!authClient) showAuthMessage("Sign-in is unavailable right now. Please try again shortly.", true);
  });
  authCloseButton?.addEventListener("click", () => authDialog.close());
  authDialog.addEventListener("click", (event) => {
    if (event.target === authDialog) authDialog.close();
  });
  authModeButtons.forEach((button) => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
  });
}

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  if (!authClient) {
    showAuthMessage("Sign-in is unavailable right now. Please try again shortly.", true);
    return;
  }

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value;
  showAuthMessage("Logging you in…");
  setFormBusy(loginForm, true, "Logging in…", "Log in");
  try {
    const { error } = await authClient.auth.signInWithPassword({ email, password });
    loginForm.elements.password.value = "";
    if (error) {
      showAuthMessage(authErrorMessage(error, "login"), true);
      return;
    }
    showAuthMessage("You are signed in.");
  } catch (error) {
    loginForm.elements.password.value = "";
    showAuthMessage(authErrorMessage(error, "login"), true);
  } finally {
    setFormBusy(loginForm, false, "", "Log in");
  }
});

signupForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!signupForm.reportValidity()) return;
  const fullNameInput = signupForm.elements.full_name;
  const fullName = fullNameInput.value.trim();
  if (!fullName) {
    fullNameInput.setCustomValidity("Enter your full name.");
    fullNameInput.reportValidity();
    fullNameInput.setCustomValidity("");
    showAuthMessage("Enter your full name to create an account.", true);
    return;
  }

  const passwordInput = signupForm.elements.password;
  const confirmInput = signupForm.elements["password-confirm"];
  if (passwordInput.value !== confirmInput.value) {
    confirmInput.setCustomValidity("Passwords do not match.");
    confirmInput.reportValidity();
    confirmInput.setCustomValidity("");
    return;
  }
  if (!authClient) {
    showAuthMessage("Sign-up is unavailable right now. Please try again shortly.", true);
    return;
  }

  const email = signupForm.elements.email.value.trim();
  const password = passwordInput.value;
  showAuthMessage("Creating your account…");
  setFormBusy(signupForm, true, "Creating account…", "Create account");
  try {
    const { data, error } = await authClient.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });
    passwordInput.value = "";
    confirmInput.value = "";
    if (error) {
      showAuthMessage(authErrorMessage(error, "signup"), true);
      return;
    }
    if (data.session) {
      showAuthMessage("Your account is ready and you are signed in.");
    } else {
      showAuthMessage("Check your inbox for a confirmation link before logging in.");
    }
  } catch (error) {
    passwordInput.value = "";
    confirmInput.value = "";
    showAuthMessage(authErrorMessage(error, "signup"), true);
  } finally {
    setFormBusy(signupForm, false, "", "Create account");
  }
});

authLogoutButton?.addEventListener("click", async () => {
  if (!authClient) {
    showHeaderAuthMessage("Sign-out is unavailable right now.");
    return;
  }
  authLogoutButton.disabled = true;
  showHeaderAuthMessage("");
  try {
    const { error } = await authClient.auth.signOut({ scope: "local" });
    if (error) {
      showHeaderAuthMessage("We could not log you out. Please try again.");
      return;
    }
    showHeaderAuthMessage("You are signed out.");
  } catch {
    showHeaderAuthMessage("We could not log you out. Please try again.");
  } finally {
    authLogoutButton.disabled = false;
  }
});

if (authClient) {
  let authEventReceived = false;
  authClient.auth.onAuthStateChange((_event, session) => {
    authEventReceived = true;
    updateAuthControls(session?.user ?? null);
  });

  authClient.auth.getSession().then(({ data, error }) => {
    if (!authEventReceived && !error) updateAuthControls(data.session?.user ?? null);
    if (error) showHeaderAuthMessage("We could not restore your sign-in state. Please refresh and try again.");
  }).catch(() => {
    showHeaderAuthMessage("We could not restore your sign-in state. Please refresh and try again.");
  });
}
