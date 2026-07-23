let timerInterval;
const patternsPerRound = [3, 3, 2, 1, 1];
const boxesPerRound = [4, 5, 6, 7, 8];
let currentPattern = 1;
let correctPattern = [];
let userPattern = [];
let currentRound = 1;
let lives = 3;
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupMessage = document.getElementById("popupMessage");
const popupBtn = document.getElementById("popupBtn");

function showPopup(title, message, callback = null) {
    popupTitle.innerHTML = title;
    popupMessage.innerHTML = message;

    popup.classList.remove("hidden");

    popupBtn.onclick = () => {
        popup.classList.add("hidden");

        if (callback) callback();
    };
}
document.getElementById("startBtn").addEventListener("click", () => {

document.querySelector(".container").innerHTML = `

<h1>TASK 1</h1>
<h3>Binary Decode</h3>

<hr>
<div class="question">
<h2>Question 1</h2>

<pre>
01000011
01001100
01001001
01000101
01001110
01010100
</pre>

<div class="clues">

<b>Clues</b><br>

A = 65 = 01000001<br>
B = 66 = 01000010<br>
C = 67 = 01000011   and so on...

</div>
<div class="options">
<label><input type="radio" name="q1" value="COOKIE"> COOKIE</label>

<label><input type="radio" name="q1" value="CIPHER"> CIPHER</label>

<label><input type="radio" name="q1" value="CLIENT"> CLIENT</label>
<label><input type="radio" name="q1" value="CODING"> CODING</label>
</div>
<hr>
</div>
<div class="question">
<h2>Question 2</h2>

<pre>
01000100
01000001
01010100
01000001
</pre>

<div class="clues">

<b>Clues</b><br>

A = 65 = 01000001<br>
B = 66 = 01000010<br>
C = 67 = 01000011   and so on...

</div>
<div class="options">
<label><input type="radio" name="q2" value="DATE"> DATE</label>

<label><input type="radio" name="q2" value="DATA"> DATA</label>

<label><input type="radio" name="q2" value="DISK"> DISK</label>

<label><input type="radio" name="q2" value="DUMP"> DUMP</label>
</div>
</div>

<button id="submitTask">Submit Task 1</button>

`;

document.getElementById("submitTask").addEventListener("click", validateTask);

});

function validateTask(){

const q1=document.querySelector('input[name="q1"]:checked');
const q2=document.querySelector('input[name="q2"]:checked');

if(!q1 || !q2){

showPopup(
    "⚠️ Incomplete",
    "Please answer both questions."
);

return;

}

let wrong=[];

if(q1.value!=="CLIENT"){
wrong.push("Question 1");
}

if(q2.value!=="DATA"){
wrong.push("Question 2");
}

if(wrong.length===0){

showPopup(

"✅ TASK 1 COMPLETED",

"Loading Task 2...",

()=>{

showMission1Task2();

}

);

}else{

showPopup(
    "❌ ACCESS DENIED",
    wrong.join(" & ") + " is incorrect.<br><br>Please try again.",
    () => {
        location.reload();
    }
);

}

}
function showMission1Task2(){

document.querySelector(".container").innerHTML=`

<div class="memory-container">

<h3>MISSION 1</h3>

<h1>🧠 MEMORY MATRIX</h1>

<p class="memory-subtitle">
Memorize the highlighted pattern.
</p>
<div class="timer" id="timer">
⏳ 3
</div>
<div class="lives" id="lives">
❤️❤️❤️
</div>

<div class="round" id="roundText">
Round 1 / 5
</div>

<div class="grid">

${Array.from({length:9},(_,i)=>`
<div class="cell" data-index="${i}"></div>
`).join("")}

</div>

</div>

`;
startMemoryRound();

}
function startMemoryRound(){
    updateLives();
    document.getElementById("roundText").innerText =
    `Round ${currentRound} / 5`;

const cells=document.querySelectorAll(".cell");

// Clear everything
cells.forEach(cell=>{
cell.classList.remove("active");
});

// Randomly choose 3 cells
correctPattern = [];
while (correctPattern.length < boxesPerRound[currentRound - 1]) {
let random=Math.floor(Math.random()*9);

if(!correctPattern.includes(random)){
correctPattern.push(random);
}

}

// Highlight them
correctPattern.forEach(index=>{
cells[index].classList.add("active");
});

// Hide after 2 seconds
setTimeout(()=>{

cells.forEach(cell=>{
cell.classList.remove("active");
});
enableCellClicks();
startTimer();

},300);

}
function enableCellClicks() {

    userPattern = [];

    const cells = document.querySelectorAll(".cell");

    cells.forEach(cell => {

        cell.onclick = () => {

            const index = parseInt(cell.dataset.index);

            // Don't allow clicking same cell twice
            if (userPattern.includes(index)) return;

            // If correct cell
            if (correctPattern.includes(index)) {

                userPattern.push(index);
                cell.classList.add("active");

                // Player found all correct cells
                if (userPattern.length === correctPattern.length) {

                    setTimeout(() => {
                        checkRound();
                    }, 500);

                }

            }

            // Wrong cell selected
            else {

                cell.classList.add("wrong");
                clearInterval(timerInterval);
                lives--;

                updateLives();

                // Disable further clicks
                cells.forEach(c => c.onclick = null);

                setTimeout(() => {

                    if (lives === 0) {

                        showPopup(
"🚨 SECURITY BREACH",
"Restarting Mission 1...",
function(){

    lives = 3;
    currentRound = 1;
    currentPattern = 1;

    location.reload();

}
);

                    } else {

                        startMemoryRound();

                    }

                }, 800);

            }

        };

    });

}
function updateLives() {

    const hearts = document.getElementById("lives");

    hearts.innerHTML =
        "❤️".repeat(lives) +
        "🤍".repeat(3 - lives);

}
function startTimer(){

    clearInterval(timerInterval);

    let timeLeft = 2;

    const timer = document.getElementById("timer");

    timer.innerHTML = `⏳ ${timeLeft}`;

    timerInterval = setInterval(()=>{

        timeLeft--;

        timer.innerHTML = `⏳ ${timeLeft}`;

        if(timeLeft <= 0){

            clearInterval(timerInterval);

            lives--;

            updateLives();

            const cells = document.querySelectorAll(".cell");
            cells.forEach(c => c.onclick = null);

            setTimeout(()=>{

                if(lives <= 0){

                    showPopup(
                        "🚨 SECURITY BREACH",
                        "Restarting Mission...",
                        ()=>{
                            location.reload();
                        }
                    );

                }else{

                    startMemoryRound();

                }

            },500);

        }

    },1000);

}
function checkRound() {
    clearInterval(timerInterval);

    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.onclick = null);

    currentPattern++;

    if (currentPattern > patternsPerRound[currentRound - 1]) {

        currentRound++;
        currentPattern = 1;

        if (currentRound > 5) {

            showPopup(
    "🎉 TASK 2 COMPLETED",
    "Loading Task 3...",
    () => {
        showMission1Task3();
    }
);

            return;
        }
    }

    setTimeout(() => {
        startMemoryRound();
    }, 600);

}
const patternQuestions = [
    {
        question: "1\n2\n4\n7\n11\n?",
        options: ["13", "14", "16", "17"],
        answer: "16"
    },
    {
        question: "64\n32\n16\n8\n?",
        options: ["2", "4", "6", "10"],
        answer: "4"
    },
    {
        question: "Which one doesn't belong?",
        options: ["CPU", "RAM", "SSD", "Chrome"],
        answer: "Chrome"
    },
    {
        question: "0001\n0010\n0100\n1000\n?",
        options: ["0001", "0011", "1111", "1010"],
        answer: "0001"
    },
    {
        question: "Product\nPrice\nPlace\n?",
        options: ["Profit", "Promotion", "Planning", "People"],
        answer: "Promotion"
    }
];

