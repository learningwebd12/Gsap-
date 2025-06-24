var tl = gsap.timeline();

tl.from("h4", {
  y: -40,
  delay: 0.5,
  duration: 1,
  opacity: 0,
});

tl.from("nav a", {
  y: -30,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".nav-btn", {
  y: -30,
  duration: 1,
  opacity: 0,
});

tl.from(".main-h1-text", {
  y: 80,
  opacity: 0,
});

tl.from(".pasag", {
  y: 80,
  opacity: 0,
});

tl.from(".btn-and-client", {
  y: 80,
  opacity: 0,
});

tl.from(".right-img", {
  x: 100,
  opacity: 0,
});
