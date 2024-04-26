$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("#navbar").slideToggle("show");
  });
  $(".btn_theme_setting").click(function() {
      $(".theme_color_container").toggleClass("scale-0")
  });
  $(".btn_theme_color").click(function() {
      $(".theme_color_container").toggleClass("scale-0");
  });
  
  let colors = ['crimson' , 'darkviolet' , 'steelblue' , 'forestgreen'];
  
  setInterval(function() {
      let color = Math.floor(Math.random() * 4);
      $(".brand_slider_color").css("background-color" , `${colors[color]}`);
  } , 2000);
  
  $(".navbar a").click(function (e) {
    $(".navbar a.active").removeClass("active");
    e.target.classList.add("active");
  });
});
























