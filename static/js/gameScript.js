
// A function getComputerChoice to randomly return "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

// A function to play a single round that takes two parameters
function playRound(playerSelection, computerSelection) {
    // Make playSelection Case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // assign getComputerChoice() as computer selection and also make it case-Insensitive
    computerSelection = getComputerChoice().toLowerCase();

    // if playerSelection not in "rock", "paper", "scissors", return error 
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        return "Invalid input. Word is 'Rock', 'Paper', or 'Scissors'.";
    };

    // if playerSelection equals computerSelection its a tie
    if (playerSelection === computerSelection) {
        return "😊 Its a tie! Let's play again";
    };

    // set the winning criteria and declaring the winner
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return `You win 🎉! ${playerSelection} beats ${computerSelection}`;
      } else {
        return `You lose 🤣! ${computerSelection} beats ${playerSelection}`;
      };
};


// A function game() that keeps score and reports a winner or the loser
function game() {
  // result storing variables
  let playerScore = 0;
  let computerScore = 0;

  // A function that loops through the game 5 times, save the result each time
  for(let i = 0; i < 5; i++) {
    // A variable that prompts the player to choose and stores the player's choice
    const playerSelection = prompt("What is the word?", "Choose 'Rock', 'Paper' or 'Scissor'" );
    // A variable that calls and takes the playRound function result
    const result = playRound(playerSelection, getComputerChoice());

    // logic to determine the winner
    // if game result starts with "You win", playerScore = +1
    if (result.startsWith("You win")) {
      playerScore++;
    // else if result starts with "You lose", computerScore = +1
    } else if (result.startsWith("You lose")) {
      computerScore++;
    };
    console.log(result);
  };
  
  // logic to announce the game winner
  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore} - ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose the game! Final score: ${computerScore} - ${playerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
  };
};

// calling the game() function to play the game
game();