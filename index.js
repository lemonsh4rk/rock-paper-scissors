let optionsButtons = document.querySelectorAll("button")
let resultText = document.querySelector("#resulttext")


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
  
  } else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {

    resultText.textContent = `You LOSE! Scissor beats rock`;
  
  } else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {

    resultText.textContent = `You LOSE! Rock beats scissors`;
  
  } else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {

    resultText.textContent = `You WIN! Rock beats scissors`;
  
  } else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {

    resultText.textContent = `You WIN! Paper beats rock`;
  
  } else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {

    resultText.textContent = `You WIN! Scissor beats paper`;
  
  } else if (playerSelection === computerSelection){

    resultText.textContent = `You TIED!`;
  
  } else {

    resultText.textContent = `Invalid input`;
  }
}

optionsButtons.forEach(selectionButton => selectionButton.addEventListener("click", () => {

  playerSelection = selectionButton.textContent;
  computerSelection  = getComputerChoice();



  playRound(computerSelection, playerSelection)
}))