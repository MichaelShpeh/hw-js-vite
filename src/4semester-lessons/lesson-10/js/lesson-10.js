//! 1 завдання
const firstButton = document.getElementById("1ex-button");

const consolelogs = function () {
  const i = 1000;
  let a = 0;

  const setInt = setInterval(() => {
    console.log(`Повідомлення №: ${++a}`);

    if (a === 5) {
      clearInterval(setInt);
      console.log("Зупинено!");
    }
  }, i);
};

firstButton.addEventListener("click", consolelogs);

//! 2 завданя
const stDiv = document.getElementById("div-1");
const ndDiv = document.getElementById("div-2");
const rdDiv = document.getElementById("div-3");
const changeButton = document.getElementById("change-button");
const resetButton = document.getElementById("reset-button");

// const changesElements = function () {
//   setInterval(() => {
//     stDiv.style.width = "150px";
//     stDiv.style.height = "150px";
//     stDiv.style.transition = "transform 0.5s ease";
//   }, 2000);
//   setInterval(() => {
//     ndDiv.style.transform = "translateX(100px)";
//     ndDiv.style.transition = "transform 0.5s ease";
//   }, 1000);
//   setInterval(() => {
//     rdDiv.style.background = "indigo";
//     rdDiv.style.transition = "transform 0.5s ease";
//   }, 4000);
// };

let interval1, interval2, interval3;

const changesElements = function () {
  //! запобігання повторному натисканню
  if (interval1 || interval2 || interval3) return;

  interval1 = setInterval(() => {
    stDiv.style.width = "150px";
    stDiv.style.height = "150px";
    stDiv.style.transition = "transform 0.5s ease";
  }, 2000);

  interval2 = setInterval(() => {
    ndDiv.style.transform = "translateX(100px)";
    ndDiv.style.transition = "transform 0.5s ease";
  }, 1000);

  interval3 = setInterval(() => {
    rdDiv.style.background = "indigo";
    rdDiv.style.transition = "transform 0.5s ease";
  }, 4000);
};

const resetChanges = function () {
  //! зупинка інтервалів
  clearInterval(interval1);
  clearInterval(interval2);
  clearInterval(interval3);

  interval1 = null;
  interval2 = null;
  interval3 = null;

  stDiv.style.width = "100px";
  stDiv.style.height = "100px";
  stDiv.style.transform = "";

  ndDiv.style.transform = "";

  rdDiv.style.background = "green";
};

changeButton.addEventListener("click", changesElements);
resetButton.addEventListener("click", resetChanges);

const game = document.getElementById("interactive-game");
const displayedScore = document.getElementById("score");
const startButton = document.getElementById("start-button");

let score = 0;
const maxClicks = 10;
let activeTarget = null;
let spawnInterval = null;

const createRandomTarget = () => {
  if (activeTarget) {
    activeTarget.remove(); //! видаляємо попередню ціль
  }

  const target = document.createElement("div");
  target.classList.add("target");

  const containerWidth = game.clientWidth;
  const containerHeight = game.clientHeight;

  const maxX = containerWidth - 50;
  const maxY = containerHeight - 50;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  target.addEventListener("click", () => {
    score++;
    displayedScore.textContent = `Рахунок: ${score}`;
    target.remove();
    activeTarget = null;

    if (score >= maxClicks) {
      clearInterval(spawnInterval);
      alert("🎉 Гру завершено!");
    }
  });

  game.appendChild(target);
  activeTarget = target;
};

startButton.addEventListener("click", () => {
  //! скидання стану гри
  score = 0;
  displayedScore.textContent = `Рахунок: ${score}`;
  if (activeTarget) activeTarget.remove();
  clearInterval(spawnInterval); //! щоб уникнути кількох запусків
  createRandomTarget(); //! перший запуск вручну

  //! створювати нову ціль кожні 2 секунди
  spawnInterval = setInterval(() => {
    createRandomTarget();
  }, 2000);
});

const input = document.getElementById("time-input");
const startBtn = document.getElementById("start-timer");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
    const seconds = parseInt(input.value, 10);

    if (isNaN(seconds) || seconds <= 0) {
      message.textContent = "Введіть коректне число секунд!";
      return;
    }

    message.textContent = `Очікуємо ${seconds} сек...`;

    setTimeout(() => {
      message.textContent = "⏰ Час вийшов!";
    }, seconds * 1000);
});
