$(function () {
  $(".menu li").on("click", function () {
    $(".menu li").removeClass("on");
    $(this).addClass("on");
  });
  $(".menu li").on("mouseenter", function () {
    $(".menu li").removeClass("hover");
    $(this).addClass("hover");
  });
  $(".menu li").on("mouseleave", function () {
    $(".menu li").removeClass("hover");
  });

  // $(".direcLeft").on("mouseenter", function () {
  //   $(this).addClass("fill");
  // });

  $("#gallery").simplyScroll({
    orientation: "vertical",
    speed: 0.5,
  });
});
