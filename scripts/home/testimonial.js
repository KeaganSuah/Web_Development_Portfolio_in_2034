// Array of objects, each object are the testimonial and their properties that will be used in the other functions
const testimonials = [
  {
    name: "Emily Chen",
    role: "AI Team Lead, Apple",
    image: "/static/home/testimonial/emily.jpg",
    descripton:
      "Keagan's work as a Senior AI/ML Engineer at Apple was groundbreaking. He led the development of innovative AI solutions that significantly enhanced our technology offerings. His leadership ensured Apple remained at the forefront of the industry.",
    alternative: "image of emily face as icon",
  },
  {
    name: "Dr. Robert Matthews",
    role: "Professor, University of London",
    image: "/static/home/testimonial/robert.jpg",
    descripton:
      "Keagan was an outstanding student during his Master's program at the University of London. His deep understanding of machine learning and ability to apply theory to practice set him apart. He consistently delivered high-quality work in all his projects.",
    alternative: "image of robert face as icon",
  },
  {
    name: "Sarah Lim",
    role: "Lead Data Scientist, Shopee",
    image: "/static/home/testimonial/sarah.jpg",
    descripton:
      "At Shopee, Keagan's analytical skills and innovative mindset were invaluable. He played a key role in advancing our data-driven strategies, particularly in optimizing recommendation algorithms. His contributions directly impacted our business success.",
    alternative: "image of sarah face as icon",
  },
];

// Set the current index that the user is currently on
let i = 0;

// DOM of the overall container, and buttons
let testimonialContainer = document.getElementById("testimonial_card");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// when right next button, or left previous button are clicked, call function to change testimonial
nextBtn.addEventListener("click", () => {
  i = (testimonials.length + i + 1) % testimonials.length;
  displayTestimonial();
});

prevBtn.addEventListener("click", () => {
  i = (testimonials.length + i - 1) % testimonials.length;
  displayTestimonial();
});

// Function to change the testimonial base on the next index or previous index of the person who wrote the testimonial
let displayTestimonial = () => {
  let descripton = testimonialContainer.querySelector(
    ".testimonial_description"
  );
  let image = testimonialContainer.querySelector(".testimonial_image");
  let name = testimonialContainer.querySelector(".testimonial_name");
  let role = testimonialContainer.querySelector(".testimonial_role");
  descripton.textContent = testimonials[i].descripton;
  image.src = testimonials[i].image;
  image.alt = testimonials[i].alternative;
  name.textContent = testimonials[i].name;
  role.textContent = testimonials[i].role;
};
