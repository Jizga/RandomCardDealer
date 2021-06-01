/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

const cardsIcons = [
  `<i class="bi bi-suit-spade-fill"></i>`,
  `<i class="bi bi-suit-club-fill"></i>`,
  `<i class="bi bi-suit-diamond-fill"></i>`,
  `<i class="bi bi-suit-heart-fill"></i>`,
  `<i class="bi bi-suit-spade-fill text-danger"></i>`,
  `<i class="bi bi-suit-club-fill text-danger"></i>`,
  `<i class="bi bi-suit-diamond-fill text-danger"></i>`,
  `<i class="bi bi-suit-heart-fill text-danger"></i>`
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

const randomIcon = arr => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

const randomCardValue = arr => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};
