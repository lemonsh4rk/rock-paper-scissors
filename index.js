let optionsButtons = document.querySelectorAll("button");
let resultText = document.querySelector("#resulttext");
let computerSelectionText = document.querySelector("#computerselectiontext");
let computerScoreText = document.querySelector("#computerscoretext");
let playerScoreText = document.querySelector("#playerscoretext");

let gameOver = false;
let playerScore = 0;
let computerScore = 0;

let computerSelection;
let playerSelection;

function getComputerChoice() {

  let choice = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor((Math.random() * choice.length));

  return choice[random];
}
  
function playRound(computerSelection, playerSelection) {
  if ((playerSelection === "ROCK") && (computerSelection === "PAPER")) {

    resultText.textContent = `You LOSE! Paper beats rock`;
    computerScore++;
  
  } else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {

    resultText.textContent = `You LOSE! Scissor beats rock`;
    computerScore++;
  
  } else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {

    resultText.textContent = `You LOSE! Rock beats scissors`;
    computerScore++;
  
  } else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {

    resultText.textContent = `You WIN! Rock beats scissors`;
    playerScore++;
  
  } else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {

    resultText.textContent = `You WIN! Paper beats rock`;
    playerScore++;
  
  } else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {

    resultText.textContent = `You WIN! Scissor beats paper`;
    playerScore++;
  
  } else if (playerSelection === computerSelection){

    resultText.textContent = `You TIED!`;
  
  } else {

    resultText.textContent = `Invalid input`;
  }
}

optionsButtons.forEach(selectionButton => selectionButton.addEventListener("click", () => {

  playerSelection = selectionButton.textContent;
  computerSelection  = getComputerChoice();

  computerSelectionText.textContent = `Computer played: ${computerSelection}`;

  playRound(computerSelection, playerSelection);

  computerScoreText.textContent = `Computer score: ${computerScore}`;
  playerScoreText.textContent = `Player score: ${playerScore}`;

}))