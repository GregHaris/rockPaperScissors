let playerScore = 0;
let computerScore = 0;
let selectedGameRound = 0;
let roundsPlayed = 0;

let scores = document.querySelector(".scores");
let gameOverMessage = document.querySelector(".finalResult");
let roundMessage = document.querySelector(".roundsLeft");
let roundResult = document.querySelector(".roundResult");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let gameRoundOptions = document.querySelector("#rounds");
gameRoundOptions.focus();
gameRoundOptions.addEventListener("change", () => {
  gameRoundOptions.disabled = true;
  selectedGameRound = parseInt(gameRoundOptions.value);
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function game(PlayerChoice) {
  const computerChoice = getComputerChoice();

  if (roundsPlayed < selectedGameRound) {
    if (PlayerChoice === computerChoice) {
      roundResult.textContent = "It's a tie!";
    } else if (
      (PlayerChoice === "rock" && computerChoice === "scissors") ||
      (PlayerChoice === "paper" && computerChoice === "rock") ||
      (PlayerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      roundResult.textContent = `You win! ${PlayerChoice} beat ${computerChoice}`;
    } else {
      computerScore++;
      roundResult.textContent = `You lose! ${computerChoice} beat ${PlayerChoice}`;
    }
  
    scores.textContent = `Your score: ${playerScore} \nComputer score: ${computerScore}`;
  }

  roundsPlayed++;

  let roundsLeft = selectedGameRound - roundsPlayed;

  if (selectedGameRound === 1) {
    roundMessage.textContent = `${roundsLeft} of ${selectedGameRound} round to go`;
  } else {
    roundMessage.textContent = `${roundsLeft} of ${selectedGameRound} rounds to go`;
  }

  if (roundsPlayed === selectedGameRound) {
    roundResult.textContent = "";
    if (playerScore > computerScore) {
      gameOverMessage.textContent = "Game Over! Congratulations you win!";
    } else if (computerScore > playerScore) {
      gameOverMessage.textContent = "Game Over! You lose! Try again.";
    } else {
      gameOverMessage.textContent = "Game Over! Its a tie. Let's go again.";
    }
  }
}

function main() {
  const buttons = [rock, paper, scissors];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (roundsPlayed === selectedGameRound) {
        buttons.forEach(btn => btn.disabled = true);
      } else {
        game(button.id);
      }
    });
  });
}

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  window.location.reload()
});

main();
