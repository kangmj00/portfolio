jQuery(document).ready(function ($) {
  // split text
  $(".split").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-lbel", txt);
  });
  //main bg
  gsap.to(".sec1 .blackBg", 6.5, {
    scale: 0,
    transformOrigin: "50% 50%",
    ease: "power4.out",
  });
  //main txt
  TweenMax.staggerFrom(
    ".sec1 h1 .split span",
    2,
    {
      delay: 3,
      opacity: 0,
      ease: "Elastic.easeOut",
      y: "10%",
    },
    0.05
  );
  TweenMax.to(".sec1 svg:nth-child(2)", 10, {
    rotation: -360,
    repeat: -1,
    ease: Linear.easeNone,
  });
  // main photo
  $(".mainImg_wrap").mousemove(function (e) {
    var x = $(".mainImg_wrap").width() / 2;
    var y = $(".mainImg_wrap").position().left;
    x =
      e.clientX -
      ($(".mainImg_wrap").width() / 2 + $(".mainImg_wrap").position().left);
    y =
      e.clientY -
      ($(".mainImg_wrap").height() / 2 + $(".mainImg_wrap").position().top);

    $(".mainImg_img").attr({
      style: "transform: translate(" + x / 20 + "px," + y / 10 + "px)",
    });
  });

  // tab
  $(".codeSec li a").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var index = $this.parent("li").index();
    var contents = $this.parents("ul").siblings().children();

    $this.parent().siblings().children().removeClass("active");
    $this.addClass("active");
    contents.hide();
    contents.eq(index).fadeIn();
  });

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > $(".sec2").offset().top - $(window).height() / 2) {
      setTimeout(function () {
        $(".sec2 .mainImg .mainImg_wrap").addClass("in");
      });
      setTimeout(function () {
        $(".sec2 .mainImg_txt .reveal:nth-child(1)").addClass("in");
      }, 300);
      setTimeout(function () {
        $(".sec2 .mainImg_txt .reveal:nth-child(2)").addClass("in_txt");
      }, 500);
    }
    if (scrollPosition > $(".sec3").offset().top - $(window).height() / 2) {
      gsap.from(
        ".sec3 .section_tit",
        1,
        { opacity: 1, ease: "power2.inOut" },
        "+=1"
      );
      TweenMax.staggerTo(
        ".sec3 .section_tit h2 span",
        0.5,
        { opacity: 1, scale: 1, y: 0, ease: "Bounce.easeOut" },
        0.05
      );
      setTimeout(function () {
        $(".sec3 .project_tit").addClass("in");
      });
      setTimeout(function () {
        $(".sec3 .project_imgWrap").addClass("in");
      }, 300);
      gsap.to(".sec3 .project_txtWrap", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      TweenMax.staggerTo(
        ".sec3 .project_txtWrap h5",
        0.5,
        { delay: 0.3, opacity: 1, scale: 1, y: 0, ease: "power2.inOut" },
        0.05
      );
      TweenMax.staggerTo(
        ".sec3 .project_txtWrap span",
        0.5,
        { delay: 0.5, opacity: 1, scale: 1, y: 0, ease: "power2.inOut" },
        0.05
      );
      var roateTop = $(this).scrollTop();
      gsap.to($(".arrow_circle"), {
        css: {
          transform: "rotate(" + roateTop + "deg)",
        },
      });
      $(".arrow_circle").hover(
        function () {
          gsap.to($(this), 0.09, {
            css: {
              scale: 1.15,
              backgroundColor: "#fff",
              rotation: 0,
            },
          });
        },
        function () {
          gsap.to($(this), {
            css: {
              scale: 1,
              backgroundColor: "#151515",
            },
          });
        }
      );
      $(".orange_circle").hover(
        function () {
          gsap.to($(this), 0.09, {
            css: {
              scale: 1.15,
              rotation: 0,
            },
          });
        },
        function () {
          gsap.to($(this), {
            css: {
              scale: 1,
            },
          });
        }
      );
    }
    if (scrollPosition > $(".sec4").offset().top - $(window).height() / 2) {
      gsap.to(".bgWhite", {
        opacity: 1,
      });
      setTimeout(function () {
        $(".site_wrap h3").addClass("in");
      });
      setTimeout(function () {
        $(".site_wrap p").addClass("in_txt");
      }, 200);
      setTimeout(function () {
        $(".photo").addClass("in");
      }, 400);
      gsap.to(".orange_circle", {
        delay: 2,
        opacity: 1,
      });
      gsap.to(".site_nav", {
        opacity: 1,
      });
      // gsap.staggerFrom(
      //   ".site_nav li",
      //   1,
      //   { width: 0, paddingLeft: 0, paddingRight: 0, ease: Power4.easeInOut },
      //   0.1
      // );
      // gsap.staggerTo(
      //   ".site_nav li a",
      //   1,
      //   { y: 0, ease: Power4.easeInOut },
      //   0.1
      // );
      gsap.to(
        ".codeSec",
        { delay: 1.7, opacity: 1, duration: 3, ease: "power4" },
        0.4
      );
    }
  });
});
