
//const playerSelection = prompt('Rock, Paper, or Scissors?')       

// COMMENT prompt user to input a string "rock", "paper", or "scissors", then store in constant variable playerSelection

// TEST   console.log("User: " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase())   


function getComputerChoice() {
    randomComputerChoice = Math.floor(Math.random()*3);
    if (randomComputerChoice == 0) {
        return "ROCK"
    } else if (randomComputerChoice == 1) {
        return "PAPER"
    } else if (randomComputerChoice == 2) {
        return "SCISSOR"
    }
}

//COMMENT create a function called getComputerChoice that will randomnly store the string "rock","paper",or "scissors"



//const computerSelection = getComputerChoice()


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase(); 

    if (
    (computerSelection == "ROCK" && playerSelection == "SCISSOR") ||  
    (computerSelection == "PAPER" && playerSelection == "ROCK") || 
    (computerSelection == "SCISSOR" && playerSelection == "PAPER")) 
        { return "COMPUTER WIN!";
    } else if (
    (playerSelection == "ROCK" && computerSelection == "SCISSOR") ||  
    (playerSelection == "PAPER" && computerSelection == "ROCK") || 
    (playerSelection == "SCISSOR" && computerSelection == "PAPER")) 
        { return "PLAYER WIN";
    } else if (
    (playerSelection == computerSelection))
        { return "TIE"
    }

} 

// TEST   console.log(playRound(playerSelection, computerSelection))


    // COMMENT create a function named playRound that will play a single round of "rock", "paper", or "scissors".
    // COMMENT the function will take two parameters - the playerSelection and computerSelection.
    // COMMENT convert playerSelection (user input) to sentence case (rock, ROCK, rOcK = Rock)
    // COMMENT create if..else statements, of "rock", "paper", or "scissors" combinations.
    // COMMENT return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
    // COMMENT Display the result of the round on console.


function playGame() {
    let playerSelection = prompt('ROCK  PAPER  SCISSOR ?') 
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));
    }


    //COMMENT create a function named playGame that will: playRound five times, and keeps score and reports a winner or loser at the end.


// TEST console.log(playRound(playerSelection, computerSelection));

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());