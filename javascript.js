const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItemsArray = document.querySelectorAll('.nav__list__link');
const menuLogo = document.querySelector('.logo__container');

function toggleActive() {
 burger.classList.toggle('active');
 nav.classList.toggle('active');
 menuLogo.classList.toggle('active');
}

burger.addEventListener('click', toggleActive);

// if (nav.attributes = 'active') {

//  for (i = 0, i < navItemsArray.length, i++) {
//   navItemsArray[i].addEventListener('click', toggleActive);
//   console.log('ok')
//  }
// }