jQuery(document).ready(function ($) {
  // 글자 한글자씩 나오게
  $(".splitText").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
  });

  // 탭 메뉴 (site 코드 볼 수 있는 곳)
  $(".codeSection ul li a, .animation_tap li a").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    var index = $this.parent().index();
    var contents = $this.parents("ul").siblings().children();

    $this.parent().siblings().children().removeClass("active");
    $this.addClass("active");
    contents.hide();
    contents.eq(index).fadeIn();
  });

  /* ********************************* */
  // 메인 타이틀
  setTimeout(function () {
    gsap.fromTo(
      "#section1 h1 em span",
      0.25,
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

  gsap.to(".first", 1.5, {
    delay: 0.1,
    left: "-100%",
    ease: Expo.easeInOut,
  });
  gsap.to(".second", 1.5, {
    delay: 0.25,
    left: "-100%",
    ease: Expo.easeInOut,
  });
  gsap.to(".third", 1.5, {
    delay: 0.4,
    left: "-100%",
    ease: Expo.easeInOut,
  });
  gsap.to(".fourth", 1.5, {
    delay: 0.55,
    left: "-100%",
    ease: Expo.easeInOut,
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    $(".reveal").each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        $(this)
          .delay($(this).data("delay"))
          .queue(function () {
            $(this).addClass("in");
          });
      }
    });

    $(".subtitle_wrap").each(function () {
      if (
        $(window).scrollTop() + $(window).height() >
        $(this).closest("li").offset().top
      ) {
        gsap.to(".subtitle_wrap", 0.7, {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        gsap.to(".subtitle_wrap p", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });
      }
    });

    $(".arrow_circle").each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        gsap.to(this, 2, {
          opacity: 1,
          rotation: 360,
        });
      }
    });

    $(".codeSection").each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        gsap.to(this, 0.75, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
      }
    });
    if (
      scroll >
      $("#section2 .section_tit").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#section2 .section_tit", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section2 .section_txt", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    // site01
    if (scroll > $("#site01").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site01 .bgWhite", { width: "100%" });
      porject.to("#site01 .bgWhite .project_label", { opacity: 1 });
      porject.to("#site01 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site01 .bgWhite h3 em span", 0.1, {
        delay: 0.8,
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
    }
    if (
      scroll >
      $("#site01 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#site01 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#site01 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site01 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    // site02
    if (scroll > $("#site02").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site02 .bgWhite", { width: "100%" });
      porject.to("#site02 .bgWhite .project_label", { opacity: 1 });
      porject.to("#site02 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site02 .bgWhite h3 em span", 0.1, {
        delay: 0.8,
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
    }
    if (
      scroll >
      $("#site02 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#site02 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#site02 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site02 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    // site03
    if (scroll > $("#site03").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site03 .bgWhite", { width: "100%" });
      porject.to("#site03 .bgWhite .project_label", { opacity: 1 });
      porject.to("#site03 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site03 .bgWhite h3 em span", 0.1, {
        delay: 0.8,
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
    }
    if (
      scroll >
      $("#site03 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#site03 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#site03 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site03 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    // site04
    if (scroll > $("#site04").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site04 .bgWhite", { width: "100%" });
      porject.to("#site04 .bgWhite .project_label", { opacity: 1 });
      porject.to("#site04 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site04 .bgWhite h3 em span", 0.1, {
        delay: 0.8,
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
    }
    if (
      scroll >
      $("#site04 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#site04 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#site04 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site04 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    // site05
    if (scroll > $("#site05").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();

      porject.to("#site05 .bgWhite", { width: "100%" });
      porject.to("#site05 .bgWhite .project_label", { opacity: 1 });
      porject.to("#site05 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site05 .bgWhite h3 em span", 0.1, {
        delay: 0.8,
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
    }
    if (
      scroll >
      $("#site05 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#site05 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#site05 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site05 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    // app
    if (scroll > $("#site_app").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site_app .section_tit", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#site_app .section_txt", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }
    if (
      scroll >
      $("#site_app .scrollDown").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#site_app .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#site_app .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site_app .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    // animation
    if (scroll > $("#ani").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#ani", { width: "100%" });
      porject.to("#ani .animation_tap li:nth-child(1)", 0.7, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(2)", 0.7, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(3)", 0.7, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(4)", 0.7, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(5)", 0.7, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_con", 0.7, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }
    if (scroll > $("#ani_scroll").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#ani_scroll .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#ani_scroll .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani_scroll .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    //javascript
    if (
      scroll >
      $(".javascript_bgWhite").offset().top - $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to(".javascript_bgWhite", { width: "100%" });
      porject.to(".javascript_bgWhite .canvas_wrap", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });

      //   $(document).keydown(function (e) {
      //     if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      //       e.preventDefault();
      //     }
      //   }, false);
    }

    // about minji
    if (scroll > $("#section4").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#section4 .section_tit", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 .section_txt", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt01 span:nth-child(1)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt01 span:nth-child(2)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt01 span:nth-child(3)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt01 span:nth-child(4)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });

      porject.to("#section4 .exp_txt02 p:nth-child(1)", { width: "100%" });
      porject.to(
        "#section4 .exp_txt02 p:nth-child(1) span:nth-child(1)",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      porject.to(
        "#section4 .exp_txt02 p:nth-child(1) span:nth-child(2)",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      porject.to(
        "#section4 .exp_txt02 p:nth-child(1) span:nth-child(3)",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      porject.to(
        "#section4 .exp_txt02 p:nth-child(1) span:nth-child(4)",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );

      porject.to("#section4 .exp_txt02 p:nth-child(2)", { width: "100%" });
      porject.to(
        "#section4 .exp_txt02 p:nth-child(2) span:nth-child(1)",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      porject.to(
        "#section4 .exp_txt02 p:nth-child(2) span:nth-child(2)",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      porject.to(
        "#section4 .exp_txt02 p:nth-child(2) span:nth-child(3)",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );

      porject.to("#section4 .skillbox", { opacity: 1 });

      porject.to("#section4 li:nth-child(1) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(1)", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(2) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(2)", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(3) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(3)", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(4) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(4)", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(5) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(5)", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(6) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(6)", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });

      //skill box 성격
      if (scroll > $("#section5").offset().top - $(window).height() / 2) {
        var porject = gsap.timeline();
        porject.to("#section5 .sub_titWrap", 0.7, {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section5 .sub_tit", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });
        porject.to("#section5 .text_border", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });
      }

      if (scroll > $("#section6").offset().top - $(window).height() / 2) {
        var porject = gsap.timeline();
        porject.to("#section6 .section_tit", 0.7, {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section6 .section_txt", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });
      }
    }
  });

  // main img
  $(".mainImg_wrap").mousemove(function (e) {
    let x = $(".mainImg_wrap").width() / 2;
    let y = $(".mainImg_wrap").position().left;
    x =
      e.clientX -
      ($(".mainImg_wrap").width() / 2 + $(".mainImg_wrap").position().left);
    y =
      e.clientY -
      ($(".mainImg_wrap").height() / 2 + $(".mainImg_wrap").position().top);

    $(".mainMyBg").attr({
      style: "transform: translate(" + x / 20 + "px," + y / 20 + "px)",
    });
  });
});
