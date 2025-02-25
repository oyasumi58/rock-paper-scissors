console.log("Hello World!");

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

function playGame() {
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
    //single round --> tells who win, who lose, and adds score
    

    function playRound(humanChoice, computerChoice) {
   if (humanChoice === "rock") {
    switch (computerChoice) {
        case "rock":
            console.log("It's a tie! Rock and Rock!")
            scoreNone();
            break;
        
        case "paper":
            console.log("You lose!, Paper beats Rock!")
            scoreComputer();
            break;
        
        case "scissors":
            console.log("You win!, Rock beats Scissors!")
            scoreHuman();
            break;
    }
   } else if (humanChoice === "paper") {
    switch (computerChoice) {
        case "rock":
            console.log("You win!, Paper beats Rock!")
            scoreHuman();
            break;
        
        case "paper":
            console.log("It's a tie! Paper and Paper!")
            scoreNone();
            break;
        
        case "scissors":
            console.log("You lose!, Scissors beats Paper!")
            scoreComputer();
            break;
    }

   } else if (humanChoice === "scissors") {
    switch (computerChoice) {
        case "rock":
            console.log("You lose!, Rock beats Scissors!")
            scoreComputer();
            break;
        
        case "paper":
            console.log("You win!, Scissors beats Paper!")
            scoreHuman();
            break;
        
        case "scissors":
            console.log("It's a tie! Scissors and Scissors!")
            scoreNone();
            break;
    }

   } else {
    console.log("smth went wrong");
   }

    }
    //start game
    getChoices();
    playRound(humanSelection, computerSelection);

    getChoices();
    playRound(humanSelection, computerSelection);
    
    getChoices();
    playRound(humanSelection, computerSelection);
    
    getChoices();
    playRound(humanSelection, computerSelection);
    
    getChoices();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log(`Game Over! You Win! Your score is ${humanScore} to ${computerScore}`);
        playAgain = prompt("Play again? Y/N");
    } else if (humanScore < computerScore) {
        console.log(`Game Over! You Lose! Your score is ${humanScore} to ${computerScore}`);
        playAgain = prompt("Play again? Y/N");
    } else {
        console.log(`Game Over! It's a draw! Your score is ${humanScore} to ${computerScore}`)
        playAgain = prompt("Play again? Y/N");
    }

    if (playAgain === "Y") {
        console.clear();
        playGame();
    } else {
        console.clear();
    }
}

playGame();

