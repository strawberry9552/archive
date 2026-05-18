$(function () {
  gsap.to(".arrow_r", {
    rotation: 135,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
  });

  $(".dw").on("click", function () {
    let i = $(this).index();
    let con = $("#container").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: con });
    $(".nav li").removeClass("on");
    $(".nav li").eq(i).addClass("on");
  });

  $(".textSlide").on("click", function () {
<<<<<<< HEAD
    // let s = $(this).index();
=======
    let s = $(this).index();
>>>>>>> 82c0ec7c0e11a7ba9c291bdd9cc63249131cb2de
    let dir = $(".direc").offset().top;
    $("html, body").stop().animate({ scrollTop: dir });
  });

  let main = $("#hero").offset().top;

  $(".nav li").on("click", function () {
    let pos = $(this).index();
    let sec = $("section")
      .eq(pos - 1)
      .offset().top;
    if (pos == 0) {
      $("html,body").stop().animate({ scrollTop: main });
    } else {
      $("html,body").stop().animate({ scrollTop: sec });
    }
    $(".nav li").removeClass("on");
    $(".nav li").eq(pos).addClass("on");
  });

  let s1 = $(".profile").offset().top;
  let s2 = $(".direc").offset().top;
  let s3 = $(".backup").offset().top;
  let s4 = $(".contact").offset().top;

  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    base = -300;
    if (sc >= main && sc < s1 + base) {
      $(".nav > li").removeClass("on");
      $(".nav > li").eq(0).addClass("on");
      $("section").removeClass("on");
    } else if (sc >= s1 + base && sc < s2 + base) {
      $(".nav > li").removeClass("on");
      $(".nav > li").eq(1).addClass("on");
      $("section").removeClass("on");
    } else if (sc >= s2 + base && sc < s3 + base) {
      $(".nav > li").removeClass("on");
      $(".nav > li").eq(2).addClass("on");
      $("section").removeClass("on");
    } else if (sc >= s3 + base && sc < s4) {
      $(".nav > li").removeClass("on");
      $(".nav > li").eq(3).addClass("on");
      $("section").removeClass("on");
    } else if (sc > s4 + base) {
      $(".nav > li").removeClass("on");
      $(".nav > li").eq(4).addClass("on");
      $("section").removeClass("on");
    }
  });
});
