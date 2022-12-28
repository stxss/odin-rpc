// Function that generates the computer choice for the game
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Setting the wins variables to 0, to use at the start of each different game (), with a game being a set of 5 rounds
let playerWins = 0;
let computerWins = 0;

// Function that restarts all values to 0 and removes all the messages from the screen
function restartGame() {
    playerWins = 0
    computerWins = 0
    body.removeChild(divTieMessage);
    body.removeChild(divPoints);
    body.removeChild(divWinMessage);
    body.removeChild(divComputer);
    
}

// Function that allows the player to play a round of the game
function playRound(playerSelection, computerSelection) {
    
    // Setting the tie message to an empty string and attaching the Tie, Points and Winner messages to the body of the HTML
    divTieMessage.textContent = "";
    body.appendChild(divTieMessage);
    body.appendChild(divPoints);
    body.appendChild(divWinMessage);


    // In the case of a tie, printing out the tie message
    if (playerSelection === computerSelection) {
        winner = "none";
        divTieMessage.textContent = "A tie doesn't add up any points to any of the players!";
    
    // The three following cases handle the computer's wins
    } else if (playerSelection === "rock" && computerSelection === "paper" ) {
        winner = "computer";
        computerWins++;

    } else if (playerSelection === "paper" && computerSelection === "scissors" ) {
        winner = "computer";
        computerWins++;

    } else if (playerSelection === "scissors" && computerSelection === "rock" ) {
        winner = "computer";
        computerWins++;

    // Everything else, meaning anything that isn't a tie or a computer win, is a player win
    } else {
        winner = "player";
        playerWins++;
    }

    // Printing out the status of the game (aka X vs Z in points)
    divPoints.textContent = `player - ${playerWins} : ${computerWins} - computer`;

    // If the player achieves 5 points and has more than the computer, he/she is declared the winner. I don't think the second condition that compares if one is bigger than the other is necessary but it adds to security
    if (playerWins === 5 && computerWins < playerWins) {
        divWinMessage.textContent = "You won! Congratulations!"

    // If not, the computer wins
    } else if (computerWins === 5 && playerWins < computerWins) {
        divWinMessage.textContent = "You lost :( Better luck next time!"
    };

    // When any of the players wins, a button to restart a game is prompted and all the others are disabled (this is to prevent the continuation of the game beyond the 5 rounds)
    if ((playerWins === 5 && computerWins < playerWins) || (computerWins === 5 && playerWins < computerWins)) {

        // Button creation and appending to the HTML
        const playAgain = document.createElement("button");
        playAgain.classList.add("restart");
        playAgain.textContent = "Play Again?";
        body.appendChild(playAgain);

        // Disabling of the choice for the game buttons
        const playRps = document.querySelectorAll("button.button");
        playRps.forEach((button) => {button.disabled = true});

        // When clicking the "Play again" button, removing the button, restarting the game and resetting the game buttons to be usable again
        playAgain.addEventListener("click", () => {
            body.removeChild(playAgain);
            restartGame()
            playRps.forEach((button) => {button.disabled = false});
        });

    }

}

// * ------------------ Revisiting RPS ------------------
// Changed game() structure a bit

// Select the body
const body = document.querySelector("body");

// Select all the buttons
const playRps = document.querySelectorAll("button.button");

// Create a div for the player and the computer, to later show choices
const divPlayer = document.createElement("div");
const divComputer = document.createElement("div");

// Divs for points, a tie message and a win message 
const divPoints = document.createElement("div");
const divTieMessage = document.createElement("div");
const divWinMessage = document.createElement("div");

// Small styling of the messages, might change later
divPlayer.style.display = "flex";
divPlayer.style.padding = "20px";

divComputer.style.display = "flex";
divComputer.style.padding = "20px";



// For each of the selected buttons, add an event listener that will handle clicks by retrieving the button id (rock, paper or scissors) and then calling the computer to make a choice, and playing a round using those two choices against each other

playRps.forEach((button) => {
    
    button.addEventListener("click", () => {
        // console.log(`You played ${button.id}`); 
        playerSelection = `${button.id}`;
        computerSelection = getComputerChoice();
        divComputer.textContent = `The computer chose ${computerSelection}`;
        body.appendChild(divComputer);
        divPlayer.textContent = `${playRound(playerSelection, computerSelection)}`;
        
    });
    
});

