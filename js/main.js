const elButton = document.querySelector(".menu__burger-button");
const elMenu = document.querySelector(".header__menu-mobile");


elButton.addEventListener('click', () => {
  elMenu.classList.toggle('menu-open')
  elButton.classList.toggle('button-active')
})