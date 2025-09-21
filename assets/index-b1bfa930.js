import"./modulepreload-polyfill-3cfb730f.js";const m=document.getElementById("per-page"),l=document.getElementById("element-after-which"),a=document.querySelector(".fetch-btn"),f=document.querySelector(".number-elements"),h=document.querySelector(".page"),d=document.querySelector(".number-of-pages"),g=document.querySelector(".elements-list"),E=document.getElementById("prev"),p=document.getElementById("next");//! Кількість елементів після якого показуємо наступні N элементів:
let o;//! Кількість елементів у колекції:
let r;//! Номер сторінки
let u;//! Кількість груп (сторінок):
let s;a.addEventListener("click",b);E.addEventListener("click",P);p.addEventListener("click",B);//! Функція, яка викликає функції, які роблять запит та рендерять пости
function b(){v().then(e=>{y(e)}).catch(e=>console.log("error:",e))}//! Функція, яка робить запит на сервер
function v(){const e="https://pokeapi.co/api/v2/",c="pokemon",t=Number(m.value);l.value!==""?o=Number(l.value):o=(u-1)*t;const i=new URLSearchParams({limit:t,offset:o});return fetch(`${e}${c}?${i}`).then(n=>{if(!n.ok)throw new Error(n.status);return console.log(n.json()),n.json()})}//! Функція для "Рендеру" постів
function y(e){console.log(e);const c=e.results.map(t=>`
                <li>
                    <h2>${t.name}</h2>
                    <a>${t.url}</a>
                </li>
            `).join("");g.innerHTML=c;//! Оновлюємо кількість елементів і сторінок
r=e.count,s=Math.ceil(r/Number(m.value)),f.textContent=r,h.textContent=u,d.textContent=s}//! Код кнопки назад
function P(){}function B(){}
