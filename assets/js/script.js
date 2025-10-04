const playerButtonChoice = document.querySelectorAll(".choice-btn");

playerButtonChoice.forEach(function(choiceButton) {
    choiceButton.addEventListener("click", function(e) {
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
            }
        }, 1000); // 1000ms = 1 second
    });
});
