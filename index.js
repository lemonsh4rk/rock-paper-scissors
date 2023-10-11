let gameOver = false;
let gamesLeft = 5;
let i = 0;
let playerScore = 0;
let computerScore = 0;


// We'll loop so the game keeps going while gameover is NOT true
while (!gameOver) {

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
  function rockPaperScissors(playerSelection, computerSelection) {

    console.log(`You played: ${playerSelection}`);
    console.log(`Computer played: ${computerSelection}`)


    // Every iteration of the rock, paper & scissors game and it's outcomes
    if ((playerSelection === "rock") && (computerSelection === "paper")) {

      i++; //this is to count the number of tries, we then use it to substract it from the gamesLeft variable
      computerScore++; // to keep track the score of the PC

      console.log(`You lose this one!\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);
    
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {

      i++; 
      computerScore++;

      console.log(`You lose this one!\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);
    
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {

      i++;
      computerScore++;

      console.log(`You lose this one!\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);
    
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {

      i++;
      playerScore++; // to keep track of the player score

      console.log(`You win this one!\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);
    
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {

      i++;
      playerScore++;

      console.log(`You win this one!\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);
    
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {

      i++;
      playerScore++;

      console.log(`You win this one!\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);
    
    } else if (playerSelection === computerSelection){
      i++;

      console.log(`You tied, try again!\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);
    
    } else {

      // we don't really want invalid inputs to substract from the number of games. So just a little synxtax reminder is useful
      console.log(`Invalid input, please try again with: rock - paper - scissors\n
      You have ${gamesLeft - i} games left\n
      Current Score is: Player:${playerScore} - PC:${computerScore}`);

    }
  }


  // Here we count i and see if it reaches the number of games left, while it is < it'll keep playing again and again
  if (i < gamesLeft) {

    rockPaperScissors(getPlayerChoice(), getComputerChoice());

  } else {

    // The the games left reach 0 we want to declare a winner, here's every outcome
    if (playerScore < computerScore) {

      console.log(`The final score is: Player:${playerScore} - PC:${computerScore} \n
      The Computer WINS! Good luck next time`);

      gameOver = true;
    } else if (playerScore > computerScore) {

      console.log(`The final score is: Player:${playerScore} - PC:${computerScore} \n
      You WIN! Congratulations`);

      gameOver = true;
    } else {

      console.log(`The final score is: Player:${playerScore} - PC:${computerScore} \n
      You both tied this time. No one wins, no one loses :)`);

      gameOver = true;

    }
  }
}