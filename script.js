const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");
const hero = document.querySelector(".hero");
const links = document.querySelectorAll(".nav-links a, .nav-links button");
const logoLinks = document.querySelectorAll(".logo-container a");

window.addEventListener("scroll", () => {
    const heroBottom = hero.offsetHeight;

    if (window.scrollY > heroBottom) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

function scrollToElement(element) {
    const elementTop = element.offsetTop;
    const offset = 45; // Offset in pixels
    window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth"
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

logoLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            scrollToTop();
        }
    });
});

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (link.nodeName === "BUTTON") {
            window.open(link.getAttribute("href"), "_blank", "noopener noreferrer");
            return;
        }
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            scrollToElement(targetElement);
        }
    });
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault
    backToTop.classList.remove("show");
    scrollToTop();
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