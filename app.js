// TOGGLE CONTRAST
let contrastToggle = false;
const contrastLight = document.querySelector(".contrast-light");
const contrastDark = document.querySelector(".contrast-dark");

function toggleContrast() {
  contrastToggle = !contrastToggle;
  setTimeout(() => {
    if (contrastToggle) {
      document.body.classList.add("light-theme");
      body.style.transition = "all 400ms ease";
    } else {
      document.body.classList.remove("light-theme");
      body.style.transition = "all 400ms ease";
    }
  }, 80);

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
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

// MODAL
const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const body = document.body;
const pageContent = document.getElementById("pageContent");
const backdrop = document.querySelector(".modal__backdrop");

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
  modal.classList.remove("modal--active");
  body.classList.remove("no-scroll");
  setTimeout(() => {
    pageContent.style.visibility = "visible";
    pageContent.style.opacity = "1";
    backdrop.style.visibility = "hidden";
    backdrop.style.opacity = "0";
  }, 600);
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("modal--active");
    body.classList.remove("no-scroll");
    setTimeout(() => {
      pageContent.style.visibility = "visible";
      pageContent.style.opacity = "1";
      backdrop.style.visibility = "hidden";
      backdrop.style.opacity = "0";
    }, 600);
  }
});

//SHAPES
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

document.addEventListener("mousemove", moveBackground);
