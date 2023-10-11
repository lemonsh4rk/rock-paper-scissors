let gameOver = false;
let gamesLeft = 5;
let i = 0;
let playerScore = 0;
let computerScore = 0;
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
      i++;
      computerScore++;
      console.log(`You lose this one!
      You have ${gamesLeft - i} games left`);
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
      i++;
      computerScore++;
      console.log(`You lose this one!
      You have ${gamesLeft - i} games left`);
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
      i++;
      computerScore++;
      console.log(`You lose this one!
      You have ${gamesLeft - i} games left`);
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      i++;
      playerScore++;
      console.log(`You win this one!
      You have ${gamesLeft - i} games left`);
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
      i++;
      playerScore++;
      console.log(`You win this one!
      You have ${gamesLeft - i} games left`);
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
      i++;
      playerScore++;
      console.log(`You win this one!
      You have ${gamesLeft - i} games left`);
    } else if (playerSelection === computerSelection){
      i++;
      console.log(`You tied, try again! 
      You have ${gamesLeft - i} games left`);
    } else {
      console.log(`Invalid input, please try again with: rock - paper - scissors
      You have ${gamesLeft - i} games left`);
    }
  }

  if (i < gamesLeft) {
    rockPaperScissors(getPlayerChoice(), getComputerChoice());
  } else {
    gameOver = true;
  }
}