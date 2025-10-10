// const fetchUsers = async () => {
//     const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=56b82358896449f994f5fabbc62ff5f5");
//     const users = await response.json();
//     return users;
// };

// fetchUsers()
//     .then(users => console.log("users:", users))



const button = document.querySelector(".fetch");
const list = document.querySelector(".list");

button.addEventListener("click", async () => {
    try {
        const users = await fetchUsers()
        console.log(users)
        rendersUsers(users)
    } catch (error) {
        alert("Отакої, помилка у запитах", error)
    }

})

async function fetchUsers() {
    const users = await Promise.all([fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/users/2"),
    fetch("https://jsonplaceholder.typicode.com/users/3"),
    fetch("https://jsonplaceholder.typicode.com/users/4"),
    fetch("https://jsonplaceholder.typicode.com/users/5")])

    return users;
}

function rendersUsers(users) {
}
