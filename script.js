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
let choice = prompt("rock, paper, scissors!");
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
