const testimonials = [
  {
    img: "./images/image-tanya.jpg",
    testimonial:
      " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    from: {
      firstName: "Tanya Sinclair",
      lastName: "UX Engineer",
    },
  },
  {
    img: "./images/image-john.jpg",
    testimonial:
      "  “ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    from: {
      firstName: "John Tarkpor",
      lastName: "Junior Front-end Developer",
    },
  },
];

let index = 0;
const changeIterators = (e) => {
  const iterator = e.target.className;
  console.log(iterator);

  if (iterator === "next") ++index;

  if (iterator === "prev") --index;

  if (index < 0) index = testimonials.length - 1;
  else if (index > testimonials.length - 1) index = 0;

  changeTestimonials(index);
};

const testimonialDiv = document.createElement("div"); // parent div
testimonialDiv.classList.add("testimonial");
const testimonialText = document.createElement("p"); // paragraph for text
const firstName = document.createElement("span"); // span for storing first name
const lastName = document.createElement("span"); // span for storing lastname
const imageWrapper = document.createElement("div"); // creating wrapper for image
const image = document.createElement("img");

// text content wrapper
const textWrapper = document.createElement("div");
textWrapper.appendChild(testimonialText);
textWrapper.appendChild(firstName);
textWrapper.appendChild(lastName);
textWrapper.classList.add("text-wrapper");

imageWrapper.classList.add("user-image");
imageWrapper.appendChild(image);

// creating previous and next image elements
const preImage = document.createElement("img");
preImage.classList.add("prev");
preImage.setAttribute("src", "./images/icon-prev.svg");
preImage.addEventListener("click", changeIterators);

const nextImage = document.createElement("img");
nextImage.classList.add("next");
nextImage.setAttribute("src", "./images/icon-next.svg");
nextImage.addEventListener("click", changeIterators);

// creating previous and next wrapper
const iteratorsWrapper = document.createElement("div");
iteratorsWrapper.classList.add("iterators");

//appending it inside a div
iteratorsWrapper.appendChild(preImage);
iteratorsWrapper.appendChild(nextImage);

// appending it inside the user image wrapper
imageWrapper.appendChild(iteratorsWrapper);

testimonialDiv.appendChild(imageWrapper);
testimonialDiv.appendChild(textWrapper);

const updateTextContent = (i) => {
  testimonialText.textContent = testimonials[i].testimonial;
  firstName.textContent = testimonials[i].from.firstName;
  lastName.textContent = testimonials[i].from.lastName;
};

const changeTestimonials = (i = 0) => {
  this.setTimeout(() => {
    image.setAttribute("src", `${testimonials[i].img}`);
  }, 20);

  updateTextContent(i);

  const wrapper = document.querySelector(".testimonials");
  wrapper.appendChild(testimonialDiv);
};

changeTestimonials();

