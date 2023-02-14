const navbar = document.querySelector("nav");
const toggleNav = document.querySelector('button[aria-label="Toggle menu"]');

let isNavOpen = 0;

toggleNav.addEventListener("click", function () {
  const icon = this.querySelector("img");

  navbar.classList.toggle("active");

  if (isNavOpen === 0) {
    icon.src = "Assets/images/icon-close.svg";
    isNavOpen = 1;
  } else {
    icon.src = "Assets/images/icon-hamburger.svg";
    isNavOpen = 0;
  }
});
