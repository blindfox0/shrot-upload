const tl = gsap.timeline({ defaults: { ease: "back" } });

tl.fromTo(
  ".header",
  { opacity: 0, scale: 3, rotate: 60 },
  {
    opacity: 1,
    scale: 2,
    rotate: 30,
    duration: 0.5,
    delay: 0.3,
    ease: "power1.in",
  },
)
  .fromTo(
    ".header",
    {
      rotate: 30,
      scale: 2,
    },
    {
      rotate: 25,
      scale: 1.8,
      duration: 1,
      delay: 0,
      ease: "none",
    },
  )
  .to(".header", { rotate: 0, scale: 1, duration: 0.4, delay: 0 });

tl.fromTo(
  ".nav-header",
  { y: "-100%" },
  { y: "0%", duration: 0.4, delay: 0.2 },
);

tl.fromTo(
  ".upload",
  { opacity: 0, y: 999 },
  { opacity: 1, y: 0, duration: 0.4, delay: 0, ease: "expo.out" },
);
