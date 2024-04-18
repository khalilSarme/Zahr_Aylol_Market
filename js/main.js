$(document).ready(function() {

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
            .toggleClass("fa-moon")
            .toggleClass("fa-sun");
            $("html").toggleClass(
                "dark").toggleClass(
                "light");
        });
});












