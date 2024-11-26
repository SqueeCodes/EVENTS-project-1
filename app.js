// Btn Menu

function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}


// Modal

const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const body = document.body;
const pageContent = document.getElementById("pageContent");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal--active");
  body.classList.add("no-scroll");
  pageContent.style.visibility = "hidden";
  pageContent.style.opacity = "0";
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("modal--active");
  body.classList.remove("no-scroll");
  pageContent.style.visibility = "visible";
  pageContent.style.opacity = "1";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("modal--active");
    body.classList.remove("no-scroll");
    pageContent.style.visibility = "visible";
    pageContent.style.opacity = "1";
  }
});
