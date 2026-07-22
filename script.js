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

        if (callback) {
            callback();
        }
    };
}
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

document.querySelector(".container").innerHTML=`
<div class="success-screen">

<h1>✅ TASK 1 COMPLETED!</h1>

<h2>You have unlocked the first digital lock.</h2>

<button>Proceed to Task 2</button> </div>

`;

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