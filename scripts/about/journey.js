// Loop through all the journey_card class to implement the function in it
cardContainer = document.querySelectorAll(".journey_card");

for (const card of cardContainer) {
  card.onmousemove = (e) => glowOnMouse(e);

  card.addEventListener("mouseenter", function () {
    if (!document.body.classList.contains("light_theme")) {
      card.style.setProperty("--before_opacity", "1");
    }
  });

  card.addEventListener("mouseleave", function () {
    card.style.setProperty("--before_opacity", "0");
  });
}
