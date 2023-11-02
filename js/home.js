const nav = document.querySelector('nav');
const house = document.getElementById('houses');
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("hamburger-nav-menu");
const readyButton = document.getElementById('ready');
let scrollAmount = window.innerHeight;

let isScrolling = false;
let translateY = 60;
let width = 60;
const scrollSpeed = 1;

function updateScrollAmount() {
    scrollAmount = window.innerHeight;
}

function scrollPageSmoothly(top) {
    isScrolling = true;
    window.scrollBy({
        top: top,
        behavior: 'smooth'
    });
}

//this took so much time please dont touch this
function handleScroll() {
    if (!isScrolling) {
        translateY = 60 + (window.scrollY / (window.innerHeight - 100)) * 70 * scrollSpeed;
        width = 60 + (window.scrollY / (window.innerHeight - 100)) * 10 * scrollSpeed;

        const minScale = 1;
        const maxScale = 1.25;
        const scale = minScale + (maxScale - minScale) * (window.scrollY / (window.innerHeight - 100));

        house.style.transform = `translateY(${translateY}vh) scale(${scale})`;
        house.style.width = `${width}vw`;
    }
    nav.style.top = window.scrollY > window.innerHeight - 100 ? '0' : '-100%';
    isScrolling = false;
}

function toggleHamburger() {
    hamburger.classList.toggle("active");
    if (hamburger.classList.contains("active")) {
        navMenu.style.left = '0';
    } 
    else {
        navMenu.style.left = '-80%';
    }
}

readyButton.addEventListener('click', () => {
    scrollPageSmoothly(scrollAmount);
});

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', updateScrollAmount);
