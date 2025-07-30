"strict";

class Testimonial {
  #counter;
  #testimonials;

  constructor() {
    this.#counter = 0;
    this.#testimonials = [
      {
        heading: `"I will never go back to prebuilt PC's again!"`,
        quote: `Every component is carefully selected, and the performance is
              unbeatable. The build quality is top-notch, and the attention to
              detail makes all the difference!`,
        name: "Evan Mask",
        tag: "@DriftTech",
        image: "/img/customer-1.avif",
      },
      {
        heading: `"Custom builds changed how I game forever!"`,
        quote: `The speed and power of this machine blew me away.
          Every part was chosen with precision, and the result
          is a flawless experience — smooth, fast, and reliable!`,
        name: "Lara Kent",
        tag: "@PixelForge",
        image: "/img/hero.avif",
      },
      {
        heading: `"The best PC I've ever owned — hands down!"`,
        quote: `Everything runs buttery smooth, even the most demanding games.
         The attention to detail in the build is incredible, and I love
         knowing each part was chosen just for me.`,
        name: "Jordan Blake",
        tag: "@NextGenBuilds",
        image: "/img/customer-1.avif",
      },
      {
        heading: `"From order to gameplay — flawless experience!"`,
        quote: `Setting it up was a breeze, and I was gaming at ultra settings
         within minutes. The performance is unmatched and the design
         is sleek, quiet, and powerful.`,
        name: "Riley Chen",
        tag: "@UltraMods",
        image: "/img/hero.avif",
      },
    ];
  }

  get counter() {
    return this.#counter;
  }

  set counter(value) {
    this.#counter = value;
  }

  getTestimonials() {
    return this.#testimonials;
  }

  moveForward() {
    if (this.#counter > 2) {
      this.counter = -1;
    }
    this.#counter++;
  }

  moveBackward() {
    if (this.#counter < 1) {
      this.#counter = 4;
    }
    this.#counter--;
  }
}

export default Testimonial;
