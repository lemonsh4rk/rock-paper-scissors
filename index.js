function getComputerChoice() {
let choice = ["rock", "paper", "scissors"];

let random = Math.floor((Math.random() * choice.length));

return choice[random];
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose: Rock - Paper or Scissors!") ;
  return playerChoice.toLocaleLowerCase();
}
