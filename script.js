function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = choice[Math.floor(Math.random() * choice.length)];
    // console.log(`Computer: ${computerSelection}`);
    return 'Rock';
}

function playRound(playerSelection, computerSelection) {
    const firstChar = playerSelection.charAt(0).toUpperCase();
    playerSelection = firstChar.concat(playerSelection.substring(1));
    // console.log(`Player: ${input}`);

    let result = "Tie Game";

    if (playerSelection == computerSelection) {
        //pass
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

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your hand?");
        const computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result}`);
    }
    console.log(calculatePoints(playerPoints, computerPoints));
}

function calculatePoints (playerPoints, computerPoints) {
    let finalResult = (playerPoints > computerPoints) ? 'You won the game!' : 
                  (playerPoints < computerPoints) ? 'You lost the game' :
                   'It\'s a tie game';
    return finalResult;
}

/* One round game */

// Player can enter case-insensitive option
// const playerSelection = 'RoCK';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

/* Five round game */
let playerPoints = 0;
let computerPoints = 0;
game();