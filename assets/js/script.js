let menubtn = document.querySelector(".menu-btn");
let menuitems = document.querySelector(".menu-items");
let menuicon = document.querySelector(".fa-solid");
menubtn.addEventListener("click", () => {
  menuitems.classList.toggle("menu-active");
  menuicon.classList.toggle("fa-x");
  menuicon.classList.toggle("fa-bars");
});
