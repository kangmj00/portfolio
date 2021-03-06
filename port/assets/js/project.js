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

  // gsap
  // 메인 타이틀
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

  /* ***************** 스크롤 매직 **************** */

  var controller = new ScrollMagic.Controller();
  var animationSpeed = 0.75;
  var animationTimingIn = Expo.easeIn;
  var animationTimingOut = Expo.easeOut;

  /* ***************** 섹션 서브 타이틀 **************** */
  $(".section").each(function () {
    var inner = $(this).find(".section_txt");
    var outer = $(this).find(".section_tit");
    var tl = new TimelineMax();

    tl.from(outer, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.fromTo(
      inner,
      0.65,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.15,
    })
      .setTween(tl)
      .addTo(controller);
  });
  /* ***************** 스크롤 다운 섹션 **************** */
  $(".scrollDown").each(function () {
    var inner = $(this).find(".sub_tit");
    var outer = $(this).find(".sub_titWrap");
    var circle = $(this).find(".arrow_circle");

    var tl = new TimelineMax();

    tl.from(outer, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.fromTo(
      inner,
      0.65,
      { opacity: 0, yPercent: -20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );
    tl.fromTo(
      circle,
      0.5,
      { opacity: 0, rotation: 0 },
      {
        opacity: 1,
        rotation: 360,
      }
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.15,
    })
      .setTween(tl)
      .addTo(controller);
  });

  /* ***************** 프로젝트 리스트 **************** */
  $(".project_list li").each(function () {
    var title = $(this).find("h4");
    var projectImgWRap = $(this).find(".project_lstImgWrap");
    var projectImg = $(this).find(".project_Img");
    var projectImgReveal = $(this).find(".project_ImgReveal");
    var sub_titWrap = $(this).find(".sub_titWrap");
    var subtitle = $(this).find("p");

    var tl = new TimelineMax();

    tl.from(
      title,
      0.1,
      {
        opacity: 0,
        x: "-20",
        ease: animationTimingOut,
      },
      0.4
    );

    tl.from(projectImgWRap, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.from(projectImg, 0.6, {
      opacity: 1,
      transformOrigin: "-50%, -50%",
      ease: animationTimingOut,
    });
    tl.fromTo(
      projectImgReveal,
      animationSpeed,
      {
        width: "100%",
        opacity: 1,
        scaleX: 1,
        transformOrigin: "100% 50%",
        ease: animationTimingIn,
      },
      {
        opacity: 0,
        width: 0,
        scaleX: 0,
        transformOrigin: "0 50%",
        ease: animationTimingOut,
      }
    );
    tl.from(sub_titWrap, 0.25, { scaleX: 0 });
    tl.fromTo(
      subtitle,
      animationSpeed,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );

    new ScrollMagic.Scene({
      triggerElement: this, // this의 부모에다가 넣을 수 없나?
      triggerHook: 0.008,
    })
      .setTween(tl)
      .addTo(controller);
  });
  /* ***************** 프로젝트 사이트 **************** */
  $("#section3 .bgWhite").each(function () {
    var label = $(this).find(".project_label");
    var siteTitEn = $(this).find("h3 em:nth-child(1)");
    var siteTitKo = $(this).find("h3 em span");
    var circle = $(this).find(".orange_circle");

    var tl = new TimelineMax();

    tl.fromTo(
      label,
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: 0,
      }
    );
    tl.fromTo(
      siteTitEn,
      { opacity: 0, x: "-100%" },
      {
        opacity: 1,
        x: 0,
      }
    );
    tl.fromTo(
      siteTitKo,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        stagger: 0.09,
        ease: animationTimingOut,
      }
    );
    tl.fromTo(
      circle,
      0.5,
      { opacity: 0, rotation: 0 },
      {
        opacity: 1,
        rotation: 360,
      }
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.2,
    })
      .setTween(tl)
      .addTo(controller);
  });

  /* ***************** 어플리케이션 **************** */
  $("#section3 .mobile").each(function () {
    var inner = $(this).find(".section_txt");
    var outer = $(this).find(".section_tit");

    var tl = new TimelineMax();

    tl.fromTo(
      outer,
      0.25,
      { scale: 0, transformOrigin: "0 100%" },
      { scale: 1 }
    );
    tl.fromTo(
      inner,
      0.65,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.15,
    })
      .setTween(tl)
      .addTo(controller);
  });

  /* ***************** 어바웃민지 **************** */
  $("#section4").each(function () {
    var exp = $(this).find(".exp_txt");
    var ImgWrap = $(this).find(".minji_ImgWrap");
    var Img = $(this).find(".minji_Img");
    var ImgReveal = $(this).find(".minji_ImgReveal");
    var dream01 = $(this).find("aside p:nth-child(1)");
    var dream02 = $(this).find("aside p:nth-child(2)");
    var inner = $(this).find(".sub_tit");
    var outer = $(this).find(".sub_titWrap");

    var tl = new TimelineMax();

    tl.from(exp, 0.25, { scaleX: 0, transformOrigin: "0 100%" });

    tl.from(ImgWrap, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.from(Img, 0.6, {
      opacity: 1,
      transformOrigin: "-50%, -50%",
      ease: animationTimingOut,
    });
    tl.fromTo(
      ImgReveal,
      animationSpeed,
      {
        width: "100%",
        opacity: 1,
        scaleX: 1,
        transformOrigin: "100% 50%",
        ease: animationTimingIn,
      },
      {}
    );

    tl.from(dream01, 0.6, {
      scaleX: 0,
      transformOrigin: "0 100%",
      ease: animationTimingOut,
    });
    tl.from(dream02, 0.8, {
      scaleX: 0,
      transformOrigin: "0 100%",
      ease: animationTimingOut,
    });

    tl.from(outer, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.fromTo(
      inner,
      0.65,
      { opacity: 0, yPercent: -20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.15,
    })
      .setTween(tl)
      .addTo(controller)
      .addIndicators({
        name: "1",
      });
  });

  /* ***************** 어바웃민지 **************** */
  $("#section5").each(function () {
    var inner = $(this).find(".sub_tit");
    var outer = $(this).find(".sub_titWrap");

    var tl = new TimelineMax();
    tl.from(outer, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.fromTo(
      inner,
      0.65,
      { opacity: 0, yPercent: -20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.15,
    })
      .setTween(tl)
      .addTo(controller);
  });

  /* ***************** 스킬박스  **************** */
  $(".skillbox").each(function () {
    var skillbox = $(this);
    var outer = $(this).find("li");
    var inner = $(this).find("li div");
    var skileTit = $(this).find("li div h6");
    var skileExp = $(this).find("li div span");

    var tl = new TimelineMax();
    tl.from(skillbox, 0.25, {
      scaleX: 0,
      opacity: 0,
      transformOrigin: "0 100%",
    });
    tl.from(outer, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.fromTo(
      inner,
      0.65,
      { opacity: 0, yPercent: -20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );
    tl.from(skileTit, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.from(skileExp, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.15,
    })
      .setTween(tl)
      .addTo(controller);
  });

  /* ***************** 연락하기 **************** */
  $("#section6 .container").each(function () {
    var contact = $(this).find("ul");
    var inner = $(this).find(".sub_tit");
    var outer = $(this).find(".sub_titWrap");
    var hello = $(this).find("h3");
    var name = $(this).find("form dt:nth-child(1) span");
    var myEmail = $(this).find("form dt:nth-child(3) span");
    var looking = $(this).find("form dt:nth-child(5) span");
    var textarea01 = $(this).find("form dd:nth-child(2) input");
    var textarea02 = $(this).find("form dd:nth-child(4) input");
    var textarea03 = $(this).find("form dd:nth-child(6) input");
    var circle = $(this).find(".orange_circle");

    var tl = new TimelineMax();

    tl.fromTo(
      contact,
      0.4,
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, ease: animationTimingOut }
    );
    tl.from(outer, 0.25, { scaleX: 0, transformOrigin: "0 100%" });
    tl.fromTo(
      inner,
      0.65,
      { opacity: 0, yPercent: -20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );
    tl.fromTo(
      hello,
      animationSpeed,
      { opacity: 0, yPercent: -20 },
      { opacity: 1, yPercent: 0, ease: animationTimingOut }
    );
    tl.fromTo(
      name,
      animationSpeed,
      { opacity: 0 },
      { opacity: 1, ease: animationTimingOut }
    );
    tl.fromTo(
      textarea01,
      0.6,
      { opacity: 0, width: 0 },
      { opacity: 1, width: "100%", ease: Power4.easeInOut }
    );
    tl.fromTo(
      myEmail,
      animationSpeed,
      { opacity: 0 },
      { opacity: 1, ease: animationTimingOut }
    );
    tl.fromTo(
      textarea02,
      0.6,
      { opacity: 0, width: 0 },
      { opacity: 1, width: "100%", ease: Power4.easeInOut }
    );
    tl.fromTo(
      looking,
      animationSpeed,
      { opacity: 0 },
      { opacity: 1, ease: animationTimingOut }
    );
    tl.fromTo(
      textarea03,
      0.6,
      { opacity: 0, width: 0, x: 0 },
      { opacity: 1, width: "100%", ease: Power4.easeInOut }
    );
    tl.fromTo(
      circle,
      0.8,
      { opacity: 0, rotation: 0 },
      {
        opacity: 1,
        rotation: 360,
      }
    );

    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.2,
    })
      .setTween(tl)
      .addTo(controller);
  });

  /* ***************** 화살표 원 **************** */
  $(".arrow_circle").each(function () {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: "50%",
        triggerHook: 0.25,
      },
    });
    var circle01 = $(".project_list li:nth-child(3) .arrow_circle");
    var circle02 = $(".project_list li:nth-child(4) .arrow_circle");
    var circle03 = $(".project_list li:nth-child(8) .arrow_circle");

    var tween1 = TweenMax.fromTo(
      circle01,
      0.1,
      { opacity: 0, rotation: 0 },
      {
        opacity: 1,
        rotation: 360,
      }
    );

    var tween2 = TweenMax.fromTo(
      circle02,
      0.8,
      { opacity: 0, rotation: 0 },
      {
        opacity: 1,
        rotation: 320,
      }
    );

    var tween3 = TweenMax.fromTo(
      circle03,
      0.8,
      { opacity: 0, rotation: 0 },
      {
        opacity: 1,
        rotation: 270,
      }
    );
    var scene1 = new ScrollMagic.Scene({
      triggerElement: ".project_list li:nth-child(2) .project_lstImgWrap",
    })
      .setTween(tween1)
      .addTo(controller);
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".project_list li:nth-child(2) .sub_titWrap",
      offset: 150,
      duration: 200,
    })
      .setTween(tween2)
      .addTo(controller);
    var scene3 = new ScrollMagic.Scene({
      triggerElement: ".project_list li:nth-child(7) ",
    })

      .setTween(tween3)
      .addTo(controller);
  });

  /* ***************** 프로젝트 리스트에 오렌지 원 **************** */
  var orange_circle = TweenMax.fromTo(
    ".project_list li .orange_circle",
    0.8,
    { opacity: 0, rotation: 0 },
    {
      opacity: 1,
      rotation: 360,
    }
  );

  var orange_circleScene = new ScrollMagic.Scene({
    triggerElement: ".project_list li:nth-child(8)",
    duration: "400",
  })
    .setTween(orange_circle)
    .setPin(true)
    .addTo(controller);

  /* ***************** 메인 이미지 사진 **************** */
  var tween1 = TweenMax.fromTo(
    ".revealBg",
    animationSpeed,
    { x: "-100%", opacity: 1, ease: animationTimingIn },
    {
      x: "100%",
      opacity: 0,
      ease: animationTimingOut,
    }
  );

  var tween2 = TweenMax.fromTo(
    ".mainMyBg",
    2,
    { x: "-100%", opacity: 0, ease: animationTimingIn },
    {
      x: "0",
      opacity: 1,
      ease: animationTimingOut,
    }
  );

  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".mainImg_wrap",
    duration: "400",
  })
    .setTween(tween1)
    .setPin(true)
    .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    triggerElement: ".mainImg_wrap",
    duration: "200",
  })
    .setTween(tween2)
    .setPin(true)
    .addTo(controller);
});
