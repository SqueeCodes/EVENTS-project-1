//Btn Menu

function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

//Modal

//Elements

const modal = document.getElementById("contactModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const body = document.body;

//Open Modal

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  body.classList.add("no-scroll");
});

//Close Modal

closeModalBtn.addEventListener("click", (event) => {
  modal.style.display = "none";
  body.classList.remove("no-scroll");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    body.classList.remove("no-scroll");
  }
});
