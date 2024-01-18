
// A function getComputerChoice to randomly return "Rock", "Paper" or "Scissors"
const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const randomWord = getComputerChoice();

// A function to play a single round that takes two parameters
function playRound(playerSelection, computerSelection){
    let getInput = prompt("what is the word? 'Rock', 'Paper' or Scissors'? ");
    // get user input, convert and assign input to playerSelection
    playerSelection = getInput.toLocaleLowerCase();
    // assign getComputerChoice() as computer selection
    computerSelection = randomWord.toLowerCase;
    // if playerSelection not in option, return error 
    if (!options.includes(playerSelection)) {
        return "Invalid input. word is 'Rock', 'Paper', or 'Scissors'.";
    }
    // if playerSelection equals computerSelection its a tie
    if (playerSelection === computerSelection){
        return "😊 Its a tie! Let's play again"
    }
    // set the winning criteria and declaring the winner
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return `You win 🎉! ${playerSelection} beats ${computerSelection}`
      } else {
        return `You lose 🤣! ${computerSelection} beats ${playerSelection}`
      }
}
