jQuery(document).ready(function ($) {
  // 글자 한글자씩 나오게
  $(".splitText").each(function () {
    let txt = $(this).text();
    let split = txt.split("").join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>";
    $(this).html(split).attr("aria-label", txt);
  });
  $(window).on("scroll", function () {
    var top = $(window).scrollTop();
  });
  // 움직이는 글자
  // h3에 있는 span 태그가 가로로 계속 움직이고 첫번째에 span태그가 맨 마지막 span 태그로 이동하면서 계속 움직이는  글자

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
});
