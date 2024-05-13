//stagger le chai same name ko class, tag, id xa vane ak pachi arko chalxa: stagger:0.3
//initial to final xa vane gsap.to

//final to initial xa vane gsap.from
//hamro website ko sabai design afno thau maa xa ani hami lai purai lai afnai thau maa launu paryo
//
//
//
//

//timeline maa delay dinu pardai na aru maaa yeuta animation sakiyo vane matra chakxa arko
///timeline
var tl = gsap.timeline();

tl.from(".logo", {
  y: -30,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
});

//nav vitra ko a lai
tl.from("nav a", {
  y: -30,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
});
// var tl = gsap.timeline();

tl.to(".first", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});
tl.to(".second", {
  x: 1000,
});

tl.to(".third", {
  x: 1000,
  duration: 1,
});

//animation for three box first second thid
// gsap.to(".first", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to(".second", {
//   x: 1500,
//   backgroundColor: "green",
//   duration: 1.5,
//   delay: 2.5,
// });

// gsap.to(".third", {

//     x: 1500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay: 4,
// });

//animation for two box box1 box2
gsap.from("h1", {
  opacity: 0,
  y: 50,
  color: "red",
  delay: 2,
  duration: 1,
  stagger: 0.3,
});

gsap.from("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "yellow",
  borderRadius: "50%",
  scale: 0.5,
  repeat: -1, //kunai pani object lai regular/infinite animate garaunu paryo vane repeat:-1 garne 1 le chai 2 choti hunxa
  yoyo: true, // yoyo: true le chai bounce ko kaam garxa jata gayo teta bata fita auni kaam garxa
});

gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 2,
  rotate: 360,
});
