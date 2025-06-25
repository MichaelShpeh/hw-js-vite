//? 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок.
//?  Елементів може бути довільна кількість.Нехай елементи массива в рядку будут розділені комою.
//? 👉 Спочатку через for
//? 👉 Потім через join()

//! Код виконаного завдання

console.log("%c Перший варіант", "color: orange;");

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

let i = 0;

for (i; i < friends.length; i++) {

    string += friends[i];

    if (i < friends.length - 1) {
        string += ", ";
    };

};

console.log(string);

console.log("%c -----------------------", "color: red;");

console.log("%c Другий варіант", "color: orange;");

console.log(friends.join(", "));

console.log("%c -----------------------", "color: red;");

//? 2. Працюємо з колекцією карток в trello.Метод splice()(можна використати інші методи)

//! Код виконаного завдання

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

console.log(cards);

console.log("%c -----------------------", "color: red;");

//? 3. Видалити

//! Код виконаного завдання

const cardToRemove = 'Карточка-3';

cards.splice(2, 1);

let cardsRemoved = cards;

console.log(cardsRemoved);

console.log("%c -----------------------", "color: red;");

//? 4. Додати

//! Код виконаного завдання

const cardToInsert = 'Карточка-6';

cards.splice(5, 0, 'Карточка-6');

let cardsInserted = cards;

console.log(cardsInserted);

console.log("%c -----------------------", "color: red;");

//? 5. Оновити

//! Код виконаного завдання

const cardToUpdate = 'Карточка-4';

cards.splice(2, 1, 'Карточка-4(оновленна)');

let cardsUpdated = cards;

console.log(cardsUpdated);

//? Перетворити масив:
const arrayOriginal = ["мango-10", "Kiwi-2", "Monkong-2", "Singu-2", "Mango-1", "Ajax-1", "Poly-1", "singu-20"];
//? на масив arrayNew:
//todo: ["Mango-1", "Ajax-1", "Poly-1", "Kiwi-2", "Monkong-2", "Singu-2"];
//? не змінюючи значення елементів та використовуючи методи:
//? push(), pop(), unshift(), shift(),
//? slice(), splice(), concat() за власним бажанням!
//! Код виконаного завдання
let arrayNew = [];

arrayNew.splice(0, 0, "Mango-1", "Ajax-1", "Poly-1", "Kiwi-2", "Monkong-2", "Singu-2")

console.log("arrayOriginal:", arrayOriginal);
console.log("arrayNew:", arrayNew);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");