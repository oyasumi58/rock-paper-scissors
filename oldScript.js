
// let result1;
// let computerChoice;

//  //make random number generate
// function getRandomResult() {
//     return result1 = Math.random() * 100 + 1;
// }
// //get computer to randomly return one of 3 string
// //values rps.
// function getComputerChoice() {
//     getRandomResult();
//     if (result1 >= 66.6) {
//         return computerChoice = "scissors";
//     } else if (result1 >=33.3) {
//         return computerChoice = "paper";
//     } else {
//         return computerChoice = "rock";
//     }
// }





// //input
// let choice;
// //function to return a valid choice
// let humanChoice;


// function getHumanChoice() {
//     choice = prompt("rock, paper, scissors!").toLowerCase();
//     if (choice == 'rock') {
//         return humanChoice = "rock";
//     } else if (choice == 'paper') {
//         return humanChoice = "paper"
//     } else if (choice == 'scissors' || choice =='scissor') {
//         return humanChoice = 'scissors';
//     } else {
//         return humanChoice = 'undefined';
//     }
// }



// let roundTracker = 0;
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


        
// //for a whole game
//     function playGame() {
//         //player score tracking
//         let humanScore = 0;
//         let computerScore = 0;
//             //single round
//             function playRound(humanChoice, computerChoice) {
//                 console.log(`computer choice is ${computerChoice}`);
//                 console.log(`human choice is ${humanChoice}`);    
//                 if (humanChoice == "rock") {
//                     switch (computerChoice) {
//                         case "rock":
//                             console.log("Its a tie! Rock and rock")
//                             break;
                        
//                         case "paper":
//                             console.log("You lose! Paper beats rock")
//                             computerScore++;
//                             break;
            
//                         case "scissors":
//                             console.log("You win! Rock beats scissors")
//                             humanScore++;
//                             break;
            
//                         default:
//                             console.log("smth went wrong sorry")
//                             break;
//                     }
//                 } else if (humanChoice == "paper") {
//                     switch (computerChoice) {
//                         case "rock":
//                             console.log("You win! Paper beats rock")
//                             humanScore++;
//                             break;
                        
//                         case "paper":
//                             console.log("Its a tie! Paper and paper")
//                             break;
            
//                         case "scissors":
//                             console.log("You lose! Scissors beats paper")
//                             computerScore++;
//                             break;
            
//                         default:
//                             console.log("smth went wrong sorry")
//                             break;
//                     } 
//                 } else if (humanChoice == "scissors") {
//                         switch (computerChoice) {
//                             case "rock":
//                                 console.log("You lose! Rock beats scissors")
//                                 computerScore++;
//                                 break;
                            
//                             case "paper":
//                                 console.log("You win! Scissors beats paper")
//                                 humanScore++;
//                                 break;
                
//                             case "scissors":
//                                 console.log("Its a tie! Scissors and scissors")
//                                 break;
                
//                             default:
//                                 console.log("smth went wrong sorry")
//                                 break;
//                         }
//                     } else {
//                         console.log("invalid answer")
                      
//                     }
                 
//                 }
//             getComputerChoice();
//             getHumanChoice();
//             computerChoice = getComputerChoice();
//             humanChoice = getHumanChoice();
//             playRound(humanSelection, computerSelection);
//             console.log(+humanScore);
//             console.log(+computerScore);
//             getComputerChoice();
//             getHumanChoice();
//             humanChoice = getComputerChoice();
//             computerChoice = getHumanChoice();
    
//             playRound(humanSelection, computerSelection);
//             console.log(+humanScore);
//             console.log(+computerScore);
//             getComputerChoice();
//             getHumanChoice();
//             humanChoice = getComputerChoice();
//             computerChoice = getHumanChoice();

//             playRound(humanSelection, computerSelection);
//             console.log(+humanScore);
//             console.log(+computerScore);
//             getComputerChoice();
//             getHumanChoice();
//             humanChoice = getComputerChoice();
//             computerChoice = getHumanChoice();

//             playRound(humanSelection, computerSelection);
//             console.log(+humanScore);
//             console.log(+computerScore);
//             getComputerChoice();
//             getHumanChoice();
//             humanChoice = getComputerChoice();
//             computerChoice = getHumanChoice();

//             playRound(humanSelection, computerSelection);
//             console.log(+humanScore);
//             console.log(+computerScore);
        

//             if (humanScore > computerScore) {
//                 console.log(`You won! Score was ${+humanScore} to ${+computerScore}`)
//             } else if (computerScore > humanScore) {
//                 console.log(`You lost! Score was ${+humanScore} to ${+computerScore}`)
//             } else {
//                 console.log(`It's a tie! Score was ${+humanScore} to ${+computerScore}`)
//             }
//         }
// console.log(roundTracker);

// // console.log(`computer choice is ${computerChoice}`);
// // console.log(`human choice is ${humanChoice}`);
// playGame();
// // console.log(`new human choice is ${humanChoice}`)
// // console.log(`new computer choice is ${computerChoice}`)

