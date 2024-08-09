// Get the images that is displayed on the hero section
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let building1 = document.getElementById("building1");
let plane = document.getElementById("plane");

// Preset all the items postions
building1.style.top = "210%";
moon.style.top = 100 + "px";
stars.style.top = -100 + "px";
plane.style.top = 1000 + "px";
plane.style.left = -200 + "px";

// this creates the parallax effect, when the user scroll, the image items will move based on the scroll value
window.addEventListener("scroll", () => {
  let value = window.scrollY;

  // Only when the scroll value is within the hero section, only then the elements will move
  if (value < 1500) {
    moon.style.transform = "rotate(" + value * 0.1 + "deg)";
    moon.style.top = 100 + value * 0.95 + "px";
    stars.style.top = -100 + value * 0.9 + "px";
    // For the plane, since it is moving out of the screen, the speed depends on the width of the screen
    if (window.screen.width > 1000) {
      plane.style.left = -400 + value * 0.8 + "px";
      plane.style.top = 1000 + value * 0.3 + "px";
    } else if (window.screen.width < 1000 && window.screen.width > 626) {
      plane.style.left = -400 + value * 0.5 + "px";
      plane.style.top = 1000 + value * 0.3 + "px";
    } else {
      plane.style.left = -300 + value * 0.35 + "px";
      plane.style.top = 1000 + value * 0.3 + "px";
    }
  }
});

// array of strings to be typed in the hero section
const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "Software Engineer",
    "AI/ML Engineer",
    "Data Scientist",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  BackDelay: 1600,
  loop: true,
});
