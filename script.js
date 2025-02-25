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

promptHuman();
console.log(humanChoice);

function getHumanChoice() {

}