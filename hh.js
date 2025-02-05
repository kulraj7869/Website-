let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let hourHand = document.getElementById('hourHand');
let minuteHand = document.getElementById('minuteHand');
let secondHand = document.getElementById('secondHand');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

// ========== Stopwatch Functions ==========
startBtn.addEventListener('click', function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function () {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener('click', function () {
  clearInterval(timerId);
  timerId = null;
  msec = 0;
  secs = 0;
  mins = 0;
  timerDisplay.innerHTML = `00 : 00 : 00`;
});

function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

// ========== Analog Clock Functions ==========
function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hourDeg = (hours % 12) * 30 + minutes * 0.5;
  let minuteDeg = minutes * 6;
  let secondDeg = seconds * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Run immediately
