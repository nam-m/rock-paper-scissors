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
    // Captialize first character of player selection 
    const firstChar = playerSelection.charAt(0).toUpperCase();
    playerSelection = firstChar.concat(playerSelection.substring(1));
    
    // Get DOM element
    let resultDiv = document.getElementById('result');
    
    // Get result based on player and computer selection
    let resultText;
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

    // Announce final scores, result and end game
    if (playerPoints == SCORES_TO_WIN || computerPoints == SCORES_TO_WIN) {
        const finalScoreText = document.createTextNode(`Player: ${playerPoints}\t Computer: ${computerPoints}`);
        const finalResultText = document.createTextNode(announceFinalResult(playerPoints, computerPoints));

        resultDiv.append(finalScoreText, document.createElement('br'));    
        resultDiv.append(finalResultText, document.createElement('br'));
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

/* ------------------------------------------------------------------------------
   Enable 'Play again' button when one player wins,
   and reset game is 'Play again' button is pressed
*/
function resetGame() {
    const playAgainButton = document.createElement('button');
    let resultDiv = document.getElementById('result');

    disableButtons();
    playAgainButton.textContent = 'Play again';
    resultDiv.appendChild(playAgainButton);

    // Reset all variables and elements when 'Play again' button is pressed
    playAgainButton.addEventListener('click', () => {
        computerPoints = playerPoints = round = 0;
        resultDiv.textContent = '';
        enableButtons();
    });
}

/* ------------------------------------------------------------------------------
   Functions to enable/disable all buttons
*/
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
   ------------------------------------------------------------------------------
*/
let playerPoints = 0;
let computerPoints = 0;
let round = 0;
const SCORES_TO_WIN = 5;

/* ----------------------------------------------------------------------------------
   Add buttons and results elements, and append to document in the DOM
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
    Add attributes to buttons
*/
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.classList.add('player');
    button.setAttribute('style', 'font-size: 3rem;');
});

game();