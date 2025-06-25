//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
//! Код виконаного завдання

const { name, age, hobby, premium } = userA;

console.log("name: ", name);

console.log("age: ", age);

console.log("hobby: ", hobby);

console.log("premium: ", premium);

console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { name: 'Mango', age: 2 };
//! Код виконаного завдання

const { name: nameUserB, age: ageUserB } = userB;

console.log("mango: ", nameUserB);
console.log("age: ", ageUserB);

console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
    count: 11,
    employeePerformanceLists: [
        {
            ann: 29,
            david: 35,
            helen: 1,
            lorence: 99,
        },
        {
            poly: 12,
            mango: 17,
            ajax: 4,
        },
        {
            lux: 147,
            david: 21,
            kiwi: 19,
            chelsy: 38,
        }
    ],
};
//! Код виконаного завдання

const {
    count,
    employeePerformanceLists: [
        { ann, david: davidFirst, helen, lorence },
        { poly, mango: secondMango, ajax },
        { lux, david: davidSecond, kiwi, chelsy }
    ]
} = employeePerformance;

console.log("count: ", count);      

console.log("ann: ", ann);

console.log("david: ", davidFirst);

console.log("helen: ", helen);

console.log("lorence: ", lorence); 

console.log("poly: ", poly);

console.log("mango: ", secondMango);

console.log("ajax: ", ajax);

console.log("lux: ", lux);

console.log("david: ", davidSecond);

console.log("kiwi: ", kiwi);

console.log("chelsy: ", chelsy);

console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
    secondcount: 6,
    employeeSalaryLists: [
        {
            mango: 100,
            poly: 150,
            alfred: 80,
        },
        {
            kiwi: 200,
            lux: 50,
            chelsy: 150,
        }
    ],
};
//! Код виконаного завдання

const {
    secondcount,
    employeeSalaryLists: [
        { mango: thirdMango, poly: thirdPoly, alfred },
        { kiwi: thirdKiwi, lux: thirdLux, chelsy: thirdChelsy }
    ]
} = employeeSalaries;

console.log("count: ", secondcount);

console.log("mango: ", thirdMango);

console.log("poly: ", thirdPoly);

console.log("alfred: ", alfred);

console.log("kiwi: ", thirdKiwi);

console.log("lux: ", thirdLux);

console.log("chelsy: ", thirdChelsy);

console.log("--------------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію масива
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
    {
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроїд',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захоплення',
        price: 1200,
        quantity: 2
    },
];
//! Код виконаного завдання

const [
    { name: radarName, price: radarPrice, quantity: radarQuantity },
    { name: scannerName, price: scannerPrice, quantity: scannerQuantity },
    { name: droidName, price: droidPrice, quantity: droidQuantity },
    { name: gripName, price: gripPrice, quantity: gripQuantity }
] = products;

console.log("radarName: ", radarName, "radarPrice: ", radarPrice, "radarQuantity: ", radarQuantity);

console.log("scannerName: ", scannerName, "scannerPrice: ", scannerPrice, "scannerQuantity: ", scannerQuantity);

console.log("droidName: ", droidName, "droidPrice: ", droidPrice, "droidQuantity: ", droidQuantity);

console.log("gripName: ", gripName, "gripPrice: ", gripPrice, "gripQuantity: ", gripQuantity);

console.log("--------------------------------------------------");



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
//! Код виконаного завдання

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

    transactionId: 1,

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
        const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
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
        this.balance -= amount;
        const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(newTransaction)
        return console.log(this.deposit);
    },

    //todo:  Метод повертає поточний баланс
    getBalance() {
        return this.balance;
    },

    //todo:  Метод шукає і повертає об'єкт транзакції по id
    getTransactionDetails(id) {
        const newTransaction = this.transactions.find(t => t.id === id);
        if (newTransaction) {
            console.log("Деталі транзакції:", newTransaction);
            return newTransaction;
        } else {
            console.log("Транзакцію не знайдено.");
            return null;
        };
    },

    //todo:  Метод повертає кількість коштів
    //todo:  певного типу транзакції з усієї історії транзакцій
    getTransactionTotal(type) {
        const total = this.transactions
            .filter(transaction => transaction.type === type)
            .reduce((sum, transaction) => sum + transaction.amount, 0);

        console.log(`Загальна сума для "${type}": ${total} грн.`);
        return total;
    },
};

account.deposit(5000);
account.withdraw(1200);
account.deposit(3000);
account.withdraw(500);
account.deposit(2000);
account.getBalance();
account.getTransactionTotal("deposit");
account.getTransactionTotal("withdraw");

console.log("--------------------------------------------------");