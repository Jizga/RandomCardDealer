/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

const cardsIcons = [
  `<i class="bi bi-suit-spade-fill ${redSwitcher()}"></i>`,
  `<i class="bi bi-suit-club-fill ${redSwitcher()}"></i>`,
  `<i class="bi bi-suit-diamond-fill ${redSwitcher()}"></i>`,
  `<i class="bi bi-suit-heart-fill ${redSwitcher()}"></i>`
];

const cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];

const iconTopLefth = document.querySelector(".iconTopLefth");
const iconBottomRigth = document.querySelector(".iconBottomRigth");
const cardValueHtml = document.querySelector(".cardValue");

window.onload = function() {
  //*** repetir el mismo icono */
  iconTopLefth.innerHTML = iconBottomRigth.innerHTML = randomIcon(cardsIcons);
  cardValueHtml.innerHTML = randomCardValue(cardValue);
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomIcon = arr => {
  let randomNumber = getRandomIntInclusive(0, arr.length - 1);
  return arr[randomNumber];
};

const randomCardValue = arr => {
  let randomNumber = getRandomIntInclusive(0, arr.length - 1);
  return arr[randomNumber];
};

//Cambiar de color de los iconos
//En arrow function no funciona llamarla primero y declararla después
function redSwitcher() {
  const num = getRandomIntInclusive(1, 100);
  if (num < 50) return "text-danger";
  return "";
}
