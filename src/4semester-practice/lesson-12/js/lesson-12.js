// // const date = new Date();

// // console.log(typeof date);

// // console.log("date: ", date);

// // const dateString = date.toString();

// // console.log("dateString: ", dateString);

// // console.log("dateString typeof: ", typeof dateString);

// // const date1 = new Date("2025-03-19");

// // console.log("date1: ", date1);

// const futureDate0 = new Date("2030");
// const futureDate1 = new Date("2030-03");
// const futureDate2 = new Date("2030-03-16");
// const futureDate3 = new Date("03/16/2030");
// const futureDate4 = new Date("2030/03/16");
// const futureDate5 = new Date("2030/3/16");
// const futureDate6 = new Date("March 16, 2030");
// const futureDate7 = new Date("16 March 2030");
// const futureDate8 = new Date("March 16, 2030 14:25:00");
// const futureDate9 = new Date("2030-03-16 14:25:00");
// const futureDate10 = new Date("2030-03-16T14:25:00");

// const futureDate11 = new Date("Sat Mar 16 2030 14:25:00 GMT+0200");

// console.log(
//   "\n",
//   futureDate0,
//   "\n",
//   futureDate1,
//   "\n",
//   futureDate2,
//   "\n",
//   futureDate3,
//   "\n",
//   futureDate4,
//   "\n",
//   futureDate5,
//   "\n",
//   futureDate6,
//   "\n",
//   futureDate7,
//   "\n",
//   futureDate8,
//   "\n",
//   futureDate9,
//   "\n",
//   futureDate10,
//   "\n",
//   "\n",
//   futureDate11
// );

// console.log(typeof futureDate10);

// const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");

// console.log("timestampDateParse", timestampDateParse);

// console.log("timestampDateParse typeof", typeof timestampDateParse);

// //! 1 січня 1970 UTC+0 Unix час

// //!  1 січня 1970 року - це дата,
// //!  яка має особливе значення в
// //!  інформаційних технологіях,
// //!  оскільки це час початку епохи
// //!  Unix (Unix epoch). В системах,
// //!  що використовують Unix-час,
// //!  цей момент вважається початком відліку часу,
// //!  вимірюваного в секундах. Крім того,
// //!  на деяких пристроях Apple,
// //!  установка дати в 1 січня 1970 року
// //!  в налаштуваннях може призвести
// //!  до зависання пристрою,
// //!  особливо на моделях з 64-бітними процесорами.
// const dateUnix = new Date(0);

// console.log("dateUnix: ", dateUnix);

// const dateUnix10000 = new Date(10000);

// console.log("dateUnix10000: ", dateUnix10000);

// const date = new Date();

// Date.parse(new Date());

// console.log("date: ", Date.parse(new Date()));

// const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");

// console.log("timestampDateParse", timestampDateParse);

// //? ✳️ Формат рядка повинен бути:
// //? YYYY - MM - DDTHH: mm: ss.sssZ,
// //? 📌 де:
// //? 🔸 YYYY-MM-DD — це дата: рік-місяць-день.
// //? 🔸 Символ "T" використовується як роздільник.
// //? 🔸 HH:mm:ss.sss — це час: години, хвилини, секунди і мілісекунди.
// //? 🔸 'Z' - необов’язкова частина яка позначає часовий пояс у форматі +-hh:mm.
// //?    Одинична буква Z буде означати UTC+0.

// console.log("New date:", new Date("2030-03-21"));

// const timestampDateParseError = Date.parse("2030-03-16T14:25:00.000+02:00");

// console.log(
//   'timestampDateParseError = Date.parse("2030-03-16T14:25:00.000+Z")"):',
//   timestampDateParseError
// );

//! const fullDate = new Date(year, month, date, hours, minutes, seconds, ms);

// const fullDate = new Date(2030, 2, 16, 14, 25, 0, 0); //! індекси місяців починаються з 0, тому 5-й місяць це липень.
// console.log('fullDate = new Date(2030, 2, 16, 14, 25, 0, 0):\n', fullDate);  //! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"

