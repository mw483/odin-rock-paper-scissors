const choices = ["rock", "paper", "scissors"];
const results = document.querySelector("#results");
const list = document.querySelector("ul");

// Event listener for buttons

const choiceRock = document.querySelector("#rock");

choiceRock.addEventListener("click", () => {
    var humanChoice = getHumanChoiceRock();
    console.log(humanChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
});

const choicePaper = document.querySelector("#paper");
choicePaper.addEventListener("click", () => {
    var humanChoice = getHumanChoicePaper();
    var computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

const choiceScissors = document.querySelector("#scissors");
choiceScissors.addEventListener("click", () => {
    var humanChoice = getHumanChoiceScissors();
    var computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

// getComputerChoice()
// randomly returns one of the following string values:
// “rock”, “paper” or “scissors”.
function getComputerChoice() {  
    computerChoiceIndex = Math.floor(Math.random() * 3);
    return choices[computerChoiceIndex];
};

// getHumanChoiceX() 
// A function that takes the user choice and returns it.
// Changed to reflect the buttons

function getHumanChoiceRock() {
    return humanChoice = choices[0];
};

function getHumanChoicePaper() {
    return humanChoice = choices[1];
};

function getHumanChoiceScissors() {
    return humanChoice = choices[2];
};


// Declare the players score variables

let humanScore = 0;
let computerScore = 0;

// Plays a round and displays results and adds scores

function playRound(humanChoice, computerChoice) {
        console.log(`Your choice: ${humanChoice}, computer's choice: ${computerChoice}`);
        var listItem = document.createElement("li");
            listItem.classList.add("listItem");        
        var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = `Your choice: ${humanChoice}, computer's choice: ${computerChoice}.`;
            listItem.appendChild(span);
            list.appendChild(listItem);
        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            var listItem = document.createElement("li");
            listItem.classList.add("listItem");        
            var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = "You lose! Paper beats rock.";
            listItem.appendChild(span);
            list.appendChild(listItem);
            console.log("You lose! Paper beats rock.");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            var listItem = document.createElement("li");
            listItem.classList.add("listItem");   
            var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = "You win! Rock beats scissors.";
            listItem.appendChild(span);
            list.appendChild(listItem);
            console.log("You win! Rock beats scissors.");
        } 
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            var listItem = document.createElement("li");
            listItem.classList.add("listItem");   
            var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = "You win! Paper beats rock.";
            listItem.appendChild(span);
            list.appendChild(listItem);
            console.log("You win! Paper beats rock.");
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            var listItem = document.createElement("li");
            listItem.classList.add("listItem");   
            var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = "You lose! Scissors beats paper.";
            listItem.appendChild(span);
            list.appendChild(listItem);
            console.log("You lose! Scissors beats paper.");
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            var listItem = document.createElement("li");
            listItem.classList.add("listItem");   
            var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = "You lose! Rock beats scissors.";
            listItem.appendChild(span);
            list.appendChild(listItem);
            console.log("You lose! Rock beats scissors.");
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            var listItem = document.createElement("li");
            listItem.classList.add("listItem");   
            var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = "You win! Scissors beats paper.";
            listItem.appendChild(span);
            list.appendChild(listItem);
            console.log("You win! Scissors beats paper.");
        }
        else {
            var listItem = document.createElement("li");
            listItem.classList.add("listItem");   
            var span = document.createElement("span");
            span.classList.add("span");
            span.textContent = "A tie!";
            listItem.appendChild(span);
            list.appendChild(listItem);
            console.log("A tie!");
        }
        var scoreTemp = document.createElement("p");
            scoreTemp.classList.add("scoreTemp");   
            scoreTemp.textContent =`Your score: ${humanScore}, computer's score: ${computerScore}`;
            results.appendChild(scoreTemp);
        if (humanScore == 5 || computerScore ==5){
            displayFinalResults();
        }    
    }

function displayFinalResults(){
    var finalResult = document.createElement("h3");
    finalResult.classList.add("finalResult");
    if (humanScore == 5) {
        finalResult.textContent = "You win! :)";
    }
    if (computerScore == 5) {
        finalResult.textContent = "You lose! :(";
    }
    results.appendChild(finalResult);
}

// Plays a 5-round game

// function playGame() {
//         for (let rounds = 1; rounds <= 5; rounds++) {
//             console.log(`Round ${rounds} out of 5`)
//             let humanSelection = getHumanChoice();
//             let computerSelection = getComputerChoice();
//             playRound(humanSelection, computerSelection);
//             console.log(`Your score: ${humanScore}, computer's score: ${computerScore}`);
//           }
//         if (humanScore > computerScore) {
//             console.log("Your final score is higher than the computer! You win!");
//         }
//         else if (computerScore < humanScore) {
//             console.log("Your final score is lower than the computer! You lose :(");
//         }
//         else {
//             console.log("The final scores are equal. It's a tie!")
//         }
//         humanScore = 0;
//         computerScore = 0;
//     }

  
    
  