//Selecionando os elementos
const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

const darkModeTheme = 'dark-mode';

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    h1.classList.toggle(darkModeTheme);
    button.classList.toggle(darkModeTheme);
    footer.classList.toggle(darkModeTheme);
    body.classList.toggle(darkModeTheme);
}

function changeText() {
    const darkMode = 'Dark Mode';
    const lightMode = 'Light Mode';

    if (body.classList.contains(darkModeTheme)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

button.addEventListener('click', changeMode);