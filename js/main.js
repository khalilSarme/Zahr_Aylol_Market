$(document).ready(function () {


  $(".navbar-toggler").click(function () {
    $("#navbar").slideToggle("show");
  });
  $(".navbar a").click(function (e) {
    $(".navbar a.active").removeClass("active");
    e.target.classList.add("active");
  });
  $(".root-theme").click(function () {
    $("#theme-icon").toggleClass("fa-sun").toggleClass("fa-moon");
    $("html").toggleClass("light").toggleClass("dark");
  });
  $(".dodger-button").click(function() {
      $("html.light.crimson").toggleClass("crimson").addClass("dodger");
      $("html.dark.crimson").toggleClass("crimson").addClass("dodger");
  });
  $(".crimson-button").click(function() {
      $("html.light.dodger").toggleClass("dodger").addClass("crimson");
      $("html.dark.dodger").toggleClass("dodger").addClass("crimson");
  });

});


















