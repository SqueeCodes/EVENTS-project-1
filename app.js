// Global constants
const body = document.body;

// TOGGLE CONTRAST
let contrastToggle = false;
const contrastLight = document.querySelector(".contrast-light");
const contrastDark = document.querySelector(".contrast-dark");

function toggleContrast() {
  contrastToggle = !contrastToggle;

  document.body.classList.toggle("light-theme", contrastToggle);
  body.style.transition = "all 400ms ease";

  setTimeout(() => {
    if (contrastToggle) {
      contrastLight.style.visibility = "hidden";
      contrastDark.style.visibility = "visible";
    } else {
      contrastLight.style.visibility = "visible";
      contrastDark.style.visibility = "hidden";
    }
  }, 160);
}

// BTN MENU
function openMenu() {
  body.classList.add("menu--open");
}

function closeMenu() {
  body.classList.remove("menu--open");
}

// MODAL
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const pageContent = document.getElementById("pageContent");
const backdrop = document.querySelector(".modal__backdrop");

if (openModalBtn && closeModalBtn) {
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("modal--active");
    body.classList.add("no-scroll");
    window.scrollTo(0, 0);
    setTimeout(() => {
      pageContent.style.visibility = "hidden";
      pageContent.style.opacity = "0";
      backdrop.style.visibility = "visible";
      backdrop.style.opacity = "1";
    }, 80);
  });

  closeModalBtn.addEventListener("click", () => {
    closeModal();
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  modal.classList.remove("modal--active");
  body.classList.remove("no-scroll");
  setTimeout(() => {
    pageContent.style.visibility = "visible";
    pageContent.style.opacity = "1";
    backdrop.style.visibility = "hidden";
    backdrop.style.opacity = "0";
  }, 600);
}

// MODAL EMAILJS
function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_mygmail",
      "template_dfltemailtemp",
      event.target,
      "cePFoU8dvsaDAlAyz"
    )
    .then(() => {
      setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Apologies, please contact me directly at mainnella@gmail.com."
        );
      });
      loading.classList += " modal__overlay--visible";
      console.log("it worked");
    }, 1000);
}
// SHAPES
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  shapes.forEach((shape, i) => {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shape.style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  });
}

document.addEventListener("mousemove", moveBackground);
