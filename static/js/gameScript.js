
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

