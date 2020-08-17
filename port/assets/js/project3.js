jQuery(document).ready(function ($) {
  // split text
  $(".split").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-lbel", txt);
  });
  //main bg
  gsap.to(".sec1 .blackBg", 3, {
    scale: 0,
    transformOrigin: "50% 50%",
    ease: "power4.out",
  });
  //main txt
  TweenMax.staggerFrom(
    ".sec1 h1 .split span",
    2,
    {
      delay: 1.3,
      opacity: 0,
      ease: Elastic.easeOut,
      y: "10%",
    },
    0.05
  );
  gsap.to(".sec1 svg:nth-child(2)", 10, {
    rotate: 360,
    repeat: -1,
  });
  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
  });
});