// const date = Date.now();

// console.log("date: ", date);

// console.log("new date: ", new Date(1753889621844));

// console.log("new date: ", new Date());

// console.log("now date: ",  Date.now());

//!
// date.getDate() - повертає день місяця від 1 до 31

// date.getDay() -  повертає день тижня від 0 до 6

// date.getMonth() - повертає місяць від 0 до 11

// date.getFullYear() - повертає рік з 4 цифр

// date.getHours() - повертає години

// date.getMinutes() - повертає хвилини

// date.getSeconds() - повертає секунди

// date.getMilliseconds() - повертає мілісекунди

// date.getTime() - повертає кількість мілісекунд минулих зі старту епохи Unix
//!

// const date = new Date();
// // const date = new Date("Sun Jul 27 2025 16:39:21.358 GMT+0300");
// console.log("date: ", date);
// console.log("date.getDate(): ", date.getDate());
// console.log("date.getDay(): ", date.getDay());
// console.log("date.getMonth(): ", date.getMonth());

const DAY_OF_WEEK = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четверг",
  "П'ятниця",
  "Субота",
];

//! Приклад форматування поточної дати
console.warn("Приклад форматування поточної дати:");
const currentDate = new Date();

//? Час в мс з початку епохи Unix: ....  значення будуть змінюватися
console.log(`Час в мс з початку епохи Unix: ${currentDate.getTime()}`);

let result = " Дата: ";

result += currentDate.getDate() + "/"; //! день
result += currentDate.getMonth() + 1 + "/"; //! місяць
result += currentDate.getFullYear() + ","; //! рік

result += "\n День тижня: " + convertDayOfWeek(currentDate.getDay()) + ","; //! день тижня

result += "\n Час: " + currentDate.getHours() + ":"; //! години
result += currentDate.getMinutes() + ":"; //! хвилини
result += currentDate.getSeconds() + ":"; //! секунди
result += currentDate.getMilliseconds() + ""; //! мілісекунди

//? Рядок повинен показати поточу дату та час:
console.log(result); //! ...  значення будуть змінюватися
//! Дата: 27/7/2025,
//! День тижня: 1,
//! Час: 17:3:41:541

// function convertDayOfWeek(dayOfWeek) {
//   let dayOfWeekString = "";

//   switch (dayOfWeek) {
//     case 0:
//       dayOfWeekString = "Неділя";
//       break;

//     case 1:
//       dayOfWeekString = "Понеділок";
//       break;

//     case 2:
//       dayOfWeekString = "Вівторок";
//       break;

//     case 3:
//       dayOfWeekString = "Середа";
//       break;

//     case 4:
//       dayOfWeekString = "Четвер";
//       break;

//     case 5:
//       dayOfWeekString = "П'ятниця";
//       break;

//     case 6:
//       dayOfWeekString = "Субота";
//       break;

//     default:
//       break;
//   }

//   console.log("dayOfWeek: ", dayOfWeek);

//   return dayOfWeekString;
// }

function convertDayOfWeek(dayOfWeek) {
  return DAY_OF_WEEK[dayOfWeek];
}

// date.getUTCDate() - повертає день місяця від 1 до 31

// date.getUTCDay() -  повертає день тижня від 0 до 6

// date.getUTCMonth() - повертає місяць від 0 до 11

// date.getUTCFullYear() - повертає рік з 4 цифр

// date.getUTCHours() - повертає години

// date.getUTCMinutes() - повертає хвилини

// date.getUTCSeconds() - повертає секунди

// date.getUTCMilliseconds() - повертає мілісекунди


// const date = new Date("March 16, 2030 14:25:00");
// console.log("date: ", date); //! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)
// console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");

// console.log("date.setMinutes(50):", date.setMinutes(50)); //! 1899895800000
// console.log("date-->setMinutes(50): ", date); //! Sat Mar 16 2030 14:50:00 GMT+0200 (Восточная Европа, стандартное время)
// console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");

