

function getUserChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors:");
    return userChoice;
}

function getComputerChoice() {   
    const computerChoice = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return computerChoice[choice];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    )
       { 
        const x = "You win!.";
        console.log("x");
    }
     else {
console.log("Computer wins!");
    }
}
function playGame() {
    const userChoice = getUserChoice();
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        const computerChoice = getComputerChoice();
        determineWinner(userChoice, computerChoice);
    } else {
        console.log("Error! Please choose rock, paper, or scissors.");
    }
}

playGame();

