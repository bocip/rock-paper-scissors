let choice = ["Rock", "Paper", "Scissors"].map(v => v.toLowerCase());
let playerScore = 0;
let computerScore = 0;

// **** Computer chooses a random element in 'choice' array ****
function computerPlay() {
    return choice[Math.floor(Math.random() * choice.length)];
}

// **** A round of Rock Paper Scissors ****
function playRound(playerSelection, computerSelection) {

    let player = playerSelection;
    let computer = computerSelection;

    // **** If Player is the winner ****
    let rockWin = "You Win! Rock beats Scissors";
    let paperWin = "You Win! Paper beats Rock";
    let scissorsWin = "You Win! Scissors beats Paper";

    // **** If Player is the looser ****
    let rockLoose = "You Lost! Rock beats Scissors";
    let paperLoose = "You Lost! Paper beats Rock";
    let scissorsLoose = "You Lost! Scissors beats Paper";

    // Loop for all the possible answers
    if (player == choice[0] && computer == choice[2]) {
        playerScore++;
        return rockWin;
    } else if (player == choice[1] && computer == choice[0]) {
        playerScore++;
        return paperWin;
    } else if (player == choice[2] && computer == choice[1]) {
        playerScore++;
        return scissorsWin;
    } else if (computer == choice[0] && player == choice[2]) {
        computerScore++;
        return rockLoose;
    } else if (computer == choice[1] && player == choice[0]) {
        computerScore++;
        return paperLoose;
    } else if (computer == choice[2] && player == choice[1]) {
        computerScore++;
        return scissorsLoose;
    } else {
        return "It's a draw";
    };
}

const computerSelection = computerPlay();

//**** Playing 5 rounds ****
function game() {
    let one = prompt('5 ROUNDS REMAINING: Choose rock paper or scissors');
    console.log(playRound(one.toLowerCase(), computerPlay()));
    let two = prompt('4 ROUNDS REMAINING: Choose rock paper or scissors');
    console.log(playRound(two.toLowerCase(), computerPlay()));
    let three = prompt('3 ROUNDS REMAINING: Choose rock paper or scissors');
    console.log(playRound(three.toLowerCase(), computerPlay()));
    let four = prompt('2 ROUNDS REMAINING: Choose rock paper or scissors');
    console.log(playRound(four.toLowerCase(), computerPlay()));
    let five = prompt('LAST ROUND: Choose rock paper or scissors');
    console.log(playRound(five.toLowerCase(), computerPlay()));

    // **** Logging the result ****
    console.log("------------------------------")
    if (playerScore === computerScore) {
        console.log('RESULT: You tied the computer.');
    } else if (playerScore > computerScore) {
        console.log('RESULT: You won! Nice job.');
    } else if (playerScore < computerScore) {
        console.log('RESULT: You lost. Better luck next time.');
    }
}
game();