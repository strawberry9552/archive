$(function () {
  gsap.set(
    `
    .rightBox .t02,
    .rightBox .t03,
    .rightBox .t04,
    .rightBox .d02,
    .rightBox .d03,
    .rightBox .d04
    `,
    {
      y: 200,
      opacity: 0,
    },
  );
  gsap.set(
    `
.info02 .f02,
.info02 .f03,
.info02 .f04
    `,
    {
      opacity: 0,
      pointerEvents: "none",
    },
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".coding",
      start: "100% 100%",
      end: "+=3000",
      scrub: 3, //scrub은 스크롤의 길이에 따라 움직임이 조절됨.
      pin: true,
    },
  });
  for (let i = 2; i <= 4; i++) {
    const prev = `.rightBox .t0${i - 1}, .info02 .f0${i - 1}`;
    const cnt = `.rightBox .t0${i}, .info02 .f0${i}`;
    tl.to(prev, {
      y: -200,
      opacity: 0,
      duration: 1,
      delay: 2,
      pointerEvents: "none",
    })
      .to(cnt, {
        y: 0,
        opacity: 1,
        duration: 1,
        pointerEvents: "auto",
      })
      .fromTo(
        `.rightBox .d0${i}`,
        { y: 400, opacity: 0 },
        { y: 200, opacity: 1, duration: 1 },
        "<",
      );
  }

  $(".leftBox").on("mouseenter", function () {
    $(".leftBox").removeClass("p_on");
    $(this).addClass("p_on");
  });
  $(".leftBox").on("mouseleave", function () {
    $(".leftBox").removeClass("p_on");
  });
});
