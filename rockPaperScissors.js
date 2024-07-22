function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "its a tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return "human";
    } else {
      computerScore++;
      return "computer";
    }
  }

  let round = +prompt("How many rounds? ");

  function getHumanChoice() {
    const choice = prompt(
      "What's your choice? 'Rock', 'Paper', or 'Scissors'? "
    ).toLowerCase();
    if (
      choice !== "rock" &&
      choice !== "paper" &&
      choice !== "scissors"
    ) {
      console.log("Incorrect choice");
    }
    return choice;
  }

  for (let i = 0; i <round; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const roundWinner = playRound(humanChoice, computerChoice);

    if (roundWinner === "human") {
      console.log(`You win round ${i + 1}!`);
    } else if (roundWinner === "computer") {
      console.log(`You lose round ${i + 1}!`);
    } else {
      console.log(`Round ${i + 1} is a tie!`);
    }
  }

  console.log(`Final score: 
    You: ${humanScore} : Computer: ${computerScore}`);

  humanScore > computerScore
    ? console.log("You win the game!")
    : computerScore > humanScore
    ? console.log("You lose the game!")
    : console.log("The game is a tie!");
}

playGame();
