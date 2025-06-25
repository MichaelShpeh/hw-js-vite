console.log('Lesson-2 JS');

//? Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. 
//? Перевести температуру з Цельсія у Фаренгейти
//? за допомогою формули та вивести результат в консоль.

//! Код виконаного завдання

const celsius = 25;

const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`Температура: ${celsius}°C = ${fahrenheit}°F`);

//? Створити змінну для зберігання кількості днів у місяці.
//? Обчислити кількість годин та хвилин у цьому місяці за 
//? допомогою оператора множення та вивести результат в консоль.

//! Код виконаного завдання

const daysinMonth = 30;

const hoursinMonth = daysinMonth * 24;

const minutesinMonth = hoursinMonth * 60;

console.log("Днів у місяці:", daysinMonth);

console.log("Годин у місяці:", hoursinMonth);

console.log("хвилин у місяці:", minutesinMonth)

//? Створити змінні для зберігання рівня здоров'я та енергії гравця в грі.
//?  Зменшити рівень здоров'я та енергії гравця за допомогою операторів
//?  віднімання та вивести результат в консоль.

//! Код виконаного завдання

let health = 100;

let energy = 70;

const damage = 30;

const hunger = 20;

health -= damage;

energy -= hunger;

console.log("Поточний рівень здоров'я:", health);
console.log("Поточний рівень енергії:", energy);

//? Створити змінну для зберігання суми покупки в магазині.
//? Застосувати знижку в розмірі 10 % до цієї суми
//?  за допомогою оператора множення та вивести результат в консоль.

//! Код виконаного завдання

let price = 100;

const discount = 0.10;

const pricewithDiscount = price * (1 - discount)

console.log("Ціна:", price)

console.log("Ціна зі знижкою:", pricewithDiscount)

//? Створити змінну для зберігання числа з плаваючою комою.
//? Використати метод Math.floor() для округлення числа
//? до меншого та вивести результат в консоль.


//! Код виконаного завдання

let floatingNumber = 5.87;

const roundedNumber = Math.floor(floatingNumber);

console.log("Початкове число:", floatingNumber);

console.log("Округлене число:", roundedNumber);

//? Створити змінну для зберігання рядка, який містить числа з плаваючою комою.
//? Використати метод parseFloat() для перетворення рядка
//?  у десяткове число та вивести результат в консоль.

//! Код виконаного завдання

floatingNumber = "4.75";

let decimalNumber = parseFloat(floatingNumber);

console.log("Початкове число:", floatingNumber);

console.log("Десяткове число:", decimalNumber);

//?  Створити змінну для зберігання рядка, який містить ціле число.
//?  Використати метод parseInt() для перетворення рядка
//?  у ціле число та вивести результат в консоль.

//! Код виконаного завдання

let FullNumber = "15";

decimalNumber = parseInt(FullNumber);

console.log("Повне число:", FullNumber);

console.log("Повне рядкове число:", decimalNumber);

//?  Створити змінну для зберігання числа.Використати метод Math.sqrt()
//?  для обчислення квадратного кореня числа та вивести результат в консоль.

//! Код виконаного завдання

FullNumber = 9;

const SquareNumber = Math.sqrt(FullNumber);

console.log("Повне число:", FullNumber);

console.log("Квадрат числа:", SquareNumber);

//?  Створити змінні для зберігання цілочисельного значення та рядка з числом у
//?  вигляді рядка.Використати метод parseInt() для
//?  перетворення рядка у ціле число та вивести результат в консоль.
//?  Потім використати метод toString() для перетворення
//?  цілочисельного значення у рядок та вивести результат в консоль.

//! Код виконаного завдання

const FullLineNumber = "475";

const parseIntNumber = parseInt(FullLineNumber);

console.log("Рядок:", FullLineNumber);

console.log("Перетворений рядок", parseIntNumber);

let stringifiedNumber = FullLineNumber.toString();

console.log("Число в значенні рядка",stringifiedNumber);