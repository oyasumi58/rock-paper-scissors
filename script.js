console.log("Hello World!");

let result1;
let resultrsp;

 //make random number generate
function getRandomResult() {
    return result1 = Math.random() * 100 + 1;
}
//get computer to randomly return one of 3 string
//values rps.
function getComputerChoice() {
    if (result1 >= 66.6) {
        return resultrsp = "scissors";
    } else if (result1 >=33.3) {
        return resultrsp = "paper";
    } else {
        return resultrsp = "rock";
    }
}

getRandomResult();

getComputerChoice();

console.log(resultrsp);

//input
let choice = prompt("rock, paper, scissors!").toLowerCase();
//function to return a valid choice
let resulth;

function getHumanChoice() {
    if (choice == 'rock') {
        return resulth = "rock";
    } else if (choice == 'paper') {
        return resulth = "paper"
    } else if (choice == 'scissors' || choice =='scissor') {
        return resulth = 'scissors';
    } else {
        return resulth = 'undefined';
    }
}

getHumanChoice();

console.log(resulth);

//player score tracking
let humanScore = 0;
let computerScore = 0;
//code for a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Its a tie! Rock and rock")
                break;
            
            case "paper":
                console.log("You lose! Paper beats rock")
                computerScore++;
                break;

            case "scissors":
                console.log("You win! Rock beats scissors")
                humanScore++;
                break;

            default:
                console.log("smth went wrong sorry")
                break;
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win! Paper beats rock")
                humanScore++;
                break;
            
            case "paper":
                console.log("Its a tie! Paper and paper")
                break;

            case "scissors":
                console.log("You lose! Scissors beats paper")
                computerScore++;
                break;

            default:
                console.log("smth went wrong sorry")
                break;
        } 
    } else if (humanChoice == "scissors") {
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats scissors")
                    computerScore++;
                    break;
                
                case "paper":
                    console.log("You win! Scissors beats paper")
                    humanScore++;
                    break;
    
                case "scissors":
                    console.log("Its a tie! Scissors and scissors")
                    break;
    
                default:
                    console.log("smth went wrong sorry")
                    break;
            }
        } else {
            console.log("invalid answer")
        }
    } 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(+humanScore);
console.log(+computerScore);