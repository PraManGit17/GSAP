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

