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
    } else if (playerSelection == "scissors" && computerSelection == "rock" ) {
        winner = "computer"
        return ("You lose! Rock beats Scissors!"); 
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

    if (playerWins > computerWins) {
        console.log("Player was the winner of this game!")
    } else {
        console.log("Computer was the winner of this game!")        
    }

    // Print the result
    console.log(playRound(playerSelection, computerSelection));
} 


// * ------------------ Revisiting RPS ------------------
// Changed game() structure a bit

// Select the body
const body = document.querySelector("body");

// Select all the buttons
const playRps = document.querySelectorAll("button");

// Create a div for the player and the computer, to later show choices
const divPlayer = document.createElement("div");
const divComputer = document.createElement("div");

// For each of the selected buttons, add an event listener that will handle clicks by retrieving the button id (rock, paper or scissors) and then calling the computer to make a choice, and playing a round using those two choices against each other


playRps.forEach((button) => {
    
    button.addEventListener("click", () => {
        // console.log(`You played ${button.id}`); 
        playerSelection = `${button.id}`;
        computerSelection = getComputerChoice();
        divComputer.textContent = `The computer chose ${computerSelection}`;
        divPlayer.textContent = `${playRound(playerSelection, computerSelection)}`;
        body.appendChild(divComputer);
        body.appendChild(divPlayer);
        
    });
    
});



