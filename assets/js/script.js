let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const playerButtonChoice = document.querySelectorAll(".choice-btn");

playerButtonChoice.forEach(function(choiceButton) {
    choiceButton.addEventListener("click", function(e) {

        if (gameOver) return;
        const userChoice = choiceButton.dataset.move;

        let countdownNumber = 3;
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerHTML = countdownNumber;

        let count = 3;

        // Start the countdown
        let intervalID = setInterval(function() {
            count--;
            countdownElement.innerHTML = count;

            if (count === 0) {
                clearInterval(intervalID);
                // This is where you would trigger the hand-shaking animation
                // and reveal the final hands
                handShakingAnimation(userChoice)
            }
        }, 500); // keep 0.5s per countdown step
    });
});

function handShakingAnimation(userChoice) {
    let images = ["rock", "paper", "scissors"];
    let playerHandElement = document.getElementById("player-hand");
    let computerHandElement = document.getElementById("computer-hand");

    
    let count = 0;
    let intervalID = setInterval(function() {
        let playerImage = images[Math.floor(Math.random() * images.length)];
        let computerImage = images[Math.floor(Math.random() * images.length)];
       
        playerHandElement.src = "assets/images/hand-" + playerImage + ".webp";
        computerHandElement.src = "assets/images/hand-" + computerImage + ".webp";
        count++;

        if (count >= 6) { // reduced from 10 → 6 for quicker 3-2-1 effect
            clearInterval(intervalID);

            playerHandElement.src = "assets/images/hand-" + userChoice + ".webp";
            let computerChoice = images[Math.floor(Math.random() * images.length)];
            computerHandElement.src = "assets/images/hand-" + computerChoice +".webp";
            
            determineWinner(userChoice, computerChoice)
        }
        
    }, 250); // faster shake interval: 0.25s per shake
}

function determineWinner(userChoice, computerChoice) {
    let result;
    
    if (userChoice === computerChoice) {
        result = "It's a draw.";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById("result").innerHTML = result;


if (result === "You win!") {
    playerScore++;
} else if (result === "You lose!") {
    computerScore++;
}

document.getElementById("player-score").textContent = playerScore;
document.getElementById("computer-score").textContent = computerScore;

if (playerScore === 3) {
    result = "The player wins the game!";
    gameOver = true;
} else if (computerScore === 3) {
    result = "The computer wins the game!";
    gameOver = true;
}

document.getElementById("result").textContent = result;
}

const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;

    gameOver = false;

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result").textContent = "Make your next move!"
    
});
