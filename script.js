/* ------------------------------------------------------------------------------
   Select random Rock, Paper, or Scissors for computer
*/
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

/* ------------------------------------------------------------------------------
   Play one round between user and computer, the winner gets 1 point
*/
function playRound(playerSelection, computerSelection) {
    const firstChar = playerSelection.charAt(0).toUpperCase();
    playerSelection = firstChar.concat(playerSelection.substring(1));
    let resultText;

    // Get DOM elements
    let resultDiv = document.getElementById('result');
    
    if (playerSelection == computerSelection) {
        resultText = "Tie Game";
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'
        || playerSelection == 'Paper' && computerSelection == 'Rock'
        || playerSelection == 'Scissors' && computerSelection == 'Paper'
        ) {
            resultText = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerPoints++;
    } else {
        resultText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints++;
    }

    let resultOneRoundText = document.createTextNode(`Round ${++round}: ${resultText}`);
    const br = document.createElement('br');
    resultDiv.append(resultOneRoundText, br);

    if (round == 5) {
        const finalResultText = document.createTextNode(announceFinalResult(playerPoints, computerPoints));
        const br = document.createElement('br');
        resultDiv.append(finalResultText, br);
        resetGame();
    }
}

/* ------------------------------------------------------------------------------
   Play a game of multiple rounds between user and computer
   and announce results based on total points from all rounds
*/
function game() {
    const buttons = document.querySelectorAll('button');    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playRound(`${button.textContent}`, computerPlay());
        })
    });
}

function resetGame() {
    const playAgainButton = document.createElement('button');
    let resultDiv = document.getElementById('result');

    playAgainButton.textContent = 'Play again';
    disableButtons();
    resultDiv.appendChild(playAgainButton);

    playAgainButton.addEventListener('click', () => {
        computerPoints = playerPoints = 0;
        enableButtons();
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = false);
}

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}
/* ------------------------------------------------------------------------------
   Announce result based on player and computer points
*/
function announceFinalResult (playerPoints, computerPoints) {
    return (playerPoints > computerPoints) ? 'You won the game!' : 
           (playerPoints < computerPoints) ? 'You lost the game' :
           'It\'s a tie game';
}

/* ------------------------------------------------------------------------------
   Main program
*/

/* One round game */
// Player can enter case-insensitive option
let playerPoints = 0;
let computerPoints = 0;
let round = 0;

// const playerSelection = 'RoCK';
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

/* ----------------------------------------------------------------------------------
   Add buttons and results script
*/
const mainDiv = document.createElement('div');

const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');


rockButton.textContent = 'rock';
paperButton.textContent = 'paper';
scissorsButton.textContent = 'scissors';

const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result');

mainDiv.append(rockButton, paperButton, scissorsButton, resultDiv);
document.body.appendChild(mainDiv);

/* -----------------------------------------------------------------------------
*/
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.classList.add('player');
    button.setAttribute('style', 'font-size: 3rem;');
});

/* Five round game */
game();