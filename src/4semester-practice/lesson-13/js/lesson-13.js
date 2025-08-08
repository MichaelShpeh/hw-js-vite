// const isSuccess = true; //* ✅
// // const isSuccess = false; //! ❌

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("✅ Success! Value passed to resolve function");
//     } else {
//       reject("❌ Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// //todo ⏳
// console.log("promise ⏳:", promise); //! Promise {<pending>}

// //* ✅ або ❌
// setTimeout(() => {
//   console.log("promise_setTimeout:", promise);
//   //* Promise {<fulfilled>: '✅ Success! Value passed to resolve function'}
//   //? або
//   //! Promise {<rejected>: '❌ Error! Error passed to reject function'}
// }, 2500);


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log("value_then-1:", value); //! 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log("value_then-2:", value); //! 10
//     return value * 3;
//   })
//   .then(() => {
//     console.log("value_then-3:", value); //! 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task_метод finally()");
//     console.log(
//       "--------------------------------------------------------------"
//     );
//   });

// const fetchUserFromServer1 = (username, onSuccess, onError) => {
//     console.log(`Fetching data-1 for ${username}:`);

//     setTimeout(() => {
//         //todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
//         // const isSuccess = true; //* ✅
//         const isSuccess = false; //! ❌

//         if (isSuccess) {
//             onSuccess("✅ success-1");
//             console.log("-------------------------------------------------");
//         } else {
//             onError("❌ error-1");
//             console.log("-------------------------------------------------");
//         };
//     }, 2000);
// };

// const onFetchSuccess1 = user => {
//     console.log("user_onFetchSuccess1:", user);
// };

// const onFetchError1 = error => {
//     console.error("error_onFetchError1:", error);
// };

// fetchUserFromServer1("Mango", onFetchSuccess1, onFetchError1);
// // console.log("-------------------------------------------------");

const fetchUserFromServer1 = (username) => {
  console.log(`Fetching data-1 for ${username}:`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
      const isSuccess = true; //* ✅
      // const isSuccess = false; //! ❌

      if (isSuccess) {
        resolve("✅ success-1");
      } else {
        reject("❌ error-1");
      }
    }, 2000);
  });
};

fetchUserFromServer1("Mango")
  .then((user) => {
    console.log("user_onFetchSuccess1:", user);
  })
  .catch((error) => {
    console.error("error_onFetchError1:", error);
  })

//   const fetchUserFromServer1 = (username) => {
//     console.log(`Fetching data-1 for ${username}:`);

//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         //todo: Змініть значення змінної isSuccess, щоб викликати resolve або reject:
//         const isSuccess = true; //* ✅
//         // const isSuccess = false; //! ❌

//         if (isSuccess) {
//           resolve("✅ success-1");
//         } else {
//           reject("❌ error-1");
//         }
//       }, 2000);
//     });

//     return promise;
//   };

//   fetchUserFromServer1("Mango");
//   promise
//     .then((user) => {
//       console.log("user_onFetchSuccess1:", user);
//     })
//     .catch((error) => {
//       console.error("error_onFetchError1:", error);
//     });