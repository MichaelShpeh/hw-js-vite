import"./modulepreload-polyfill-3cfb730f.js";const o=document.getElementById("fetch"),r=document.querySelector(".user-list");o.addEventListener("click",c);function c(){s().then(t=>i(t)).catch(t=>console.log("error:",t))}function s(){return fetch("https://jsonplaceholder.typicode.com/users?_start=0&_limit=5").then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function i(t){console.log(t);const n=t.map(e=>`
        <li>
        <p>Name: ${e.name}</p>
        <p>Email: ${e.email}</p>
        <p>Address: ${e.address}</p>
        </li>
        `).join("");r.innerHTML=n}
