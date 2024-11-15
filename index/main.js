//background
function createSquare() {
    const square = document.createElement('div');
    const size = Math.random() * 50 + 20;
    square.className = 'square';
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.left = `${Math.random() * 100}vw`;
    square.style.top = `${Math.random() * 100}vh`;
    document.getElementById('background').appendChild(square);
}

function createStar() {
    const star = document.createElement('div');
    const size = Math.random() * 10 + 5;
    star.className = 'star';
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    document.getElementById('background').appendChild(star);
}

function generateElements() {
    const background = document.getElementById('background');
    background.innerHTML = '';

    const screenWidth = window.innerWidth;
    let numSquares = 15;
    let numStars = 50;

    if (screenWidth < 600) {
        numSquares = 5;
        numStars = 20;
    } else if (screenWidth < 900) {
        numSquares = 10;
        numStars = 30;
    }

    for (let i = 0; i < numSquares; i++) createSquare();
    for (let i = 0; i < numStars; i++) createStar();
}

generateElements();
window.addEventListener('resize', generateElements);

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    const squares = document.querySelectorAll('.square');
    const stars = document.querySelectorAll('.star');

    squares.forEach(square => {
        square.style.transform = `translate(-${x / 4}px, -${y / 4}px)`;
    });

    stars.forEach(star => {
        star.style.transform = `translate(-${x / 3}px, -${y / 3}px)`;
    });
});


// Live update countdown
const targetDate = new Date(Date.UTC(2024, 11, 15, 14, 15, 0)); // Set the target date and time in UTC
const description = "Time until testing is over";
let interval;

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    // If the countdown is finished
    if (timeRemaining <= 0) {
        document.querySelector('.timer').textContent = 'Website now updating...';
        clearInterval(interval);

        // Optionally hide the timer after showing the update message
        setTimeout(() => {
            document.querySelector('.timer').setAttribute('hidden', true);
        }, 5000); // Adjust delay as needed

        return;
    }

    // Calculate hours, minutes, and seconds
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) /  Determine the appropriate labels for hours and minutes
    let hourLabel = (hours === 1) ? 'hr' : 'hrs';
    let minuteLabel = (minutes === 1) ? 'm' : 'm';

    // Adjust the display based on the remaining time
    let timerText = `${description}: ${hours}${hourLabel}:${minutes}${minuteLabel}:${seconds}s`;
    if (hours === 0) {
        timerText = `${description}: 0hrs:${minutes}${minuteLabel}:${seconds}s`;
    }

    // Update the timer display
    document.querySelector('.timer').textContent = timerText;
    document.querySelector('.timer').removeAttribute('hidden');
}

// Start the interval and check the timer state immediately
function startCountdown() {
    const now = new Date();
    if (targetDate <= now) {
        // If the target date has already passed
        document.querySelector('.timer').textContent = 'Website now updating...';
        document.querySelector('.timer').setAttribute('hidden', true);
        return;
    }

    // If the target date is in the future, start the countdown
    interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid 1s delay
}

// Start the countdown
startCountdown();
