jQuery(document).ready(function ($) {
  $(".header__toggle").click(function (e) {
    e.preventDefault();
    $(".header__menu").show();
  });
  $(".header__menu--dimmed").click(function (e) {
    e.preventDefault();
    $(".header__menu").hide();
  });
});
