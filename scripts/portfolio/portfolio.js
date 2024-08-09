portfolio_cards = document.querySelectorAll(".portfolio_card");

// Loop through all the portfolio_card class to implement the function in it
gridGlows(portfolio_cards);

// change the cards to have shadow when on lightmode
iconClicked(portfolio_cards);

const closeModalButtons = document.querySelectorAll(".close-button");
const overlay = document.getElementById("overlay");
const backLink = document.querySelector(".back_link");

// to open the popup modal, it opens when the portfolio cards are clicked
portfolio_cards.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.querySelector(".card_title");
    const image = button.getElementsByTagName("img");
    const modal = document.querySelector(".modal");
    openModal(modal, title.textContent, image[0].src);
  });
});

// when the go back link is clicked, it will close the popup modal
backLink.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  closeModal(modal);
});

// when the overlay is clicked, it will close the popup modal
overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  closeModal(modal);
});

// when the close button is clicked, it will close the popup modal
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    closeModal(modal);
  });
});

// function to open the popup modal, as well as update the title, image and description
function openModal(modal, title, image) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");

  currentTitle = modal.querySelector(".title");
  currentTitle.textContent = title;

  currentImage = modal.getElementsByTagName("img");
  currentImage[0].src = image;

  currentDescription = modal.querySelector(".description");
  for (portfolio of portfolios) {
    if (portfolio.title == currentTitle.textContent) {
      currentDescription.textContent = portfolio.description;
    }
  }
}

// function to close the popup modal
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Array to store all the portfolio cards description
let portfolios = [];

// list of portfolio object to store the description and title
const datasci = {
  title: "Data Science Hackathon31",
  description:
    "Made during my participation in a data science competition. Data Science Hackathon31 is a collaborative event where participants work together to solve real-world problems using data analysis. Teams use various tools and techniques to analyse data, create models, and present their solutions. The event encourages innovation and teamwork, providing an opportunity for learning and networking among data enthusiasts.",
};
portfolios.push(datasci);
const AI_Hackathon26 = {
  title: "AI Hackathon26",
  description:
    "Made during my participation in a technology event. AI Hackathon26 is a collaborative competition where teams come together to develop innovative solutions using artificial intelligence. Participants use AI tools and techniques to create projects that address real-world challenges. The event promotes creativity and teamwork, offering a chance for learning and connecting with other AI enthusiasts.",
};
portfolios.push(AI_Hackathon26);
const NS_Roll_Call_System = {
  title: "NS Roll Call System",
  description:
    "Made during my national service. The Roll Call Web is a centralised platform where users can easily upload their attendance, significantly reducing the time required for administrative tasks and data uploads. Servicemen can submit their attendance status through the website, eliminating the need for manual submission via alternative means.",
};
portfolios.push(NS_Roll_Call_System);
const E_Commerce = {
  title: "E-Commerce Website Hackathon23",
  description:
    "As project leader, I lead the development of KIZEK Wear,a frontend-only e-commerce website dedicated to female sportswear. This project was developed as part of the Hackathon Team KIZEK, where our team secured the first-place position by creating an innovative and visually stunning user interface for a female sportswear marketplace.",
};
portfolios.push(E_Commerce);
const NS_Duty_Planner_System = {
  title: "NS Duty Planner System",
  description:
    "Made during my national service. The automated duty planner program was developed to streamline duty planning processes, reducing planning time from days to seconds. I analysis the duty planning process and devised an algorithm that efficiently schedules duties, ensuring optimal efficiency and accuracy.",
};
portfolios.push(NS_Duty_Planner_System);
const Portfolio_Website_V1 = {
  title: "Portfolio Website V1",
  description:
    "Welcome to my portfolio website! This is the first version of the portfolio website that I have made. This is the place where I showcase my skills and expertise as a first-year computer science student passionate about solving real-world problems through innovative projects.",
};
portfolios.push(Portfolio_Website_V1);
const AI_retail_assistant = {
  title: "AI retail assistant",
  description:
    "Made during my exploration of artificial intelligence. The AI Retail Assistant is a smart tool designed to help customers in stores by providing personalised shopping recommendations and answering product queries. It uses machine learning to understand customer preferences and improve the shopping experience, making it easier and more enjoyable for users to find what they need.",
};
portfolios.push(AI_retail_assistant);
const Platform_Game = {
  title: "2D Platform Game",
  description:
    "This project is about developing a 2D platform game reminiscent of Mario, featuring custom graphics and engaging mechanics. It introduces enhancements like jump acceleration and sound effects, offering diverse levels for players. Despite challenges like implementing the translate function, the project provided valuable learning experiences in programming and design, resulting in a successful blend of technical proficiency and creativity.",
};
portfolios.push(Platform_Game);
