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

  // project site menu
  $(".site_nav a[href^='#']").on("click", function () {
    let target = $($(this).attr("href"));

    if (target.length) {
      $("html, body").animate(
        { scrollTop: target.offset().top },
        600,
        "easeInOutExpo"
      );
    }
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
    let scrollPosition = $(window).scrollTop();

    $(".codeSection").each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        gsap.to(this, 0.75, {
          delay: 1,
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
      }
    });

    /* ************** 메인 내 사진 ***************** */
    if (scrollPosition > $("#section2").offset().top - $(window).height() / 2) {
      setTimeout(function () {
        $("#section2 .mainImg_wrap .reveal").addClass("in");
      });
      setTimeout(function () {
        $("#section2 .mainTxt p:nth-child(1)").addClass("in");
      }, 300);
      setTimeout(function () {
        $("#section2 .mainTxt p:nth-child(2)").addClass("in_txt");
      }, 500);
    }

    /* ************** 01 my project title ***************** */
    if (
      scrollPosition >
      $("#section2 .section_tit").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#section2 .section_tit", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#section2 .section_txt", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }

    /* ************** project list ***************** */

    // 평화문화진지
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(1)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();

      setTimeout(function () {
        $("#section2 .project_list li:nth-child(1) h4.reveal").addClass("in");
      });
      scr.to("#section2 .project_list li:nth-child(1) h4", 0.25, {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(1) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      scr.to(
        "#section2 .container .project_list li:nth-child(1) .subtitle_wrap",
        {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(1) .subtitle_wrap p ",
        { opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 공감
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(2)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();

      setTimeout(function () {
        $("#section2 .project_list li:nth-child(2) h4.reveal").addClass("in");
      });
      scr.to("#section2 .project_list li:nth-child(2) h4", 0.25, {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(2) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      scr.to(
        "#section2 .container .project_list li:nth-child(2) .subtitle_wrap",
        {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(2) .subtitle_wrap p ",
        { opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 아래로 가는 화살표
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(3)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#section2 .project_list li:nth-child(3) .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    // 대각선 화살표
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(4)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#section2 .project_list li:nth-child(4) .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 320,
        ease: Expo.easeOut,
      });
    }

    // 성평등활동센터
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(5)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();

      setTimeout(function () {
        $("#section2 .project_list li:nth-child(5) h4.reveal").addClass("in");
      });
      scr.to("#section2 .project_list li:nth-child(5) h4", 0.25, {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(5) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      scr.to(
        "#section2 .container .project_list li:nth-child(5) .subtitle_wrap",
        {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(5) .subtitle_wrap p ",
        { opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 메가박스
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(6)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();

      setTimeout(function () {
        $("#section2 .project_list li:nth-child(6) h4.reveal").addClass("in");
      });
      scr.to("#section2 .project_list li:nth-child(6) h4", 0.25, {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(6) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      scr.to(
        "#section2 .container .project_list li:nth-child(6) .subtitle_wrap",
        {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(6) .subtitle_wrap p ",
        { opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 아산나눔재단
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(7)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();

      setTimeout(function () {
        $("#section2 .project_list li:nth-child(7) h4.reveal").addClass("in");
      });
      scr.to("#section2 .project_list li:nth-child(7) h4", 0.25, {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(7) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      scr.to(
        "#section2 .container .project_list li:nth-child(7) .subtitle_wrap",
        {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(7) .subtitle_wrap p ",
        { opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // 오른쪽으로 가는 화살표
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(8)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#section2 .project_list li:nth-child(8) .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 270,
        ease: Expo.easeOut,
      });
    }

    // 어플리케이션
    if (
      scrollPosition >
      $("#section2 .project_list li:nth-child(9)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();

      setTimeout(function () {
        $("#section2 .project_list li:nth-child(9) h4.reveal").addClass("in");
      });
      scr.to("#section2 .project_list li:nth-child(9) h4", 0.25, {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(
          "#section2 .project_list li:nth-child(9) .project_lstImgWrap.reveal"
        ).addClass("in");
      }, 500);
      scr.to(
        "#section2 .container .project_list li:nth-child(9) .subtitle_wrap",
        {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(9) .subtitle_wrap p ",
        { opacity: 1, duration: 1, ease: Expo.easeOut }
      );
    }

    // project all
    if (
      scrollPosition >
      $("#section2 .container .project_list li:nth-child(10)").offset().top -
        $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to(
        "#section2 .container .project_list li:nth-child(10) .orange_circle",
        {
          opacity: 1,
          duration: 1,
          rotation: 360,
          ease: Expo.easeOut,
        }
      );
    }
    // 사이트 메뉴 없어질 때
    if (scrollPosition < $("#section3").offset().top) {
      var scr = gsap.timeline();

      scr.to(".site_nav", {
        opacity: 0,
      });
    }
    // 사이트 메뉴 나타날 때
    if (scrollPosition > $("#site01").offset().top - 200) {
      var scr = gsap.timeline();

      scr.to(".site_nav", {
        opacity: 1,
      });
      $(".site_nav li a").removeClass("active");
      $(".site_nav li:nth-child(1) a").addClass("active");
      scr.to(".site_nav li:nth-child(1) a", {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(2) a", {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(3) a", {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(4) a", {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(5) a", {
        opacity: 1,
      });
    }

    /* ************** site01 ***************** */
    if (scrollPosition > $("#site01").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();

      scr.to("#site01 .bgWhite", { width: "100%" });
      scr.to("#site01 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      scr.to("#site01 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site01 .reveal").addClass("in");
      }, 3000);
      scr.to("#site01 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site01 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site01 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site01 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#site01 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site01 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        scaleX: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site01 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site02 ***************** */
    if (scrollPosition > $("#site02").offset().top - 200) {
      $(".site_nav li a").removeClass("active");
      $(".site_nav li:nth-child(2) a").addClass("active");
    }
    if (scrollPosition > $("#site02").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();

      scr.to("#site02 .bgWhite", { width: "100%" });
      scr.to("#site02 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      scr.to("#site02 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site02 .reveal").addClass("in");
      }, 3000);
      scr.to("#site02 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site02 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site02 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site02 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#site02 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site02 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        scaleX: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site02 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site03 ***************** */
    if (scrollPosition > $("#site03").offset().top - 200) {
      $(".site_nav li a").removeClass("active");
      $(".site_nav li:nth-child(3) a").addClass("active");
    }
    if (scrollPosition > $("#site03").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();
      scr.to("#site03 .bgWhite", { width: "100%" });
      scr.to("#site03 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      scr.to("#site03 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site03 .reveal").addClass("in");
      }, 3000);
      scr.to("#site03 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site03 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site03 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site03 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#site03 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site03 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        scaleX: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site03 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site04 ***************** */
    if (scrollPosition > $("#site04").offset().top - 200) {
      $(".site_nav li a").removeClass("active");
      $(".site_nav li:nth-child(4) a").addClass("active");
    }
    if (scrollPosition > $("#site04").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();
      scr.to("#site04 .bgWhite", { width: "100%" });
      scr.to("#site04 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      scr.to("#site04 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site04 .reveal").addClass("in");
      }, 3000);
      scr.to("#site04 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site04 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site04 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site04 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#site04 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site04 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        scaleX: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site04 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** site05 ***************** */
    if (scrollPosition > $("#site05").offset().top - 200) {
      $(".site_nav li a").removeClass("active");
      $(".site_nav li:nth-child(5) a").addClass("active");
    }
    if (scrollPosition > $("#site05").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();

      scr.to("#site05 .bgWhite", { width: "100%" });
      scr.to("#site05 .bgWhite h3 em:nth-child(1)", { opacity: 1 });
      scr.to("#site05 .bgWhite h3 em span", 0.01, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
      });
      setTimeout(function () {
        $("#site05 .reveal").addClass("in");
      }, 3000);
      scr.to("#site05 .orange_circle", 3, {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }
    /* ************** site05 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site05 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site05 .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#site05 .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site05 .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        scaleX: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site05 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
      $(".site_nav li").removeClass("none");
    }

    /* ************** app (mobile) ***************** */
    if (scrollPosition > $("#site_app").offset().top - $(window).height() / 2) {
      $(".site_nav li").addClass("none");
      var scr = gsap.timeline();
      scr.to("#site_app .section_tit", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#site_app .section_txt", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to(".mobile_codeSection article:nth-child(1) ul li", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(2)",
        0.25,
        {
          left: "8%",
        }
      );
      scr.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(3)",
        0.25,
        {
          left: "16%",
        }
      );
      scr.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(4)",
        0.25,
        {
          left: "24%",
        }
      );
      scr.to(
        ".mobile_codeSection article:nth-child(1) ul li:nth-child(5)",
        0.25,
        {
          left: "32%",
        }
      );
    }
    /* ************** app (mobile) scrolldown ***************** */
    if (
      scrollPosition >
      $("#site_app .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site_app .scrollDown .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#site_app .scrollDown .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site_app .scrollDown .text_border", 0.25, {
        opacity: 1,
        duration: 1,
        scaleX: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site_app .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** animation ***************** */
    if (scrollPosition > $("#ani").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();
      scr.to("#ani", { width: "100%" });
      scr.to("#ani .animation_tap li:nth-child(1)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#ani .animation_tap li:nth-child(2)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#ani .animation_tap li:nth-child(3)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#ani .animation_tap li:nth-child(4)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#ani .animation_tap li:nth-child(5)", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#ani .animation_con", 0.5, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
    }
    /* ************** animation scrolldown ***************** */
    if (
      scrollPosition >
      $("#ani_scroll").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#ani_scroll .sub_titWrap", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#ani_scroll .sub_tit", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#ani_scroll .text_border", 0.25, {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#ani_scroll .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        rotation: 360,
        ease: Expo.easeOut,
      });
    }

    /* ************** javascript ***************** */
    if (
      scrollPosition >
      $(".javascript_bgWhite").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to(".javascript_bgWhite", { width: "100%" });
      scr.to(".javascript_bgWhite .canvas_wrap", 0.25, {
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
    if (scrollPosition > $("#section4").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();

      // about minji tit
      scr.to("#section4 .section_tit", 0.7, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#section4 .section_txt", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      //무엇도 직선으로 움지이지 않는다.
      scr.to("#section4 .exp_txt01 span:nth-child(1)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt01 span:nth-child(2)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt01 span:nth-child(3)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt01 span:nth-child(4)", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });

      // 내 사진
      setTimeout(function () {
        $("#section4 .reveal").addClass("in");
      }, 1500);

      // 사진 옆 글자
      scr.to("#section4 .exp_txt02 p:nth-child(1)", { width: "100%" });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(1)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(2)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(3)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(4)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });

      scr.to("#section4 .exp_txt02 p:nth-child(2)", { width: "100%" });
      scr.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(1)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(2)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(3)", 0.2, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });

      // 스킬박스 배경
      scr.to("#section4 .skillbox", { opacity: 1 });
      // 스킬박스 글자
      scr.to("#section4 li:nth-child(1) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 li:nth-child(1)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#section4 li:nth-child(2) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 li:nth-child(2)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#section4 li:nth-child(3) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 li:nth-child(3)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#section4 li:nth-child(4) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 li:nth-child(4)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#section4 li:nth-child(5) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 li:nth-child(5)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });
      scr.to("#section4 li:nth-child(6) div", 0.25, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 li:nth-child(6)", 0.5, {
        scaleX: 1,
        duration: 1,
        transformOrigin: "-100%",
      });

      /* **************  my works style with ***************** */
      if (
        scrollPosition >
        $("#section5").offset().top - $(window).height() / 2
      ) {
        var scr = gsap.timeline();

        // 작은 글자 타이틀
        scr.to("#section5 .sub_titWrap", 0.7, {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section5 .sub_tit", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });

        // 움직이는 글자
        scr.to("#section5 .text_border:nth-child(1)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section5 .text_border:nth-child(2)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section5 .text_border:nth-child(3)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section5 .text_border:nth-child(4)", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
      }

      /* **************  contact title ***************** */
      if (
        scrollPosition >
        $("#section6").offset().top - $(window).height() / 2
      ) {
        var scr = gsap.timeline();
        scr.to("#section6 .section_tit", 0.7, {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section6 .section_txt", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 ul li:nth-child(1) h5", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
        scr.to("#section6 ul li:nth-child(1) p", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
        scr.to("#section6 ul li:nth-child(2) h5", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
        scr.to("#section6 ul li:nth-child(2) p", 0.25, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
          ease: Expo.easeOut,
        });
      }

      /* **************  contact form ***************** */
      if (
        scrollPosition >
        $("#section6 article:nth-child(2)").offset().top -
          $(window).height() / 2
      ) {
        var scr = gsap.timeline();

        // 작은 글자 타이틀
        scr.to("#section6 .sub_titWrap", 0.7, {
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section6 .sub_tit", 0.25, {
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        });

        // hello
        scr.to("#section6 h3", 0.5, {
          opacity: 1,
          scaleY: 1,
          duration: 2,
          transformOrigin: "0%",
          ease: Power4.easeInOut,
        });
      }

      /* **************  send ***************** */
      if (
        scrollPosition >
        $("#section6 article:nth-child(2) form").offset().top -
          $(window).height() / 2
      ) {
        var scr = gsap.timeline();

        // form
        scr.to("#section6 form dt:nth-child(1)", 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 form dt:nth-child(1) span", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section6 form dd:nth-child(2) input", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });

        scr.to("#section6 form dt:nth-child(3)", 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 form dt:nth-child(3) span", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section6 form dd:nth-child(4) input", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });

        scr.to("#section6 form dt:nth-child(5)", 0.5, {
          opacity: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 form dt:nth-child(5) span", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        scr.to("#section6 form dd:nth-child(6) input", 0.5, {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          transformOrigin: "-100%",
        });
        // 주황색 원
        scr.to("#section6 .orange_circle", {
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
