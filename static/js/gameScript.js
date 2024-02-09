const playerScore= 0;
const computerScore = 0;

const playerScore_span = document.querySelector(".playerScore");
const computerScore_span = document.querySelector(".computerScore");
const scoreBoard_div = document.querySelector("#scoreBoard");
const winner = document.querySelector(".winner")
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

function game(playerChoice) {
  console.log("🤩🤩💥" + playerChoice)
}


function main() {
  rock_div.addEventListener("click", () => {
    game("rock");
  })

  paper_div.addEventListener("click", () => {
    game("paper");
  })

  scissors_div.addEventListener("click", () => {
    game("scissors");
  })
};

main();

