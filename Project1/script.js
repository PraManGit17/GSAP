const images = ["./pics/nike1.png", "./pics/nike2.png", "./pics/nike3.png"];
let index = 0;

function changeImage(next = true) {
    const imageElement = document.getElementById("shoeImage");

    // GSAP Animation (Fade Out + Scale Down)
    gsap.to(imageElement, { opacity: 0, scale: 0.9, duration: 0.5, onComplete: () => {
        index = next ? (index + 1) % images.length : (index - 1 + images.length) % images.length;
        imageElement.src = images[index];

        // GSAP Animation (Fade In + Scale Up)
        gsap.fromTo(imageElement, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.5 });
    }});
}

// Auto change image every 3 seconds
setInterval(() => changeImage(true), 3000);

// Manual Next & Previous Buttons
function nextImage() {
    changeImage(true);
}

function prevImage() {
    changeImage(false);
}

// gsap.from("#hr", {
//     height: "0px",  // Start from 0 height
//     duration: 1.5,  // Animation duration
//     ease: "power2.out"  // Smooth easing effect
//   });
  

//   gsap.from(".left-container", {
//     x: -200,  // Moves left initially
//     opacity: 0,
//     duration: 1.5,
//     ease: "power2.out"
//   });

//   gsap.from(".right-container", {
//     x: 200,  // Moves right initially
//     opacity: 0,
//     duration: 1.5,
//     ease: "power2.out"
//   });

// gsap.from("#hr", {
//     height: "0px",
//     duration: 1.5,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: "#hr",
//       start: "top 50%", 
//     }
//   });

//   gsap.from(".left-container", {
//     x: -200,
//     opacity: 0,
//     duration: 1.5,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".left-container",
//       start: "top 45%",
//       markers: true
//     }
//   });

//   gsap.from(".right-container", {
//     x: 200,
//     opacity: 0,
//     duration: 1.5,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".right-container",
//       start: "top 85%",
//     }
//   });




gsap.from(
    "#hr",
    {
      height: "0px", // Change this to the final height you want
      ease: "none",
      scrollTrigger: {
        trigger: "#hr",
        start: "top 80%",  // When 80% of viewport reaches hr
        end: "top 20%",   // When hr reaches 20% of viewport
        scrub: true,  // Makes the animation sync with scroll
      }
    }
  );

  gsap.utils.toArray(".left-container").forEach((left) => {
    gsap.from(left, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: left,
        start: "top 45%",
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
        start: "top 85%",
        scrub: true
      }
    });
  });