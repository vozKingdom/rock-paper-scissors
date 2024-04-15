
const playerSelection = prompt('Rock, Paper, or Scissors?')       // PSEUDOCODE prompt user to input a string "rock", "paper", or "scissors", then store in constant variable playerSelection

// TEST   console.log("User: " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase())   


function getComputerChoice() {
    x = Math.floor(Math.random()*3);
    let y; 
    if (x == 0) {
        y = "Rock"
    } else if (x == 1) {
        y = "Paper"
    } else if (x == 2) {
        y = "Scissors"
    }
    return y;
}

//create a function called getComputerChoice that will randomnly store the string "rock","paper",or "scissors"

const computerSelection = getComputerChoice()
// TEST   console.log("Computer: " + computerSelection)

function playRound(playerSelection, computerSelection) {
    let x = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
// TEST   console.log("User: " + x)
    let y = computerSelection;
// TEST   console.log("Computer: " + y)
    let z;
    if (x == "Rock") {
            if (y == "Rock") {
                z = "It's a Tie! Rock matches Rock";     
            } else if (y == "Paper") {
                z = "You Lose! Paper CHOMPS ON Rock";     
            } else if (y == "Scissors") {
                z = "You Win! Rock PULVERIZES Scissor";
            }
        } else if(x == "Paper") {
            if (y == "Rock") {
                z = "You Win! Paper SWALLOWS Rock";     
            } else if (y == "Paper") {
                z = "It's a Tie! Paper matches Paper";     
            } else if (y == "Scissors") {
                z = "You Lose! Scissors PIERCE Paper";
            }
        } else if(x == "Scissors") {
            if (y == "Rock") {
                z = "You Lose! Rock PULVERIZES Scissor";            
            } else if (y == "Paper") {
                z = "You Win! Scissors SHRED Paper";     
            } else if (y == "Scissors") {
                z = "It's a tie! Scissor matches Scissor";
            }
        }
    return z;
} 

console.log(playRound(playerSelection, computerSelection))

/*
    //create a function named playRound that will play a single round of "rock", "paper", or "scissors".
    // the function will take two parameters - the playerSelection and computerSelection.
    //convert playerSelection (user input) to sentence case (rock, ROCK, rOcK = Rock)
    //create if..else statements, of "rock", "paper", or "scissors" combinations.
    //return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
    // Display the result of the round on console.

function playGame() {
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
}

    //create a function named playGame that will: playRound five times, and keeps score and reports a winner or loser at the end.


console.log(playRound(playerSelection, computerSelection));
*/