import"./modulepreload-polyfill-3cfb730f.js";const r=document.getElementById("fetch"),a=document.querySelector(".data-list"),l=document.querySelector(".per-page");document.querySelector(".page");let c=1;r.addEventListener("click",i);function i(){p().then(t=>{u(t),c+=1,c>1&&(r.textContent="Заватажити ще")}).catch(t=>console.log("error:",t))}function p(){const t="https://jsonplaceholder.typicode.com/",n="posts",e=Number(l.value),s=new URLSearchParams({_limit:e,_page:c});//! ЕКЗЕПЛЯР КЛАСУ
return fetch(`${t}${n}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function u(t){console.log(t);const n=t.map(e=>`
        <li>
        <h2>Title: ${e.title}</h2>
        <p>postID: ${e.postId}</p>
        <p>ID: ${e.id}</p>
        <p>body: ${e.body}</p>
        </li>
        `).join("");a.innerHTML+=n}
