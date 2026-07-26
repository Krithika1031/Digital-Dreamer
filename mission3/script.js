// ==============================
// GET ALL SECTIONS
// ==============================

const loadingScreen = document.getElementById("loading-screen");
const missionScreen = document.getElementById("mission-screen");
const questionScreen = document.getElementById("question-screen");
const completeScreen = document.getElementById("complete-screen");

const beginBtn = document.getElementById("begin-btn");
const completeBtn = document.getElementById("complete-btn");

const cards = document.querySelectorAll(".card");

// ==============================
// LOADING SCREEN
// ==============================

window.onload = () => {

    setTimeout(() => {

        loadingScreen.classList.add("hidden");

        missionScreen.classList.remove("hidden");
        missionScreen.classList.add("fade");

    }, 3500);

};

// ==============================
// BEGIN RECOVERY
// ==============================

beginBtn.addEventListener("click", () => {

    missionScreen.classList.add("hidden");

    questionScreen.classList.remove("hidden");
    questionScreen.classList.add("fade");

    // Animate cards one after another
    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 250);

    });

});

// ==============================
// COMPLETE BUTTON
// ==============================

completeBtn.addEventListener("click", () => {

    questionScreen.classList.add("hidden");

    completeScreen.classList.remove("hidden");
    completeScreen.classList.add("fade");

});

// ==============================
// OPTIONAL
// Scroll to top when changing screens
// ==============================

function goTop() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

beginBtn.addEventListener("click", goTop);
completeBtn.addEventListener("click", goTop);