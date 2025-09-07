import"./modulepreload-polyfill-3cfb730f.js";const c=document.getElementById("fetch"),r=document.querySelector(".data-list"),o=document.querySelector(".input");c.addEventListener("click",s);function s(){const n=o.value;n&&a(n).then(e=>i(e)).catch(e=>console.log("error:",e))}function a(n){const e=`https://newsapi.org/v2/top-headlines?country=us&pageSize=${n}&apiKey=56b82358896449f994f5fabbc62ff5f5`;return fetch(e).then(t=>{if(t.status===426&&alert("Отакої, відправити запит можна тільки з локального хоста (помилка 426)"),!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.articles).catch(t=>{alert("Помилка при завантаженні новин: "+t.message)})}function i(n){const e=n.map(t=>`
        <li>
          <h2>${t.title}</h2>
          <p>${t.description||"Без опису"}</p>
          <a href="${t.url}" target="_blank">Читати далі</a>
        </li>
      `).join("");r.innerHTML=e}
