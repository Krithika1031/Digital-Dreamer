const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    startBtn.innerText = "Loading...";

    startBtn.disabled = true;

    setTimeout(() => {

        // Task 1 will start here

        console.log("Mission 2 Started");

    }, 800);

});