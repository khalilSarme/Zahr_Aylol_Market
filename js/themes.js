let metaColor = document.querySelector('meta[name="theme-color"]');


let themeAssest = getComputedStyle(document.documentElement).getPropertyValue('--bx-shadow').trim();

let rootTheme = document.querySelector('.root-theme');


let btn_themes = document.querySelectorAll('.btn-theme');


btn_themes.item(0).addEventListener('click', () => {
    changeTheme('rose');
});

btn_themes.item(1).addEventListener('click', () => {
    changeTheme('darkviolet');
});

btn_themes.item(2).addEventListener('click', () => {
    changeTheme('steelblue');
});

function changeTheme(theme) {
    let documentTheme = document.querySelector('html').className;
    
    let themeAssest = getComputedStyle(document.documentElement).getPropertyValue('--bx-shadow').trim();

    localStorage.setItem('themeMetaColor', theme);
    
    metaColor.setAttribute('content', theme);


    if (documentTheme.includes('light') && !(documentTheme.includes(theme))) {
        document.querySelector('html').className = `light ${theme}`;
    } else if (documentTheme.includes('dark') && !(documentTheme.includes(theme))) {
        document.querySelector('html').className = `dark ${theme}`;
    } else {
        return;
    }
}

rootTheme.addEventListener('click' , () => {
    setTheme();
});

function setTheme() {
    let documentTheme = document.querySelector('html').className;
    let iconThemeButton = document.querySelector('#theme-icon').className;
    if(documentTheme.includes('light') && iconThemeButton.includes('fa-moon')) {
        document.querySelector('html').classList.remove('light');
        document.querySelector('html').classList.add('dark');
        document.querySelector('#theme-icon').className = 'fa fa-sun';
        storeIcon();
    } else if(documentTheme.includes('dark') && iconThemeButton.includes('fa fa-sun')) {
        document.querySelector('html').classList.remove('dark');
        document.querySelector('html').classList.add('light');
        document.querySelector('#theme-icon').className = 'fa fa-moon';
        storeIcon();
    }
}

function storeIcon() {
    let documentTheme = document.querySelector('html').className;
    let themeicon = document.querySelector('#theme-icon').className;
    localStorage.setItem('themeToggleButton' , themeicon);
    localStorage.setItem('rootThemeColor' , documentTheme);
}

function loadTheme() {
    let storedThemeMetaColor = localStorage.getItem('themeMetaColor');
    let storedIcon = localStorage.getItem('themeToggleButton');
    let storedRootThemeColor = localStorage.getItem('rootThemeColor');
    
    if (storedThemeMetaColor) {
        metaColor.setAttribute('content', storedThemeMetaColor);
        let documentTheme = document.querySelector('html').className;
        if (documentTheme.includes('light') && !(documentTheme.includes(storedThemeMetaColor))) {
            document.querySelector('html').className = `light ${storedThemeMetaColor}`;
        } else if (documentTheme.includes('dark') && !(documentTheme.includes(storedThemeMetaColor))) {
            document.querySelector('html').className = `dark ${storedThemeMetaColor}`;
        } else {
            return;
        }
    }

    if(storedIcon && storedRootThemeColor) {
        if(storedRootThemeColor.includes('light') && storedIcon.includes('fa-moon')) {
            document.querySelector('html').classList.remove('dark');
            document.querySelector('html').classList.add('light')
            document.querySelector('#theme-icon').className = 'fa fa-moon';
        } else if(storedRootThemeColor.includes('dark') && storedIcon.includes('fa-sun')) {
            document.querySelector('html').classList.remove('light');
            document.querySelector('html').classList.add('dark');
            document.querySelector('#theme-icon').className = 'fa fa-sun';
        }
    }
    
}

window.onload = loadTheme;