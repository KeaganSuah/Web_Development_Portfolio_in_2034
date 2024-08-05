const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// function when element is not successful
const errorFunction = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

// function when all elements are successful
const successFunction = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

// check of the email place is a valid email
const checkEmailValidity = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email.toLowerCase()));
};

// Function to check all inputs and see if user has place correctly
function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "") {
    errorFunction(name, "Please tell me your name");
  } else {
    successFunction(name);
  }

  if (emailValue === "") {
    errorFunction(email, "Please provide your email");
  } else if (!checkEmailValidity(emailValue)) {
    errorFunction(email, "Please provide a valid email adress");
  } else {
    successFunction(email);
  }

  if (messageValue === "") {
    errorFunction(message, "Please write a message for me");
  } else {
    successFunction(message);
  }
}
