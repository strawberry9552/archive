$(function () {
  let stw = gsap.utils.toArray(".rightBox li");
  gsap.to(stw, {
    yPercent: 100 * (stw.length - 8),

    scrollTrigger: {
      trigger: ".artwork",
      start: "center center",
      end: "+=2000",
      scrub: 2,
      pin: true,
    },
  });

  $(".leftBox").on("mouseenter", function () {
    $(".leftBox").removeClass("p_on");
    $(this).addClass("p_on");
  });
  $(".leftBox").on("mouseleave", function () {
    $(".leftBox").removeClass("p_on");
  });
});
