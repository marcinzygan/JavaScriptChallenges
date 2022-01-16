'use strict';

// This is the Guess my number game from an online course on Udemy
// I've watched the demo of the game how it supossed to work , and then implemented the whole logic to it .

const again = document.querySelector('.again');
const numberDisplay = document.querySelector('.number');
const message = document.querySelector('.message');
const numberInput = document.querySelector('.guess');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
let scoreDisplay = Number(score.textContent);
const highScore = document.querySelector('.highscore');

let number = Math.floor(Math.random() * 20) + 1;
console.log(number);
let value;

check.addEventListener('click', () => {
  value = Number(numberInput.value);

  if (value < number && value > 0) {
    message.textContent = '📈Its a Higher Number📈';
    numberInput.value = '';
    scoreDisplay = scoreDisplay - 1;
    score.textContent = scoreDisplay;
  } else if (value > number && value <= 20) {
    message.textContent = '📉 Its a lower Number📉';
    scoreDisplay = scoreDisplay - 1;
    score.textContent = scoreDisplay;
    numberInput.value = '';
  } else if (value === number) {
    message.textContent = 'WINNER';
    numberDisplay.textContent = value;
    if (highScore.textContent > score.textContent) {
      highScore.textContent = highScore.textContent;
    } else {
      highScore.textContent = score.textContent;
    }
    document.body.style.background = '#60b347';
  } else {
    message.textContent = ' Enter Correct Number';
    document.body.style.background = '#ff0000';
    setTimeout(function () {
      document.body.style.background = '#222';
    }, 2000);
    numberInput.value = '';
  }
});

again.addEventListener('click', () => {
  numberInput.value = '';
  numberDisplay.textContent = '?';
  scoreDisplay = 20;
  score.textContent = '20';
  number = Math.floor(Math.random() * 20) + 1;
  document.body.style.background = '#222';
  console.log(number);
});
