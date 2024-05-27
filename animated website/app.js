function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav h1, nav a, nav button", {
    y: -30,
    duartion: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duartion: 0.5,
  });
  tl.from(".center-part1 p", {
    x: -200,
    opacity: 0,
    duartion: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duartion: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      x: 200,
      opacity: 0,
      duartion: 0.4,
    },
    "-=0.7" //time ko andhar delay dine tarika
  );

  tl.from(".section1bottom img", {
    opacity: 0,
    Y: 30,
    stagger: 0.15,
    duartion: 0.6,
  });
}

page1Animation();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scrobber: "body",
    markers: true,
    start: "top 50%",
    end: "top -20%",
    scrub: 2,
  },
});

tl2.from(".services", {
  Y: -30,
  opacity: 0,
  duartion: 0.5,
});
tl2.from(
  ".elem.line1.left",
  {
    x: -300,
    opacity: 0,
    duartion: 1,
  },
  "anim1"
);
tl2.from(
  ".elem.line1.right",
  {
    x: 300,
    opacity: 0,
    duartion: 1,
  },
  "anim1"
);

tl2.from(
  ".elem.line2.left",
  {
    x: -300,
    opacity: 0,
    duartion: 1,
  },
  "anim2"
);
tl2.from(
  ".elem.line2.right",
  {
    x: 300,
    opacity: 0,
    duartion: 1,
  },
  "anim2"
);
