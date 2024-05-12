const btnPlayerSelection = document.querySelector('.btnPlayerSelection');
const paraResult = document.querySelector('.paraResult')

btnPlayerSelection.addEventListener('click', playGame)


function playGame(event){
    let playerSelection = event.target.className;
    let computerSelection = getComputerChoice()

    playRound(playerSelection, computerSelection);

    if (playerScore === 5) {
        paraResult.textContent ='👑👑👑 GAMEOVER! 👑👑👑 YOU WON!'
        resetGame();
    } else if (computerScore === 5) {
        paraResult.textContent ='❤️‍🔥❤️‍🔥❤️‍🔥 GAMEOVER! ❤️‍🔥❤️‍🔥❤️‍🔥 COMPUTER WINS!'
        resetGame();
    }
}


const paraPlayerScore = document.querySelector('.playerScore')
const paraComputerScore = document.querySelector('.computerScore')
const paraTie = document.querySelector('.tieScore')


let playerScore = 0
let computerScore = 0
let tie = 0



function resetGame(){
    playerScore = 0
    computerScore = 0
    tie = 0 

    paraComputerScore.textContent = 'Computer: ' + computerScore; 
    paraPlayerScore.textContent = 'Player: ' + playerScore;
    paraTie.textContent = 'Tie: ' + tie;
}


function getComputerChoice() {  
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
        { paraResult.textContent = "COMPUTER WIN!";
        ++computerScore
        paraComputerScore.textContent = 'Computer: ' + computerScore; 
        return;    // RETURN 'COMPUTER WIN' string, and END function execution
    } else if (     // ELSE IF the players selection wins 
    (playerSelection == "ROCK" && computerSelection == "SCISSOR") ||  
    (playerSelection == "PAPER" && computerSelection == "ROCK") || 
    (playerSelection == "SCISSOR" && computerSelection == "PAPER")) 
        { paraResult.textContent = "PLAYER WIN!";
        playerScore = playerScore + 1
        paraPlayerScore.textContent = 'Player: ' + playerScore;  
        return;     // RETURN 'PLAYER WIN' string, and END function execution
    } else if (     // ELSE IF the game ends in a tie
    (playerSelection == computerSelection))
        { paraResult.textContent = "TIE!"
        ++tie
        paraTie.textContent = 'Tie: ' + tie
        return;  // RETURN 'TIE' string, and END function execution
    }
} 