const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItemsArray = document.querySelectorAll('.nav__list__link');
const menuLogo = document.querySelector('.logo__container');


function toggleActive() {
 burger.classList.toggle('active');
 nav.classList.toggle('active');
 menuLogo.classList.toggle('active');
}

console.log(nav.getAttribute.length)
console.log(nav.getAttribute.class)

burger.addEventListener('click', toggleActive);



if (nav.classList.contains('active')) {
navItemsArray.forEach(function(item) {
	item.addEventListener('click', toggleActive)
})
}


