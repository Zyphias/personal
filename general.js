var home = document.getElementById("welcome");
var about = document.getElementById("about");
var facts = document.getElementById("facts");
var projects = document.getElementById("projects");
var socials = document.getElementById("socials");

// prefade action
document.body.classList.add('fade');

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("content").style.margin= "0";
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between seasons
function toggleSummer() {
    setTheme('summer');
}
function toggleWinter() {
    setTheme('winter');
}
function toggleAutumn() {
    setTheme('autumn');
}
function toggleSpring() {
    setTheme('spring');
}

// Immediately invoked function to set the theme on initial load
(function () {
if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
} else {
    setTheme('summer');
}
})();

window.addEventListener("load", function(){
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "flex";
        },
        1000
    );
});

$(document).ready(function(){
    $(window).scrollTop(0);
});

// fade in function
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
        document.body.classList.remove('fade');
    }, 500);
});

// stops scrolling when popup is open
$("body").css("overflow", "hidden");

