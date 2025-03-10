
gsap.from("#page1 #box",{
  scale: 0,
  delay: 1,
  duration : 1,
  rotate: 270
})

// gsap.from("#page2 #box",{
//   scale: 0,
//   delay: 1,
//   duration : 1,
//   rotate: 270,
//   // scrollTrigger: "#page2 #box" 

//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller : "body",
//     markers: true,
//     start: "top 90%"
//   }
// })

gsap.from("#page2 h1",{
  opacity: 0,
  delay: 1,
  duration : 2,
  x: 500,
  // scrollTrigger: "#page2 #box" 

  scrollTrigger: {
    trigger: "#page2 h1",
    scroller : "body",
    markers: true,
    start: "top 50%"
  }
})

gsap.from("#page2 h2",{
  opacity: 0,
  delay: 1,
  duration : 2,
  x: -500,
  // scrollTrigger: "#page2 #box" 

  scrollTrigger: {
    trigger: "#page2 h2",
    scroller : "body",
    markers: true,
    start: "top 50%"
  }
})


gsap.from("#page3 #box",{
  scale: 0,
  delay: 1,
  duration : 1,
  rotate: 270,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller : "body",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2  // animation wtih scroll
  } 
})

