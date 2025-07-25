const form = document.getElementById("form");
const displayedtime = document.getElementById("shownTime");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
// const text = document.getElementById("");

let timerState = "initial";
function startTimer() {
  console.log("Таймер запущено");
  // timerId = setInterval(...) — тут має бути твій таймер
}

function stopTimer() {
  console.log("Таймер зупинено");
  // clearInterval(timerId);
}

function resumeTimer() {
  console.log("Таймер продовжено");
  // timerId = setInterval(...) — знову запуск
}

let time = {};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  time = {
    hours: document.getElementById("hours").value,
    minutes: document.getElementById("minutes").value,
    seconds: document.getElementById("seconds").value,
  };

  console.log("Обʼєкт часу:", time);

  if (timerState === "initial") {
    startTimer();
    submitBtn.textContent = "Зупинити";
    cancelBtn.disabled = true;
    timerState = "running";
  } else if (timerState === "running") {
    stopTimer();
    submitBtn.textContent = "Продовжити";
    cancelBtn.disabled = false;
    timerState = "paused";
  } else if (timerState === "paused") {
    resumeTimer();
    submitBtn.textContent = "Зупинити";
    cancelBtn.disabled = true;
    timerState = "running";
  }
});

cancelBtn.addEventListener("click", function () {
  // Скидання стану таймера
  stopTimer(); // Зупиняємо, навіть якщо вже зупинено

  // Повернення початкових кнопок
  submitBtn.textContent = "Почати";
  cancelBtn.disabled = false;
  timerState = "initial";

  // Опціонально: очистити інпути
  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";

  // Опціонально: скинути екран таймера
  document.getElementById("shownTime").textContent = "00:00:00";
});
