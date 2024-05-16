var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff9c",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
