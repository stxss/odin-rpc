function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function PlayerChoice() {
    let userInput = prompt("Please enter your selection: ");

    return userInput.toLowerCase();
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        winner = "none"
        return ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper" ) {
        winner = "computer"
        return ("You lose! Paper beats Rock!");
    } else if (playerSelection == "paper" && computerSelection == "scissors" ) {
        winner = "computer"
        return ("You lose! Scissors beat Paper!");
    } else {
        winner = "player"
        return ("Player wins!");
    }
}

// const playerSelection = "rock"
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {

           
    let playerWins = 0;
    let computerWins = 0;

    // Play the round 5 times
    for (let i = 0; i < 5; i++) {

        // Get the player's choice
        playerSelection = PlayerChoice()
        
        // Get the computer's choice
        computerSelection = getComputerChoice()

        
        console.log(playRound(playerSelection, computerSelection))
        if (winner == "player") {
            playerWins++
            console.log(`player - ${playerWins} : ${computerWins} - computer`)
        } else if (winner == "computer") {
            computerWins++
            console.log(`player - ${playerWins} : ${computerWins} - computer`)
        } else {
            console.log("A tie doesn't add up any points to any of the players!")
            console.log(`player - ${playerWins} : ${computerWins} - computer`)
        }
        
    }

    if (playerWins > computerWins) {
        console.log("Player was the winner of this game!")
    } else {
        console.log("Computer was the winner of this game!")        
    }

    // Print the result
    console.log(playRound(playerSelection, computerSelection));
}