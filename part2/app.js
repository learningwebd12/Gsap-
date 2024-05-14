gsap.to(".page2 h3", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: ".page2",
    //jaba hami pin use garxau trigger maa tesko parent lai rakhxau jastai ki h3 ko parent .page2 ho
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});

gsap.from("#page1 #box", {
  scale: 0,
  borderRadius: "50%",
  duration: 2,
  rotate: "360",
});

gsap.from("#page2 #box", {
  scale: 0,
  borderRadius: "50%",
  duration: 2,

  rotate: "360",
  //   scrollTrigger: "#page2 #box",
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%", // start vane ko animation kun thau dekhi start hune
    end: "top 30%", // end vane ko animation kun thau maa stop hune
    scrub: 3, //scrub le chai start ra ending dubai dekhaunxa xa ani true rakhda ne hunxa if hami lai smooth chaiyo vane 1,2,3,4,5 jati rakhda ne hunxa depends on us.
  },
});

gsap.from("#page3 h1", {
  opacity: 0,
  duration: 2,
  y: 100,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    markers: true,
  },
});

gsap.from("#page3 h2", {
  opacity: 0,
  duration: 2,
  y: 100,
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    markers: true,
  },
});
