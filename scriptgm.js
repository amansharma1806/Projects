// Number Guessing Game Logic
let randomNumber;
function startNumberGuess() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    const gameContent = `
        <h2>Number Guessing Game</h2>
        <p>Guess a number between 1 and 100:</p>
        <input type="number" id="guess" min="1" max="100">
        <button onclick="checkGuess()">Submit</button>
        <p id="result"></p>
    `;
    showGame(gameContent);
}

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const result = document.getElementById('result');
    if (guess == randomNumber) {
        result.innerHTML = 'Correct! You guessed the number!';
    } else if (guess > randomNumber) {
        result.innerHTML = 'Too high! Try again.';
    } else {
        result.innerHTML = 'Too low! Try again.';
    }
}

// Rock-Paper-Scissors Game Logic
function startRPS() {
    const gameContent = `
        <h2>Rock-Paper-Scissors</h2>
        <p>Choose:</p>
        <button onclick="playRPS('rock')">Rock</button>
        <button onclick="playRPS('paper')">Paper</button>
        <button onclick="playRPS('scissors')">Scissors</button>
        <p id="rps-result"></p>
    `;
    showGame(gameContent);
}

function playRPS(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = document.getElementById('rps-result');
    
    if (playerChoice === computerChoice) {
        result.innerHTML = `It's a draw! You both chose ${playerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result.innerHTML = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        result.innerHTML = `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

// Utility Functions
function showGame(content) {
    document.querySelector('.menu-container').classList.add('hidden');
    document.getElementById('game-content').innerHTML = content;
    document.getElementById('game-container').classList.remove('hidden');
}

function goBack() {
    document.getElementById('game-container').classList.add('hidden');
    document.querySelector('.menu-container').classList.remove('hidden');
}
