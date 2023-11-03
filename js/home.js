const nav           = document.querySelector('nav'),
      house         = document.getElementById('houses'),
      hamburger     = document.getElementById("hamburger"),
      navMenu       = document.getElementById("hamburger-nav-menu"),
      readyButton   = document.getElementById('ready');

const scrollSpeed   = 1,
      minScale      = 1,
      maxScale      = 1.25;      

let scrollAmount = window.innerHeight;

let isScrolling = false,
    translateY  = 60,
    width       = 60;

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

function handleNavigationOnScroll() {
    if ((window.scrollY > window.innerHeight - 100))
        return nav.style.top = '0'

    nav.style.top           = '-100%';
    navMenu.style.left      = '-80%';
    hamburger.classList.remove("active");
}

function handleHousesOnScroll() {
    if (isScrolling) return isScrolling = false;

    let scaleFactor = (window.scrollY / (window.innerHeight - 100)) * scrollSpeed,
        scale       = minScale + (maxScale - minScale) * scaleFactor / scrollSpeed;
    
    translateY  = 60 + scaleFactor * 87;
    width       = 60 + scaleFactor * 10;

    if (window.scrollY < (window.innerHeight * 1.3 - 200)) {
        house.style.transform = `translateY(${translateY}vh) scale(${scale})`;
        house.style.width = `${width}vw`;
        if(window.scrollY > (window.innerHeight - 100)) {
            house.style.pointerEvents = 'auto';
        }
        else house.style.pointerEvents = 'none';
    }
}

function toggleHamburger() {
    hamburger.classList.toggle("active");
    if (!(window.scrollY > window.innerHeight - 100)) 
        return
    if (hamburger.classList.contains("active"))
        return navMenu.style.left = '0';
    return navMenu.style.left = '-80%';
}

readyButton.addEventListener('click', () => {
    scrollPageSmoothly(scrollAmount);
});

window.addEventListener('scroll', handleHousesOnScroll);
window.addEventListener('scroll', handleNavigationOnScroll);
window.addEventListener('resize', updateScrollAmount);
