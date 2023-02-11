let search = document.querySelector(".search__btn");
let input = document.querySelector(".search__input");
let links = document.querySelectorAll(".nav__link");
let next = document.querySelector("#next");
let back = document.querySelector("#back");
let sliderLine = document.querySelector(".slider__line");
let left=0;
console.log(sliderLine);
console.log(links);
const body = document.body;
const burger = document.querySelector("#burger");
const menu_burg = document.querySelector("#b_menu");
const nav = document.querySelector("#nav").cloneNode(1);
search.addEventListener("click", function() {
    input.classList.toggle("active");
    input.focus();
});
burger.addEventListener("click", function() {
    menu_burg.classList.toggle("open");
    body.classList.toggle("noscroll");
    menu_burg.appendChild(nav);
})
links.forEach((link) => {
    link.addEventListener("click", function() {
        menu_burg.classList.remove("open");
        body.classList.remove("noscroll");
    });
});