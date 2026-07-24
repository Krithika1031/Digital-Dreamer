// ============================
// ELEMENTS
// ============================

const landingPage = document.getElementById("landingPage");
const popupScreen = document.getElementById("popupScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const readyBtn = document.getElementById("readyBtn");
const resultBtn = document.getElementById("resultBtn");

const livesEl = document.getElementById("lives");
const timerEl = document.getElementById("timer");
const questionNo = document.getElementById("questionNo");
const questionTitle = document.getElementById("questionTitle");
const stepsDiv = document.getElementById("steps");
const optionsDiv = document.getElementById("options");
const progressFill = document.getElementById("progressFill");

const resultHeading = document.getElementById("resultHeading");
const resultMessage = document.getElementById("resultMessage");

// ============================
// GAME VARIABLES
// ============================

let currentQuestion = 0;
let lives = 3;
let timer = 4;
let countdown;

// ============================
// QUESTIONS
// ============================

const questions = [

{
title:"Arrange the steps to make a Website Load",

steps:[
"Browser Displays Webpage",
"User Enters URL",
"Server Sends Response",
"Browser Sends Request"
],

options:[
"BDCA",
"BCDA",
"DBCA",
"BADC"
],

answer:"BDCA"

},

{
title:"Arrange the steps to Send an Email",

steps:[
"Compose Email",
"Click Send",
"Email Travels Through Internet",
"Receiver Gets Email"
],

options:[
"ABCD",
"ACBD",
"BACD",
"ABDC"
],

answer:"ABCD"

},

{
title:"Arrange the steps to Download a File",

steps:[
"Click Download",
"Browser Sends Request",
"Server Sends File",
"File Saves to Device"
],

options:[
"ABCD",
"BACD",
"ACBD",
"ABDC"
],

answer:"ABCD"

},

{
title:"Arrange the steps to Connect to Wi-Fi",

steps:[
"Choose Wi-Fi",
"Enter Password",
"Click Connect",
"Internet Starts Working"
],

options:[
"ABCD",
"ABDC",
"BACD",
"ACBD"
],

answer:"ABCD"

},

{
title:"Arrange the steps to Make Maggi",

steps:[
"Boil Water",
"Add Maggi & Tastemaker",
"Cook for 2 Minutes",
"Serve"
],

options:[
"ABCD",
"BACD",
"ACBD",
"ABDC"
],

answer:"ABCD"

}

];

// ============================
// BUTTON EVENTS
// ============================

startBtn.onclick = () => {

landingPage.classList.add("hidden");
popupScreen.classList.remove("hidden");

};

readyBtn.onclick = () => {

popupScreen.classList.add("hidden");
quizScreen.classList.remove("hidden");

loadQuestion();

};