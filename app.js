const hamburgercontainer =document.querySelector("#header__main-nav");
const hamburger =document.querySelector(".header__main-nav--hamburger");
const links =document.querySelectorAll(".header__main-nav--links li");

hamburger.addEventListener('click',() =>{
    hamburgercontainer.classList.toggle("clicked")
    links.forEach((link) => {
        link.classList.toggle('fade')
    });
})