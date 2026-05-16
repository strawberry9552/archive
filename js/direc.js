$(function () {
<<<<<<< HEAD
  $(".menu li").on("click", function () {
    $(".menu li").removeClass("on");
    $(this).addClass("on");
  });
=======
  $(".pre:nth-child(1)").find("ul").simplyScroll({
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

>>>>>>> b58dea6 (260516 업뎃)
  $(".menu li").on("mouseenter", function () {
    $(".menu li").removeClass("hover");
    $(this).addClass("hover");
  });
  $(".menu li").on("mouseleave", function () {
    $(".menu li").removeClass("hover");
  });
<<<<<<< HEAD
  $("#leftSlide").simplyScroll({
    orientation: "vertical",
    speed: 0.5,
  });
=======
>>>>>>> b58dea6 (260516 업뎃)
});
