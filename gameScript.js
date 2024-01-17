/*
A function getComputerChoice to randomly return "Rock", "Paper" or "Scissors"
*/

function getComputerChoice(){
    const words = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// to call the function
const randomWord = getComputerChoice();
console.log(randomWord);