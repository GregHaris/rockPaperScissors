const playerScore= 0;
const computerScore = 0;

let playerScore_span = document.querySelector(".playerScore");
let computerScore_span = document.querySelector(".computerScore");

const scoreBoard_div = document.querySelector("scoreBoard");
let playerChoice;

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playerChoice = "rock";
});

const nameDisplay = document.querySelector("#nameDisplay");
nameDisplay.textContent = `PlayerChoice: ${playerChoice}`