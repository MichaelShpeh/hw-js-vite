import"./modulepreload-polyfill-3cfb730f.js";const o=document.getElementById("fetch"),c=document.querySelector(".data-list"),r=document.querySelector(".input");o.addEventListener("click",s);function s(){const n=r.value;i(n).then(e=>u(e)).catch(e=>console.log("error:",e))}function i(n){const e=`https://newsapi.org/v2/top-headlines?country=us&pageSize=${n}&apiKey=56b82358896449f994f5fabbc62ff5f5`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.articles)}function u(n){const e=n.map(t=>`
        <li>
          <h2>${t.title}</h2>
          <p>${t.description||"Без опису"}</p>
          <a href="${t.url}" target="_blank">Читати далі</a>
        </li>
      `).join("");c.innerHTML=e}
