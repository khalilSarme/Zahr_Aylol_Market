$(document).ready(function () {
  var themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--bx-shadow")
    .trim();
  $('meta[name="theme-color"]').attr("content", themeColor);

  function changetheme(theme) {
    var documentRoot = document.querySelector("html").className;
    if (documentRoot.includes("light")) {
      if (!documentRoot.includes(theme)) {
        documentRoot = `${theme} light`;
        document.querySelector("html").className = documentRoot;
        themeColor =
          getComputedStyle(document
            .documentElement)
          .getPropertyValue(
            "--bx-shadow")
          .trim();
        $('meta[name="theme-color"]')
          .attr("content",
            themeColor);
      }
    } else if (documentRoot.includes("dark")) {
      if (!documentRoot.includes(theme)) {
        documentRoot = `${theme} dark`;
        document.querySelector("html").className = documentRoot;
        themeColor =
          getComputedStyle(document
            .documentElement)
          .getPropertyValue(
            "--bx-shadow")
          .trim();
        $('meta[name="theme-color"]')
          .attr("content",
            themeColor);
      }
    } else {
      return;
    }
  }

  let btn_themes = document.querySelectorAll(".btn-theme");
  btn_themes.item(0).addEventListener("click", () => {
    changetheme("crimson");
  });
  btn_themes.item(1).addEventListener("click", () => {
    changetheme("blueviolet");
  });
  btn_themes.item(2).addEventListener("click", () => {
    changetheme("dodgerblue");
  });
});
