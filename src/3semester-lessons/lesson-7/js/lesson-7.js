//? Створити масив з трьох чисел.
//?  Змінити значення другого елемента масиву на 10.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 1");

const firstArray = [1, 2, 3];

let arrB = firstArray;

console.log("Масив до змін: ", arrB);

firstArray[1] = 10;

console.log("Масив після змін: ", firstArray);

//? Створити масив із трьох рядків. Додати до масиву ще одну рядків.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 2");

const secondArray = ["Вітер грає з листям, мов із музикою.", "Очі світилися, як зірки на нічному небі.", "Серце шукає тепла у кожному слові."];

arrB = secondArray;

console.log("Масив до змін: ", arrB);

secondArray[3] = "Тиша обіймає, залишаючи місце для думок.";

console.log("Масив після змін: ", secondArray);

//? Створити скрипт який поверне суму всіх чисел в масиві.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 3");



//? Створити масив з 5-ти чисел.
//? Вивести на екран всі елементи масиву за допомогою циклу for.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 4");

const fourthArray = [1, 2, 7, 9, 10];

console.log("Масив: ", fourthArray);

let element = 0;

for (fourthArray[element]; element < fourthArray.length; element++) {
    console.log(`${element} індекс масиву: `, fourthArray[element]);
};

//? Створити масив із 5-ти рядків.
//? Вивести на екран кожен рядок з масиву, який містить більше 5 - ти символів.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 5");

const fithArray = ["Сонце сяє", "Птах", "Небо ясне", "Ліс", "Вітер дужий"];

for (let i = 0; i < fithArray.length; i++) { 
    const element = fithArray[i]; 

    if (element.length > 5) { 
        console.log(`${i} елемент: `, element);
    };
};

//? Створити масив з 10-ти чисел.
//? Знайти та вивести на екран максимальне значення з масиву.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 6");

const sixthArray = [331, 31, 76, 12, 68, 475, 51, 271, 15, 16];

let maxNumber = sixthArray[0];

let iForSixthArray = 0;

for (sixthArray[iForSixthArray]; iForSixthArray < sixthArray.length; iForSixthArray++) {
    if (sixthArray[iForSixthArray] > maxNumber) {
        maxNumber = sixthArray[iForSixthArray];
    };
};

console.log("максимальне значення", maxNumber)

//? Створити масив з 10-ти чисел.
//? Знайти всі парні числа в масиві та вивести їх на екран.

//! Код виконаного завдання

console.log("-----------------------");

console.log("Завдання 7");

const seventhArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;

for (seventhArray[i]; i <= seventhArray.length; i++) {
    if (seventhArray[i] % 2 == 0) {
        console.log("Парне число: ", seventhArray[i]);
    };
};

//todo додаткове завдання

console.log("-----------------------");

console.log(
    "%c [ДОДАТКОВЕ ЗАВДАННЯ]",
    "color: red"
);

