const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");
const hero = document.querySelector(".hero");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    const heroBottom = hero.offsetHeight;

    if (window.scrollY > heroBottom) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 45,
                behavior: "smooth"
            });
        }
    });
});

backToTop.addEventListener("click", () => {
    backToTop.classList.remove("show");
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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