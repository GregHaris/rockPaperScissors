let playerScore= 0;
let computerScore = 0;
let roundsPlayed = 0;
let selectedGameRound = 0;

let playerScore_span = document.querySelector(".playerScore");
let computerScore_span = document.querySelector(".computerScore");
const scoreBoard_div = document.querySelector("#scoreBoard");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");
let roundResult = document.querySelector(".roundResult");
let gameOverMessage_h3 = document.querySelector("#gameOverMessage");
const resetBtn = document.querySelector("#reset");

// add event listener when user selects the number of rounds to play
let gameRoundOptions = document.querySelector("#gameRound");
gameRoundOptions.addEventListener("change", () => {
  selectedGameRound = parseInt(gameRoundOptions.value); // stores the int converted value of the option selected
  resetBtn.click(); // resets the game if game round is selected;
});

gameRoundOptions.focus();

// function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// game criterial
function game(playerChoice) {
  const computerChoice = getComputerChoice();

// game rules
  if (roundsPlayed < selectedGameRound) {
    if (playerChoice === computerChoice) {
      roundResult.textContent =  "Its a tie 🤝!";
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

  roundsPlayed++ // increase roundsPlayed after each round.

  if (roundsPlayed === selectedGameRound) {
    if (playerScore > computerScore) {
      gameOverMessage_h3.textContent = `Game Over! You won the game.`;
    } else if (computerScore > playerScore) {
      gameOverMessage_h3.textContent =  `Game Over! You won the game.`;
    } else {
      gameOverMessage_h3.textContent = `Game over! It's a tie! `;
    }
  };
};

//play game with button
function main() {
  rock_div.addEventListener("click", () => {
    game("rock");
  })

  paper_div.addEventListener("click", () => {
    game("paper");
  })

  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
};

// reset 
resetBtn.addEventListener("click", () => {
  playerScore = 0; // resets player score
  playerScore_span.textContent = playerScore; // sets player UI score to the default score;
  computerScore = 0; // resets Comp score
  computerScore_span.textContent = computerScore; // sets computer UI score to the default score;
  roundsPlayed = 0; // resets the roundsPlayed to default
  gameOverMessage_h3.textContent = ""; // clears the game over message
  roundResult.textContent = ""; // clears the round result message
});


main();

