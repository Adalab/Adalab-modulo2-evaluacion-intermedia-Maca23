"use strict";

const randomNumber = getRandomNumber(100);
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const numberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const clueElement = document.querySelector(".js-clue");
const tryElement = document.querySelector(".js-try");
let cont = 0;

function getNumber() {
  let numberValue = parseInt(numberElement.value);
  console.log(numberElement.value);
  if (numberValue < 1 || numberValue > 100) {
    clueElement.value = "El número debe estar entre 1 y 100";
  } else if (numberValue < randomNumber) {
    clueElement.value = "Pista: Demasiado bajo";
  } else if (numberValue > randomNumber) {
    clueElement.value = "Pista: Demasiado alto";
  } else if (numberValue === randomNumber) {
    clueElement.value = "Has ganado campeona!!!";
  } else {
    clueElement.value = "El número debe estar entre 1 y 100";
  }
}

function increaseCounter() {
  cont += 1;
  tryElement.value = `Número de intentos: ${cont}`;
}

function handleClickButton() {
  getNumber();
  increaseCounter();
}

console.log("Random number: " + randomNumber);

buttonElement.addEventListener("click", handleClickButton);
