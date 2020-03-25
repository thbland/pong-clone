// Canvas Related 
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
let width = 500;
let height = 700;

// Paddle
let paddleHeight = 10;
let paddleWidth = 50;
let paddle1_X = 225;
let paddle2_X = 225;

// Ball
let ball_X = 250;
let ball_Y = 350;
let ballRadius = 5;

// Speed
let velocity_Y = 2;
// let velocity_X = velocity_Y;
// let computerSpeed = 4;

// Create Canvas Element
function createCanvas() {
    canvas.id = 'canvas';
    canvas.width = width;
    canvas.height = height;
    document.body.appendChild(canvas);
    renderCanvas();
}

// Render Everything on Canvas
function renderCanvas() {
    // Canvas Background
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    // Paddle Color
    context.fillStyle = 'white';

    // Paddle 1
    context.fillRect(paddle1_X, height - 20, paddleWidth, paddleHeight);

    // Paddle 2
    context.fillRect(paddle2_X, 10, paddleWidth, paddleHeight);

    // Dashed Center Line
    context.beginPath();
    context.setLineDash([4]);
    context.moveTo(0, 350);
    context.lineTo(500, 350);
    context.strokeStyle = 'grey';
    context.stroke();

    // Ball
    context.beginPath();
    context.arc(ball_X, ball_Y, ballRadius, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
}

function update() {
    ball_Y += velocity_Y;
}

function animate() {
    renderCanvas();
    update();
    window.requestAnimationFrame(animate);
}

window.onload = () => {
    createCanvas();
    window.requestAnimationFrame(animate);
}
