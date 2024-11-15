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
