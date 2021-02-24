// Select the button
const btn = document.querySelector(".image_logo");
const btn2 = document.querySelector(".image_logo_media");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") === "css/style.css") {
        // ... then switch it to "dark-theme.css"
        setCookie('currtheme', 'dark', 365);
        theme.href = "css/style-dark.css";
        document.getElementsByClassName("notif")[0].style.display = "none";
        document.getElementsByClassName("notif2")[0].style.display = "none";
        // Otherwise...
    } else {
        setCookie('currtheme', 'white', 365);
        theme.href = "css/style.css";
        document.getElementsByClassName("notif")[0].style.display = "none";
        document.getElementsByClassName("notif2")[0].style.display = "none";
    }
});
// Listen for a click on the button
btn2.addEventListener("click", function () {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") === "css/style.css") {
        // ... then switch it to "dark-theme.css"
        theme.href = "css/style-dark.css";
        setCookie('currtheme', 'dark', 365);
        document.getElementsByClassName("notif")[0].style.display = "none";
        document.getElementsByClassName("notif2")[0].style.display = "none";
        // Otherwise...
    } else {
        theme.href = "css/style.css";
        setCookie('currtheme', 'white', 365);
        document.getElementsByClassName("notif")[0].style.display = "none";
        document.getElementsByClassName("notif2")[0].style.display = "none";
    }
});

var card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});

function flip() {
    card.classList.toggle('is-flipped');
}

setTimeout(flip, 3000);

const x = getCookie('currtheme');
if (x && x === 'dark') {
    const theme = document.querySelector("#theme-link");
    theme.href = "css/style-dark.css";
    document.getElementsByClassName("notif")[0].style.display = "none";
    document.getElementsByClassName("notif2")[0].style.display = "none";
}
if (x && x === 'white') {
    document.getElementsByClassName("notif")[0].style.display = "none";
    document.getElementsByClassName("notif2")[0].style.display = "none";
}