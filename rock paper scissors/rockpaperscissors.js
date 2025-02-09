let humanScore = 0;
let computerScore = 0;
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

function playRound(humanChoice) {

    let result = " ";
    let move = " ";
    let computerChoice = getComputerChoice();
    if (computerChoice == humanChoice) {
        result = `Draw!`; 
        move = `Both Choose ${humanChoice}`;
    } else {
        if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")) {
            result = `Player Wins!`;
            move = `${humanChoice} beats ${computerChoice}.`
            humanScore++;
        } else {
            result = `Computer Wins!`;
            move = `${humanChoice} is beaten by ${computerChoice}.`
            computerScore++;
        }
    }
    document.getElementById("result").innerText = result;
    document.getElementById("computerscore").innerText = computerScore;
    document.getElementById("humanscore").innerText = humanScore;
    document.getElementById("move").innerText = move;
    
}
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = "";
    let move = "";

    if (computerChoice === humanChoice) {
        result = `Draw!`;
        move = `Both chose ${humanChoice}`;
    } else {
        if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")) {
            result = `Player Wins!`;
            move = `${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        } else {
            result = `Computer Wins!`;
            move = `${humanChoice} is beaten by ${computerChoice}.`;
            computerScore++;
        }
    }
    document.getElementById("playermoveimg").src = humanChoice.toLowerCase() + ".svg";
    document.getElementById("playermoveimg").style.display = "block";
    document.getElementById("computermoveimg").src = computerChoice.toLowerCase() + ".svg";
    document.getElementById("computermoveimg").style.display="flex";
        document.getElementById("result").innerText = result;
    document.getElementById("computerscore").innerText = computerScore;
    document.getElementById("humanscore").innerText = humanScore;
    document.getElementById("move").innerText = move;
  
  
}

