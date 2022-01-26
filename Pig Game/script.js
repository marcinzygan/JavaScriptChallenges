'use strict';

const scoreDisplay0 = document.getElementById('score--0');
const scoreDisplay1 = document.getElementById('score--1');
const playerDisplay0 = document.querySelector('.player--0');
const playerDisplay1 = document.querySelector('.player--1');
const diceDisplay = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const currentDisplay0 = document.getElementById('current--0');
const currentDisplay1 = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreDisplay0.textContent = 0;
  scoreDisplay1.textContent = 0;
  currentDisplay0.textContent = 0;
  currentDisplay1.textContent = 0;
  diceDisplay.classList.add('hidden');
  playerDisplay0.classList.remove('player--winner');
  playerDisplay1.classList.remove('player--winner');
  playerDisplay0.classList.add('player--active');
  playerDisplay1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  playerDisplay0.classList.toggle('player--active');
  playerDisplay1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice according to random number
    diceDisplay.classList.remove('hidden');
    diceDisplay.src = `dice-${dice}.png`;
    //   check if its 1
    if (dice !== 1) {
      //   add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to activeplayer score
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceDisplay.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
