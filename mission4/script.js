const intro=document.getElementById("intro");

const loading=document.getElementById("loading");

const evidence=document.getElementById("evidence");

const finish=document.getElementById("finish");

const accessBtn=document.getElementById("accessBtn");

const doneBtn=document.getElementById("doneBtn");

accessBtn.onclick=()=>{

intro.classList.add("hide");

loading.classList.remove("hide");

setTimeout(()=>{

loading.classList.add("hide");

evidence.classList.remove("hide");

},2000);

}

doneBtn.onclick=()=>{

evidence.classList.add("hide");

finish.classList.remove("hide");

}