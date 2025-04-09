const bubbleContainer = document.getElementById("bubble-container");
const targetDisplay = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");

let targetNumber = 0;
let score = 0;
let timer = 30;
let gameInterval;

function generateBubbles() {
  bubbleContainer.innerHTML = "";
  for (let i = 0; i < 36; i++) {
    const num = Math.floor(Math.random() * 10);
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = num;
    bubble.addEventListener("click", () => checkNumber(num));
    bubbleContainer.appendChild(bubble);
  }
}

function checkNumber(num) {
  if (num === targetNumber) {
    score += 10;
    scoreDisplay.textContent = score;
    generateBubbles();
    setTarget();
  }
}

function setTarget() {
  targetNumber = Math.floor(Math.random() * 10);
  targetDisplay.textContent = targetNumber;
}

function startGame() {
  score = 0;
  timer = 30;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = timer;
  setTarget();
  generateBubbles();

  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
      clearInterval(gameInterval);
      alert("⏱ Time's up! Your Score: " + score);
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);
