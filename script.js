function showMessage() {
    document.getElementById("welcomeText").innerHTML =
    "Thanks for visiting my website.";
}

// Navbar background when scrolling
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});