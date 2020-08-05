// // // 글자 한글자씩 나오게
// var split = document.querySelectorAll(".splitText");
// split.forEach(function (el) {
//   let txt = el.nodeValue();
//   console.log(txt);
//   let split = txt.split("").join("</span><span aria-hidden='true'>");
//   split = "<span aria-hidden='true'>" + split + "</span>";
//   this.html(split).attr("aria-label", txt);
// });

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
jQuery(document).ready(function ($) {
  // 글자 한글자씩 나오게
  $(".splitText").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
  });

  setTimeout(function () {
    gsap.fromTo(
      "#section1 h1 em span",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.09,
        ease: "elastic.out(1, 0.3)",
      }
    );
  }, 2000);
});

window.addEventListener("scroll", function (e) {
  var scrollLocation = document.documentElement.scrollTop;
  var reveal = document.querySelectorAll(".reveal");
  var section2 = document.querySelector("#section2");
  var moveImg = document.querySelector(".mainImg_wrap");

  if (section2.getBoundingClientRect().top < scrollLocation) {
    reveal.forEach(el => {
      el.classList.add("in");
    });

    moveImg.addEventListener("mousemove", function (e) {
      gsap.to(".mainImg_cursor", {
        duration: 0.2,
        left: e.pageX - 10,
        top: e.pageY - 10,
      });
      const dir = this.getBoundingClientRect();

      this.style.setProperty("--x", e.clientX - (e.clientX / 2 + dir.left));
      e.clientY - (e.clientY / 2 + dir.top);
      this.style.setProperty("--y", e.clientY - (e.clientY / 2 + dir.top));

      moveImg.addEventListener("mouseleave", function () {
        this.style.setProperty("--x", 0);
        this.style.setProperty("--y", 0);
      });
    });
  }
});
