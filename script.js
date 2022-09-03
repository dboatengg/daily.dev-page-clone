const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav-menu"),
  main = document.querySelector(".main"),
  playBtn = document.querySelector(".play"),
  navBar = document.querySelector("#nav");

// detect scroll on website
window.onscroll = function () {
  var distanceScrolled = document.documentElement.scrollTop;
  if (distanceScrolled > 10) {
    navBar.style.backgroundColor = "#0c0f14";
  }
  if (distanceScrolled > 100) {

    navBar.style.backgroundColor = "#17191f";
  } else {
    // navBar.style.position = "fixed";
    navBar.style.backgroundColor = "#0e1217";
  }
};

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
