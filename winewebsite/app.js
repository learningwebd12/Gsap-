const clickbtn = document.getElementById("drop");
function myfunction() {
  clickbtn.classList.toggle("magic");
}

var tl = gsap.timeline();

tl.from(".list-nav", {
  stagger: 0.5,
  z: 0,
  opacity: 0,
  duration: 0.5,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".side-nav a", {
  z: 0,
  opacity: 0,
  duration: 0.5,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(
  ".main-text-h1",
  {
    stagger: 2,
    z: -90,
    opacity: 0,
    duration: 1, // Adjust the duration as needed
    delay: 0, // Delay the animation for 2 seconds
    ease: "Power2.easeInOut",
  },
  "-=1.5"
);

tl.from(
  ".main-pasag",
  {
    z: -70,
    opacity: 0,
    duration: 1.5,
    delay: 0,
    ease: "Power2.easeInOut",
  },
  "-=1.5"
);

tl.from(".main-context-btn", {
  z: -300,
  opacity: 0,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".hover", {
  z: 0,
  opacity: 0,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});

tl.from(".main-image-for-website", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});
tl.from(".facebook", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0,
  ease: "power2.easeInOut",
});

gsap.to(".text-container", {
  x: 750, // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".text-container",
    start: "0% 80%", // Start the animation when the div's top reaches the center of the viewport
    end: "30% 50%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: true, // Smoothly animate while scrolling
  },
});

gsap.to(".bottleimg", {
  x: 1200,
  y: 120, // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".bottleimg",
    start: "20% 100%", // Start the animation when the div's top reaches the center of the viewport
    end: "50% 50%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: true, // Smoothly animate while scrolling
  },
});

gsap.to(".second-container", {
  x: -650, // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".second-container",
    start: "0% 100%", // Start the animation when the div's top reaches the center of the viewport
    end: "50% 50%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: true, // Smoothly animate while scrolling
  },
});

gsap.to(".product-details .sidemainimages", {
  x: 400, // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".product-details",
    start: "top 120%", // Start the animation when the div's top reaches the center of the viewport
    end: "top 40%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: true, // Smoothly animate while scrolling
  },
});

gsap.to(".ones-product", {
  opacity: 1,
  y: "-65%",
  // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".ones-product",
    start: "top 100%", // Start the animation when the div's top reaches the center of the viewport
    end: "top 0%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: 1, // Smoothly animate while scrolling
  },
});

gsap.to(".all-product", {
  opacity: 1,
  y: "-80%",
  // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".all-product",
    start: "top 100%", // Start the animation when the div's top reaches the center of the viewport
    end: "top 0%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: 1, // Smoothly animate while scrolling
  },
});

gsap.to(".final", {
  opacity: 1,
  y: "-80%",
  // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".final",
    start: "top 100%", // Start the animation when the div's top reaches the center of the viewport
    end: "top 0%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: 1, // Smoothly animate while scrolling
  },
});

gsap.to(".next-img:nth-child(1)", {
  opacity: 1,
  x: "120%",
  // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".next-img",
    start: "top 120%", // Start the animation when the div's top reaches the center of the viewport
    end: "top 20%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: 1, // Smoothly animate while scrolling
  },
});

gsap.to(".next-img:nth-child(2)", {
  opacity: 1,
  x: "-120%",
  // Move the div to the left edge of the container
  scrollTrigger: {
    trigger: ".next-img",
    start: "top 120%", // Start the animation when the div's top reaches the center of the viewport
    end: "top 20%", // End the animation when the div's bottom reaches the center of the viewport
    markers: false, // Set to true for debugging
    scrub: 1, // Smoothly animate while scrolling
  },
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//javascript for checkbox
