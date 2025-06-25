//! Завдання 1

//? Напиши функцію logItems(array), яка отримує масив і використовує цикл for,
//?  який для кожного елемента масиву буде виводити в консоль повідомлення
//?   в форматі[номер елемента]-[значення елемента].

//? Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву['Mango', 'Poly', 'Ajax']
//?  з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.



//! Код виконаного завдання

console.log("1 Завдання");

const arrayNum = [8, 13, 21, 34, 55];


function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`позиція елемента ${i + 1} `, array[i]);
        console.log("-----------------------");
     };
};

logItems(arrayNum);

//!     Завдання 2

//? Напиши скрипт підрахунку вартості гравіювання прикрас.
//? Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
//?  приймаючу рядок(в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
//?  і повертає ціну гравіювання всіх слів в рядку.

//! Код виконаного завдання

console.log("2 Завдання");

function calculateEngravingPrice(message, pricePerWord) {
    
    let words = 0;
    let inWord = false;

    for (const character of message.trim()) {
        if (character !== ' ' && !inWord) {
            words++;
            inWord = true;
        } else if (character === ' ') {
            inWord = false;
        };
    };

    return words * pricePerWord;
}
 
console.log(calculateEngravingPrice("01.05.1996 + 15.08.1999", 12));

//! 2 Варіант ☻

// function calculateEngravingPrice(message, pricePerWord) {
//     const arrayMessage = message.split(" ");

//     const wordСount = arrayMessage.length;

//     const totalPrice = wordСount * pricePerWord;

//     return totalPrice;
// };


console.log("-----------------------");

//!     Завдання 3

//? Напиши функцію findLongestWord(string),
//?  яка приймає параметром довільний рядок(в рядку будуть тільки слова і прогалини)
//?  і повертає ПЕРШЕ найдовше слово в цьому рядку.

//! Код виконаного завдання

console.log("3 Завдання");

function findLongestWord(string) {
    const elements = string.split(" ");
    let longestElement = "";
    for (const element of elements) {
        if (element.length > longestElement.length) {
            longestElement = element;
        };
    };
    return longestElement;
};

console.log(findLongestWord("Сонячний промінь освітлює ранковий горизонт"));

console.log("-----------------------");

//!     Завдання 4

//? Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

//? •  Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
//? •  Якщо довжина більше 40 символів, то функція обрізає рядок до 40 - ка символів
//?  і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

//! Код виконаного завдання

console.log("4 Завдання");

function formatString(string) {
    if (string.length > 40) {
        string = string.slice(0, 40);
        string += "...";
        return string;
        
    } else {
        return string;
    };
};

console.log(formatString("Мрії ведуть нас вперед, надихаючи на зміни."));

console.log("-----------------------");

//!     Завдання 5

//? Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок.
//? Функція перевіряє її на вміст слів spam або sale.Якщо знайшли заборонене слово,
//?  то функція повертає true, якщо заборонених слів немає функція повертає false.Слова
//?  в рядку можуть бути в довільному регістрі.

//! Код виконаного завдання

console.log("5 Завдання");

function checkForSpam(message) {
    if (message.includes("spam") || message.includes("sale")) {
        return true;
    } else {
        return false;
    };

};

console.log(checkForSpam("Check our site for -50% sale!"));


console.log("-----------------------");

//!     Завдання 6

//? Напиши скрипт з наступним функціоналом:

//? •  При завантаженні сторінки користувачеві пропонується в prompt ввести число.
//? Введення зберігається в змінну input і додається в масив чисел numbers.
//? •  Операція введення числа користувачем і збереження в масив триває до тих пор,
//?  пір, поки користувач не натисне Cancel в prompt.
//? •  Після того як користувач припинив введення натиснувши Cancel,
//?  якщо масив не порожній, необхідно порахувати суму всіх елементів масиву
//?  і записати її в змінну total. Використовуй цикл for або for...of.Після чого в
//?  консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

//! Код виконаного завдання

console.log("6 Завдання");

let questionForUser = '';

const numbers = [];

do {
    questionForUser = prompt("Введіть число для вирахування суми чисел, натисніть Скасувати");

    if (questionForUser === null) {
        break;
    };

    if (questionForUser.trim() === '' || isNaN(Number(questionForUser))) {
        continue;
    };

    numbers.push(Number(questionForUser));
       
} while (Number(questionForUser));

console.log(numbers);


if (isNaN(Number(questionForUser))) {
    alert("Це не число");
} else {

    function total(numbers) {
        let total = 0;

        for (number of numbers) {

            number = Number(number);

            total += number;

        };

        return total;

    };
    console.log(total(numbers));
};



console.log("-----------------------");

