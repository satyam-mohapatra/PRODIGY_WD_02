let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerText = formatTime(elapsedTime);
    }, 10);
}

function pauseStopwatch() {
    clearInterval(timerInterval);
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lapTime() {
    const lap = document.createElement("li");
    lap.innerText = formatTime(elapsedTime);
    document.getElementById("laps").appendChild(lap);
}

function formatTime(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = time % 1000;

    return (
        ("0" + hours).slice(-2) + ":" +
        ("0" + minutes).slice(-2) + ":" +
        ("0" + seconds).slice(-2) + "." +
        ("00" + milliseconds).slice(-3)
    );
}
