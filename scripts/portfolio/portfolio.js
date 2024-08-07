portfolio_cards = document.querySelectorAll(".portfolio_card");

// Loop through all the portfolio_card class to implement the function in it
gridGlows(portfolio_cards);

// change the cards to have shadow when on lightmode
iconClicked(portfolio_cards);

const closeModalButtons = document.querySelectorAll(".close-button");
const overlay = document.getElementById("overlay");

portfolio_cards.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.querySelector(".card_title");
    // const title = figcaption.getElementsByTagName("h3");
    console.log(title.textContent);
    const modal = document.querySelector(".modal");
    openModal(modal, title.textContent);
  });
});

overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  closeModal(modal);
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    closeModal(modal);
  });
});

function openModal(modal, title) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");

  currentTitle = modal.querySelector(".title");
  currentTitle.textContent = title;
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
