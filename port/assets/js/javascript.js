// // // 글자 한글자씩 나오게
// var split = document.querySelectorAll(".splitText");
// split.forEach(function (el) {
//   let txt = el.nodeValue();
//   console.log(txt);
//   let split = txt.split("").join("</span><span aria-hidden='true'>");
//   split = "<span aria-hidden='true'>" + split + "</span>";
//   this.html(split).attr("aria-label", txt);
// });

jQuery(document).ready(function ($) {
  // 글자 한글자씩 나오게
  $(".splitText").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
  });
});

// TweenMax.to(".first", 1.5, {
//   delay: 0.1,
//   left: "-100%",
//   ease: Expo.easeInOut,
// });
// TweenMax.to(".second", 1.5, {
//   delay: 0.25,
//   left: "-100%",
//   ease: Expo.easeInOut,
// });
// TweenMax.to(".third", 1.5, {
//   delay: 0.4,
//   left: "-100%",
//   ease: Expo.easeInOut,
// });
// TweenMax.to(".fourth", 1.5, {
//   delay: 0.55,
//   left: "-100%",
//   ease: Expo.easeInOut,
// });

setTimeout(function () {
  gsap.fromTo(
    "#section1 h1 em span",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.09,
      ease: Power2.easeInOut,
    }
  );
}, 2000);

window.addEventListener("scroll", function () {
  var reveal = document.querySelectorAll("reveal");
  reveal.forEach(function (element) {
    if (
      window.pageYOffset + document.documentElement.scrollTop <
      element.getBoundingClientRect().top
    ) {
      this.dataset.delay.queue(function () {
        this.classList.add("in");
      });
    }
  });
});
window.addEventListener("scroll", function () {
  var scrollLocation = document.documentElement.scrollTop;
  var section2 = document.querySelector("#section2");
  var section2Tit = document.querySelector("#section2 .container");
  var moveImg = document.querySelector(".mainImg_wrap");

  if (section2.getBoundingClientRect().top < scrollLocation) {
    // setTimeout(function () {
    //   document.querySelector(".mainImg").classList.add("in");
    // }, 0.001);
    // setTimeout(function () {
    //   document.querySelector(".mainTxt p:nth-child(1)").classList.add("in");
    // }, 500);
    // setTimeout(function () {
    //   document.querySelector(".mainTxt p:nth-child(2)").classList.add("in");
    // }, 700);

    moveImg.addEventListener("mousemove", function (e) {
      const dir = this.getBoundingClientRect();

      this.style.setProperty("--x", e.clientX - (e.clientX / 2 + dir.left));
      e.clientY - (e.clientY / 2 + dir.top);
      this.style.setProperty("--y", e.clientY - (e.clientY / 2 + dir.top));

      moveImg.addEventListener("mouseleave", function () {
        this.style.setProperty("--x", 2);
        this.style.setProperty("--y", 2);
      });
    });
  }
  if (section2Tit.getBoundingClientRect().top < scrollLocation) {
    gsap.from("#section2 .section_tit", 0.25, { scaleX: 0 });
    gsap.fromTo(
      "#section2 .section_tit .section_txt",
      0.75,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, ease: Expo.easeOut }
    );
  }
});
