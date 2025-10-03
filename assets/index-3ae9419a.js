import"./modulepreload-polyfill-3cfb730f.js";const f=document.getElementById("per-page"),r=document.getElementById("element-after-which"),p=document.querySelector(".fetch-btn"),d=document.querySelector(".number-elements"),E=document.querySelector(".page"),g=document.querySelector(".number-of-pages"),v=document.querySelector(".elements-list"),b=document.getElementById("prev"),y=document.getElementById("next");//! Кількість елементів N у групі (на сторінці):
//! Кількість елементів після якого показуємо наступні N элементів:
let t;//! Кількість елементів у колекції:
let s;//! Номер сторінки
let n;//! Кількість груп (сторінок):
let a,u,m,i=Number(f.value);p.addEventListener("click",P);b.addEventListener("click",N);y.addEventListener("click",B);//! Функція, яка викликає функції, які роблять запит та рендерять пости
function P(){x().then(e=>{h(e)}).catch(e=>console.log("error:",e)),r.value!==""?(t=Number(r.value),n=Math.floor(t/i)+1):(t=0,n=1)}//! Функція, яка робить запит на сервер
function x(){const e="https://pokeapi.co/api/v2/",c="pokemon";r.value!==""?t=Number(r.value):t=(n-1)*i;const o=new URLSearchParams({limit:i,offset:t});return fetch(`${e}${c}?${o}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}//! Функція для "Рендеру" постів
function h(e){console.log(e);const c=e.results.map(o=>`
                <li>
                    <h2>${o.name}</h2>
                    <a>${o.url}</a>
                </li>
            `).join("");v.innerHTML=c;//! Оновлюємо кількість елементів і сторінок
s=e.count,a=Math.ceil(s/Number(f.value)),d.textContent=s,E.textContent=n,g.textContent=a,u=e.previous,m=e.next}//! Код кнопки назад
function N(){u&&(n--,fetch(u).then(e=>e.json()).then(e=>h(e)).catch(e=>console.error(e)))}function B(){m&&(n++,fetch(m).then(e=>e.json()).then(e=>h(e)).catch(e=>console.error(e)))}
