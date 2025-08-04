const input = document.getElementById("target-date");
const Btn = document.getElementById("confirm-button");
const daysSpan = document.querySelector('[data-value="days"]');
const hoursSpan = document.querySelector('[data-value="hours"]');
const minsSpan = document.querySelector('[data-value="mins"]');
const secsSpan = document.querySelector('[data-value="secs"]');

let intervalId;

Btn.addEventListener("click", (event) => {
  event.preventDefault();

  const value = input.value;
  const targetDate = new Date(value);
  const now = new Date();

    const oneDay = 24 * 60 * 60 * 1000;
    
  if (targetDate.getTime() - now.getTime() < oneDay) {
    alert("Дата не повина бути менше 1 дня!");
    return;
  }

  intervalId = setInterval(() => {
    const nowDate = new Date();
    const time = targetDate.getTime() - nowDate.getTime();

    if (time <= 0) {
      clearInterval(intervalId);
      daysSpan.textContent =
        hoursSpan.textContent =
        minsSpan.textContent =
        secsSpan.textContent =
          "00";
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysSpan.textContent = String(days).padStart(2, "0");
    hoursSpan.textContent = String(hours).padStart(2, "0");
    minsSpan.textContent = String(mins).padStart(2, "0");
    secsSpan.textContent = String(secs).padStart(2, "0");
  }, 1000);
});
