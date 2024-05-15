const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "20% 60%",
    end: "100% 50%",
    // markers: true,
    scrub: 1,
  },
});
tl.to(".text-area-hover", {
  width: "100%",
});