//! ПРАКТИКА-7 (Урок-07_JS)
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? 1-1.Створити змінну <array> значення якої
//? є масив із п'яти елементів,
//? де упереміш присутні числа та рядки.
//? Вивести в консоль значення змінної <array>.
//? Вивести в консоль значення кожного єлемента змінної(масиву) <array>.
console.log(
    "%c [1-1] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

const array = [1, "Mykhailo", 2, "David", 3];

console.log("Наш масив: ", array);

console.log("Наш елемент: 0 ", array[0]);

console.log("Наш елемент: 1 ", array[1]);

console.log("Наш елемент: 2 ", array[2]);

console.log("Наш елемент: 3 ", array[3]);

console.log("Наш елемент: 4 ", array[4]);

console.log("-------------------------------------------");

//? 1-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 і вивести їх значення в консоль.
//? Вивести в консоль значення змінної(масиву) <array>.
console.log(
    "%c [1-2] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

array[1] = array[1] + 1;

console.log("Наш елемент: 1 ", array[1]);

array[2] = array[2] + 1;

console.log("Наш елемент: 2 ", array[2]);

console.log("Наш масив: ", array)

console.log("-------------------------------------------");

//? 1-3.Виміряти довжину масиву [array]
//? та вивести це значення в консоль.
console.log(
    "%c [1-3] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

const arrayLenght = array.length;

console.log("Наш масив: ", arrayLenght);


console.log("-------------------------------------------");

//? 1-4.Отримати индекс та значення
//? останнього елемента масиву <array>.
//? Вивести ці значення в консоль.
console.log(
    "%c [1-4] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання


console.log('array:', array)
for (let i = 0; i < array.length; i++) {
    console.log(`array[${i}]: ${array[i]}`);
};

console.log("-------------------------------------------");

//? 2-1.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for.
console.log(
    "%c [2-1] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
    console.log(`елемент ${i}: ${array[i]}`);
};

console.log("-------------------------------------------");

//? 2-2.Додати до 2-го(другого) та 3-го(третього)
//? елемента 1 за допомогою цикла for
//? і вивести їх значення в консоль.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-2] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {

    if (i === 1 || i === 2) {
        array[i] = array[i] + 1;
        console.log(`елемент ${i}: ${array[i]}`);
    };
};

console.log("-------------------------------------------");

//? 2-3.Вивести в консоль значення кожного
//? елемента масиву [array] за допомогою цикла for...of.
console.log(
    "%c [2-3] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (const element of array) {
    console.log(`елемент ${element}: ${element}`);
};

console.log("-------------------------------------------");

//? 2-4.Знайти ПЕРШЕ ЧИСЛОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log(
    "%c [2-4] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (const element of array) {
    if (typeof element === "number") {
        console.log("Перший елемент число: ", element);
        break;
    };
};

console.log("-------------------------------------------");

//? 2-5.Знайти ПЕРШЕ РЯДКОВЕ значення
//? елемента масиву [array] за допомогою цикла for...of
//? та використовуючи оператор break.
//? Вивести це значення в консоль.
console.log(
    "%c [2-5] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (const value of array) {
    if (typeof value == "string") {
        console.log("Перше рядкове значення: ", value);
        break;
    };
};

console.log("-------------------------------------------");

//? 2-6.Знайти ВСІ ЧИСЛОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log(
    "%c [2-6] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання



for (let numberValue of array) {
    if (typeof numberValue === "number") {
        console.log(numberValue);
    } else {
        continue;
    };
};

console.log("-------------------------------------------");

//? 2-7.Знайти ВСІ РЯДКОВІ значення
//? елементів масиву [array] за допомогою цикла for...of
//? та використовуючи оператор continue.
//? Вивести ці значення в консоль.
console.log(
    "%c [2-7] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (numberValue of array) {
    if (typeof numberValue === "string") {
        console.log(numberValue);
    } else {
        continue;
    };
};

console.log("-------------------------------------------");

//? 2-8.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for...of,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-8] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (numberValue of array) {
    if (typeof numberValue === "number") {
        numberValue = String(numberValue + 1);
        console.log("ArrayItem: ", numberValue);
        continue;
    };
    console.log("ArrayItem: ", numberValue);
};

console.log("array: ", array);

console.log("-------------------------------------------");

//? 2-9.Знайти ВСІ тільки ЧИСЛОВІ значення
//? елемента масиву [array] за допомогою цикла for,
//? змінити їх ти на рядковий та додати 1.
//? Вивести ВСІ значення масиву [array] в консоль,
//? використовуючи оператор continue.
//? Вивести в консоль значення масиву [array].
console.log(
    "%c [2-9] ",
    "color: #2274A5; background-color: yellow",
);
//! Код виконаного завдання

for (let i = 0; i < array.length; i++) {
    if (array[i] == Number(array[i])) {
        array[i] = String(array[i] + 1);
        console.log(`ArrayItem[${[i]}]: `, array[i]);
        continue;
    };
    console.log(`ArrayItem[${[i]}]: `, array[i]);
};

console.log(array);

console.log("-----------------------------------------------------");