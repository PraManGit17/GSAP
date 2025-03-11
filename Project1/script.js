





const images = ["./pics/nike1.png", "./pics/nike2.png", "./pics/nike3.png"];
const titles = [
    "Air Jordan 1 'Black Toe Reimagined'",
    "Air Jordan 1 Retro High OG",
    "Air Jordan 1 'Lost & Found'"
];
const descriptions = [
    "Scheduled for release on February 1, 2025, this iteration reimagines the classic 'Black Toe' design. It combines the iconic black, red, and white color scheme with modern materials and construction, offering a fresh take on a beloved classic.",
    "A modern twist on the Air Jordan 1, this version features premium leather, enhanced comfort, and a timeless aesthetic that sneaker enthusiasts will love.",
    "The reimagined 'Black Toe' features vintage detailing with a slightly aged midsole and refined stitching, paying homage to the original 1985 release."
];
const prices = ["₹15,000", "₹16,500", "₹14,800"];

let index = 0;

function changeContent(next = true) {
    const imageElement = document.getElementById("shoeImage");
    const titleElement = document.getElementById("shoeTitle");
    const descElement = document.getElementById("shoeDesc");
    const priceElement = document.getElementById("shoePrice");

    // Fade out all elements
    gsap.to([imageElement, titleElement, descElement, priceElement], { opacity: 0, duration: 0.4, onComplete: () => {
        // Update index
        index = next ? (index + 1) % images.length : (index - 1 + images.length) % images.length;

        // Change content
        imageElement.src = images[index];
        titleElement.textContent = titles[index];
        descElement.textContent = descriptions[index];
        priceElement.textContent = prices[index];

        // Fade in new elements
        gsap.to([imageElement, titleElement, descElement, priceElement], { opacity: 1, duration: 0.4 });
    }});
}

// Auto change every 3 seconds
setInterval(() => changeContent(true), 3000);

// Manual Next & Previous Buttons
function nextImage() {
    changeContent(true);
}

function prevImage() {
    changeContent(false);
}



gsap.from(
    "#hr",
    {
      height: "0px", // Change this to the final height you want
      ease: "none",
      scrollTrigger: {
        trigger: "#hr",
        start: "top 60%",  // When 80% of viewport reaches hr
        end: "top 10%",   // When hr reaches 20% of viewport
        scrub: true,  // Makes the animation sync with scroll
      }
    }
  );

  gsap.utils.toArray(".left-container").forEach((left) => {
    gsap.from(left, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: left,
        start: "top 60%",
        scrub: true
      }
    });
  });

  gsap.utils.toArray(".right-container").forEach((right) => {
    gsap.from(right, {
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: right,
        start: "top 60%",
        scrub: true
      }
    });
  });

  gsap.utils.toArray(".right-container img").forEach((img) => {
    gsap.from(img, {
      x: 200,       // Slide in from the right
      opacity: 0,   // Fade in
      rotate: 10,   // Slight rotation
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 70%",
        scrub: false,
      }
    });
  });
  