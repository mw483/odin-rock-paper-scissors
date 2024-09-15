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

// Declare the players score variables

let humanScore = 0;
let computerScore = 0;

// Plays a round and displays results and adds scores

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
    }

// Plays a 5-round game

function playGame() {
        for (let rounds = 1; rounds <= 5; rounds++) {
            console.log(`Round ${rounds} out of 5`)
            let humanSelection = getHumanChoice();
            let computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            console.log(`Your score: ${humanScore}, computer's score: ${computerScore}`);
          }
        if (humanScore > computerScore) {
            console.log("Your final score is higher than the computer! You win!");
        }
        else if (computerScore < humanScore) {
            console.log("Your final score is lower than the computer! You lose :(");
        }
        else {
            console.log("The final scores are equal. It's a tie!")
        }
        humanScore = 0;
        computerScore = 0;
    }

  
    
  