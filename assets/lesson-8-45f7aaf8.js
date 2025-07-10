import"./modulepreload-polyfill-3cfb730f.js";import{H as f}from"./handlebars-aa0ac26f.js";const y='<li class="student-item" data-index="{{_index}}"><div class="student-text"><p>{{name}}</p><p>{{second-name}}</p><p>{{age}}</p><p>{{course}}</p><p>{{faculty}}</p></div><div class="student-actions"><button class="edit-btn">Edit</button><button class="delete-btn">Delete</button></div></li>';//! імпортування бібліотеки HandeBars
const b=f.compile(y);//! Знаходимо всі елементи з ррозмітки
const m=document.querySelector(".backdrop"),v=document.querySelector(".confirm-button"),L=document.querySelector(".delete-button"),u=document.getElementById("student-info-form"),a=document.getElementById("students-list");let n=[];//! додаємо студента
u.addEventListener("submit",function(r){r.preventDefault();try{const t=new FormData(u),e=Object.fromEntries(t.entries());n.push(e);const s=JSON.stringify(n);i(s),u.reset()}catch(t){console.error(t)}});//! функція яка додає студента в список
function i(r){try{const t=JSON.parse(r);a.innerHTML='<li class="item">Список студентів:</li>',t.forEach((e,s)=>{e._index=s;try{const o=b(e);a.insertAdjacentHTML("beforeend",o)}catch(o){console.error(o)}})}catch(t){console.error(t)}}//! відкриття модалки
let c=null;a.addEventListener("click",function(r){try{if(r.target.classList.contains("delete-btn")){const t=r.target.closest(".student-item"),e=parseInt(t.dataset.index,10);if(isNaN(e))return;c=e,m.classList.remove("is-hidden")}}catch(t){console.error(t)}});//! підтвердити видалення
v.addEventListener("click",()=>{c!==null&&(n.splice(c,1),i(JSON.stringify(n)),c=null),m.classList.add("is-hidden")});//! скасувати видалення
L.addEventListener("click",()=>{c=null,m.classList.add("is-hidden")});//! редагування студента
a.addEventListener("click",r=>{try{const t=r.target.closest(".student-item");if(r.target.classList.contains("edit-btn")){const e=parseInt(t.dataset.index,10);if(isNaN(e)||!n[e])return;if(r.target.classList.contains("delete-btn")){n.splice(e,1),i(JSON.stringify(n));return}const s=n[e];t.innerHTML=`
        <form class="edit-inline-form">
        <div class="form-text">
          <input type="text" name="name" value="${s.name}" required />
          <input type="text" name="second-name" value="${s["second-name"]}" required />
          <input type="number" name="age" value="${s.age}" required />
          <input type="text" name="course" value="${s.course}" required />
          <input type="text" name="faculty" value="${s.faculty}" required />
          </div>
          <div class="form-buttons">
          <button type="submit">Підтвердити</button>
          <button type="button" class="cancel-edit">Скасувати</button>
          </div>
        </form>
      `;const o=t.querySelector(".edit-inline-form");o.addEventListener("submit",d=>{d.preventDefault();try{const l=new FormData(o),p=Object.fromEntries(l.entries());n[e]=p,i(JSON.stringify(n))}catch(l){console.error(l)}}),t.querySelector(".cancel-edit").addEventListener("click",()=>{try{i(JSON.stringify(n))}catch(d){console.error(d)}})}}catch(t){console.error(t)}});
