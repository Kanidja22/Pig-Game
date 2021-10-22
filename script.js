'use strict';

let currentDiceValueOne = 0;
let currentDiceValueTwo = 0;

let resultPlayerOne = 0;
let resultPlayerTwo = 0;

const players = document.querySelectorAll('.player');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const scorePlayerOne = document.querySelector('#score--0');
const scorePlayerTwo = document.querySelector('#score--1');

const currentScorePlayerOne = document.querySelector('#current--0');
const currentScorePlayerTwo = document.querySelector('#current--1');

const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');

//Toggle Player Active 
function togglePlayer() {
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
}

// Reset the Game, New game
function resetGame() {
    currentDiceValueOne = 0;
    currentDiceValueTwo = 0;

    resultPlayerOne = 0;
    resultPlayerTwo = 0;

    currentScorePlayerOne.textContent = currentDiceValueOne;
    currentScorePlayerTwo.textContent = currentDiceValueTwo;

    scorePlayerOne.textContent = resultPlayerOne;
    scorePlayerTwo.textContent = resultPlayerTwo;

    if(playerOne.classList.contains('player--winner')){
        playerOne.classList.remove('player--winner');
    }
    else playerTwo.classList.remove('player--winner');

    togglePlayer();
}

btnNewGame.addEventListener('click', function (){
    resetGame();
});

//Hold button, changing active player and count scores
btnHold.addEventListener('click', function (){
    if(playerOne.classList.contains('player--active')){
        resultPlayerOne += currentDiceValueOne;
        scorePlayerOne.textContent = resultPlayerOne;
        currentDiceValueOne = 0;
        if(resultPlayerOne >= 100){
            playerOne.classList.add('player--winner');
            return;
        }
            
    }
    if(playerTwo.classList.contains('player--active')){
        resultPlayerTwo += currentDiceValueTwo;
        scorePlayerTwo.textContent = resultPlayerTwo;
        currentDiceValueTwo = 0;
        if(resultPlayerTwo >= 100) {
            playerTwo.classList.add('player--winner');
            return;
        }  
    }
    currentScorePlayerOne.textContent = currentDiceValueOne;
    currentScorePlayerTwo.textContent = currentDiceValueTwo;
    togglePlayer();
});

// Rolling Dice
btnRollDice.addEventListener('click', function () {
    if(resultPlayerOne >= 100 || resultPlayerTwo >= 100){
        return;
    }
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    imgDice.src = `./img/dice-${diceNumber}.png`;
    
    if(playerOne.classList.contains('player--active')){
        if(diceNumber === 1) {
            currentDiceValueOne = 0;
            togglePlayer();
        }else 
            currentDiceValueOne += diceNumber;
            
        currentScorePlayerOne.textContent = currentDiceValueOne;
    }
    else if(playerTwo.classList.contains('player--active')){
        if(diceNumber === 1) {
            currentDiceValueTwo = 0;
            togglePlayer();
        }else 
            currentDiceValueTwo += diceNumber;
            
        currentScorePlayerTwo.textContent = currentDiceValueTwo;
    }   
});



