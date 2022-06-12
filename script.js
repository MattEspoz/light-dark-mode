const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById ('toggle-icon');
const imagel = document.getElementById ('imagel');
const image2 = document.getElementById( 'image2');
const image3 = document.getElementById( 'image3');
const textBox = document.getElementById('text-box');

function imageMode(type) {
    image1.src = `img/undraw_proud_coder_${type}.svg`;
    image2.src = `img/undraw_feeling_proud_${type}.svg`;
    image3.src = `img/undraw_conceptual_idea_${type}.svg`;
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = isDark? 'Dark Mode' : 'LightMode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');   
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme (event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDarkLightMode(true);
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        toggleDarkLightMode(false);
        localStorage.setItem('theme', 'light')
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme == 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}