import"./modulepreload-polyfill-3cfb730f.js";//! const fullDate = new Date(year, month, date, hours, minutes, seconds, ms);
//!
//!
const i=["Неділя","Понеділок","Вівторок","Середа","Четверг","П'ятниця","Субота"];//! Приклад форматування поточної дати
console.warn("Приклад форматування поточної дати:");const e=new Date;console.log(`Час в мс з початку епохи Unix: ${e.getTime()}`);let t=" Дата: ";t+=e.getDate()+"/";//! день
t+=e.getMonth()+1+"/";//! місяць
t+=e.getFullYear()+",";//! рік
t+=`
 День тижня: `+r(e.getDay())+",";//! день тижня
t+=`
 Час: `+e.getHours()+":";//! години
t+=e.getMinutes()+":";//! хвилини
t+=e.getSeconds()+":";//! секунди
t+=e.getMilliseconds()+"";//! мілісекунди
console.log(t);//! ...  значення будуть змінюватися
//! Дата: 27/7/2025,
//! День тижня: 1,
//! Час: 17:3:41:541
function r(n){return i[n]}const o=new Date("March 16, 2030 14:25:00");console.log("date: ",o);//! Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)
console.log("date.toString():",o.toString());//! "Sat Mar 16 2030 14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("date.toTimeString():",o.toTimeString());//! "14:25:00 GMT+0200 (Восточная Европа, стандартное время)"
console.log("date.toLocaleTimeString():",o.toLocaleTimeString());//! "14:25:00"
console.log("date.toUTCString():",o.toUTCString());//! "Sat, 16 Mar 2030 12:25:00 GMT"
console.log("date.toDateString():",o.toDateString());//! "Sat Mar 16 2030"
console.log("date.toISOString():",o.toISOString());//! "2030-03-16T12:25:00.000Z"
console.log("date.toLocaleString():",o.toLocaleString());//! "16.03.2030, 14:25:00"
console.log("date.getTime():",o.getTime());//! 1899894300000
console.log("Date.now()",Date.now());const l=new Date("March 16, 2030 14:25:00");console.log("date: ",o);const g={weekday:"long",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};//! Україна
const d=l.toLocaleString("Uk-uk",g);console.log("localeUk_Україна:",d);//! суботу, 16 бер. 2030 р., 14:25
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . . . . . . . . . . . .");//! USA
const S=l.toLocaleString("en-US",g);console.log("localeUs_Україна:",S);//! Saturday, Mar 16, 2030, 02:25 PM
console.log("-------------------------------------------------------------------------------------------");//! Вимірювання часу за допомогою new Date()
console.log("---------------------------------------------------------------------------");console.log(`"9" - "6" = ${"9"-"6"}`);//! 3
//! Вимірювання часу за допомогою Date.now()
console.warn("Вимірювання часу за допомогою Date.now():");const c=Date.now();console.log("start2:",c);for(let n=0;n<1e4;n++){let s=n*n*n;console.log("doSomething2:",s);//!
}const a=Date.now();console.log("end2:",a);console.log(`Цикл-2 зайняв ${a-c} мс`);
