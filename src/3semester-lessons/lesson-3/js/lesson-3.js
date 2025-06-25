// ? Спочатку зробити дві змінні: 
// ? першу - <myFavoriteActor> або <myFavoriteActress>
// ? і значенням = "Ім'я вашого улюбленного актора або актриси"
// ? наприклад, "Russell Crowe" або "Juliette Binoche"
// ? та другу - <male> або <female> зі значенням = "my favorite actor's name"
// ? або "my favorite actress's name".
// ? Отримати ОСТАННІЙ символ (в обох прикладах це - "e")
// ? змінної <myFavoriteActor> або <myFavoriteActress>
// ? та записати це значення у третю змінну <lastCharacter>.
// ? Зробити перетворення значення змінної <lastCharacter>
// ? на ВЕЛИКУ(заглавну літеру) - "E" (буде в обох прикладах).
// ? Вивести в консоль повідомлення, використовуючи
// ? значення всіх трьох змінних у такому форматі:
// ? "The last letter in my favorite actor's Russell Crowe is 'E'!" або
// ? "The last letter in favorite actress's Juliette Binoche is 'E'!".

//! Код виконаного завдання

const myFavoriteActor = "Sean Justin Penn";

const male = "my favorite actor's name";

let lastCharacter = myFavoriteActor[myFavoriteActor.length - 1]; // var.1

// let lastCharacter = myFavoriteActor.slice(-1); var.2

lastCharacter = lastCharacter.toUpperCase();

console.log(lastCharacter);

console.log("The last letter in", male, myFavoriteActor, lastCharacter.toUpperCase() + "!");

// console.log(`The last letter in ${male} ${myFavoriteActress} is \"${lastCharacter}\"!`);
