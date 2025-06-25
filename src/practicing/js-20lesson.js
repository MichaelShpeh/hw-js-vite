//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? 🔸 Напиши скрипт який,
//? при наборі тексту в інпут input#name-input (подія input),
//? підставляє його поточне значення в span#name-output.
//? Якщо інпут порожній, в спані повинен відображатися рядок "НЕЗНАЙОМЕЦЬ".
//? ✴️ В HTML є такі елементи:
/*
<input type="text" placeholder="Ваше ім'я?" id="name-input" />
<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
*/
//! Код виконаного завдання

// const input = document.querySelector('#name-input'); //todo: var.1

const input = document.getElementById("name-input"); //todo: var.2

console.log("input: ", input);

// const span = document.querySelector('#name-output'); //todo: var.1

const span = document.getElementById("name-output"); //todo: var.2

console.log("span: ", span);



input.addEventListener("input", changesSpan);