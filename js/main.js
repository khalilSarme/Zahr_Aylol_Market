$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("#navbar").slideToggle("show");
  });

  $(".root_theme_color_setting").click(function () {
    $(".btn_themes_color_container").toggleClass("tansform_scale");
  });
  $(".btn_theme_color").click(function() {
    $(".btn_themes_color_container").toggleClass("tansform_scale");
  });
  $(".navbar a").click(function (e) {
    $(".navbar a.active").removeClass("active");
    e.target.classList.add("active");
  });
});
