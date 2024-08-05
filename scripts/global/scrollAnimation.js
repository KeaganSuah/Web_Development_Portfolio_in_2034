const appearOptions = {
  rootMargin: "0px 0px -150px 0px",
};

// function for the javascript to detect when the element is within user view
const observerLast = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observerLast.unobserve(entry.target);
    } else {
      entry.target.classList.remove("show");
    }
  });
}, appearOptions);

const delayOptions = {
  rootMargin: "0px 0px -50px 0px",
};

const observerFirst = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observerFirst.unobserve(entry.target);
    } else {
      entry.target.classList.remove("show");
    }
  });
}, delayOptions);

const fadeElements = document.querySelectorAll(".fade");
fadeElements.forEach((el) => observerLast.observe(el));

const fadeUpElements = document.querySelectorAll(".fadeUp");
fadeUpElements.forEach((el) => observerFirst.observe(el));

const moveUpElements = document.querySelectorAll(".moveUp");
moveUpElements.forEach((el) => observerFirst.observe(el));

const fadeLeftElements = document.querySelectorAll(".fadeLeft");
fadeLeftElements.forEach((el) => observerLast.observe(el));

const fadeRightElements = document.querySelectorAll(".fadeRight");
fadeRightElements.forEach((el) => observerLast.observe(el));

const moveDownElements = document.querySelectorAll(".moveDown");
moveDownElements.forEach((el) => observerLast.observe(el));
