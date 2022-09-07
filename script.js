const hamburger = document.querySelector(".hamburger"),
  navMenu = document.querySelector(".nav-menu"),
  main = document.querySelector(".main"),
  playBtn = document.querySelector(".play"),
  navBar = document.querySelector("#nav");

// detect scroll on website to change background of navbar
window.onscroll = function () {
  var distanceScrolled = document.documentElement.scrollTop;
  if (distanceScrolled > 5) {
    navBar.style.backgroundColor = "#17191f";
    navBar.style.position = "fixed";
    navBar.style.width = "100%";
  } else {
    navBar.style.position = "relative";
    navBar.style.backgroundColor = "#0e1217";
  }
};

hamburger.addEventListener("click", () => {
  // toggle display of hamburger
  navMenu.classList.toggle("active");

  // toggle background color of hamburger
  if (hamburger.style.backgroundColor === "transparent") {
    hamburger.style.backgroundColor = "#ffffff0a";
  } else {
    hamburger.style.backgroundColor = "#ffffff0a";
  }
});

// close nav-menu when user clicks on a nav item
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//remove nav-menu when user clicks on main section
main.addEventListener("click", () => {
  navMenu.classList.remove("active");
  hamburger.style.backgroundColor = "transparent";
});
