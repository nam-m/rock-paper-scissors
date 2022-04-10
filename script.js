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

    let result;
    if (playerSelection == computerSelection) {
        result = "Tie Game";
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'
        || playerSelection == 'Paper' && computerSelection == 'Rock'
        || playerSelection == 'Scissors' && computerSelection == 'Paper'
        ) {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerPoints++;
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints++;
    }

    return result;
}

/* ------------------------------------------------------------------------------
   Play a game of multiple rounds between user and computer
   and announce results based on total points from all rounds
*/
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your hand?");
        const computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result}`);
    }
    console.log(announceResult(playerPoints, computerPoints));
}

/* ------------------------------------------------------------------------------
   Announce result based on player and computer points
*/
function announceResult (playerPoints, computerPoints) {
    return (playerPoints > computerPoints) ? 'You won the game!' : 
           (playerPoints < computerPoints) ? 'You lost the game' :
           'It\'s a tie game';
}

/* ------------------------------------------------------------------------------
   Main program
*/

/* One round game */
// Player can enter case-insensitive option
// const playerSelection = 'RoCK';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

/* Five round game */
let playerPoints = 0;
let computerPoints = 0;
game();