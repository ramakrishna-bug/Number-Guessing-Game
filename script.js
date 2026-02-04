let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "⚠️ Enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    } else if (guess > randomNumber) {
        message.textContent = "📉 Too High! Try again.";
    } else {
        message.textContent = "📈 Too Low! Try again.";
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
}
