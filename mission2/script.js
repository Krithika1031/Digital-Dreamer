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
const questions = [

{
title:"Arrange to make a website load.",

steps:[
"A. Browser displays webpage",
"B. User enters URL",
"C. Server sends response",
"D. Browser sends request"
],

options:[
"BDCA",
"BCDA",
"DBCA",
"BADC"
],

answer:0

},

{
title:"Arrange the steps to send an email.",

steps:[
"A. Email reaches recipient",
"B. Click Send",
"C. Compose the email",
"D. Open Gmail"
],

options:[
"DBCA",
"DCBA",
"CDBA",
"DABC"
],

answer:1

},

{
title:"Arrange the steps to download a file.",

steps:[
"A. File downloads",
"B. Open the website",
"C. Click Download",
"D. Select the file"
],

options:[
"BCDA",
"BDCA",
"BCAD",
"DBCA"
],

answer:1

},

{
title:"Arrange the steps to connect to Wi-Fi.",

steps:[
"A. Tap Connect",
"B. Enter the password",
"C. Open Wi-Fi Settings",
"D. Select the Wi-Fi network"
],

options:[
"CBDA",
"DCBA",
"CDBA",
"CDAB"
],

answer:2

},

{
title:"Arrange the steps to make Maggi.",

steps:[
"A. Cook and Serve",
"B. Add the noodles",
"C. Boil Water",
"D. Add the Tastemaker"
],

options:[
"CDBA",
"CBDA",
"BCDA",
"CBAD"
],

answer:1

}

];

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

    taskPopup.style.display = "none";

    quizScreen.style.display = "block";

    loadQuestion();

});
function loadQuestion(){

const q = questions[currentQuestion];

questionNo.innerText = currentQuestion + 1;

questionTitle.innerText = q.title;

progressFill.style.width=((currentQuestion+1)/questions.length)*100+"%";

stepsDiv.innerHTML="";

optionsDiv.innerHTML="";

q.steps.forEach(step=>{

stepsDiv.innerHTML+=`
<div class="step">${step}</div>
`;

});

q.options.forEach((option,index)=>{

optionsDiv.innerHTML+=`
<div class="option">${index+1}. ${option}</div>
`;

});

}