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
  // 처음 들어갔을 때 로딩
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

  /* ************** 메인 타이틀 ***************** */
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

  /* ************** 스크롤 섹션 ***************** */
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    $(".codeSection").each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        gsap.to(this, 0.75, {
          delay: 1.5,
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
      }
    });
    /* ************** 메인 내 사진 ***************** */
    if (scroll > $("#section2").offset().top - $(window).height() / 2) {
      setTimeout(function () {
        $("#section2 .mainImg_wrap .reveal").addClass("in");
      });
      setTimeout(function () {
        $("#section2 .mainTxt p:nth-child(1)").addClass("in");
      }, 300);
      setTimeout(function () {
        $("#section2 .mainTxt p:nth-child(2)").addClass("in");
      }, 500);
    }

    /* ************** 01 my project title ***************** */
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

    /* ************** project list ***************** */

    // 평화문화진지
    if (
      scroll >
      $("#section2 .project_list li:nth-child(1)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();

      porject.to(
        "#section2 .container .project_list li:nth-child(1) h4",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      setTimeout(function () {
        $("#section2 .project_list li:nth-child(1) h4.reveal").addClass("in");
      });
      porject.to("#section2 .project_list li:nth-child(1) h4", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(1) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      porject.to(
        "#section2 .container .project_list li:nth-child(1) .subtitle_wrap",
        {
          delay: 0.2,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      porject.to(
        "#section2 .container .project_list li:nth-child(1) .subtitle_wrap p ",
        { delay: 0.2, opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 공감
    if (
      scroll >
      $("#section2 .project_list li:nth-child(2)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();

      porject.to(
        "#section2 .container .project_list li:nth-child(2) h4",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      setTimeout(function () {
        $("#section2 .project_list li:nth-child(2) h4.reveal").addClass("in");
      });
      porject.to("#section2 .project_list li:nth-child(2) h4", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(2) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      porject.to(
        "#section2 .container .project_list li:nth-child(2) .subtitle_wrap",
        {
          delay: 0.2,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      porject.to(
        "#section2 .container .project_list li:nth-child(2) .subtitle_wrap p ",
        { delay: 0.2, opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 아래로 가는 화살표
    if (
      scroll >
      $("#section2 .project_list li:nth-child(3)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#section2 .project_list li:nth-child(3) .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    // 대각선 화살표
    if (
      scroll >
      $("#section2 .project_list li:nth-child(4)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#section2 .project_list li:nth-child(4) .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 320,
        ease: Expo.easeOut,
      });
    }

    // 성평등활동센터
    if (
      scroll >
      $("#section2 .project_list li:nth-child(5)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();

      porject.to(
        "#section2 .container .project_list li:nth-child(5) h4",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      setTimeout(function () {
        $("#section2 .project_list li:nth-child(5) h4.reveal").addClass("in");
      });
      porject.to("#section2 .project_list li:nth-child(5) h4", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(5) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      porject.to(
        "#section2 .container .project_list li:nth-child(5) .subtitle_wrap",
        {
          delay: 0.2,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      porject.to(
        "#section2 .container .project_list li:nth-child(5) .subtitle_wrap p ",
        { delay: 0.2, opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 메가박스
    if (
      scroll >
      $("#section2 .project_list li:nth-child(6)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();

      porject.to(
        "#section2 .container .project_list li:nth-child(6) h4",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      setTimeout(function () {
        $("#section2 .project_list li:nth-child(6) h4.reveal").addClass("in");
      });
      porject.to("#section2 .project_list li:nth-child(6) h4", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(6) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      porject.to(
        "#section2 .container .project_list li:nth-child(6) .subtitle_wrap",
        {
          delay: 0.2,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      porject.to(
        "#section2 .container .project_list li:nth-child(6) .subtitle_wrap p ",
        { delay: 0.2, opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 아산나눔재단
    if (
      scroll >
      $("#section2 .project_list li:nth-child(7)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();

      porject.to(
        "#section2 .container .project_list li:nth-child(7) h4",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      setTimeout(function () {
        $("#section2 .project_list li:nth-child(7) h4.reveal").addClass("in");
      });
      porject.to("#section2 .project_list li:nth-child(7) h4", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(7) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      porject.to(
        "#section2 .container .project_list li:nth-child(7) .subtitle_wrap",
        {
          delay: 0.2,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      porject.to(
        "#section2 .container .project_list li:nth-child(7) .subtitle_wrap p ",
        { delay: 0.2, opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 오른쪽으로 가는 화살표
    if (
      scroll >
      $("#section2 .project_list li:nth-child(8)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to("#section2 .project_list li:nth-child(8) .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 270,
        ease: Expo.easeOut,
      });
    }

    // 어플리케이션
    if (
      scroll >
      $("#section2 .project_list li:nth-child(9)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();

      porject.to(
        "#section2 .container .project_list li:nth-child(9) h4",
        0.25,
        {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }
      );
      setTimeout(function () {
        $("#section2 .project_list li:nth-child(9) h4.reveal").addClass("in");
      });
      porject.to("#section2 .project_list li:nth-child(9) h4", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(9) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      porject.to(
        "#section2 .container .project_list li:nth-child(9) .subtitle_wrap",
        {
          delay: 0.2,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      porject.to(
        "#section2 .container .project_list li:nth-child(9) .subtitle_wrap p ",
        { delay: 0.2, opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // project all
    if (
      scroll >
      $("#section2 .container .project_list li:nth-child(10)").offset().top -
        $(window).height() / 2
    ) {
      var porject = gsap.timeline();
      porject.to(
        "#section2 .container .project_list li:nth-child(10) .orange_circle",
        {
          opacity: 1,
          duration: 1,
          rotation: 360,
          ease: Expo.easeOut,
        }
      );
    }

    /* ************** site01 ***************** */
    if (scroll > $("#site01").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site01 .bgWhite", { width: "100%" });
      porject.to("#site01 .bgWhite .project_label", { scaleX: 1, opacity: 1 });
      porject.to("#site01 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site01 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site01 .reveal").addClass("in");
      }, 1500);
      porject.to("#site01 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site01 scrolldown ***************** */
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
        scaleX: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site01 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site02 ***************** */
    if (scroll > $("#site02").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site02 .bgWhite", { width: "100%" });
      porject.to("#site02 .bgWhite .project_label", { scaleX: 1, opacity: 1 });
      porject.to("#site02 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site02 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site02 .reveal").addClass("in");
      }, 1500);
      porject.to("#site02 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site02 scrolldown ***************** */
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
        scaleX: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site02 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site03 ***************** */
    if (scroll > $("#site03").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site03 .bgWhite", { width: "100%" });
      porject.to("#site03 .bgWhite .project_label", { scaleX: 1, opacity: 1 });
      porject.to("#site03 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site03 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site03 .reveal").addClass("in");
      }, 1500);
      porject.to("#site03 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site03 scrolldown ***************** */
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
        scaleX: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site03 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site04 ***************** */
    if (scroll > $("#site04").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#site04 .bgWhite", { width: "100%" });
      porject.to("#site04 .bgWhite .project_label", { scaleX: 1, opacity: 1 });
      porject.to("#site04 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site04 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site04 .reveal").addClass("in");
      }, 1500);
      porject.to("#site04 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site04 scrolldown ***************** */
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
        scaleX: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site04 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site05 ***************** */
    if (scroll > $("#site05").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();

      porject.to("#site05 .bgWhite", { width: "100%" });
      porject.to("#site05 .bgWhite .project_label", { scaleX: 1, opacity: 1 });
      porject.to("#site05 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      porject.to("#site05 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site05 .reveal").addClass("in");
      }, 1500);
      porject.to("#site05 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site05 scrolldown ***************** */
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
        scaleX: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site05 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** app (mobile) ***************** */
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
      porject.to(".mobile_codeSection article:nth-child(1) ul li", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(2)",
        0.25,
        {
          left: "8%",
        }
      );
      porject.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(3)",
        0.25,
        {
          left: "16%",
        }
      );
      porject.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(4)",
        0.25,
        {
          left: "24%",
        }
      );
      porject.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(5)",
        0.25,
        {
          left: "32%",
        }
      );
    }
    /* ************** app (mobile) scrolldown ***************** */
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
        scaleX: 1,
        ease: Expo.easeOut,
      });
      porject.to("#site_app .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** animation ***************** */
    if (scroll > $("#ani").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();
      porject.to("#ani", { width: "100%" });
      porject.to("#ani .animation_tap li:nth-child(1)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(2)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(3)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(4)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_tap li:nth-child(5)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#ani .animation_con", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }
    /* ************** animation scrolldown ***************** */
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
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#ani_scroll .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** javascript ***************** */
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

    /* ************** about minji ***************** */
    if (scroll > $("#section4").offset().top - $(window).height() / 2) {
      var porject = gsap.timeline();

      // about minji tit
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
      //무엇도 직선으로 움지이지 않는다.
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

      // 내 사진
      setTimeout(function () {
        $("#section4 .reveal").addClass("in");
      }, 1500);

      // 사진 옆 글자
      porject.to("#section4 .exp_txt02 p:nth-child(1)", { width: "100%" });
      porject.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(1)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(2)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(3)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(4)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });

      porject.to("#section4 .exp_txt02 p:nth-child(2)", { width: "100%" });
      porject.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(1)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(2)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(3)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });

      // 스킬박스 배경
      porject.to("#section4 .skillbox", { opacity: 1 });
      // 스킬박스 글자
      porject.to("#section4 li:nth-child(1) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(1)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(2) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(2)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(3) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(3)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(4) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(4)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(5) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(5)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      porject.to("#section4 li:nth-child(6) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      porject.to("#section4 li:nth-child(6)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });

      /* **************  my works style with ***************** */
      if (scroll > $("#section5").offset().top - $(window).height() / 2) {
        var porject = gsap.timeline();

        // 작은 글자 타이틀
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

        // 움직이는 글자
        porject.to("#section5 .text_border:nth-child(1)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section5 .text_border:nth-child(2)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section5 .text_border:nth-child(3)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section5 .text_border:nth-child(4)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
      }

      /* **************  contact title ***************** */
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
        porject.to("#section6 ul li:nth-child(1) h5", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
        porject.to("#section6 ul li:nth-child(1) p", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
        porject.to("#section6 ul li:nth-child(2) h5", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
        porject.to("#section6 ul li:nth-child(2) p", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
      }

      /* **************  contact form ***************** */
      if (
        scroll >
        $("#section6 article:nth-child(2)").offset().top -
          $(window).height() / 2
      ) {
        var porject = gsap.timeline();

        // 작은 글자 타이틀
        porject.to("#section6 .sub_titWrap", 0.7, {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section6 .sub_tit", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });

        // hello
        porject.to("#section6 h3", 0.5, {
          opacity: 1,
          scaleY: 1,
          duration: 2,
          transformOrigin: "0%",
          ease: Power4.easeInOut,
        });
      }

      /* **************  send ***************** */
      if (
        scroll >
        $("#section6 article:nth-child(2) form").offset().top -
          $(window).height() / 2
      ) {
        var porject = gsap.timeline();

        // form
        porject.to("#section6 form dt:nth-child(1)", 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        });
        porject.to("#section6 form dt:nth-child(1) span", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section6 form dd:nth-child(2) input", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });

        porject.to("#section6 form dt:nth-child(3)", 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        });
        porject.to("#section6 form dt:nth-child(3) span", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section6 form dd:nth-child(4) input", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });

        porject.to("#section6 form dt:nth-child(5)", 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        });
        porject.to("#section6 form dt:nth-child(5) span", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        porject.to("#section6 form dd:nth-child(6) input", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        // 주황색 원
        porject.to("#section6 .orange_circle", {
          opacity: 1,
          duration: 1,
          rotation: 360,
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