// console.log("date.setFullYear(2040, 4, 8):", date.setFullYear(2040, 4, 8)); //! 2220090600000
// console.log("date-->setFullYear(2040, 4, 8): ", date); //! Tue May 08 2040 14:50:00 GMT+0300 (Восточная Европа, летнее время)
// console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");


// console.log("date.setTime():", date.setTime(3330090600000)); //! 3330090600000
// console.log("date-->date.setTime(3330090600000): ", date); //! Thu Jul 11 2075 20:10:00 GMT+0300 (Восточная Европа, летнее время)

const date = new Date("March 16, 2030 14:25:00");
console.log("date: ", date); //! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)

console.log("date.toString():", date.toString()); //! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"

console.log("date.toTimeString():", date.toTimeString()); //! "14:25:00 GMT+0200 (Восточная Европа, стандартное время)"

console.log("date.toLocaleTimeString():", date.toLocaleTimeString()); //! "14:25:00"

console.log("date.toUTCString():", date.toUTCString()); //! "Sat, 16 Mar 2030 12:25:00 GMT"

console.log("date.toDateString():", date.toDateString()); //! "Sat Mar 16 2030"

console.log("date.toISOString():", date.toISOString()); //! "2030-03-16T12:25:00.000Z"

console.log("date.toLocaleString():", date.toLocaleString()); //! "16.03.2030, 14:25:00"

console.log("date.getTime():", date.getTime()); //! 1899894300000

console.log("Date.now()", Date.now());

const newStandardDateFormatting = new Date("March 16, 2030 14:25:00");
console.log("date: ", date);

//? Формат виведення:
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}; 

//! Україна
const localeUk = newStandardDateFormatting.toLocaleString('Uk-uk', options);
console.log("localeUk_Україна:", localeUk); //! суботу, 16 бер. 2030 р., 14:25
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");

//! USA
const localeUs = newStandardDateFormatting.toLocaleString('en-US', options);
console.log("localeUs_Україна:", localeUs); //! Saturday, Mar 16, 2030, 02:25 PM
console.log("-------------------------------------------------------------------------------------------");

//! Вимірювання часу за допомогою new Date()
// console.warn("Вимірювання часу за допомогою new Date():");
// //? ✴️ Для вимірювання часу можна використовувати
// //? екземпляр класу new Date():
// const start1 = new Date(); //todo: Початок вимірювання часу
// console.log("start1:", start1);
// console.log("+start1:", +start1);

// //todo: процес виконання циклу
// for (let i = 0; i < 10000; i++) {
//     let doSomething1 = i * i * i;
//     console.log("doSomething1:", doSomething1); //!
// };

// const end1 = new Date(); //todo: Кінець вимірювання часу
// console.log("end1:", end1);
// console.log("+end1:", +end1);


// //todo: Результат вимірювання часу
// // alert(`Цикл-1 зайняв ${end1 - start1} мс`);
// console.log(`Цикл-1 зайняв ${end1 - start1} мс`);
console.log("---------------------------------------------------------------------------");

//? ---------------- пригадаємо ----------------
console.log(`"9" - "6" = ${"9" - "6"}`); //! 3
//? --------------------------------------------

//! Вимірювання часу за допомогою Date.now()
console.warn("Вимірювання часу за допомогою Date.now():");
//? ✴️ Для вимірювання часу краще використовувати
//? спеціальний метод Date.now(),
//? що повертає поточний timestamp:
const start2 = Date.now(); //todo: Початок вимірювання часу
console.log("start2:", start2);


//todo: Процес виконання циклу
for (let i = 0; i < 10000; i++) {
   let doSomething2 = i * i * i;
    console.log("doSomething2:", doSomething2); //!
}; 

const end2 = Date.now(); //todo: Кінець вимірювання часу
console.log("end2:", end2);

//todo: Результат вимірювання часу
// alert(`Цикл-2 зайняв ${end1 - end1} мс`);
console.log(`Цикл-2 зайняв ${end2 - start2} мс`);