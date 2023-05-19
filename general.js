// setting variables for elements
var home = document.getElementById("welcome");
var about = document.getElementById("about");
var facts = document.getElementById("facts");
var projects = document.getElementById("projects");
var socials = document.getElementById("socials");

// adding fade onto the document
document.body.classList.add('fade');

// open sidebar function
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

// close sidebar function
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}


// function to toggle between seasons, adding effects
function toggleSummer() {
    setTheme('summer');
}
function toggleWinter() {
    setTheme('winter');
}
function toggleAutumn() {
    setTheme('autumn');
    document.getElementById("leaves").style.display = "block";
}
function toggleSpring() {
    setTheme('spring');
}

// when load page, show popup
window.addEventListener("load", function(){
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "flex";
        },
        1000
    );
});

// scroll window back to the top at each refresh
$(document).ready(function(){
    $(window).scrollTop(0);
});

// fade in function
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
        document.body.classList.remove('fade');
    }, 500);
});

// disable scrolling when popup is open
$("body").css("overflow", "hidden");