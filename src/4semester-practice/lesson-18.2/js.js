// const baseUrl = "http://localhost:3000/";
// const endpoint = "users";

// const requestBody = {
//     id: 1,
//     author: "Fay Rodis",
//     title: "Treatise on Inferno",
// };

// const options = {
//     method: "GET", //! операція UPDATE, оновлення
//     body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// const url = `${baseUrl}${endpoint}/${requestBody.id}`;
// const url = `${baseUrl}${endpoint}`;

// fetch(url)
//     .then(response => response.json())
//     .then(users => console.log("Відповідь серівера на GET:", users));



// const requestBody = {  
//     name: "Ivan",
//     email: "ivan@example.com",
// };


// const options = {
//     method: "POST", //! операція CREATE, створення
//     body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// console.log("options", options);

// fetch(url, options)
//     .then(response => response.json())
//     .then(post => console.log("Відповідь серівера на пост:", post))


// const requestBody = {
//     id: 1,
//     name: "New name",
//     email: "new@example.com",
// };

// const options = {
//     method: "PATCH", //! операція UPDATE, оновлення
//     body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// const url = `${baseUrl}${endpoint}/${requestBody.id}`;

// console.log(url)

// fetch(url, options)
//     .then(response => response.json())
//     .then(users => console.log("Відповідь серівера на PATCH:", users));


const baseUrl = "https://jsonplaceholder.typicode.com/";
const endpoint = "posts";

const url1 = `${baseUrl}${endpoint}/9`;

fetch(url1)
    .then(response => response.json())
    .then(post => console.log("Відповідь серівера на GET:", post));

const requestBody = {
    id: 9,
    author: "Fay Rodis",
    title: "Treatise on Inferno",
};

const options = {
    method: "PATCH", //! операція UPDATE, оновлення
    body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

const url = `${baseUrl}${endpoint}/${requestBody.id}`;

fetch(url, options)
    .then(response => response.json())
    .then(post => console.log("Відповідь серівера на PATCH:", post));




setTimeout(() => {
    const url1 = `${baseUrl}${endpoint}/9`;

    fetch(url1)
        .then(response => response.json())
        .then(post => console.log("Відповідь серівера на GET:", post));
    
}, 1500);

