// const date = new Date();

// console.log(typeof date);

// console.log("date: ", date);

// const dateString = date.toString();

// console.log("dateString: ", dateString);

// console.log("dateString typeof: ", typeof dateString);

// const date1 = new Date("2025-03-19");

// console.log("date1: ", date1);

const futureDate0 = new Date("2030");
const futureDate1 = new Date("2030-03");
const futureDate2 = new Date("2030-03-16");
const futureDate3 = new Date("03/16/2030");
const futureDate4 = new Date("2030/03/16");
const futureDate5 = new Date("2030/3/16");
const futureDate6 = new Date("March 16, 2030");
const futureDate7 = new Date("16 March 2030");
const futureDate8 = new Date("March 16, 2030 14:25:00");
const futureDate9 = new Date("2030-03-16 14:25:00");
const futureDate10 = new Date("2030-03-16T14:25:00");

const futureDate11 = new Date("Sat Mar 16 2030 14:25:00 GMT+0200");

console.log(
  "\n",
  futureDate0,
  "\n",
  futureDate1,
  "\n",
  futureDate2,
  "\n",
  futureDate3,
  "\n",
  futureDate4,
  "\n",
  futureDate5,
  "\n",
  futureDate6,
  "\n",
  futureDate7,
  "\n",
  futureDate8,
  "\n",
  futureDate9,
  "\n",
  futureDate10,
  "\n",
  "\n",
  futureDate11
);

console.log(typeof futureDate10);

const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");

console.log("timestampDateParse", timestampDateParse);

console.log("timestampDateParse typeof", typeof timestampDateParse);

//! 1 січня 1970 UTC+0 Unix час

//!  1 січня 1970 року - це дата,
//!  яка має особливе значення в
//!  інформаційних технологіях,
//!  оскільки це час початку епохи
//!  Unix (Unix epoch). В системах,
//!  що використовують Unix-час,
//!  цей момент вважається початком відліку часу,
//!  вимірюваного в секундах. Крім того,
//!  на деяких пристроях Apple,
//!  установка дати в 1 січня 1970 року
//!  в налаштуваннях може призвести
//!  до зависання пристрою,
//!  особливо на моделях з 64-бітними процесорами.
const dateUnix = new Date(0);

console.log("dateUnix: ", dateUnix);

const dateUnix10000 = new Date(10000);

console.log("dateUnix10000: ", dateUnix10000);

const date = new Date();

Date.parse(new Date());

console.log("date: ", Date.parse(new Date()));

//! const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");

//? ✳️ Формат рядка повинен бути:
//? YYYY - MM - DDTHH: mm: ss.sssZ,
//? 📌 де:
//? 🔸 YYYY-MM-DD — це дата: рік-місяць-день.
//? 🔸 Символ "T" використовується як роздільник.
//? 🔸 HH:mm:ss.sss — це час: години, хвилини, секунди і мілісекунди.
//? 🔸 'Z' - необов’язкова частина яка позначає часовий пояс у форматі +-hh:mm.
//?    Одинична буква Z буде означати UTC+0.

console.log("New date:", new Date(1899894300000));