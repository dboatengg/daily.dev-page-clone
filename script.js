const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav-menu"),
  main = document.querySelector(".main"),
  playBtn = document.querySelector(".play");

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
//remove nav-menu when user clicks on main section
main.addEventListener("click", () => {
  navMenu.classList.remove("active");
  hamburger.style.backgroundColor = "transparent";
});

// play video
