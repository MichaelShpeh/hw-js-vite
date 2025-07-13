import"./modulepreload-polyfill-3cfb730f.js";import{H as n}from"./handlebars-aa0ac26f.js";const e=`<li class="item" data-index="{{index}}">
    <p>Ім'я: {{firstName}}</p>
    <p>Прізвище: {{lastName}}</p>
    <p>Вік: {{age}}</p>
    <p>Курс: {{course}}</p>
    <p>Факультет: {{faculty}}</p>
</li>`,a=[{id:1,firstName:"Ім'я-1",lastName:"Прізвище-1",age:11,course:"Курс-1",faculty:"Факультет-1"},{id:2,firstName:"Ім'я-2",lastName:"Прізвище-2",age:12,course:"Курс-2",faculty:"Факультет-2"},{id:3,firstName:"Ім'я-3",lastName:"Прізвище-3",age:13,course:"Курс-3",faculty:"Факультет-3"},{id:4,firstName:"Ім'я-4",lastName:"Прізвище-4",age:14,course:"Курс-4",faculty:"Факультет-4"},{id:5,firstName:"Ім'я-5",lastName:"Прізвище-5",age:15,course:"Курс-5",faculty:"Факультет-5"}],c=n.compile(e);console.log(e);console.log("studentsJSON: ",a);let t=[];t=a;console.log("dataArray: ",t);localStorage.setItem("students",JSON.stringify(t));const i=localStorage.getItem("students",t);console.log("dataArrayLocalStorage: ",i);const m=document.querySelector(".students-list");t=JSON.parse(localStorage.getItem("students"));t[0].firstName="Newname";t.splice(2,1);console.log(t);m.innerHTML=t.map((s,o)=>{const l={...s,index:o};//! Об'єкт для створення розмітки картки студента
const r=c(l);//! HTML-розмітка картки студента
return r}).join("");
