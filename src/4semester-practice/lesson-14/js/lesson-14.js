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

// todo: var.1
// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// todo: var.2
// const promiseA = makePromise("promiseA value", 3000);
// const promiseB = makePromise("promiseB value", 1000);

// const start = Date.now();

// Promise.any([promiseA, promiseB])
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


// //! new Promise ----> Promise.resolve() і Promise.reject()
// console.warn("new Promise ----> Promise.resolve() і Promise.reject():");
// //? ✴️ Статичні методи для створення промісів,
// //? що миттєво успішно виконуються або відхиляються.
// //? Працюють аналогічно new Promise() за винятком
// //? можливості вказати затримку, але мають коротший синтаксис.
// //* ✅ Fulfilled promise
// new Promise((resolve) => resolve("✅ SUCCESS value from new Promise")).then(
//   (value) => console.log("new Promise:", value)
// );

// Promise.resolve("✅✅ SUCCESS value from Promise.resolve").then((value) => {
//   console.log("Promise.resolve:", value);
//   console.log("typeof Promise.resolve:", typeof value); //! string
//   console.log(
//     ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ."
//   );
// });

// //! ❌ Rejected promise
// new Promise((resolve, reject) => reject("❌ ERROR from new Promise")).catch(
//   (error) => console.error("new Promise:", error)
// );

// Promise.reject("❌❌ ERROR from from Promise.resolve").catch((error) => {
//   console.error("Promise.resolve:", error);
//   console.log(
//     "------------------------------------------------------------------------"
//   );
// });
// // console.log("------------------------------------------------------------------------");

// const delayTime = 2500;

// const makePromise = (text, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delay <= delayTime) {
//                 resolve(text);
//             } else {
//                 reject("❌ Error!");
//             };
//         }, delay)
//     });
// };

// const promiseA = makePromise("promiseA value", 1000); //* ✅
// const promiseB = makePromise("promiseB value", 3000); //! ❌
// const promiseC = makePromise("promiseС value", 2000); //* ✅

// Promise.allSettled([promiseA, promiseB, promiseC])
//     .then(value => console.log("Promise.allSettled([promiseA, promiseB, promiseC]).then(value):\n", value))
//     // .catch(error => console.log(error))
//     .finally(() => { console.log("-------------------------------------------------------------------------------------");});

// //todo: Результат в конолі:
// //? [
// //*     0: { status: 'fulfilled', value: 'promiseA value' },
// //!     1: { status: 'rejected', reason: '❌ Error!' },
// //*     2: { status: 'fulfilled', value: 'promiseC value' }
// //? ]
// // console.log("-----------------------------------------------------------------------------------------");

// function delayedPromise(name, delay, shouldReject = false) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!shouldReject) {
//         console.log(`✅ ${name} успішно виконано`);
//         resolve(`Результат ${name}`);
//       } else {
//         console.log(`❌ ${name} завершився з помилкою`);
//         reject(`Помилка в ${name}`);
//       }
//     }, delay);
//   });
// }

// //! Створюємо масив промісів з різним часом виконання:
// const promises = [
//   delayedPromise("Завдання 1", 2000), //* ✅
//   delayedPromise("Завдання 2", 1000, true), //! ❌
//   delayedPromise("Завдання 3", 3000), //* ✅
//   delayedPromise("Завдання 4", 1500, true), //! ❌
//   delayedPromise("Завдання 5", 2500), //* ✅
// ];

// Promise.allSettled(promises).then((results) => {
//     console.log("\n=== Підсумок виконання всіх завдань ===");
//   results.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(`Проміс ${index + 1}: ✅ Успіх → ${result.value}`);
//     } else {
//       console.log(`Проміс ${index + 1}: ❌ Помилка → ${result.reason}`);
//     }
//   });
// });

