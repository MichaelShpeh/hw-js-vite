//? Створити розмітку з кнопкою та текстовим полем. 
//? За допомогою JavaScript отримати доступ до кнопки
//? та текстового поля за їх ідентифікаторами
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання

const input = document.querySelector('.input');

console.log('input: ', input);

const button = document.querySelector('.button');

console.log('button: ', button);

const space = input.value;

console.log('space: ', space);

button.textContent = space;

console.log('textContent: ', button.textContent);

