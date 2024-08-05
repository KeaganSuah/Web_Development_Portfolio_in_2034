// get the DOM object for the icon for changing theme
var icon = document.getElementById("theme");

// Change card container style from light to dark mode, as dark mode box shadow is narrower, card container variable change depending on which page user is currently on
function summaryDark(cardContainer) {
  for (const card of cardContainer) {
    card.style.background = "rgb(var(--gray-200), 0.02)";
    card.style.boxShadow = "0px 0px 3px 1.2px rgb(var(--gray-700))";
  }
}

// Change card container style from dark to light mode, as light mode box shadow is wider, card container variable change depending on which page user is currently on
function summaryLight(cardContainer) {
  for (const card of cardContainer) {
    card.style.background =
      "linear-gradient(331deg, rgb(var(--gray-700), 0.3), rgb(var(--gray-900)))";
    card.style.boxShadow = "0px 0px 10px 2px rgb(var(--gray-600),0.5)";
  }
}

// function to change the theme for the roots when icon is clicked
icon.onclick = function () {
  document.body.classList.toggle("light_theme");
  if (document.body.classList.contains("light_theme")) {
    icon.className = "bx bxs-moon";
  } else {
    icon.className = "bx bxs-bulb";
  }
};

// function to change the theme for the roots when icon is clicked and page that consist of glowing effect
function iconClicked(cardContainer) {
  icon.onclick = function () {
    document.body.classList.toggle("light_theme");
    if (document.body.classList.contains("light_theme")) {
      icon.className = "bx bxs-moon";
      summaryLight(cardContainer);
    } else {
      icon.className = "bx bxs-bulb";
      summaryDark(cardContainer);
    }
  };
}
