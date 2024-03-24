import { testWebP as isWebPSupported } from './modules/testWebp.js';

isWebPSupported.then((result) => {
  const className = result ? 'webp' : 'no-webp';
  document.body.classList.add(className);
});

window.addEventListener('scroll', function () {
  document.body.style.cssText = `--scroll: ${window.scrollY}px`;
});

const burgerMenu = document.querySelector('.page__header__burger');
const navMenu = document.querySelector('.page__header__menus');

burgerMenu.addEventListener('click', burgerHandler);

function burgerHandler() {
  burgerMenu.classList.toggle('page__header__burger--active');
  navMenu.classList.toggle('page__header__menus--active');
}
