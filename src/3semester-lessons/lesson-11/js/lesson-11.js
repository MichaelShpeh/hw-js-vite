//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахуноку.
//! Код виконаного завдання

const bankAccount = {
    ownerName: "Jack Nicholson",
    accountNumber: 1111222233334444,
    balance: 10000,
};

console.log("Our object berofe: ", bankAccount);

bankAccount.deposit = function (money) {
    console.log('deposit');

    money = prompt('Введіть суму поповнення коштів');

    return `Our balance: ${this.balance += Number(money)}`;
};

bankAccount.withdraw = function (money) {
    console.log('withdraw');

    money = prompt('Введіть суму зняття коштів');

    if (this.balance < money) {
        console.log("⛔️ Не достатньо коштів на вашому рахунку!");
        return `Our balance: ${this.balance}`;
    };

    return `Our balance: ${this.balance -= money}`; 
};

// console.log("Our object after: ", bankAccount);

console.log(bankAccount.deposit());

console.log(bankAccount.withdraw());

console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем,
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія,
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія.
//? ✳️ Якщо метод повернув "true" вивести повідомлення
//? “Температура нижче 0 градусів Цельсія” і навпаки,
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання

// const weather = {
//     temperature: 21,
//     humidity: 68,
//     windSpeed: 1,
// };

// weather.workWithUser = function (a) {
//     if (a <= 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     };
// };
 
// const questionForUser = prompt("Введіть температуру");

// console.log(weather.workWithUser(questionForUser));

console.log("--------------------------------------------------");

//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання

console.log("--------------------------------------------------");

//! Неробочий варіант

// const user = {
//     name: "Alex",
//     email: "alex222@gmail.com",
//     password: 12345678,
// };

// user.login = function () { 
//     const formAsksName = prompt("Введіть ім'я");
//     this.name = formAsksName;
//     if (this.name === "") {
//         return `${this.name} Поле не має бути пустим!`;
//     } else if (this.name.trim().length < 3) {
//         return `${ this.name} Ім'я має містити 3 символи або більше та без пробілів!`;
//     } else {
//         console.log("Вітаємо ", this.name + "!");
//     };

//     const formAsksEmail = prompt("Введіть email");

//     this.email = formAsksEmail;

//     if (!this.email) {
//         console.log(this.email, "Поле не може бути порожнім!");
//     } else if (this.email.length < 15) {
//         return `${this.email} "Email закороткий!"`;
//     } else if (this.email.includes("@") && this.email.includes(".")) {
//         return `Електронна адреса: ${this.email}`;
//     } else {
//         return `${this.email} Email повинен містити "@" та "."`;
//     };

//     const formAsksPassword = prompt("Введіть пароль");

//     this.password = formAsksPassword;

//     if (this.password === null || this.password === "") {
//         console.log("Це поле не має бути пустим!");
//     } else if (this.password.length < 6) {
//         return `${this.password} "Пароль має містити 6 символів або більше та без пробілів!"`;
//     } else {
//         return `Пароль: ${this.password}`;
//     };
// };

// console.log(user.login());

// const user = {
//     name: "Alex",
//     email: "alex222@gmail.com",
//     password: 12345678,
// };

// user.login = function () {
//     let errors = [];

//     const formAsksName = prompt("Введіть ім'я").trim();
//     if (!formAsksName) {
//         errors.push("❌ Поле 'Ім'я' не має бути пустим!");
//     } else if (formAsksName.length < 3) {
//         errors.push("❌ Ім'я має містити 3 символи або більше!");
//     } else {
//         this.name = formAsksName;
//     };

//     const formAsksEmail = prompt("Введіть email").trim();
//     if (!formAsksEmail) {
//         errors.push("❌ Поле 'Email' не може бути порожнім!");
//     } else if (formAsksEmail.length < 15) {
//         errors.push("❌ Email закороткий!");
//     } else if (!formAsksEmail.includes("@") || !formAsksEmail.includes(".")) {
//         errors.push("❌ Email повинен містити '@' та '.'!");
//     } else {
//         this.email = formAsksEmail;
//     };

//     const formAsksPassword = prompt("Введіть пароль").trim();
//     if (!formAsksPassword) {
//         errors.push("❌ Поле 'Пароль' не має бути пустим!");
//     } else if (formAsksPassword.length < 6) {
//         errors.push("❌ Пароль має містити 6 символів або більше!");
//     } else {
//         this.password = formAsksPassword;
//     };

//     if (errors.length > 0) {
//         return errors.join("\n");
//     };

//     return `✅ Вітаємо, ${this.name}! Ви успішно увійшли в систему.`;
// };

// console.log(user.login());


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання

// const movie = {
//     title: "Зелена книга",
//     director: "Пітер Фарреллі",
//     year: 2018,
//     rating: 9.2,
// };

// movie.ConsolesBoolean = function (rating) {
//     if (rating > 8) {
//         return true;
//     } else if (rating <= 8) {
//         return false;
//     }; 
// };
 
// console.log(movie.ConsolesBoolean(movie.rating));

// if (movie.ConsolesBoolean(movie.rating)) {
//     console.log("%c Зелена книга", "color: green");
// } else {
//     console.log("%c Зелена книга", "color: red");
//  };

// console.log(movie.director);

// console.log(movie.year);

// console.log(movie.rating);

console.log("--------------------------------------------------");
