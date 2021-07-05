'use strict';

//selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const videoEl = document.querySelector(".winner-video")
let score, activePlayer, currentScore, playing;
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}
const init = function() {
    score = [0, 0];
    activePlayer = 0;
    currentScore = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    playing = true;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
}
init();
diceEl.classList.add('hidden');
//rolling idce functionality
btnRoll.addEventListener('click', function() {
    //1.generate random Number
    if (playing) {
        const diceRoll = Math.floor(Math.random() * 6) + 1;

        //2.display dice roll
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${diceRoll}.png`;
        //3.Is it 1 no then switch player;
        if (diceRoll !== 1) {
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //switch current player
            switchPlayer();
        }
    }
});
//hold functionality
btnHold.addEventListener('click', function() {
        if (playing) {
            score[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
            if (score[activePlayer] >= 10) {
                playing = false;
                diceEl.classList.remove("hidden");
                document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
                document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            } else {
                switchPlayer();
            }
        }
    })
    //new game
btnNew.addEventListener('click', init)