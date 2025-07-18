//! ПРАКТИКА-18 (Урок-18_JS) 22.03.2025
//todo [Додаткове 18-1]
console.log(
    "%c [Додаткове 18-1] ",
    "color: yellow; background-color: #2274A5",
);
//? ✴️ Створити та додати колекцію кнопок:
/*
<div class="color-picker js-color-picker"></div>
*/
//? з динамічними даними з масиву об’єктів:
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];
//? Використати метод createElement.
//! Код виконаного завдання

const colorPickerWrapper = document.querySelector('div.js-color-picker');

colorPickerWrapper.style.display = 'grid';

colorPickerWrapper.style.gap = '10px';

colorPickerWrapper.style.justifyContent = 'center';

for (const { label, color } of colorPickerOptions) {
    // const { label, color } = element;
    const button = document.createElement('button');
    button.classList.add('color-picker_button');
    button.style.backgroundColor = color;
    button.style.width = '60px';
    button.style.height = '30px';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '10px';
    button.textContent = label;
    colorPickerWrapper.append(button);
};

