const fetchUsers = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=56b82358896449f994f5fabbc62ff5f5");
    const users = await response.json();
    return users;
};

fetchUsers()
    .then(users => console.log("users:", users))