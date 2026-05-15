$(function () {
  let menu = document.querySelector(".menu");
  let list = document.querySelectorAll(".menu > li");

  list.addEventlistener("click", (e) => {
    list.classList.add("on");
  });
});
