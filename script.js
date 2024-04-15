
//const playerSelection = prompt('Rock, Paper, or Scissors?')       

// COMMENT prompt user to input a string "rock", "paper", or "scissors", then store in constant variable playerSelection

// TEST   console.log("User: " + playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase())   


function getComputerChoice() {
    x = Math.floor(Math.random()*3);
    if (x == 0) {
        return "Rock"
    } else if (x == 1) {
        return "Paper"
    } else if (x == 2) {
        return "Scissors"
    }
}

//COMMENT create a function called getComputerChoice that will randomnly store the string "rock","paper",or "scissors"



//const computerSelection = getComputerChoice()


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

// TEST   console.log(playRound(playerSelection, computerSelection))


    // COMMENT create a function named playRound that will play a single round of "rock", "paper", or "scissors".
    // COMMENT the function will take two parameters - the playerSelection and computerSelection.
    // COMMENT convert playerSelection (user input) to sentence case (rock, ROCK, rOcK = Rock)
    // COMMENT create if..else statements, of "rock", "paper", or "scissors" combinations.
    // COMMENT return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
    // COMMENT Display the result of the round on console.


function playGame() {

    let playerSelection = prompt('Rock, Paper, or Scissors?') 

    let computerSelection = getComputerChoice()



    let z;
    z = playRound(playerSelection, computerSelection);
    console.log(z);

    scoreboard(z);

        function scoreboard(z) {
            s = z.at(4)
            wlt(s);
        }
        
        function wlt(s) { 
        if (s == 'W') {
            let W = 0; 
            let L = 0;
            let T = 0;
            return console.log(`Wins: ${W+1} Losses: ${L} Ties: ${T}`)
        } else if (s == 'L') {
            let W = 0; 
            let L = 0;
            let T = 0;
            return console.log(`Wins: ${W} Losses: ${L+1} Ties: ${T}`)
        } else if (s == ' ') {
            let W = 0; 
            let L = 0;
            let T = 0;
            return console.log(`Wins: ${W} Losses: ${L} Ties: ${T+1}`)
        }
        }

    }




    //COMMENT create a function named playGame that will: playRound five times, and keeps score and reports a winner or loser at the end.


// TEST console.log(playRound(playerSelection, computerSelection));

console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());
console.log(playGame());