function getComputerChoice() {
  
  let choice = ["rock", "paper", "scissors"];

  let random = Math.floor((Math.random() * choice.length))

  return choice[random]
}

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