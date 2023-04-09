const COLLAPSE_CLASS = "collapse";
const TOGGLE_SELECTOR = "button.navbar-toggler";
const NAVBAR_SELECTOR = ".navbar-collapse";

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(TOGGLE_SELECTOR);
  const navbar = document.querySelector(NAVBAR_SELECTOR);
  toggleButton.addEventListener("mouseup", function (e) {
    if (navbar.classList.contains(COLLAPSE_CLASS)) {
      navbar.classList.remove(COLLAPSE_CLASS);
    } else {
      navbar.classList.add(COLLAPSE_CLASS);
    }
  });
});