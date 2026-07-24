// ---------------------------
// SCREENS
// ---------------------------

const homeScreen = document.getElementById("homeScreen");
const taskPopup = document.getElementById("taskPopup");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

// ---------------------------
// BUTTONS
// ---------------------------

const startBtn = document.getElementById("startBtn");
const readyBtn = document.getElementById("readyBtn");
const retryBtn = document.getElementById("retryBtn");

// ---------------------------
// QUIZ ELEMENTS
// ---------------------------

const timerEl = document.getElementById("timer");
const livesEl = document.getElementById("lives");
const questionNo = document.getElementById("questionNumber");
const questionTitle = document.getElementById("questionTitle");
const stepsDiv = document.getElementById("steps");
const optionsDiv = document.getElementById("options");
const progressFill = document.getElementById("progressFill");

// ---------------------------
// RESULT
// ---------------------------

const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

// ---------------------------
// GAME VARIABLES
// ---------------------------

let currentQuestion = 0;
let lives = 3;
let timer = 5;
let countdown;

// ---------------------------
// START BUTTON
// ---------------------------

startBtn.addEventListener("click", () => {

    homeScreen.style.display = "none";

    taskPopup.classList.remove("hidden");

});

// ---------------------------
// READY BUTTON
// ---------------------------

readyBtn.addEventListener("click", () => {

    taskPopup.classList.add("hidden");

    quizScreen.classList.remove("hidden");

});