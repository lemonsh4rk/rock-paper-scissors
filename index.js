let gameOver = false;
while (!gameOver) {
  function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * choice.length));
    return choice[random];
  }

  function getPlayerChoice() {
      let playerChoice = prompt("Choose: Rock - Paper or Scissors!") ;
      return playerChoice.toLocaleLowerCase();
  }
  
  function rockPaperScissors(playerSelection, computerSelection) {
    console.log(`You played: ${playerSelection}`);
    console.log(`Computer played: ${computerSelection}`)
  if ((playerSelection === "rock") && (computerSelection === "paper")) {
    console.log("You lose, good luck next time!")
    gameOver = true;
  } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    console.log("You lose, good luck next time!")
    gameOver = true;
  } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    console.log("You lose, good luck next time!")
    gameOver = true;
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    console.log("You win, congratulations!")
    gameOver = true;
  } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
    console.log("You win, congratulations!")
    gameOver = true;
  } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    console.log("You win, congratulations!")
    gameOver = true;
  } else if (playerSelection === computerSelection){
    console.log(`You tied, try again!`);
  } else {
    gameOver = true;
  }}
  rockPaperScissors(getPlayerChoice(), getComputerChoice())
}