function getComputerChoice() {

  let choice = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor((Math.random() * choice.length));

  return choice[random];
}
  

function playRound(computerSelection, playerSelection) {
  if ((playerSelection === "ROCK") && (computerSelection === "PAPER")) {

    console.log(`You LOSE! Paper beats rock`);
  
  } else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {

    console.log(`You LOSE! Scissor beats rock`);
  
  } else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {

    console.log(`You LOSE! Rock beats scissors`);
  
  } else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {

    console.log(`You WIN! Rock beats scissors`);
  
  } else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {

    console.log(`You WIN! Paper beats rock`);
  
  } else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {

    console.log(`You WIN! Scissor beats paper`);
  
  } else if (playerSelection === computerSelection){

    console.log(`You TIED!`);
  
  } else {

    console.log(`Invalid input`);
  }
}

let options = document.querySelectorAll("button")

let computerSelection;
let playerSelection;

options.forEach(selection => selection.addEventListener("click", () => {

  playerSelection = selection.textContent;
  computerSelection  = getComputerChoice();
  
  playRound(computerSelection, playerSelection)
}))




/*

// Randomize the computer choice
function getComputerChoice() { 

  let choice = ["rock", "paper", "scissors"];
  let random = Math.floor((Math.random() * choice.length));
  
  return choice[random];

}

// Getting the player input, also outputting every input on lower case
function getPlayerChoice() {

  let playerChoice = prompt("Choose: Rock - Paper or Scissors!") ;
  return playerChoice.toLocaleLowerCase();

}

// Here is the main game function
function playRound(playerSelection, computerSelection) {

  console.log(`You played: ${playerSelection}`);
  console.log(`Computer played: ${computerSelection}`)

  // Every iteration of the rock, paper & scissors game and it's outcomes
  if ((playerSelection === "rock") && (computerSelection === "paper")) {

    console.log(`You LOSE this one!`);
  
  } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {

    console.log(`You LOSE this one!`);
  
  } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {

    console.log(`You LOSE this one!`);
  
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {

    console.log(`You WIN this one!`);
  
  } else if ((playerSelection === "paper") && (computerSelection === "rock")) {

    console.log(`You WIN this one!`);
  
  } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {

    console.log(`You WIN this one!`);
  
  } else if (playerSelection === computerSelection){

    console.log(`You TIED, try again!`);
  
  } else {

    // we don't really want invalid inputs to substract from the number of games. So just a little synxtax reminder is useful
    console.log(`Invalid input, please try again with: rock - paper - scissors`);

  }
}

*/