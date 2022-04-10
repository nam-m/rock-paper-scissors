function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    // console.log(`Computer: ${computerSelection}`);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let firstChar = playerSelection.charAt(0).toUpperCase();
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
    }
    else
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;

    return result;
}

function game() {
    for (let i = 0; i < 1; i++) {
        let playerSelection = prompt("What's your hand?");
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: ${result}`);
    }
}

/* First round game */

// Player can enter case-insensitive option
// const playerSelection = 'RoCK';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

/* Five round game */
game();