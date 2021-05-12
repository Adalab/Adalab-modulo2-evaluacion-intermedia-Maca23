'use strict';

const randomNumber = getRandomNumber(100);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(`Mi número aleatorio es ${randomNumber}`);

const numberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const clueElement = document.querySelector(".js-clue");
const tryElement = document.querySelector(".js-try");

function getNumber() {
  let numberValue = parseInt(numberElement.value);
  console.log(numberElement.value);
  if (numberValue === randomNumber) {
    clueElement.value = 'Has ganado campeona!!!';
  } else if (numberValue < randomNumber) {
    clueElement.value = 'Demasiado bajo';
  } else if (numberValue > randomNumber) {
    clueElement.value = 'Demasiado alto';
  }
}

buttonElement.addEventListener("click", getNumber);