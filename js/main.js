$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("#navbar").slideToggle("show");
  });
  $(".btn_theme_setting").click(function() {
      $(".color_container").toggleClass("scale-0")
  });
  $(".btn_theme").click(function() {
      $(".color_container").toggleClass("scale-0");
  });
  
  let images = ["image_01" , "image_02" , "image_03"]
  
  $(".navbar a").click(function (e) {
    $(".navbar a.active").removeClass("active");
    e.target.classList.add("active");
  });
});
























