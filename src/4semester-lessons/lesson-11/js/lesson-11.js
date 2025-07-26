const form = document.getElementById("form");
const shownTime = document.getElementById("shownTime");
const submitBtnContainer = document.getElementById("submitBtnContainer");
const cancelBtn = document.getElementById("cancelBtn");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

let timerId;
let timerState = "initial"; //! initial | running | paused
let totalSeconds = 0;
let initialTotal = 0;


//! зупинка таймера при виході
window.addEventListener("beforeunload", () => {
  if (timerState === "running") {
    stopTimer();
    timerState = "paused";

    localStorage.setItem(
      "timerData",
      JSON.stringify({
        totalSeconds,
        timerState: "paused",
      })
    );
  }
});


//! завантаження таймера при вході на сайт
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("timerData");
  if (!saved) {
    resetToInitial();
    return;
  }

  const { totalSeconds: savedTotal, timerState: savedState } =
    JSON.parse(saved);
  totalSeconds = savedTotal;
  timerState = savedState;

  updateDisplay(totalSeconds);

  if (timerState === "running" && totalSeconds > 0) {
    startTimer();
    cancelBtn.style.color = "gray";
    cancelBtn.disabled = true;
    submitBtnContainer.innerHTML = "";
    submitBtnContainer.appendChild(createSubmitButton("Зупинити", "stopBtn"));
  } else if (timerState === "paused") {
    cancelBtn.style.color = "#fff";
    cancelBtn.disabled = false;
    submitBtnContainer.innerHTML = "";
    submitBtnContainer.appendChild(
      createSubmitButton("Продовжити", "resumeBtn")
    );
  } else {
    resetToInitial();
  }
});

//! форматування часу 0 → 00
function format(num) {
  return String(num).padStart(2, "0");
}

//! оновити відображення часу
function updateDisplay(total) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  shownTime.textContent = `${format(h)}:${format(m)}:${format(s)}`;
}

//! створення нової кнопки
function createSubmitButton(label, id) {
  const btn = document.createElement("button");
  btn.type = "submit";
  btn.id = id;
  btn.textContent = label;
  return btn;
}

//! старт таймера

function startTimer() {
  timerId = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay(totalSeconds);
    } else {
      stopTimer();
      resetToInitial();
      alert("Час вийшов!");
    }
  }, 1000);
}

//! зупинка таймера
function stopTimer() {
  clearInterval(timerId);
}

//! скидання до початкового стану
function resetToInitial() {
  timerState = "initial";
  cancelBtn.disabled = false;
  updateDisplay(0);
  submitBtnContainer.innerHTML = "";
  const btn = createSubmitButton("Підтвердити", "submitBtn");
  submitBtnContainer.appendChild(btn);
    form.reset();
    localStorage.removeItem("timerData");
}

//! додавання слухача на форму
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //! якщо таймер не запущений
  if (timerState === "initial") {
    const h = Number(hoursInput.value) || 0;
    const m = Number(minutesInput.value) || 0;
    const s = Number(secondsInput.value) || 0;
    totalSeconds = h * 3600 + m * 60 + s;

    if (totalSeconds <= 0) {
      alert("Введіть час більший за 0");
      return;
    }
      
    initialTotal = totalSeconds;

    localStorage.setItem(
      "timerData",
      JSON.stringify({
        totalSeconds: initialTotal,
        timerState: "running",
      })
    );

    updateDisplay(totalSeconds);
    startTimer();
    timerState = "running";
    cancelBtn.style.color = "gray";
    cancelBtn.disabled = true;

    submitBtnContainer.innerHTML = "";
    submitBtnContainer.appendChild(createSubmitButton("Зупинити", "stopBtn"));
  } else if (timerState === "running") {
    //! таймер запущений
    stopTimer();
    timerState = "paused";
    cancelBtn.style.color = "#fff";
      cancelBtn.disabled = false;
      
      localStorage.setItem("timerData", JSON.stringify({
        totalSeconds,
        timerState: "paused"
      }));

    submitBtnContainer.innerHTML = "";
    submitBtnContainer.appendChild(
      createSubmitButton("Продовжити", "resumeBtn")
    );
  } else if (timerState === "paused") {
    //! таймер зупинений
    startTimer();
    timerState = "running";
    cancelBtn.style.color = "gray";
    cancelBtn.disabled = true;

    localStorage.setItem(
      "timerData",
      JSON.stringify({
        totalSeconds,
        timerState: "running",
      })
    );

    submitBtnContainer.innerHTML = "";
    submitBtnContainer.appendChild(createSubmitButton("Зупинити", "stopBtn"));
  }
});

cancelBtn.addEventListener("click", function () {
  stopTimer();
  resetToInitial();
});
