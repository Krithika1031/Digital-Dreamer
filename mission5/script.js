const intro=document.getElementById("intro");

const loading=document.getElementById("loading");

const report=document.getElementById("report");

const finish=document.getElementById("finish");

const decryptBtn=document.getElementById("decryptBtn");

const analyzeBtn=document.getElementById("analyzeBtn");

const status=document.getElementById("status");

decryptBtn.onclick=()=>{

intro.classList.add("hide");

loading.classList.remove("hide");

setTimeout(()=>{

status.innerHTML="Verifying Clearance...";

},800);

setTimeout(()=>{

status.innerHTML="Decrypting Report...";

},1600);

setTimeout(()=>{

loading.classList.add("hide");

report.classList.remove("hide");

},2600);

}

analyzeBtn.onclick=()=>{

report.classList.add("hide");

finish.classList.remove("hide");

}