// const timerId = setTimeout(callback, delay);

// let seconds = 10;

// let timerId = setTimeout(function () {
//   console.log("Time's up!");
// }, seconds * 1000);

//!
// const timeBeforeStart = 3000; //! час до старту

// const timeCount = function () {
//     console.log(`Спрацювала функція timeСount() через ${timeBeforeStart / 1000} секунди`);
//  };

// const timerId = setTimeout(timeCount, timeBeforeStart);

// console.log("timerId", timerId);
//!

//todo
// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій

// console.log(index, "Спрацювала функція timeСount()");

// for (let index = 1; index <= iterations; index++) {
//   timerId = setTimeout(function timeCount() {
//     console.log(index, "Спрацювала функція timeСount()");
//   }, timeBeforeStart * index);
// };

// for (let index = 0; index < iterations; index++) {
//   timerId = setTimeout(function timeCount() {
//     console.log(iterations - index, "Спрацювала функція timeСount()");
//   }, timeBeforeStart * index);
// };
//todo

//?
// const stopCounter = 5; //! кількість ітерацій до зупинення таймеру

// console.error(
//   "Інтервал з ідентифікатором",
//   timerId,
//   "зупинено на",
//   index + 1,
//   "-ій ітерації!"
// );

// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій

// for (let index = 0; index < iterations; index++) {
//     timerId = setTimeout(function timeCount() {
//         console.log(iterations - index, "Спрацювала функція timeСount()", timerId);
//         if (index + 1 === stopCounter) {
//           console.error(
//             "Інтервал з ідентифікатором",
//             timerId,
//             "зупинено на",
//             index + 1,
//             "-ій ітерації!"
//           );
//         }
//     }, timeBeforeStart * index);

//     if (index === stopCounter) {
//         clearTimeout(timerId);
//         break;
//     }
// }
//?

////
// const stopCounter = 5; //! кількість ітерацій до зупинення таймеру
// let timerId;
// const timeBeforeStart = 1000; //! час між відліками
// const iterations = 10; //! кількість ітерацій

// const btnStartTimeout = document.getElementById("start-set-timeout");
// const btnStopTimeout = document.getElementById("stop-set-timeout");
// let timersId = [];

// btnStartTimeout.addEventListener("click", () => {
//     timersId = [];
//   for (let index = 0; index < iterations; index++) {
//     timerId = setTimeout(function timeCount() {
//       console.log(
//         iterations - index,
//         "Спрацювала функція timeСount()",
//         timerId
//       );

//       if (index + 1 === stopCounter) {
//         console.error(
//           "Інтервал з ідентифікатором",
//           timerId,
//           "зупинено на",
//           index + 1,
//           "-ій ітерації!"
//         );
//       }
//     }, timeBeforeStart * index);

//     if (index === stopCounter) {
//       clearTimeout(timerId);
//       console.warn("Інтервал з ідентифікатором ${timerId} зупинено!");
//       return;
//     }
//       timersId.push(timerId)
//     console.log("❗️❗️❗️ Кінець роботи циклу...");
//   }
// });

// btnStopTimeout.addEventListener("click", () => {
//     timersId.forEach((timerId) => clearTimeout(timerId));
// timersId = [];
// });
////

// const timeBetweenCounts = 1000; //! час між відліками
// const stopCounter = 5; //! кількість інтервалів до зупинення таймеру

// // console.error("❌⏱️ Інтервал з ідентифікатором", intervalId, "зупинено!");

// function createsInterval() {
//   let count = 0; //! початковий стан лічильник часу
//   const intervalId = setInterval(() => {
//     count++;
//     console.log("⏱️", count, "- відлік часу в секундах, id:", intervalId);
//   }, timeBetweenCounts);

//   let timerId = setTimeout(() => {
//     clearInterval(intervalId);
//     console.error("❌⏱️ Інтервал з ідентифікатором", intervalId, "зупинено!");
//   }, stopCounter * timeBetweenCounts + 10);

//   //! У браузерного таймера є мінімально можлива затримка.
//   //!  У сучасних браузерах вона коливається приблизно від 0 до 4 мілісекунд.
//   //!  У старіших браузерах затримка може бути більшою і досягати 15 мілісекунд.
//   //!  За стандартом, мінімальна затримка становить 4 мілісекунди,
//   //!  тому різниці між setTimeout(callback, 1) і setTimeout(callback, 4) немає.
//   //!  Таймер може спрацьовувати рідше, ніж зазначено в параметрі delay,
//   //!  тому що за надто великого завантаження процесора деякі запуски функцій-інтервалів будуть пропущені.
//   //!  Браузери продовжують виконувати тайм-аути та інтервали, навіть якщо вкладка браузера неактивна,
//   //!  але водночас знижують частоту спрацьовування таймерів.
// }

// createsInterval();

//! КРОК-2.3.Додамо інтерфейс керування таймером:
//!  - введення інтервалу до зупинення таймеру (у секундах),
//!  - кнопки старту та зупинення таймеру.
const timeBetweenCounts = 1000; //! час між відліками
let stopCounter = null; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру
let intervalId = null; //! для видалення ідентифікатора кнопкою

const infoInput = document.getElementById("info-input");
const input = document.getElementById("stop-counter");
const startBtn = document.getElementById("start-set-interval"); //! кнопка <Start setInterval>
const stopBtn = document.getElementById("stop-set-interval"); //! кнопка <Stop setInterval>

stopCounter = 5; //! кількість інтервалів до зупинення таймеру - умова зупинення таймеру

function createInterval() {
  let count = 0; //! початковий стан лічильник часу
  const intervalId = setInterval(() => {
    count++;
    console.log("⏱️", count, "- відлік часу в секундах, id:", intervalId);

    //! Умова зупинення таймеру:
    if (count >= stopCounter) {
      clearInterval(intervalId);
      console.error("🛑⏱️ Інтервал з ідентифікатором", intervalId, "зупинено!");
    }
  }, timeBetweenCounts);
}

startBtn.addEventListener("click", createInterval);

stopBtn.addEventListener(
  "click",
  clearInterval(createInterval),
  console.warn(
    `⚠️⏱️Інтервал з ідентифікатором ${intervalId} зупинено повністю!`
  )
);
