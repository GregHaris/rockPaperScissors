let playerScore= 0;
let computerScore = 0;

const playerScore_span = document.querySelector(".playerScore");
const computerScore_span = document.querySelector(".computerScore");
const scoreBoard_div = document.querySelector("#scoreBoard");
const winner = document.querySelector(".winner")
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");
let roundResult = document.querySelector(".roundResult")


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

function game(playerChoice) {
  const computerChoice = getComputerChoice();

  // game rules
  if (playerChoice === computerChoice) {
      roundResult.textContent =  "Its a tie 🤝! Let's play again";
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++
    playerScore_span.textContent = playerScore;
    roundResult.textContent = `You win 🔥! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++ 
    computerScore_span.textContent = computerScore;       
    roundResult.textContent =  `You lose 🤣! ${computerChoice} beats ${playerChoice}`;
  }
};


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

