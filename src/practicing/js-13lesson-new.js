// // books
// const books = {
//     count: 3,
//     list: [
//         {
//             title: 'The Great Gatsby',
//             author: 'F. Scott Fitzgerald',
//             year: 1925
//         },
//         {
//             title: 'To Kill a Mockingbird',
//             author: 'Harper Lee',
//             year: 1960
//         },
//         {
//             title: '1984',
//             author: 'George Orwell',
//             year: 1949
//         }
//     ],
// };
// //! Код виконаного завдання

// console.log("count: ", count);

// console.log("count: ", count);
// console.log("count: ", count);
// console.log("count: ", count);

// console.log("count: ", count);
// console.log("count: ", count);
// console.log("count: ", count);

// console.log("count: ", count);
// console.log("count: ", count);
// console.log("count: ", count);

// const {

//     count,

//     list: [
//         {title: title, author: author1, year: year1},
//         { title: title1, author: author2, year: year2 },
//         { },
//     ],

// } = books;






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
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунку.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахунку.
//! Код виконаного завдання

// const bankAccount = {
//     ownerName: "Jack Nicholson",
//     accountNumber: 1111222233334444,
//     balance: 10000,
// };



// console.log("Our object berofe: ", bankAccount);

// bankAccount.deposit = function(money) {
//     console.log('deposit');

//     this.balance += money;

//     console.log("Our balance: ", this.balance);
// };

// bankAccount.withdraw = function(money) {
//     console.log('withdraw');

//     if (this.balance < money) {
//         console.log("⛔️ Не достатньо коштів на вашому рахунку!");
//         return;
//     };

//     this.balance -= money;

//     console.log("Our balance: ", this.balance);
// };

// console.log("Our object after: ", bankAccount);

// console.log(bankAccount.deposit(1000));

// console.log(bankAccount.withdraw(11000));

// console.log("--------------------------------------------------");

//todo [6]
console.log(
    "%c [6] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account = {
    //todo: Поточний баланс рахунку
    balance: 0,
    //todo:  Історія транзакцій
    transactions: [],

//todo:  Метод створює і повертає об'єкт транзакції.
//todo:  Приймає суму і тип транзакції.
createTransaction(amount, type) {
    const transactionsObject = {
        id: this.transactions.length + 1,
        type,
        amount
    }

    console.log(transactionsObject);
    return transactionsObject;
},

//todo:  Метод відповідає за додавання суми до балансу.
//todo:  Приймає суму танзакції.
//todo:  Викликає createTransaction для створення об'єкта транзакції
//todo:  після чого додає його в історію транзакцій
    deposit(amount) {
    this.balance += amount;
        const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT)
        this.transactions.push(newTransaction)
        return console.log(this.deposit);
 },


//todo:  Метод відповідає за зняття суми з балансу.
//todo:  Приймає суму танзакції.
//todo:  Викликає createTransaction для створення об'єкта транзакції
//todo:  після чого додає його в історію транзакцій.
//todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
//todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
    withdraw(amount) {
    
 },

//todo:  Метод повертає поточний баланс
    getBalance() {
        return this.balance;
 },

//todo:  Метод шукає і повертає об'єкт транзакції по id
getTransactionDetails(id) { },

//todo:  Метод повертає кількість коштів
//todo:  певного типу транзакції з усієї історії транзакцій
getTransactionTotal(type) { },
};
//! Код виконаного завдання

// account.createTransaction(3000, Transaction.DEPOSIT)

// account.createTransaction(1000, Transaction.WITHDRAW)

console.log("--------------------------------------------------");

// const currentTime = new Date();

// console.log("currentTime:", currentTime); //! Поточна дата та час
