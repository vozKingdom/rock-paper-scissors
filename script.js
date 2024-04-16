

function getComputerChoice() {  //  Create a function called getComputerChoice that will determine a random choice (rock paper scissor) for the computer.
    randomComputerChoice = Math.floor(Math.random()*3); // Pick a random  number from 0 to 2, and store it in a variable called randomComputerChoice.
    if (randomComputerChoice == 0) {    // IF random number is 0 THEN   
        return "ROCK"   //  RETURN 'ROCK' selection, and END function execution 
    } else if (randomComputerChoice == 1) { // ELSE random number is 1 
        return "PAPER"  //  RETURN 'PAPER' selection, and END function execution
    } else if (randomComputerChoice == 2) { // ELSE random number is 2
        return "SCISSOR"    //  RETURN 'SCISSOR' selection, and END function execution
    }
}


function playRound(playerSelection, computerSelection) {    // Create a function called playRound that will play a single round of "rock paper scissors". the function will take two parameters - the playerSelection and computerSelection.
    playerSelection = playerSelection.toUpperCase();    //  Convert players selection to uppercase

    if (    // IF the computers selection wins THEN
    (computerSelection == "ROCK" && playerSelection == "SCISSOR") ||  
    (computerSelection == "PAPER" && playerSelection == "ROCK") || 
    (computerSelection == "SCISSOR" && playerSelection == "PAPER")) 
        { return "COMPUTER WIN!";   // RETURN 'COMPUTER WIN' string, and END function execution
    } else if (     // ELSE IF the players selection wins 
    (playerSelection == "ROCK" && computerSelection == "SCISSOR") ||  
    (playerSelection == "PAPER" && computerSelection == "ROCK") || 
    (playerSelection == "SCISSOR" && computerSelection == "PAPER")) 
        { return "PLAYER WIN";     // RETURN 'PLAYER WIN' string, and END function execution
    } else if (     // ELSE IF the game ends in a tie
    (playerSelection == computerSelection))
        { return "TIE"  // RETURN 'TIE' string, and END function execution
    }
} 


function playGame() {   //  Create a function called playGame that will ...
    let playerSelection = prompt('ROCK  PAPER  SCISSOR ?')  //  OBTAIN the players choice for the game and store in a variable called playerSelection
    let computerSelection = getComputerChoice()     //  OBTAIN the computers choice and store in a variable called computerSelection   
    console.log(playRound(playerSelection, computerSelection)); // PRINT result of game onto browser console
    }


console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());