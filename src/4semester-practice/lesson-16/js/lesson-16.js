// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     //! Data handling
//     console.log("data:", data); //! масив об'єктів з користувачами
//   })
//   .catch((error) => {
//     //! Error handling
//     console.log("error:", error);
//   });

// let globalVariable; //! undefined

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     //! Data handling
//       console.log("data:", data); //! масив об'єктів з користувачами
//       globalVariable = data;
//       console.log(
//         "globalVariable всередині функції fetch callback:",
//         globalVariable
//       );

//   })
//   .catch((error) => {
//     //! Error handling
//     console.log("error:", error);
//   });

// console.log("globalVariable поза fetch:", globalVariable);

const fetchButton = document.getElementById("fetch");
const list = document.querySelector(".user-list");

fetchButton.addEventListener("click", fetchUsers);

function fetchUsers() {
  fetchData()
    .then((users) => renderUsers(users))
    .catch((error) => console.log("error:", error));
}

function fetchData() {
  return fetch(
    "https://jsonplaceholder.typicode.com/users?_start=0&_limit=5"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
    // .then((data) => {
    //   //! Data handling
    //   console.log("data:", data); //! масив об'єктів з користувачами
    // });
  //   .catch((error) => {
  //     //! Error handling
  //     console.log("error:", error);
  //   });
}

function renderUsers(users) {
    console.log(users)
    const markUp = users.map((user) => {
        return `
        <li>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address}</p>
        </li>
        `;
    }).join("");


    list.innerHTML = markUp;
}