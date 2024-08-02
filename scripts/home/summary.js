var cardContainer = document.querySelectorAll(".summary_card");

// Loop through all the summary_card class to implement the function in it
for (const card of cardContainer) {
  card.onmousemove = (e) => glowOnMouse(e);

  // Hover effect for the card within the container
  card.addEventListener("mouseenter", function () {
    if (!document.body.classList.contains("light_theme")) {
      card.style.setProperty("--before_opacity", "1");
    }
    // If the card is larger, increase the size of the glow
    if (card.classList.contains("large")) {
      card.style.setProperty("--glow_size", "1400px");
    }
  });

  // reset back to the old styles when no longer hover
  card.addEventListener("mouseleave", function () {
    card.style.setProperty("--before_opacity", "0");
    card.style.setProperty("--glow_size", "800px");
  });
}
