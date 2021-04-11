// available choices
let choices = ["R", "P", "S"];

let wins = 0;
let loses = 0;
let ties = 0;

function playGame() {
// prompt user for their selection store it in variable
let userChoice = window.prompt("Enter R, P, or S:");
userChoice = userChoice.toUpperCase();
window.alert(`You chose ${userChoice}`);
// assign a random choice for the computer
let index = Math.floor(Math.random() * choices.length)
let computerChoice = choices[index];
window.alert(`The computer chose ${computerChoice}`);

if (userChoice == computerChoice) {
    ties++;
    window.alert('Its a tie!');
}
else if (
    (userChoice == 'R' && computerChoice == 'S') ||
    (userChoice == 'S' && computerChoice == 'P') ||
    (userChoice == 'P' && computerChoice == 'R')
) {
    wins++;
    window.alert("You win!")
} 

else {
    loses++;
    window.alert("You lose!");
}

window.alert(`Stats:
Wins: ${wins}
Loses: ${loses}
Ties: ${ties}
`);

let playAgain = window.confirm("Play Again?");

if (playAgain === true) {
playGame();
}
}


playGame();
