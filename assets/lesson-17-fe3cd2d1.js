import"./modulepreload-polyfill-3cfb730f.js";const f=document.getElementById("fetch"),p=document.querySelector(".data-list"),m=document.querySelector(".per-page"),r=document.querySelector(".page"),g=document.querySelector(".prev-button"),h=document.querySelector(".next-button"),l=document.getElementById("news-num"),y=document.getElementById("page-num");function a(){y.textContent=e}let c=0,e=1;a();f.addEventListener("click",v);g.addEventListener("click",b);h.addEventListener("click",P);function v(){e=Number(r.value),s().then(t=>{c=t.totalResults,i(t.articles),l.textContent=c}).catch(t=>console.log("error:",t)),a()}function s(){const t="https://newsapi.org/v2/",u="top-headlines?country=us&",n=m.value;e=Number(r.value);const d="apiKey=56b82358896449f994f5fabbc62ff5f5";return new URLSearchParams({_limit:n,_page:e}),fetch(`${t}${u}pageSize=${n}&page=${e}&${d}`).then(o=>{if(o.status===426&&alert("Отакої, відправити запит можна тільки з локального хоста (помилка 426)"),!o.ok)throw new Error(o.status);return o.json()})}function i(t){console.log(t);const u=t.map(n=>`
        <li>
        <h2>Title: ${n.title}</h2>
        <p>ID: ${n.id}</p>
        <p>body: ${n.body}</p>
        <a href="${n.url}" target="_blank">Читати далі</a>
        </li>
        `).join("");p.innerHTML=u}function b(){e>1&&(e-=1,r.value=e,s().then(t=>{i(t.articles),l.textContent=c}).catch(t=>console.log("error:",t))),a()}function P(){e>=100||(e+=1,r.value=e,s().then(t=>{i(t.articles),l.textContent=c}).catch(t=>console.log("error:",t)),a())}
