let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
      
   
    let computerChoice = getComputerChoice();
    let result = "";
    let move = "";

    if (computerChoice === humanChoice) {
        result = `Draw!`;
        move = `Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = `Player Wins!`;
        move = `${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result = `Computer Wins!`;
        move = `${humanChoice} is beaten by ${computerChoice}.`;
        computerScore++;
    }
    if (humanScore === 5 || computerScore === 5) {
        showModal(humanScore === 5 ? "Player" : "Computer");
    }
    document.getElementById("playermoveimg").src = humanChoice.toLowerCase() + ".svg";
    document.getElementById("playermoveimg").style.display = "block";
    document.getElementById("computermoveimg").src = computerChoice.toLowerCase() + ".svg";
    document.getElementById("computermoveimg").style.display = "flex";
    document.getElementById("result").innerText = result;
    document.getElementById("computerscore").innerText = computerScore;
    document.getElementById("humanscore").innerText = humanScore;
    document.getElementById("move").innerText = move;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("computerscore").innerText = computerScore;
    document.getElementById("humanscore").innerText = humanScore;
    document.getElementById("result").innerText = "Click on One of the Buttons to Start the Game";
    document.getElementById("playermoveimg").src = "unknown.svg";
    document.getElementById("computermoveimg").src = "unknown.svg";
    document.getElementById("winnerModal").style.display = "none";
}

function showModal(winner) {
    document.getElementById("winnerMessage").innerText = `${winner} Wins!`;
    document.getElementById("winnerModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("winnerModal").style.display = "none";
    resetGame();
}