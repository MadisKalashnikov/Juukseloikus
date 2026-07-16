const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const heroBottom = hero.offsetHeight;

    if (window.scrollY > heroBottom) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});


// menüü sulgemine lingile vajutades
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


// menüü sulgemine mujale vajutades
document.addEventListener("click", (e) => {

    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.remove("active");
    }

});


// menüü sulgemine ESC klahviga
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        menu.classList.remove("active");
    }

});