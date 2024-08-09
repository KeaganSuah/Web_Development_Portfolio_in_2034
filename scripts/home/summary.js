var summary_cards = document.querySelectorAll(".summary_card");
var main_card = summary_cards[0];

// Change card container style from light to dark mode, as dark mode box shadow is narrower, card container variable change depending on which page user is currently on
function summaryDark(cardContainer) {
  for (const card of cardContainer) {
    card.style.background = "rgb(var(--gray-200), 0.02)";
    card.style.boxShadow = "0px 0px 3px 1.2px rgb(var(--gray-700))";
    main_card.style.background = " url(/static/home/whyme/featureDark.jpg)";
    main_card.style.backgroundSize = "cover";
    main_card.style.backgroundPosition = "center bottom";
    main_card.style.justifyContent = "flex-start";
  }
}

// Change card container style from dark to light mode, as light mode box shadow is wider, card container variable change depending on which page user is currently on
function summaryLight(cardContainer) {
  for (const card of cardContainer) {
    card.style.background =
      "linear-gradient(331deg, rgb(var(--gray-700), 0.3), rgb(var(--gray-900)))";
    card.style.boxShadow = "0px 0px 10px 2px rgb(var(--gray-600),0.5)";
    main_card.style.background = " url(/static/home/whyme/featureLight.jpg)";
    main_card.style.backgroundSize = "cover";
    main_card.style.backgroundPosition = "center bottom";
    main_card.style.justifyContent = "flex-start";
  }
}

// Loop through all the summary_card class to implement the function in it
gridGlows(summary_cards);

// change the cards to have shadow when on lightmode
iconClicked(summary_cards);
