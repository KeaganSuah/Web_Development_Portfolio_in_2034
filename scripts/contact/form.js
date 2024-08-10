const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

var nameStatus = false;
var emailStatus = false;
var messageStatus = false;

// when user click submit, it will stop the default submission process and run these function below instead
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  if (nameStatus == true && emailStatus == true && messageStatus == true) {
    alert(
      "Successfully submited, since this is a school assignment, no actual data will be recorded"
    );
  }
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
  inputControl.classList.add("success");
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
    nameStatus = false;
  } else {
    successFunction(name);
    nameStatus = true;
  }

  if (emailValue === "") {
    errorFunction(email, "Please provide your email");
    emailStatus = false;
  } else if (!checkEmailValidity(emailValue)) {
    errorFunction(email, "Please provide a valid email adress");
    emailStatus = false;
  } else {
    successFunction(email);
    emailStatus = true;
  }

  if (messageValue === "") {
    errorFunction(message, "Please write a message for me");
    messageStatus = false;
  } else {
    successFunction(message);
    messageStatus = true;
  }
}
