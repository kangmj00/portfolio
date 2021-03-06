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
  $(".site_nav a[href^='#']").on("click", function (e) {
    e.preventDefault();
    let target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        600,
        "easeInOutExpo"
      );
    }
  });

  /* ********************************* */
  //main bg
  gsap.to("#section1 .blackBg", 6.5, {
    scale: 0,
    transformOrigin: "50% 50%",
    ease: "power4.out",
  });
  //main txt
  TweenMax.staggerFrom(
    "#section1 h1 .splitText span",
    2,
    {
      delay: 3,
      opacity: 0,
      ease: "Elastic.easeOut",
      y: "10%",
    },
    0.05
  );
  TweenMax.to("#section1 img:nth-child(2)", 10, {
    rotation: -360,
    repeat: -1,
    ease: Linear.easeNone,
  });
  /* ************** 스크롤에 따라 움직이는 화살표 ***************** */
  $(function () {
    var rot = 0,
      totalScrollPosi = $(document).scrollTop();
    $(window).scroll(function () {
      var newLoc = $(document).scrollTop();
      var diff = totalScrollPosi - newLoc;
      (rot += diff), (totalScrollPosi = newLoc);
      var rotationStr = "rotate(" + rot + "deg)";
      $(".arrow_circle").css({
        "-webkit-transform": rotationStr,
        "-moz-transform": rotationStr,
        transform: rotationStr,
      });
    });
  }, 2000);

  $(".orange_circle").hover(
    function () {
      gsap.to($(this), 0.2, {
        css: {
          scale: 1.09,
          backgroundColor: "#3f7df4",
        },
      });
    },

    function () {
      gsap.to($(this), 0.2, {
        css: {
          scale: 1,
          backgroundColor: "#ffa63d",
        },
      });
    }
  );
  /* ************** 스크롤 섹션 ***************** */
  $(window).scroll(function () {
    let scrollPosition = $(window).scrollTop();

    /* ************** 코드 섹션 ***************** */
    $(".codeSection").each(function () {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        gsap.to(this, {
          opacity: 1,
          scaleX: 1,
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
      scr.to("#section2 .section_txt", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#section2 .section_txt > span:nth-child(1) ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section2 .section_txt .splitText span", {
        opacity: 1,
        translateY: 0,
        stagger: 0.05,
        ease: "sine.inOut",
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
      scr.to("#section2 .project_list li:nth-child(1) h4", {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
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
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(1) .subtitle_wrap p ",
        0.2,
        {
          opacity: 1,
          translateY: 0,
          ease: "sine.inOut",
        }
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
      scr.to("#section2 .project_list li:nth-child(2) h4", {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
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
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(2) .subtitle_wrap p ",
        0.2,
        {
          opacity: 1,
          translateY: 0,
          ease: "sine.inOut",
        }
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
      scr.to("#section2 .project_list li:nth-child(5) h4", {
        delay: 1.5,
        color: "rgb(255,255,255)",
        opacity: 1,
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
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(5) .subtitle_wrap p ",
        0.2,
        {
          opacity: 1,
          translateY: 0,
          ease: "sine.inOut",
        }
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
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(6) .subtitle_wrap p ",
        0.2,
        {
          opacity: 1,
          translateY: 0,
          ease: "sine.inOut",
        }
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
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(7) .subtitle_wrap p ",
        0.2,
        {
          opacity: 1,
          translateY: 0,
          ease: "sine.inOut",
        }
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
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        }
      );
      scr.to(
        "#section2 .container .project_list li:nth-child(9) .subtitle_wrap p ",
        0.2,
        {
          opacity: 1,
          translateY: 0,
          ease: "sine.inOut",
        }
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
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
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
        transformOrigin: "100%",
      });
      $(".site_nav li a").removeClass("active");
      $(".site_nav li:nth-child(1) a").addClass("active");
      scr.to(".site_nav li:nth-child(1) a", 0.01, {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(2) a", 0.04, {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(3) a", 0.07, {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(4) a", 0.1, {
        opacity: 1,
      });
      scr.to(".site_nav li:nth-child(5) a", 0.13, {
        opacity: 1,
      });
    }

    /* ************** site01 ***************** */
    if (scrollPosition > $("#site01").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();

      scr.to("#site01 .bgWhite", {
        width: "100%",
      });
      scr.to("#site01 .bgWhite h3 em:nth-child(1)", {
        opacity: 1,
        translateX: 0,
        duration: 1,
        transformOrigin: "0%",
        ease: "slow(0.7, 0.7, false)",
      });
      scr.to("#site01 .bgWhite h3 em span", {
        opacity: 1,
        stagger: 0.09,
        duration: 0.4,
        ease: "sine.inOut",
      });
      setTimeout(function () {
        $("#site01 .site_wrap.reveal").addClass("in");
      }, 500);
      scr.to("#site01 .orange_circle", {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
    }
    /* ************** site01 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site01 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site01 .scrollDown .sub_titWrap", {
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#site01 .scrollDown .sub_tit", 0.1, {
        opacity: 1,
        translateY: 0,
      });
      scr.to("#site01 .scrollDown .arrow_circle", {
        duration: 1,
        opacity: 1,
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

      scr.to("#site02 .bgWhite", {
        width: "100%",
      });
      scr.to("#site02 .bgWhite h3 em:nth-child(1)", {
        opacity: 1,
        translateX: 0,
        duration: 1,
        transformOrigin: "0%",
        ease: "slow(0.7, 0.7, false)",
      });
      scr.to("#site02 .bgWhite h3 em span", {
        opacity: 1,
        stagger: 0.09,
        duration: 0.4,
        ease: "sine.inOut",
      });
      setTimeout(function () {
        $("#site02 .site_wrap.reveal").addClass("in");
      }, 500);
      scr.to("#site02 .orange_circle", 1, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
    }
    /* ************** site02 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site02 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site02 .scrollDown .sub_titWrap", {
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#site02 .scrollDown .sub_tit", 0.1, {
        opacity: 1,
        translateY: 0,
      });
      scr.to("#site02 .scrollDown .arrow_circle", {
        duration: 1,
        opacity: 1,
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
      scr.to("#site03 .bgWhite", {
        width: "100%",
      });
      scr.to("#site03 .bgWhite h3 em:nth-child(1)", {
        opacity: 1,
        translateX: 0,
        duration: 1,
        transformOrigin: "0%",
        ease: "slow(0.7, 0.7, false)",
      });
      scr.to("#site03 .bgWhite h3 em span", {
        opacity: 1,
        stagger: 0.09,
        duration: 0.4,
        ease: "sine.inOut",
      });
      setTimeout(function () {
        $("#site03 .site_wrap.reveal").addClass("in");
      }, 500);
      scr.to("#site03 .orange_circle", 1, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
    }
    /* ************** site03 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site03 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site03 .scrollDown .sub_titWrap", {
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#site03 .scrollDown .sub_tit", 0.1, {
        opacity: 1,
        translateY: 0,
      });
      scr.to("#site03 .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
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
      scr.to("#site04 .bgWhite", {
        width: "100%",
      });
      scr.to("#site04 .bgWhite h3 em:nth-child(1)", {
        opacity: 1,
        translateX: 0,
        duration: 1,
        transformOrigin: "0%",
        ease: "slow(0.7, 0.7, false)",
      });
      scr.to("#site04 .bgWhite h3 em span", {
        opacity: 1,
        stagger: 0.09,
        duration: 0.4,
        ease: "sine.inOut",
      });
      setTimeout(function () {
        $("#site04 .site_wrap.reveal").addClass("in");
      }, 500);
      scr.to("#site04 .orange_circle", 1, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
    }
    /* ************** site04 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site04 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site04 .scrollDown .sub_titWrap", {
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#site04 .scrollDown .sub_tit", 0.1, {
        opacity: 1,
        translateY: 0,
      });
      scr.to("#site04 .scrollDown .arrow_circle", {
        duration: 1,
        opacity: 1,
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

      scr.to("#site05 .bgWhite", {
        width: "100%",
      });
      scr.to("#site05 .bgWhite h3 em:nth-child(1)", {
        opacity: 1,
        translateX: 0,
        duration: 1,
        transformOrigin: "0%",
        ease: "slow(0.7, 0.7, false)",
      });
      scr.to("#site05 .bgWhite h3 em span", 0.3, {
        opacity: 1,
        stagger: 0.09,
        duration: 0.4,
        ease: "sine.inOut",
      });
      setTimeout(function () {
        $("#site05 .site_wrap.reveal").addClass("in");
      }, 500);
      scr.to("#site05 .orange_circle", 1, {
        scaleX: 1,
        scaleY: 1,
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
    }
    /* ************** site05 scrolldown ***************** */
    if (
      scrollPosition >
      $("#site05 .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site05 .scrollDown .sub_titWrap", {
        scaleX: 1,
        duration: 1,
        transformOrigin: "0%",
      });
      scr.to("#site05 .scrollDown .sub_tit", 0.1, {
        opacity: 1,
        translateY: 0,
      });
      scr.to("#site05 .scrollDown .arrow_circle", {
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
      $(".site_nav li").removeClass("none");
    }

    /* ************** app (mobile) ***************** */
    if (scrollPosition > $("#site_app").offset().top - $(window).height() / 2) {
      $(".site_nav li").addClass("none");
      var scr = gsap.timeline();
      scr.to("#site_app .section_txt", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#site_app .section_txt > span:nth-child(1) ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#site_app .section_txt .splitText span", {
        opacity: 1,
        translateY: 0,
        stagger: 0.05,
        ease: "sine.inOut",
      });
      scr.to(".mobile_codeSection .mobile_imgWrap ul li", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to(".mobile_codeSection .mobile_imgWrap ul li:nth-child(2)", {
        left: "8%",
      });
      scr.to(".mobile_codeSection .mobile_imgWrap ul li:nth-child(3)", {
        left: "16%",
      });
      scr.to(".mobile_codeSection .mobile_imgWrap ul li:nth-child(4)", {
        left: "24%",
      });
      scr.to(".mobile_codeSection .mobile_imgWrap ul li:nth-child(5)", {
        left: "32%",
      });
      scr.to(".mobile_codeSection .mobile_codeWrap", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "-100%",
      });
    }

    /* ************** app (mobile) scrolldown ***************** */
    if (
      scrollPosition >
      $("#site_app .scrollDown").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#site_app .scrollDown .sub_titWrap", {
        scaleX: 1,
        duration: 1,
        transformOrigin: "0%",
      });
      scr.to("#site_app .scrollDown .sub_tit", 0.1, {
        opacity: 1,
        translateY: 0,
      });
      scr.to("#site_app .scrollDown .arrow_circle", 1, {
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
    }

    /* ************** animation ***************** */
    if (scrollPosition > $("#ani").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();
      scr.to("#ani", {
        width: "100%",
      });
    }
    /* ************** animation scrolldown ***************** */
    if (
      scrollPosition >
      $("#ani_scroll").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to("#ani_scroll .sub_titWrap", {
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#ani_scroll .sub_tit", 0.1, {
        opacity: 1,
        translateY: 0,
      });
      scr.to("#ani_scroll .arrow_circle", {
        duration: 1,
        opacity: 1,
        ease: Expo.easeOut,
      });
    }

    /* ************** javascript ***************** */
    if (
      scrollPosition >
      $(".javascript_bgWhite").offset().top - $(window).height() / 2
    ) {
      var scr = gsap.timeline();
      scr.to(".javascript_bgWhite", {
        width: "100%",
      });
      scr.to(".javascript_bgWhite .section_txt", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to(".javascript_bgWhite .section_txt > span:nth-child(1) ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to(".javascript_bgWhite .section_txt .splitText span", {
        opacity: 1,
        translateY: 0,
        stagger: 0.05,
        ease: "sine.inOut",
      });
      scr.to(".javascript_bgWhite .java_txt p span:nth-child(1) ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to(".javascript_bgWhite .java_txt p span:nth-child(2) ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to(".javascript_bgWhite .java_txt p span:nth-child(3) ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to(".javascript_bgWhite .java_txt p small ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      setTimeout(function () {
        $(".javascript_bgWhite .canvas_wrap").addClass("in");
      }, 500);
    }

    /* ************** about minji ***************** */
    if (scrollPosition > $("#section4").offset().top - $(window).height() / 2) {
      var scr = gsap.timeline();

      // about minji tit
      scr.to("#section4 .section_txt", {
        opacity: 1,
        scaleX: 1,
        duration: 0.5,
        transformOrigin: "0%",
      });
      scr.to("#section4 .section_txt > span:nth-child(1) ", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .section_txt .splitText span", {
        opacity: 1,
        translateY: 0,
        stagger: 0.05,
        ease: "sine.inOut",
      });
      //무엇도 직선으로 움지이지 않는다.
      scr.to("#section4 .exp_txt01 span:nth-child(1)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt01 span:nth-child(2)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt01 span:nth-child(3)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt01 span:nth-child(4)", {
        opacity: 1,
        ease: Expo.easeOut,
      });

      // 내 사진
      setTimeout(function () {
        $("#section4 .reveal").addClass("in");
      }, 1500);

      // 사진 옆 글자
      scr.to("#section4 .exp_txt02 p:nth-child(1)", {
        width: "100%",
      });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(1)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(2)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(3)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(1) span:nth-child(4)", {
        opacity: 1,
        ease: Expo.easeOut,
      });

      scr.to("#section4 .exp_txt02 p:nth-child(2)", {
        width: "100%",
      });
      scr.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(1)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(2)", {
        opacity: 1,
        ease: Expo.easeOut,
      });
      scr.to("#section4 .exp_txt02 p:nth-child(2) span:nth-child(3)", {
        opacity: 1,
        ease: Expo.easeOut,
      });

      // 스킬박스 배경
      scr.to("#section4 .skillbox", {
        opacity: 1,
      });
      // 스킬박스 글자
      scr.to("#section4 li:nth-child(1)", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#section4 li:nth-child(1) h6", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(1) span", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(2)", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#section4 li:nth-child(2) h6", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(2) span", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(3)", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#section4 li:nth-child(3) h6", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(3) span", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(4)", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#section4 li:nth-child(4) h6", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(4) span", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(5)", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#section4 li:nth-child(5) h6", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(5) span", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });
      scr.to("#section4 li:nth-child(6)", {
        opacity: 1,
        scaleX: 1,
        transformOrigin: "0%",
      });
      scr.to("#section4 li:nth-child(6) h6", 0.3, {
        opacity: 1,
        translateY: 0,
        ease: Expo.easeInOut,
      });

      /* **************  my works style with ***************** */
      if (
        scrollPosition >
        $("#section5").offset().top - $(window).height() / 2
      ) {
        var scr = gsap.timeline();

        // 작은 글자 타이틀
        scr.to("#section5 .sub_titWrap", {
          scaleX: 1,
          transformOrigin: "0%",
        });
        scr.to("#section5 .sub_tit", {
          opacity: 1,
          translateY: 0,
        });
      }

      /* **************  contact title ***************** */
      if (
        scrollPosition >
        $("#section6").offset().top - $(window).height() / 2
      ) {
        var scr = gsap.timeline();
        scr.to("#section6 .section_txt", {
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        });
        scr.to("#section6 .section_txt > span:nth-child(1) ", {
          opacity: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 .section_txt .splitText span", 0.2, {
          opacity: 1,
          translateY: 0,
          stagger: 0.05,
          ease: "sine.inOut",
        });
        scr.to("#section6 ul li:nth-child(1) h5", {
          opacity: 1,
          translateX: 1,
          transformOrigin: "0%",
          ease: Expo.easeOut,
        });
        scr.to("#section6 ul li:nth-child(1) p", {
          opacity: 1,
          translateX: 1,
          transformOrigin: "0%",
          ease: Expo.easeOut,
        });
        scr.to("#section6 ul li:nth-child(2) h5", {
          opacity: 1,
          translateX: 1,
          transformOrigin: "0%",
          ease: Expo.easeOut,
        });
        scr.to("#section6 ul li:nth-child(2) p", {
          opacity: 1,
          translateX: 1,
          transformOrigin: "0%",
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
        scr.to("#section6 .sub_titWrap", {
          scaleX: 1,
          transformOrigin: "0%",
        });
        scr.to("#section6 .sub_tit", {
          opacity: 1,
          translateY: 0,
        });

        // hello
        scr.to("#section6 h3", {
          opacity: 1,
          translateY: 0,
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
        scr.to("#section6 form dt:nth-child(1)", {
          opacity: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 form dt:nth-child(1) span", {
          opacity: 1,
          translateY: 0,
          transformOrigin: "0%",
        });
        scr.to("#section6 form dd:nth-child(2) input", {
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        });

        scr.to("#section6 form dt:nth-child(3)", {
          opacity: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 form dt:nth-child(3) span", {
          opacity: 1,
          translateY: 0,
          transformOrigin: "0%",
        });
        scr.to("#section6 form dd:nth-child(4) input", {
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        });
        scr.to("#section6 form dt:nth-child(5)", {
          opacity: 1,
          ease: Expo.easeOut,
        });
        scr.to("#section6 form dt:nth-child(5) span", {
          opacity: 1,
          translateY: 0,
          transformOrigin: "0%",
        });
        scr.to("#section6 form dd:nth-child(6) input", {
          opacity: 1,
          scaleX: 1,
          transformOrigin: "0%",
        });
        // 주황색 원
        scr.to("#section6 .orange_circle", {
          scaleX: 1,
          scaleY: 1,
          duration: 1,
          opacity: 1,
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
      style: "transform: translate(" + x / 20 + "px," + y / 10 + "px)",
    });
  });
});
