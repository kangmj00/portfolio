jQuery(document).ready(function ($) {
  // 글자 한글자씩 나오게
  $(".splitText").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
  });

  // section1에서 마우스 휠이나 트랙패드 키보드로 내릴시에 section2가 scrolltop 되면서 이미지가 왼쪽에서 오른쪽으로 서서히 나온다.
  $("#section1").on("mousewheel DOMMouseScroll", function (e) {
    // e.preventDefault();
  });

  // 움직이는 글자
  // h3에 있는 span 태그가 가로로 계속 움직이고 첫번째에 span태그가 맨 마지막 span 태그로 이동하면서 계속 움직이는  글자

  // 탭 메뉴 (site 코드 볼 수 있는 곳)
  $(".codeSection ul li a").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var index = $this.parent().index();
    var contents = $this.parents("ul").siblings().children();

    $this.parent().siblings().children().removeClass("active");
    $this.addClass("active");
    contents.hide();
    contents.eq(index).fadeIn();
  });
});

// gsap
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

// // NAVBAR
// TweenMax.staggerFrom(
//   ".navbar div",
//   1.5,
//   {
//     delay: 1.5,
//     opacity: 0,
//     y: "20",
//     ease: Expo.easeInOut,
//   },
//   0.08
// );

// // MEDIA
// TweenMax.staggerFrom(
//   ".media ul li",
//   1.5,
//   {
//     delay: 1.5,
//     opacity: 0,
//     x: "-20",
//     ease: Expo.easeInOut,
//   },
//   0.08
// );

// TEXT
TweenMax.from("#section2 .container h2", 1.5, {
  delay: 1,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from("#section2 .container h2", 1.5, {
  delay: 1.2,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from("#section2 .container h2", 1.5, {
  delay: 1.3,
  y: "100%",
  ease: Expo.easeInOut,
});

// TweenMax.from(".text h2", 1.5, {
//   delay: 1.5,
//   opacity: 0,
//   x: "-10000",
//   ease: Expo.easeInOut,
// });

// // SPONSOR
// TweenMax.from(".sponsor img", 1.5, {
//   delay: 1.5,
//   opacity: 0,
//   y: "20",
//   ease: Expo.easeInOut,
// });

// TweenMax.from(".sponsor p", 1.5, {
//   delay: 1.6,
//   opacity: 0,
//   y: "20",
//   ease: Expo.easeInOut,
// });

// // DISTORTION
// TweenMax.from(".distortion", 1.5, {
//   delay: 2,
//   opacity: 0,
//   y: "20",
//   ease: Expo.easeInOut,
// });

// // OVERLAY
// TweenMax.to(".first", 1.5, {
//   delay: 0.5,
//   top: "-100%",
//   ease: Expo.easeInOut,
// });

// TweenMax.to(".second", 1.5, {
//   delay: 0.7,
//   top: "-100%",
//   ease: Expo.easeInOut,
// });

// TweenMax.to(".third", 1.5, {
//   delay: 0.9,
//   top: "-100%",
//   ease: Expo.easeInOut,
// });
