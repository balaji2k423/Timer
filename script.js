let timer;
let timeLeft = 0;
let totalTime = 0;
let isRunning = false;

// Format time as HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update the display
function updateDisplay() {
  document.getElementById("display").textContent = formatTime(timeLeft);
  updateProgressCircle();
}

// Set timer manually
function setTimer() {
  const hours = parseInt(document.getElementById("hours").value, 10);
  const minutes = parseInt(document.getElementById("minutes").value, 10);
  const seconds = parseInt(document.getElementById("seconds").value, 10);
  timeLeft = totalTime = hours * 3600 + minutes * 60 + seconds;
  updateDisplay();
}

// Start timer from pre-defined options
function startPredefinedTimer() {
  const selectedTime = parseInt(document.getElementById("timer-options").value, 10);
  timeLeft = totalTime = selectedTime;
  updateDisplay();
  startTimer();
}

// Start the timer
function startTimer() {
  if (isRunning || timeLeft <= 0) return;
  isRunning = true;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("alertSound").play();  // Play alert sound
      alert("Time's up!");
    }
  }, 1000);
}

// Pause the timer
function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

// Reset the timer
function resetTimer() {
  clearInterval(timer);
  timeLeft = 0;
  totalTime = 0;
  updateDisplay();
  isRunning = false;
  resetProgressCircle();
}

// Progress Circle Animation
function updateProgressCircle() {
  const progressCircle = document.getElementById("progressCircle");
  const progress = ((totalTime - timeLeft) / totalTime) * 100;
  progressCircle.style.background = `conic-gradient(#007bff ${progress}%, #eaeaea ${progress}%)`;
}

function resetProgressCircle() {
  document.getElementById("progressCircle").style.background = `conic-gradient(#007bff 0%, #eaeaea 0%)`;
}

// Start the timer
function startTimer() {
    if (isRunning || timeLeft <= 0) return;
    isRunning = true;
  
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("alertSound").play();  // Play alert sound
        alert("Time's up!");
  
        // Add red corners when time is up
        document.querySelector(".container").classList.add("red-corners");
      }
    }, 1000);
  }
  
  // Reset the timer (also reset the red corners effect)
  function resetTimer() {
    clearInterval(timer);
    timeLeft = 0;
    totalTime = 0;
    updateDisplay();
    isRunning = false;
    resetProgressCircle();
  
    // Remove red corners effect
    document.querySelector(".container").classList.remove("red-corners");
  }
  
