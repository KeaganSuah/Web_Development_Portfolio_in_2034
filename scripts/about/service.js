// Loop through all the service_card class to implement the function in it
service_cards = document.querySelectorAll(".service_card");

// Loop through all the service_cards class to implement the function in it
flexboxGlows(service_cards);

// under the about page, there is two cards that require the glowing effect, therefore another function for the icon that includes both function is included inside
icon.onclick = function () {
  document.body.classList.toggle("light_theme");
  if (document.body.classList.contains("light_theme")) {
    icon.className = "bx bxs-moon";
    summaryLight(service_cards);
    summaryLight(journey_cards);
  } else {
    icon.className = "bx bxs-bulb";
    summaryDark(service_cards);
    summaryDark(journey_cards);
  }
};
