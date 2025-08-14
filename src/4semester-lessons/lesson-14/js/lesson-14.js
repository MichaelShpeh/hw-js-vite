//todo 1 Завдання
const delayTime = 3000;

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

const start = Date.now();

const array = [
  makePromise("PromiseA", 1000),
  makePromise("PromiseB", 1500),
  makePromise("PromiseC", 3000),
  makePromise("PromiseD", 2000),
  makePromise("PromiseE", 1800),
];

Promise.all(array)
  .then((value) => {
    const end = Date.now();
    console.log("Проміс закінчив роботу за: ", end - start, "мс");
    console.log("✅ Promise.all(array).then(value):", value);
  })
  .catch((error) => console.log(error));

//todo 2 Завдання
function randomDelay(value) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const array2 = [
  randomDelay("PromiseA"),
  randomDelay("PromiseB"),
  randomDelay("PromiseC"),
  randomDelay("PromiseD"),
  randomDelay("PromiseE"),
];

Promise.race(array2)
  .then((value) => {
    const end = Date.now();
    console.log("Проміс закінчив роботу за: ", end - start, "мс");
    console.log("✅ Promise.race(array).then(value):", value);
  })
  .catch((error) => console.log(error));