const playerScore= 0;
const computerScore = 0;

const playerScore_span = document.querySelector(".playerScore");
const computerScore_span = document.querySelector(".computerScore");
const scoreBoard_div = document.querySelector("#scoreBoard");
const winner = document.querySelector(".winner")
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");



function main() {
  rock_div.addEventListener("click", () => {
    game("r");
  })

  paper_div.addEventListener("click", () => {
    game("p");
  })

  scissors_div.addEventListener("click", () => {
    game("s");
  })
};

main();

