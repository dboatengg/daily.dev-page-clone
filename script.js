const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const main = document.querySelector(".main");

hamburger.addEventListener("click", () => {
  // toggle display of hamburger
  navMenu.classList.toggle("active");

  // toggle background color of hamburger
  if (hamburger.style.backgroundColor === "grey") {
    hamburger.style.backgroundColor = "transparent";
  } else {
    hamburger.style.backgroundColor = "grey";
  }
});

main.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
