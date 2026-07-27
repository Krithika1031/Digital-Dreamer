const intro=document.getElementById("intro");

const loading=document.getElementById("loading");

const challenge=document.getElementById("challenge");

const finish=document.getElementById("finish");

const beginBtn=document.getElementById("beginBtn");

const readyBtn=document.getElementById("readyBtn");

const status=document.getElementById("status");

beginBtn.onclick=()=>{

intro.classList.add("hide");

loading.classList.remove("hide");

setTimeout(()=>{
status.innerHTML="Analyzing Voice Pattern...";
},900);

setTimeout(()=>{
status.innerHTML="Authentication Ready...";
},1800);

setTimeout(()=>{

loading.classList.add("hide");

challenge.classList.remove("hide");

},2600);

}

readyBtn.onclick=()=>{

challenge.classList.add("hide");

finish.classList.remove("hide");

}