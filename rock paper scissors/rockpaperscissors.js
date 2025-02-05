let humanScore = 0;
let computerScore= 0;
function getComputerChoice() {
    let computerChoice = (Math.random() * 2).toFixed(0);
    if (computerChoice == 0) {
        return "Paper";
    }
    if (computerChoice == 1) {
        return "Rock";
    }
    if (computerChoice == 2) {
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter the move you want to play: ").toUpperCase();
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice.toUpperCase() == humanChoice) {
        console.log("Draw")
    } else {
        if (computerChoice == "Rock") {
            if (humanChoice == "PAPER") {
                console.log("You Win!! Paper covers Rock");
                humanScore++;
            }
            if (humanChoice == "SCISSORS") {
                console.log("You Lose!! Rock Covers Scissors");
                computerScore++;
            }
        }

        if (computerChoice == "Paper") {
            if (humanChoice == "ROCK") {
                console.log("You Lose !! Paper Covers Rock");
                computerScore++;
            }
            if (humanChoice == "SCISSORS") {
                console.log("You Win !! Scissors Covers Paper");
                humanScore++;
            }
        }
        if (computerChoice == "Scissors") {
            if (humanChoice == "ROCK") {
                console.log("You Win!! Rock covers Scissors");
                humanScore++;
            }
            if (humanChoice == "PAPER") {
                console.log("You Lose!! Scissors covers Rock");
                computerScore++;
            }
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection.toString());
        console.log("Eu: " + humanSelection.toString());
     
        playRound(humanSelection, computerSelection);
        console.log("Computer Score: " + computerScore + " Human Score: " + humanScore );
    }
}
playGame();
