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

Promise.all([promiseA, promiseB])
  .then((value) =>
    console.log("✅ Promise.all([promiseA, promiseB]).then(value):", value)
  )
    .catch((error) => console.log(error));
  


