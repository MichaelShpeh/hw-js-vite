console.log('Lesson-3 JS');

//? Використовуючи два console.log() напиши код,
//? який виведе в консоль два значення: рядок "" та число

console.log("It's cold today")

//? --------- ЧИСЛО ---------
//? 1.Просте виведення значень:
//? Якщо потрібно вивести лише значення,
//? використовуйте console.log(value).

console.log(475);

// console.log('It's cold today')

console.log('Змінна "20"');

console.log('Число: "20"');

//? 2.Конкатенація рядків: 
//? Коли треба об'єднати рядок та значення,
//? наприклад: "Сума:" + total
//? та поєднати все в рядок

console.log("Число: " + 20);

console.log("Число: " + '20');

const number = 20;

console.log(typeof number);

console.log("Число: " + number);

//? 3.Множинні аргументи: 
//? Коли потрібно вивести кілька об'єктів
//? без об'єднання в рядок.

console.log("Число:", number);

//? 4.Шаблонні рядки: 
//? Для більш читаного та зручного форматування,
//? особливо при додаванні кількох змінних.
//? Поєднує все в рядок!

console.log(`Число: ${36}`);

console.log(`hi my friend`);

// todo[2]
//? 2-1.За допомогою ключового слова const оголоси дві змінні:
//? productName - для зберігання назви товару (coffee),
//? productPrice - для зберігання ціни за одиницю товару.
//? Вивести в консоль одним рядком назву товара та його ціну
//? використовуючі різні варіанти виводу в консоль

let productName = "coffee";

let productPrice = 20;

console.log("Product name:", productName, ",", "price:", productPrice);

console.log("Product name:", productName + ",", "price:", productPrice);

console.log("Product name: " + productName + ", " + "price: " + productPrice);

console.log(`Product name: ${productName}, price: ${productPrice}`);

//? 2-2.Змінити ім'я товару на "Brazilian coffee"
//? та збільшили його ціну на 20%.
//? Перевизначити значення змінних productName
//? і productPrice після їх оголошення.
//? У змінну productPrice записати математину
//? операцію яка збільшує її занення на 20%
//? Вивести в консоль одним рядком назву товара
//? та його ціну будь якими способом

productName = "Brazilian coffee";

productPrice = 100 * 1.2;

//! productPrice *= 1.2;

console.log("Product name:", productName, ",", "price:", productPrice);