document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  // Check if the page is refreshed
  if (performance.navigation.type === 1) {
    // If refreshed, set the hash to "home"
    window.location.hash = "home";
  }

  // Check the initial scroll position and update the header background
  updateHeaderBackground();

  // Listen for scroll events
  window.addEventListener("scroll", function () {
    // Update the header background on scroll
    updateHeaderBackground();
  });
});

function updateHeaderBackground() {
  var header = document.querySelector(".header");

  // Check if the page has been scrolled
  if (window.scrollY > 0) {
    // If scrolled, change the background color to black
    header.style.backgroundColor = "black";
  } else {
    // If at the top of the page, make the background transparent
    header.style.backgroundColor = "transparent";
  }
}
