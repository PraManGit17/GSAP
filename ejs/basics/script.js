// gsap.to("#box",{

//   x: 350,
//   duration: 1,
//   delay: 1,
//   rotate: 270,
//   backgroundColor: "blue",
//   borderRadius: "30px",
//   repeat: -1,
//   yoyo: true
// })


// gsap.from("#box1",{

//   x: 350,
//   duration: 1,
//   delay: 1,
//   rotate: 360,
//   borderRadius: "30%",
//   scale: 0.5
// })


// gsap.to("h1",{

//   x: 100,
//   color: "red",
//   duration: 1,
//   delay: 1,
//   stagger: -11,

// })

// gsap.to("#box",{

//   x: 350,
//   duration: 1,
//   delay: 1,
//   backgroundColor: "rgb(88, 185, 254)",
//   borderRadius: "30px",

// })

// gsap.to("#box1",{

//   x: 350,
//   duration: 1,
//   delay: 2,
//   backgroundColor: "rgb(176, 12, 94)",
//   rotate: 360

// })

// gsap.to("#box2",{

//   x: 350,
//   duration: 1,
//   delay: 5,
//   backgroundColor: "rgb(176, 12, 94)",
//   borderRadius: "30px",
//   scale: 0.5

// })


// var tl = gsap.timeline()

// tl.to("#box",
//   {
//     x: 200,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1
//   }
// )
// tl.to("#box1",
//   {
//     x: 200,
//     rotate: 360,
//     duration: 1.5,
//   }
// )
// tl.to("#box2",
//   {
//     x: 200,
//     rotate: 360,
//     duration: 1.5,
//   }
// )

var gl = gsap.timeline()

gl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 0.7
})

gl.from("h4", {
  opacity: 0,
  duration: 0.5,
  stagger: 1
})


