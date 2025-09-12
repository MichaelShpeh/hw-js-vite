import"./modulepreload-polyfill-3cfb730f.js";const a=document.getElementById("fetch"),u=document.querySelector(".data-list"),i=document.querySelector(".per-page"),p=document.querySelector(".page"),d=document.querySelector(".prev-button"),h=document.querySelector(".next-button");let n;a.addEventListener("click",m);d.addEventListener("click",f);h.addEventListener("click",g);function m(){r().then(t=>s(t)).catch(t=>console.log("error:",t))}function r(){const t="https://jsonplaceholder.typicode.com/",o="posts",e=i.value;n=p.value;const l=new URLSearchParams({_limit:e,_page:n});return fetch(`${t}${o}?${l}`).then(c=>{if(!c.ok)throw new Error(c.status);return c.json()})}function s(t){console.log(t);const o=t.map(e=>`
        <li>
        <h2>Title: ${e.title}</h2>
        <p>postID: ${e.postId}</p>
        <p>ID: ${e.id}</p>
        <p>body: ${e.body}</p>
        </li>
        `).join("");u.innerHTML=o}function f(){n-=1,r().then(t=>s(t)).catch(t=>console.log("error:",t))}function g(){n+=1,r().then(t=>s(t)).catch(t=>console.log("error:",t))}
