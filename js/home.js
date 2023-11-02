const nav = document.querySelector('nav');
const house = document.getElementById('houses');
let scrollAmount = window.innerHeight; 

function updateScrollAmount() {
    scrollAmount = window.innerHeight; 
}

document.getElementById('ready').addEventListener('click', function() {
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth' 
    });
});

window.addEventListener('scroll', () => {
    nav.style.top = window.scrollY > window.innerHeight-100 ? '0' : '-100%';
    if (window.scrollY < window.innerHeight - 100) {
        house.style.transform = 'translateY(60vh)';
        house.style.width = '60vw';
        house.style.scale = '1';
    } 
    else {
        house.style.transform = 'translateY(130vh)';
        house.style.width = '70vw';
        house.style.scale = '1.2';
    }
});

window.addEventListener('resize', updateScrollAmount);

