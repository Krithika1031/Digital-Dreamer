const line1=document.getElementById("line1");
const line2=document.getElementById("line2");
const line3=document.getElementById("line3");
const line4=document.getElementById("line4");

const beginBtn=document.getElementById("beginBtn");

setTimeout(()=>{

line1.innerHTML="✓ Initializing...";

},800);

setTimeout(()=>{

line2.innerHTML="✓ Connecting to Secure Server...";

},1800);

setTimeout(()=>{

line3.innerHTML="✓ Verifying Agent Credentials...";

},2800);

setTimeout(()=>{

line4.innerHTML="✓ ACCESS GRANTED";

},3800);

setTimeout(()=>{

beginBtn.style.display="inline-block";

},4500);

function showMission(){

document.getElementById("loadingScreen").style.display="none";

document.getElementById("missionScreen").style.display="block";

}

function acceptMission(){

document.getElementById("missionScreen").style.display="none";

document.getElementById("finalScreen").style.display="block";

}