const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const messageElement = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage("Please enter a valid number between 1 and 100.");
    } else {
        attempts++;

        if (userGuess === targetNumber) {
            setMessage(`Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`);
            document.getElementById("guessButton").disabled = true;
        } else {
            if (attempts >= maxAttempts) {
                setMessage(`Sorry, you ran out of tries. The correct number was ${targetNumber}.`);
                document.getElementById("guessButton").disabled = true;
            } else {
                setMessage(userGuess < targetNumber ? "Higher!" : "Lower!");
            }
        }
    }
}

function setMessage(message) {
    document.getElementById("message").textContent = message;
}

