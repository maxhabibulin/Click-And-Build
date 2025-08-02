"use strict";

import CurrentYear from "./modules/current-year.js";
import Testimonial from "./modules/testimonial.js";

const testimonial = new Testimonial();
const currentYear = new CurrentYear();

const testimonialElements = {
  heading: document.querySelector("#testimonial-heading"),
  quote: document.querySelector("#testimonial-text-quote"),
  name: document.querySelector("#testimonial-author-name"),
  tag: document.querySelector("#testimonial-job-tag"),
  image: document.querySelector("#testimonial-image"),
  btnBackward: document.querySelector("#move-testimonial-backward"),
  btnForward: document.querySelector("#move-testimonial-forward"),
  getCurrentDot: function (counter) {
    return document.querySelector(`#dot-${counter + 1}`);
  },
};

const showCurrentYear = document.querySelector("#show-current-year");
showCurrentYear.textContent = currentYear.getCurrentYear();

let previousCounter = 0;

const render = () => {
  const { heading, quote, name, tag, image } = testimonial
    .getTestimonials()
    .at(testimonial.counter);
  testimonialElements.heading.textContent = heading;
  testimonialElements.quote.textContent = quote;
  testimonialElements.name.textContent = name;
  testimonialElements.tag.textContent = tag;
  testimonialElements.image.src = image;

  const previousDot = testimonialElements.getCurrentDot(previousCounter);
  const currentDot = testimonialElements.getCurrentDot(testimonial.counter);
  previousDot.className = "dot";
  currentDot.className = "dot dot--fill";
  previousCounter = testimonial.counter;
};

function goForward() {
  testimonial.moveForward();
  render();
}

function goBackward() {
  testimonial.moveBackward();
  render();
}

testimonialElements.btnForward.addEventListener("click", goForward);
testimonialElements.btnBackward.addEventListener("click", goBackward);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goForward();
  if (event.key === "ArrowLeft") goBackward();
});
