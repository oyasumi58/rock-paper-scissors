
let result1;

function random() {
    return result1 = Math.random() * 100 + 1;
}

//get random computer choice
function getComputerChoice() {
    random();
    if (result1 >= 66.6) {
     return computerChoice = "scissors";
        } else if (result1 >=33.3) {
                return computerChoice = "paper";
        } else {
                return computerChoice = "rock";
        }
}

// getComputerChoice();
// console.log(computerChoice);

//for getting human choice
let choiceIntermediate;
let humanChoice;

function insertInput() {
    let promptIntermediate;
    promptIntermediate = prompt("Rock, Paper, Scissors!");
    return choiceIntermediate = `${promptIntermediate}`.toLowerCase();
}

function promptHuman() {
   insertInput();
   if (choiceIntermediate === "rock") {
    return humanChoice = "rock";
   } else if (choiceIntermediate === "paper") {
    return humanChoice = "paper";
   } else if (choiceIntermediate === "scissors" || choiceIntermediate ==="scissor") {
    return humanChoice = "scissors";
   } else {
    alert("Pls try again");
    promptHuman();
   }
    
}

function getHumanChoice() {
    promptHuman();
    return humanChoice;
}

// getHumanChoice();
// console.log(humanChoice);

let humanSelection;
let computerSelection;
let playAgain;

function getChoices() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`You chose ${humanSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    }

function playGame(humanChoiceG) {
    if (heading.textContent !== "ROCK PAPER SCISSORS") {
        heading.textContent = "ROCK PAPER SCISSORS"
    }
    //single round --> tells who win, who lose, and adds score
    function playRound(humanChoice, computerChoice) {
   if (humanChoice === "rock") {
    switch (computerChoice) {
        case "rock":
            resultsDiv.textContent = "It's a tie! Rock and Rock!";
            scoreNone();
            break;
        
        case "paper":
            resultsDiv.textContent = "You lose!, Paper beats Rock!";
            scoreComputer();
            break;
        
        case "scissors":
            resultsDiv.textContent = "You win!, Rock beats Scissors!"; 
            scoreHuman();
            break;
    }
   } else if (humanChoice === "paper") {
    switch (computerChoice) {
        case "rock":
            resultsDiv.textContent = "You win!, Paper beats Rock!"
            scoreHuman();
            break;
        
        case "paper":
            resultsDiv.textContent = "It's a tie! Paper and Paper!"
            scoreNone();
            break;
        
        case "scissors":
            resultsDiv.textContent = "You lose!, Scissors beats Paper!"
            scoreComputer();
            break;
    }

   } else if (humanChoice === "scissors") {
    switch (computerChoice) {
        case "rock":
            resultsDiv.textContent = "You lose!, Rock beats Scissors!"
            scoreComputer();
            break;
        
        case "paper":
            resultsDiv.textContent = "You win!, Scissors beats Paper!"
            scoreHuman();
            break;
        
        case "scissors":
            resultsDiv.textContent = "It's a tie! Scissors and Scissors!"
            scoreNone();
            break;
    }

   } else {
    console.log("smth went wrong");
   }

    }
    //start game
    humanSelection = humanChoiceG;
    huChoice.textContent = `You chose ${humanSelection}!`;
    getComputerChoice();
    computerSelection = computerChoice;
    comChoice.textContent = `Computer chose ${computerSelection}!`;
    playRound(humanSelection, computerSelection);
    //append score 
    disHScore.textContent = `Your score is ${humanScore}`;
    disCScore.textContent = `Computer score is ${computerScore}`;
    if (humanScore === 5) {
        heading.textContent = `GAME OVER, YOU WIN!`
     reset();
} else if (computerScore === 5) {
    heading.textContent = `GAME OVER, YOU LOSE!`
     reset();
}
}

//score
let humanScore = 0;
let computerScore = 0;

    function scoreHuman() {
    humanScore++;
    return console.log(`Current score is ${humanScore} to ${computerScore} `)
    }

    function scoreComputer() {
    computerScore++;
    return console.log(`Current score is ${humanScore} to ${computerScore} `)
    }

    function scoreNone() {
    return console.log(`Current score is ${humanScore} to ${computerScore} `)
    }

//UI
const resultsDiv = document.querySelector("#results");
const comChoice =  document.querySelector("#computer");
const huChoice = document.querySelector("#human");
// console.log(resultDiv);



const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click",() => playGame("paper"));
scissorsBtn.addEventListener("click",() => playGame("scissors"));

const disHScore = document.querySelector("#human-score");
const disCScore = document.querySelector('#com-score');

disHScore.textContent = `Your score is ${humanScore}`;
disCScore.textContent = `Computer score is ${computerScore}`;

function reset() {
    humanScore = 0;
    computerScore = 0;
    disHScore.textContent = `Your score is ${humanScore}`;
disCScore.textContent = `Computer score is ${computerScore}`;
}

const heading = document.querySelector("h1");
