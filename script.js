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

    let timeLeft = 3;

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
function showMission1Task3(){

document.querySelector(".container").innerHTML = `

<div class="spot-screen">

<h3>MISSION 1</h3>

<h1>👁 TASK 3</h1>

<p class="spot-subtitle">
Find the 3 Differences
</p>

<div class="spot-top">

<div id="spotTimer">
⏱ 45
</div>

<div id="spotLives">
❤️❤️❤️
</div>

</div>

<p class="foundText">

Found

<span id="foundCount">
0
</span>

/3

</p>

<div class="spot-images">

<div class="spot-image">

<img
src="images/left.png"
>

</div>

<div class="spot-image">

<img
src="images/right.png"
>

</div>

</div>

</div>

`;

}