let rootTheme = document.querySelector(".root-theme");

rootTheme.addEventListener("click", () => {
  setThemeDocument();
});

let metaColor = document.querySelector('meta[name="theme-color"]');

let btn_themes = document.querySelectorAll(".btn_theme_color");

btn_themes.item(0).addEventListener("click", () => {
  setTheme("crimson");
});

btn_themes.item(1).addEventListener("click", () => {
  setTheme("darkviolet");
});

btn_themes.item(2).addEventListener("click", () => {
  setTheme("steelblue");
});

btn_themes.item(3).addEventListener("click", () => {
  setTheme("forestgreen");
});

function setTheme(theme) {
  let documentTheme = document.querySelector("html").className;
  if (documentTheme.includes("light") && !documentTheme.includes(theme)) {
    localStorage.setItem("themeColor", theme);
    document.querySelector("html").className = `light ${theme}`;
    let tempTheme = document.querySelector("html").className;
    localStorage.setItem("documentTheme", tempTheme);
    localStorage.setItem("iconThemeButton", "fa fa-moon");
    metaColor.setAttribute("content", theme);
  } else if (documentTheme.includes("dark") && !documentTheme.includes(theme)) {
    localStorage.setItem("themeColor", theme);
    document.querySelector("html").className = `dark ${theme}`;
    let tempTheme = document.querySelector("html").className;
    localStorage.setItem("documentTheme", tempTheme);
    localStorage.setItem("iconThemeButton", "fa fa-sun");
    metaColor.setAttribute("content", theme);
  }
}

function setThemeDocument() {
  let documentTheme = document.querySelector("html").className;
  localStorage.setItem("documentTheme", documentTheme);

  let themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--bx-shadow")
    .trim();
  localStorage.setItem("themeColor", themeColor);
  

  let iconThemeButton = document.querySelector("#theme-icon").className;
  localStorage.setItem("iconThemeButton", iconThemeButton);
  

  let storedThemeDocument = localStorage.getItem("documentTheme");
  let storedThemeColor = localStorage.getItem("themeColor");
  

  if (storedThemeDocument.includes("light")) {
    document.querySelector("html").className = `dark ${storedThemeColor}`;
    let documentTheme = document.querySelector("html").className;
    localStorage.setItem("documentTheme", documentTheme);
    

    document.querySelector("#theme-icon").className = "fa fa-sun";
    let iconThemeButton = document.querySelector("#theme-icon").className;
    localStorage.setItem("iconThemeButton", iconThemeButton);
    
  } else if (storedThemeDocument.includes("dark")) {
    document.querySelector("html").className = `light ${storedThemeColor}`;
    let documentTheme = document.querySelector("html").className;
    localStorage.setItem("documentTheme", documentTheme);
    

    document.querySelector("#theme-icon").className = "fa fa-moon";
    let iconThemeButton = document.querySelector("#theme-icon").className;
    localStorage.setItem("iconThemeButton", iconThemeButton);
    
  }
}

function loadTheme() {
  let storedThemeDocument = localStorage.getItem("documentTheme");
  let storedThemeColor = localStorage.getItem("themeColor");
  let storedIconButtonTheme = localStorage.getItem("iconThemeButton");

  if (storedThemeDocument && storedThemeColor && storedIconButtonTheme) {
    document.querySelector("html").className = storedThemeDocument;
    
    metaColor.setAttribute("content", storedThemeColor);
    
    document.querySelector("#theme-icon").className = storedIconButtonTheme;
    
  }
}

window.onload = loadTheme;
