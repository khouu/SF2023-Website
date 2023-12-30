const hamburger     = document.getElementById("hamburger"),
      navMenu       = document.getElementById("hamburger-nav-menu");

function toggleHamburger() {
    hamburger.classList.toggle("active");
    if (hamburger.classList.contains("active"))
        return navMenu.style.left = '0';
    return navMenu.style.left = '-80%';
}

function changeHouse(){
    let portrait = document.getElementById("portrait");
    let name = document.getElementById("name");

    if(portrait.className == "Carpho"){
        portrait.className= "Auxo";
        portrait.src = "../mmedia/imgs/Auxo.png";

        name.innerText = "Auxo";
    }

    else if(portrait.className == "Auxo"){
        portrait.className= "Thalette";
        portrait.src = "../mmedia/imgs/Thalette.png";

        name.innerText = "Thalette";
    }

    else if(portrait.className == "Thalette"){
        portrait.className= "Carpho";
        portrait.src = "../mmedia/imgs/Carpho.png";

        name.innerText = "Carpho";
    }
}