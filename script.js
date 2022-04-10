function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    console.log(`Computer: ${computerSelection}`);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let input = playerSelection.toLowerCase();
    let firstChar = input.charAt(0).toUpperCase();
    input = firstChar.concat(input.substring(1));
    console.log(`Player: ${input}`);

    let result = "Tie Game";

    if (input == computerSelection) {
        //pass
    } else if (input == 'Rock' && computerSelection == 'Scissors'
        || input == 'Paper' && computerSelection == 'Rock'
        || input == 'Scissors' && computerSelection == 'Paper'
        ) {
            result = `You Win!`;
    }
    else
        result = `You Lose! ${computerSelection} beats ${input}`;

    return result;
}

// Player can enter case-insensitive option
const playerSelection = 'RoCK';

const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));