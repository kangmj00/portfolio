// // 글자 한글자씩 나오게
// var split = document.querySelector(".splitText");
// var tab = document.querySelector(".codeSection ul li a");
// var that = document.querySelector(this);

// split.each(function () {
//   let txt = that.text();
//   let split = txt.split("").join("</span><span aria-hidden='true'>");
//   split = "<span aria-hidden='true'>" + split + "</span>";
//   that.html(split).attr("aria-label", txt);
// });
// $(window).on("scroll", function () {
//   var top = $(window).scrollTop();
// });
setTimeout(function () {
  gsap.fromTo(
    "#section1 h1 em span",
    { opacity: 0 },
    {
      delay: 0.8,
      opacity: 1,
      duration: 0.4,
      stagger: 0.09,
      ease: "elastic.out(1, 0.3)",
    }
  );
});

TweenMax.to(".first", 1.5, {
  delay: 0.1,
  left: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".second", 1.5, {
  delay: 0.25,
  left: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".third", 1.5, {
  delay: 0.4,
  left: "-100%",
  ease: Expo.easeInOut,
});
TweenMax.to(".fourth", 1.5, {
  delay: 0.55,
  left: "-100%",
  ease: Expo.easeInOut,
});

window.addEventListener("scroll", e => {
  var scrollLocation = document.documentElement.scrollTop;
  console.log(scrollLocation);
});
