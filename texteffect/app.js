gsap.to(".text h1", {
  transform: "translateX(-90%)",
  scrollTrigger: {
    trigger: ".text",
    scroller: "body",

    start: "top 0%",
    end: "top -150%",
    scrub: 4,
    pin: true,
  },
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});
tl.to(
  "#top",
  {
    top: "-50%",
  },
  "a"
);

tl.to(
  "#bottom",
  {
    bottom: "-50%",
  },
  "a"
);
