import"./modulepreload-polyfill-3cfb730f.js";const n=document.querySelector(".input");let o=document.querySelector(".list");const u=[{userId:4,id:"37",title:"provident vel ut sit ratione est",body:"debitis et eaque non officia sed nesciunt pariatur vel..."},{userId:4,id:"38",title:"explicabo et eos deleniti nostrum ab id repellendus",body:"animi esse sit aut sit nesciunt assumenda eum voluptas..."},{userId:4,id:"39",title:"eos dolorem iste accusantium est eaque quam",body:"corporis rerum ducimus vel eum accusantium..."},{userId:4,id:"40",title:"enim quo cumque",body:"ut voluptatum aliquid illo tenetur nemo sequi quo facilis..."}];function s(e){const t=e.map(i=>`
    <li>
    <p><b>${i.title}</b></p> 
    <p>${i.body}</p>
    </li>
    `).join("");o.innerHTML=t}s(u);n.addEventListener("input",r);function r(e){const t=e.target.value.toLowerCase().trim();a(t)}function a(e){const t=u.filter(i=>i.title.toLowerCase().includes(e));s(t)}
