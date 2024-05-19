// gsap.to(".marque", {
//   transform: "translateX(-100%)",
//   duration: 4,
//   repeat: -1,
//   ease: "none",
// });

var window = window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      repeat: -1,
      duration: 4,
      ease: "none",
    });

    gsap.to(".marque img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      repeat: -1,
      duration: 4,
      ease: "none",
    });
    gsap.to(".marque img", {
      rotate: 0,
    });
  }
});
