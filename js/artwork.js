$(function () {
  let artwork = document.querySelector(".artwork");
  let rb = document.querySelector(".rightBox ul");

  gsap.to(rb, {
    y: () => -(rb.scrollHeight - artwork.offsetHeight),

    scrollTrigger: {
      trigger: ".artwork",
      start: "center center",
      end: "+=2000",
      scrub: 2,
      pin: true,
      invalidateOnRefresh: true,
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
