
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

const computerSelection = getComputerChoice()
// TEST   console.log("Computer: " + computerSelection)


/*

     //create a function called getComputerChoice that will randomnly store the string "rock","paper",or "scissors"

function playRound(playerSelection, computerSelection) {
    let x = playerSelection.slice(0,1).toUpperCase + playerSelection.slice(1).toLowerCase();
    let y = computerSelection;
    if (x = "Rock") {
            if (y = "Rock") {
                let z = "It's a Tie! Rock matches Rock";     
                return z;
            } else if (y = "Paper") {
                let z = "You Lose! Paper chomps Rock";     
                return z;  
            } else if (y = "Scissors") {
                let z = "You Win! Rock destroys Scissors";
                return z;
            }
        } else if(x = "Paper") {
            if (y = "Rock") {
                let z = "You Win! Paper imprisons Rock";     
                return z;
            } else if (y = "Paper") {
                let z = "It's a Tie! Paper matches Paper";     
                return z;  
            } else if (y = "Scissors") {
                let z = "You Lose! Scissors cut up Papers";
                return z;
        }} else if(x = "Scissors") {
            if (y = "Rock") {
                let z = "You Lose! Rock pulverises Scissors";     
                return z;
            } else if (y = "Paper") {
                let z = "You Win! Scissors shanks Paper";     
                return z;  
            } else if (y = "Scissors") {
                let z = "It's a tie! Scissors match Scissors";
                return z;
            }}
    console.log(z);
    return z;
} 
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