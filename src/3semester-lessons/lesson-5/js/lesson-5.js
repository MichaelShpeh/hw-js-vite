//? Створити розмітку з формою, що містить список(select) з трьома варіантами вибору:
//? "Кава", "Чай" та "Сік".При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

//! Код виконаного завдання

let answer;

const question = prompt('Виберіть каву, чай або сік, та введіть ваш вибір знизу');

switch (question) {

    case "кава":

        alert("Ви вибрали каву, чудовий вибір!");

        break;

    case "чай":

        alert("Ви вибрали чай, чудовий вибір!");

        break;

    case "сік":
        alert("Ви вибрали сік, чудовий вибір!");

        break;

    case "Кава":

        alert("Ви вибрали каву, чудовий вибір!");

        break;

    case "Чай":

        alert("Ви вибрали чай, чудовий вибір!");

        break;

    case "Сік":
        alert("Ви вибрали сік, чудовий вибір!");

        break;

    default:

        alert("Ви ввели не вірний варіант")
}

//? Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти,
//? чи введений рядок є днем тижня(наприклад: "понеділок", "вівторок" і т.д.), 
//? виводити відповідне повідомлення про робочий день або вихідний.

//! Код виконаного завдання

const dayOfWeek = prompt("Введіть день тиждня, ми повідомимо вас чи це вихідний, чи робочий день!")

switch (dayOfWeek) {

    case "Понеділок":
        alert("Це робочий день!");

        break;

    case "Вівторок":
        alert("Це робочий день!");

        break;

    case "Середа":
        alert("Це робочий день!");

        break;

    case "Четвер":
        alert("Це робочий день!");

        break;

    case "П'ятниця":
        alert("Це робочий день!");

        break;

    case "Субота":
        alert("Це вихідний день!");

        break;

    case "Неділя":
        alert("Це вихідний день!");

        break;

    case "понеділок":
        alert("Це робочий день!");

        break;

    case "вівторок":
        alert("Це робочий день!");

        break;

    case "середа":
        alert("Це робочий день!");

        break;

    case "четвер":
        alert("Це робочий день!");

        break;

    case "п'ятниця":
        alert("Це робочий день!");

        break;

    case "субота":
        alert("Це вихідний день!");

        break;

    case "неділя":
        alert("Це вихідний день!");

        break;

    default: alert("Ви ввели не вірний варіант");
}

//? Створити розмітку з полем введення, що приймає номер місяця та кнопкою.
//? При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

//! Код виконаного завдання

const numberOfTheMonth = prompt("Введіть номер місяця");

switch (numberOfTheMonth) {

    case "1":
        alert("Серпень це зима!")

        break;

    case "2":
        alert("Лютий це зима!")

        break;

    case "3":
        alert("Березень це весна!")

        break;

    case "4":
        alert("Квітень це весна!")

        break;

    case "5":
        alert("Травень це весна!")

        break;

    case "6":
        alert("Червень це літо!")

        break;

    case "7":
        alert("Липень це літо!")

        break;

    case "8":
        alert("Серпень це літо!")

        break;

    case "9":
        alert("Вересень це осінь!")

        break;

    case "10":
        alert("Жовтень це осінь!")

        break;

    case "11":
        alert("Листопад це осінь!")

        break;

    case "12":
        alert("Грудень це зима!")

        break;

    default: alert("Ви ввели не вірний варіант");
 };

//? Створити розмітку з полем введення, що приймає номер місяця та кнопкою. 
//? При натисканні на кнопку виводити кількість днів у цьому місяці.

//! Код виконаного завдання

const daysOfMonth = prompt("Введіть номер місяця, та ви дізнаєтесь скільки у ньому днів!");

