const elButton = document.querySelector(".menu__burger-button");
const elMenu = document.querySelector(".menu");


elButton.addEventListener('click', () => {
  elMenu.classList.toggle('menu-open')
  elButton.classList.toggle('button-active')
})