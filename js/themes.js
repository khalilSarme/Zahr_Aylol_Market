let metaColor = document.querySelector('meta[name="theme-color"]');


let themeAssest = getComputedStyle(document.documentElement).getPropertyValue('--bx-shadow').trim();


let btn_themes = document.querySelectorAll('.btn-theme');


btn_themes.item(0).addEventListener('click', () => {
    changeTheme('crimson');
});

btn_themes.item(1).addEventListener('click', () => {
    changeTheme('darkviolet');
});

btn_themes.item(2).addEventListener('click', () => {
    changeTheme('CornflowerBlue');
});

function changeTheme(theme) {
    let documentTheme = document.querySelector('html').className;
    
    let themeAssest = getComputedStyle(document.documentElement).getPropertyValue('--bx-shadow').trim();

    localStorage.setItem('themeMetaColor', theme);
    
    
    metaColor.setAttribute('content', theme);


    if (documentTheme.includes('light') && !(documentTheme.includes(theme))) {
        document.querySelector('html').className = `${theme} light`;
    } else if (documentTheme.includes('dark') && !(documentTheme.includes(theme))) {
        document.querySelector('html').className = `${theme} dark`;
    } else {
        return;
    }
    
    
}

function loadTheme() {
    let storedThemeMetaColor = localStorage.getItem('themeMetaColor');
    
    
    if (storedThemeMetaColor) {
        metaColor.setAttribute('content', storedThemeMetaColor);
        let documentTheme = document.querySelector('html').className;
        if (documentTheme.includes('light') && !(documentTheme.includes(storedThemeMetaColor))) {
            document.querySelector('html').className = `${storedThemeMetaColor} light`;
        } else if (documentTheme.includes('dark') && !(documentTheme.includes(storedThemeMetaColor))) {
            document.querySelector('html').className = `${storedThemeMetaColor} dark`;
        } else {
            return;
        }
    }
    
    
}

window.onload = loadTheme;