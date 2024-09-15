const choices = ["rock", "paper", "scissors"];

// getComputerChoice()
// randomly returns one of the following string values:
// “rock”, “paper” or “scissors”.
function getComputerChoice() {  
    computerChoiceIndex = Math.floor(Math.random() * 3);
    return choices[computerChoiceIndex];
}

// getHumanChoice() 
// A function that takes the user choice and returns it.
// prompts an input from the user
// returns the input from the user
// case & space insensitive.

function getHumanChoice() {
    humanChoice = prompt("Pick rock, paper, or scissors.");
    return humanChoice.toLowerCase().trim();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        console.log(`Your choice: ${humanChoice}, computer's choice: ${computerChoice}`);
        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            console.log("You lose! Paper beats rock.");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("You win! Rock beats scissors.");
        } 
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            console.log("You win! Paper beats rock.");
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("You lose! Scissors beats paper.");
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            humanScore += 1;
            console.log("You lose! Rock beats scissors.");
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            console.log("You win! Scissors beats paper.");
        }
        else {
            console.log("A tie!");
        }
    console.log(`Your score: ${humanScore}, computer's score: ${computerScore}`);
    }
  
  for (let rounds = 0; rounds < 5; rounds++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
    
  