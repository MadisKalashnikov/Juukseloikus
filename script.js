const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");
const backToTop = document.querySelector(".back-to-top");
const hero = document.querySelector(".hero");

const links = document.querySelectorAll(".nav-links a, .nav-links button");
const logoLinks = document.querySelectorAll(".logo-container a");

function scrollToElement(element) {
    if (!element) return;

    const offset = 45;

    window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", () => {
    if (window.scrollY > hero.offsetHeight) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

logoLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToTop();
        menu.classList.remove("active");
    });
});

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        menu.classList.remove("active");

        if (link.nodeName === "BUTTON") {
            window.open(link.dataset.url, "_blank", "noopener,noreferrer");
            return;
        }

        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId);

        scrollToElement(targetElement);
    });
});

backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTop();
    backToTop.classList.remove("show");
});

menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (
        !menu.contains(e.target) &&
        !menuButton.contains(e.target)
    ) {
        menu.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        menu.classList.remove("active");
    }
});