let currentQuestion = 0;
let questionTimer;
let timeLeft = 3;
let task3lives  = 3;
function showMission1Task3(){

document.getElementById("mainContainer").innerHTML=`

<div id="task3">

<h2>🧠 TASK 3</h2>

<div class="task-header">

<div id="questionNo"></div>

<div id="taskTimer"></div>

<div id="taskLives">❤️❤️❤️</div>

</div>

<div id="patternQuestion"></div>

<div id="optionsContainer"></div>

</div>

`;

currentQuestion=0;
lives=3;

loadQuestion();

}
function loadQuestion(){

timeLeft=3;

const q=patternQuestions[currentQuestion];

document.getElementById("questionNo").innerText=
`Question ${currentQuestion+1} / 5`;

document.getElementById("patternQuestion").innerText=q.question;

const container=document.getElementById("optionsContainer");

container.innerHTML="";

q.options.forEach(option=>{

const btn=document.createElement("button");

btn.className="optionBtn";

btn.innerText=option;

btn.onclick=()=>checkAnswer(option);

container.appendChild(btn);

});

startQuestionTimer();

}
function startQuestionTimer(){

clearInterval(questionTimer);

document.getElementById("taskTimer").innerText=
"⏱ "+timeLeft;

questionTimer=setInterval(()=>{

timeLeft--;

document.getElementById("taskTimer").innerText=
"⏱ "+timeLeft;

if(timeLeft<=0){

clearInterval(questionTimer);

loseLife();

nextQuestion();

}

},1000);

}
function checkAnswer(selected){

clearInterval(questionTimer);

if(selected!==patternQuestions[currentQuestion].answer){

loseLife();

}

nextQuestion();

}
function loseLife(){

lives--;

let hearts="";

for(let i=0;i<lives;i++)
hearts+="❤️";

for(let i=lives;i<3;i++)
hearts+="🤍";

document.getElementById("taskLives").innerText=hearts;

if(lives<=0){

showPopup(
"❌ MISSION FAILED",
"Restarting Task 3...",
()=>{
restartTask3();
});

}

}
function nextQuestion(){

currentQuestion++;

if(currentQuestion>=5){

missionComplete();

return;

}

loadQuestion();

}
function restartTask3(){

currentQuestion=0;

lives=3;

document.getElementById("taskLives").innerText="❤️❤️❤️";

loadQuestion();

}
function missionComplete(){

document.getElementById("mainContainer").innerHTML=`

<div class="missionComplete">

<h1>🎉 MISSION COMPLETE</h1>

<p>
Excellent Work, Agent!
</p>

<p>
You successfully decoded the patterns
and completed Mission 1.
</p>

<p>
The system has unlocked your next clue.
</p>

<button class="nextArrow"
onclick="showCluePage()">

➜

</button>

</div>

`;

}
function showCluePage(){

document.getElementById("mainContainer").innerHTML=`

<div class="cluePage">

<h1>🔓 NEXT CLUE UNLOCKED</h1>

<hr>

<h2>📍 Your next destination is</h2>

<div class="clueBox">

_____________________

</div>

<p>
(You'll fill this later.)
</p>

<hr>

<h3>⚠ IMPORTANT</h3>

<p>

Show this screen to one of the volunteers before moving to your next destination.

</p>

<p>

Good luck, Agent!

</p>

</div>

`;

}