switch (daysOfMonth) {

    case "1":
        alert("В серпені 31 день!")

        break;

    case "2":
        alert("В Лютому 28 днів!")

        break;

    case "3":
        alert("В Березні 31 день!")

        break;

    case "4":
        alert("В Квітні 30 днів!")

        break;

    case "5":
        alert("В Травні 31 день!")

        break;

    case "6":
        alert("В Червні 30 днів!")

        break;

    case "7":
        alert("В Липні 31 день!")

        break;

    case "8":
        alert("В Серпні 31 день")

        break;

    case "9":
        alert("В Вересні 30 днів!")

        break;

    case "10":
        alert("В Жовтні 31 день!")

        break;

    case "11":
        alert("В Листопаді 30 днів!")

        break;

    case "12":
        alert("В Грудні 31 день!")

        break;

    default: alert("Ви ввели не вірний варіант");
};

//? Створити розмітку з полем введення, що приймає назву кольору(наприклад, "червоний", "синій" і т.д.)
//?  та кнопкою.При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп",
//?  якщо "зелений" — "йти", якщо "жовтий" — "чекати".

//! Код виконаного завдання

const writeInColors = prompt("Введіть колір та отримайте його дію");

switch (writeInColors) { 

    case "Червоний":
        alert("Червоний - стоп")

        break;

    case "Зелений":
        alert("Зелений - рухатися")

        break;

    case "Жовтий":
        alert("Жовтий - чекати")

        break;

    case "червоний":
        alert("Червоний - стоп")

        break;

    case "зелений":
        alert("Зелений - рухатися")

        break;

    case "жовтий":
        alert("Жовтий - чекати")

        break;

    default: alert("Цей колір немає дії");
};

//? Створити розмітку з двома полями введення, що приймають числа та список(select) з варіантами вибору операцій:
//? "+", "-", "*", "/".При натисканні на кнопку виводити результат обраної операції над цими числами.
//? Користувач повинен бути попереджений про можливість ділення на нуль.

//! Код виконаного завдання

const calculator = prompt("Це калькулятор. Введіть дію (+, -, *, /)");

let numberFirst = parseFloat(prompt("Введіть перше число"));

let numberTwo = parseFloat(prompt("Введіть друге число"));

let result;

if (isNaN(numberFirst) || isNaN(numberTwo)) {
    alert("Одне або обидва введені значення не є числами!");
} else {
    switch (calculator) {
        case '+':
            result = numberFirst + numberTwo;
            break;
        case '-':
            result = numberFirst - numberTwo;
            break;
        case '*':
            result = numberFirst * numberTwo;
            break;
        case '/':
            if (numberTwo === 0) {
                result = "Ділення на нуль неможливе";
            } else {
                result = numberFirst / numberTwo;
            }
            break;
        default:
            result = "Невідома дія";
    }
    alert(`Результат: ${result}`);
}

//! Додаткове завдання

//? Hапиши скрипт перевірки типу змінної <emptyString1>
//? за допомогою конструкції «if...else» або «if...else...if».
let emptyString1;
// emptyString1 = "";
//  emptyString1 = " ";
// emptyString1 = "1";
// emptyString1 = 1;
// emptyString1 = null;
// emptyString1 = false;
// emptyString1 = true;
// emptyString1 = 0;
// emptyString1 = "0";
console.log("emptyString1:", emptyString1); //! 
console.log("typeof emptyString1:", typeof emptyString1); //! string
console.log("Number(emptyString1):", Number(emptyString1)); //! 0
console.log("-------------------");

//? Перевірка на "що це" (який тип значення)?:

if (emptyString1 === "") {
    console.log("Це пустий рядок")
} else if (typeof emptyString1 === "number") {
    console.log("Це число")
} else if (emptyString1 === null) {
    console.log("Це пустота")
} else if (emptyString1 === false) {
    console.log("Це не правда")
} else if (emptyString1 === true) {
    console.log("Це правда")
} else if (emptyString1 == false) {
    console.log("Це не визначене значення")
} else if (emptyString1.trim() === "") {
    console.log("Тут є пробіл")
} else if (emptyString1.trim().length === Number(emptyString1)) {
    console.log("Це рядок")
} else {
    console.log("Невідомий тип змінної")
};

//! Друга частина