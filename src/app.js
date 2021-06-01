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
  generateARandomCard();
};

function generateARandomCard() {
  //*** repetir el mismo icono */
  iconTopLefth.innerHTML = iconBottomRigth.innerHTML = randomIcon(cardsIcons);
  cardValueHtml.innerHTML = randomCardValue(cardValue);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIcon(arr) {
  let randomNumber = getRandomIntInclusive(0, arr.length - 1);
  return arr[randomNumber];
}

function randomCardValue(arr) {
  let randomNumber = getRandomIntInclusive(0, arr.length - 1);
  return arr[randomNumber];
}

//Cambiar el color de los iconos
function redSwitcher() {
  const num = getRandomIntInclusive(1, 100);
  if (num < 50) return "text-danger";
  return "";
}

//Botón que hace cambiar de carta
document.querySelector("button").addEventListener("click", () => {
  generateARandomCard();
});

//Timer que cambia de carta automaticamente cada 10 segundos
setInterval(function() {
  generateARandomCard();
}, 10000);
