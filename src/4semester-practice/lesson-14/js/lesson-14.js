// const delayTime = 3000; //* ✅
// // const delayTime = 2500; //! ❌

// const makePromise = (text, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (delay <= delayTime) {
//         resolve(text);
//       } else {
//         reject("❌ Error!");
//       }
//     }, delay);
//   });
// };

// // todo: var.1
// // const promiseA = makePromise("promiseA value", 1000);
// // const promiseB = makePromise("promiseB value", 3000);

// // todo: var.2
// const promiseA = makePromise("promiseA value", 3000);
// const promiseB = makePromise("promiseB value", 1000);

// const start = Date.now();

// Promise.all([promiseA, promiseB])
//   .then((value) => {
//     const end = Date.now();
//     console.log("Проміс закінчив роботу за: ", end - start, "мс");
//     console.log("✅ Promise.all([promiseA, promiseB]).then(value):", value)
//   })
//     .catch((error) => console.log(error));

//todo 2 урок

//! Promise.race()
//? ✴️ Повертає виконаний або відхилений проміс,
//? залежно від того, з яким результатом завершиться ❗️«НАШВИДШИЙ»❗️
//? з переданих промісів, зі значенням або причиною його відхилення.
//? ✳️ Коли хоча б один проміс з масиву виконається
//? або буде відхилений, проміс, що повертається,
//? перейде у стан resolved або rejected,
//? а всі інші будуть відкинуті.

// const delayTime = 3000; //* ✅
// // const delayTime = 2500; //! ❌

// const makePromise = (text, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (delay <= delayTime) {
//         resolve(text);
//       } else {
//         reject("❌ Error!");
//       }
//     }, delay);
//   });
// };

// // todo: var.1
// // const promiseA = makePromise("promiseA value", 1000);
// // const promiseB = makePromise("promiseB value", 3000);

// // todo: var.2
// const promiseA = makePromise("promiseA value", 3000);
// const promiseB = makePromise("promiseB value", 1000);

// const start = Date.now();

// Promise.race([promiseA, promiseB])
//   .then((value) => {
//     const end = Date.now();
//     console.log("Проміс закінчив роботу за: ", end - start, "мс");
//     console.log("✅ Promise.race([promiseA, promiseB]).then(value):", value);
//   })
//   .catch((error) => {
//     const end = Date.now();
//     console.log("Проміс закінчив роботу за: ", end - start, "мс");
//     console.log(error);
//   });

//! Promise.any()
//? ✴️ Схожий на Promise.race, але чекає лише
//? на ❗️ПЕРШИЙ УСПІШНО ВИКОНАНИЙ перший❗️ проміс
//? і отримує його результат.
//? Якщо ж всі надані проміси завершуються з помилкою,
//? то повертається проміс, що завершується з помилкою
//? за допомогою AggregateError — спеціального об’єкта помилки
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError),
//? який зберігає всі помилки промісів у своїй властивості errors.

const delayTime = 3000; //* ✅
// const delayTime = 2500; //! ❌

const makePromise = (text, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay <= delayTime) {
        resolve(text);
      } else {
        reject("❌ Error!");
      }
    }, delay);
  });
};

// todo: var.1
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// todo: var.2
const promiseA = makePromise("promiseA value", 3000);
const promiseB = makePromise("promiseB value", 1000);

const start = Date.now();

Promise.any([promiseA, promiseB])
  .then((value) => {
    const end = Date.now();
    console.log("Проміс закінчив роботу за: ", end - start, "мс");
    console.log("✅ Promise.race([promiseA, promiseB]).then(value):", value);
  })
  .catch((error) => {
    const end = Date.now();
    console.log("Проміс закінчив роботу за: ", end - start, "мс");
    console.log(error);
  });
