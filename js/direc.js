$(function () {
  $(".pre:first-child").find("ul").simplyScroll({
    speed: 1,
    orientation: "vertical",
    direction: "forwards",
  });
  $(".menu li").on("click", function () {
    $(".menu li").removeClass("on");
    $(this).addClass("on");
    let a = $(this).index();
    $(".pre").removeClass("on");
    $(".pre").eq(a).addClass("on");
    $(".pre").eq(a).find("ul").simplyScroll({
      speed: 1,
      orientation: "vertical",
      direction: "forwards",
    });
  });

  $(".pre").on("mouseenter", function () {
    $(".pre").removeClass("fill");
    $(this).addClass("fill");
  });
  $(".pre").on("mouseleave", function () {
    $(".pre").removeClass("fill");
  });

  $(".menu li").on("mouseenter", function () {
    $(".menu li").removeClass("hover");
    $(this).addClass("hover");
  });
  $(".menu li").on("mouseleave", function () {
    $(".menu li").removeClass("hover");
  });

  $(".lastMenu").on("click", function () {
    let his = $(".backup").offset().top;
    $("html, body").stop().animate({ scrollTop: his });
  });

  let hor = gsap.utils.toArray(".history li");
  gsap.from(hor, {
    xPercent: 10,
  });
  gsap.to(hor, {
    xPercent: -70 * (hor.length - 5),

    scrollTrigger: {
      trigger: ".backup",
      start: "center center",
      end: "+=1000",
      scrub: 2,
      pin: true,
    },
  });
});
