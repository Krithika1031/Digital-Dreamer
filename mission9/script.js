function startMission(){

document.getElementById("screen1").classList.remove("active");

document.getElementById("loading").classList.add("active");

setTimeout(()=>{

document.getElementById("loading").classList.remove("active");

document.getElementById("screen2").classList.add("active");

},3000);

}