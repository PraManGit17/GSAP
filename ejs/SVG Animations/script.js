var initialPath = 'M 10 100 Q 250 100 500 10';
var finalPath = 'M 10 100 Q 250 100 500 10';

var string = document.querySelector("#string");

string.addEventListener("mouseenter", function (dets) {
    let bounds = string.getBoundingClientRect(); 
    let relativeX = dets.clientX - bounds.left; 
    let relativeY = dets.clientY - bounds.top;

    let path = `M 10 100 Q ${relativeX} ${relativeY} 500 10`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 2,
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.7,
        ease: "bounce.out" 
    });
});
