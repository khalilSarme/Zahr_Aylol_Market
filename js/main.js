$(document).ready(function() {
  var themeColor = getComputedStyle(
      document.documentElement)
    .getPropertyValue("--bx-shadow")
    .trim();
  $('meta[name="theme-color"]')
    .attr("content", themeColor);
  $(".arrow").hide();
  $('[class^="col"]').on('click',
    '.label_category',
    function() {
      $('[class^="col"]').not($(this)
          .closest('[class^="col"]'))
        .hide(); // Hide other col elements
      $('.category_collapse')
        .hide(); // Hide other category elements
      $(this).closest('[class^="col"]')
        .show(); // Show the clicked col element

      $(this).siblings(
          '.category_collapse')
        .show(); // Show the corresponding category content
      $('.arrow')
        .show(); // Show the arrow button
      $(this).attr('disabled',
        true
        ); // Disable the clicked h2 element
    });

  $('.row').on('click', '.arrow',
    function() {
      $('[class^="col"]')
    .show(); // Show all col elements
      $('.category_collapse')
        .hide(); // Hide all category elements
      $('.arrow')
    .hide(); // Hide all arrow buttons
      $('.label').attr('disabled',
        false
        ); // Enable all h2 elements
    });

  function validate() {
    var value = $("#search_content")
      .val().toLowerCase();
    $(".website_content .container")
      .filter(function() {
        $(this).toggle($(this)
          .text().toLowerCase()
          .indexOf(value) > -1);
      });
  }
  $(".btn_search").on("click",
    function() {
      var value = $(
          "#search_content").val()
        .toLowerCase();
      $(".website_content .container")
        .filter(function() {
          $(this).toggle($(this)
            .text()
            .toLowerCase()
            .indexOf(value) >
            -1);
        });
    });

  $(".navbar-toggler").click(
    function() {
      $("#navbar").slideToggle(
        "show");
    });
  $(".navbar a").click(function(e) {
    $(".navbar a.active")
      .removeClass("active");
    e.target.classList.add(
      "active");
  });
  $(".root-theme").click(
function() {
    $("#theme-icon")
      .toggleClass("fa-sun")
      .toggleClass("fa-moon");
    $("html").toggleClass(
      "dark").toggleClass(
      "light");
  });

  $(".dodger-button").click(
    function() {
      $(".light.crimson")
        .removeClass("crimson")
        .addClass("dodger");
      $(".dark.crimson")
        .removeClass("crimson")
        .addClass("dodger");
      themeColor =
        getComputedStyle(document
          .documentElement)
        .getPropertyValue(
          "--bx-shadow")
        .trim();
      $('meta[name="theme-color"]')
        .attr("content",
          themeColor);
    });

  $(".crimson-button").click(
    function() {
      $(".light.dodger")
        .removeClass("dodger")
        .addClass("crimson");
      $(".dark.dodger")
        .removeClass("dodger")
        .addClass("crimson");
      themeColor =
        getComputedStyle(document
          .documentElement)
        .getPropertyValue(
          "--bx-shadow")
        .trim();
      $('meta[name="theme-color"]')
        .attr("content",
          themeColor);
    });

  function setTheme(theme) {
    localStorage.setItem("theme",
      theme);
  }

  document.addEventListener(
    "DOMContentLoaded",
    function() {
      const savedTheme =
        localStorage.getItem(
          "theme");
      if (savedTheme) {
        $("html").setClass(
          savedTheme);
      }
    });

  window.addEventListener(
    "beforeunload",
    function() {
      const currentTheme = $(
        "html").className;
      setTheme(currentTheme);
    });
});

function validate() {
  var value = $("#search_content").val()
    .toLowerCase();
  $(".website_content .container")
    .filter(function() {
      $(this).toggle($(this).text()
        .toLowerCase().indexOf(
          value) > -1);
    });
}