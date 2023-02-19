function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerWins = 0;
let computerWins = 0;

function restartGame() {
    playerWins = 0;
    computerWins = 0;
    body.removeChild(divTieMessage);
    body.removeChild(divPoints);
    body.removeChild(divWinMessage);
    body.removeChild(divComputer);
}

function playRound(playerSelection, computerSelection) {
    divTieMessage.textContent = "";
    divWinMessage.textContent = "";
    body.appendChild(divTieMessage);
    body.appendChild(divPoints);
    body.appendChild(divWinMessage);

    if (playerSelection === computerSelection) {
        divComputer.textContent =
            "A tie doesn't add up any points to any of the players!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerWins++;
    } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
    ) {
        computerWins++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerWins++;
    } else {
        playerWins++;
    }

    divPoints.textContent = `player - ${playerWins} : ${computerWins} - computer`;

    if (playerWins === 5 && computerWins < playerWins) {
        divWinMessage.textContent = "You won! Congratulations!";
    } else if (computerWins === 5 && playerWins < computerWins) {
        divWinMessage.textContent = "You lost :( Better luck next time!";
    }

    if (
        (playerWins === 5 && computerWins < playerWins) ||
        (computerWins === 5 && playerWins < computerWins)
    ) {
        const playAgain = document.createElement("button");
        playAgain.classList.add("restart");
        playAgain.textContent = "Play Again?";
        body.appendChild(playAgain);

        const playRps = document.querySelectorAll("button.button");
        playRps.forEach((button) => {
            button.disabled = true;
        });

        playAgain.addEventListener("click", () => {
            body.removeChild(playAgain);
            restartGame();
            playRps.forEach((button) => {
                button.disabled = false;
            });
        });
    }
}

// * ------------------ Revisiting RPS ------------------

const body = document.querySelector("body");

const playRps = document.querySelectorAll("button.button");

const divPlayer = document.createElement("div");
const divComputer = document.createElement("div");

const divPoints = document.createElement("div");
const divTieMessage = document.createElement("div");
const divWinMessage = document.createElement("div");

divPlayer.style.display = "flex";
divPlayer.style.paddingBottom = "20px";
divPlayer.style.paddingTop = "20px";

divComputer.style.display = "flex";
divComputer.style.paddingTop = "20px";

divTieMessage.style.display = "flex";
divTieMessage.style.paddingBottom = "20px";

divWinMessage.style.display = "flex";
divWinMessage.style.paddingTop = "20px";
divWinMessage.style.paddingBottom = "20px";

playRps.forEach((button) => {
    button.addEventListener("click", () => {
        let playerSelection = `${button.id}`;
        let computerSelection = getComputerChoice();
        divComputer.textContent = `The computer chose ${computerSelection}.`;
        body.appendChild(divComputer);
        divPlayer.textContent = `${playRound(
            playerSelection,
            computerSelection
        )}`;
    });
});
