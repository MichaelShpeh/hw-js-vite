// const baseUrl = "https://jsonplaceholder.typicode.com/";
// const endpoint = "posts";

// const url = `${baseUrl}${endpoint}`;

// console.log("url", url);

// const requestBody = {
//     author: "Fay Rodis",
//     title: "Treatise on Inferno",
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



// const baseUrl = "https://jsonplaceholder.typicode.com/";
// const endpoint = "posts";



// const requestBody = {
//     id: 9,
//     author: "Fay Rodis",
//     title: "Treatise on Inferno",
// };

// const options = {
//     method: "PUT", //! операція UPDATE, оновлення
//     body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// const url = `${baseUrl}${endpoint}/${requestBody.id}`;

// fetch(url, options)
//     .then(response => response.json())
//     .then(post => console.log("Відповідь серівера на PUT:", post));





const baseUrl = "https://jsonplaceholder.typicode.com/";
const endpoint = "posts";

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








// const baseUrl = "https://jsonplaceholder.typicode.com/";
// const endpoint = "posts";

// const postIdToDelete = 9;

// const options = {
//     method: "DELETE", //! операція DELETE, видалення
// };

// const requestBody = {
//     id: 9
// };

// const options = {
//     method: "DELETE", //! операція UPDATE, оновлення
//     body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// const url = `${baseUrl}${endpoint}/9}`;

// fetch(`${url} ${postIdToDelete}`, options)
    // .then(response => response.status)
    // .then(post => console.log("Відповідь серівера на DELETE:", post));



setTimeout(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/9`)
        .then(response => response.json())
        .then(post => console.log(`post №${9} після ${options.method}:`, post))
        .catch(error => console.log(error))
        .finally(() => console.log("-----------------------------------------------------------------------------------------------------------------------------"));
}, 500);

