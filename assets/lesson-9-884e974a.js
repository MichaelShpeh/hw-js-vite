import"./modulepreload-polyfill-3cfb730f.js";import{H as m}from"./handlebars-aa0ac26f.js";const p='<li class="student-item" data-index="{{_index}}"><h2 class="student-title">Студент №{{addOne _index}}</h2><div class="student-text"><p>{{name}}</p><p>{{second-name}}</p><p>{{age}}</p><p>{{course}}</p><p>{{faculty}}</p></div><div class="student-actions"><button class="edit-btn" data-index="{{_index}}">Edit</button><button class="delete-btn" data-index="{{_index}}">Delete</button></div></li>';//! імпортування бібліотеки HandeBars
m.registerHelper("addOne",function(n){return n+1});const b=m.compile(p);//! Знаходимо всі елементи з ррозмітки
const l=document.querySelector(".backdrop"),v=document.querySelector(".confirm-button"),y=document.querySelector(".delete-button"),i=document.getElementById("student-info-form"),o=document.getElementById("students-list");let s=[];//! додаємо студента
i.addEventListener("submit",function(n){n.preventDefault();try{const e=new FormData(i),r=Object.fromEntries(e.entries());s.push(r);const t=JSON.stringify(s);u(t),i.reset()}catch(e){console.error(e)}});//! функція яка додає студента в список
function u(n){try{const e=JSON.parse(n);o.innerHTML='<li class="item">Список студентів:</li>',e.forEach((r,t)=>{r._index=t;try{const d=b(r);o.insertAdjacentHTML("beforeend",d)}catch(d){console.error(d)}})}catch(e){console.error(e)}}//! відкриття модалки
let a=null;o.addEventListener("click",function(n){if(n.target.classList.contains("delete-btn")){const e=parseInt(n.target.dataset.index,10);if(isNaN(e))return;a=e,l.classList.remove("is-hidden")}});//! підтвердити видалення
v.addEventListener("click",()=>{a!==null&&(s.splice(a,1),u(JSON.stringify(s)),a=null),l.classList.add("is-hidden")});//! скасувати видалення
y.addEventListener("click",()=>{a=null,l.classList.add("is-hidden")});//! редагування студента
o.addEventListener("click",n=>{if(n.target.classList.contains("edit-btn")){const e=parseInt(n.target.dataset.index,10);if(isNaN(e)||!s[e])return;const r=s[e];i.id="hidden-form";const t=document.createElement("form");t.className="edit-form",t.innerHTML=`
      <div class="form-text">
        <h2>Редагування картки</h2>
        <input type="text" name="name" value="${r.name}" required />
        <input type="text" name="second-name" value="${r["second-name"]}" required />
        <input type="number" name="age" value="${r.age}" required />
        <input type="text" name="course" value="${r.course}" required />
        <input type="text" name="faculty" value="${r.faculty}" required />
      </div>
      <div class="form-buttons">
        <button type="submit">Підтвердити</button>
        <button type="button" class="cancel-edit">Скасувати</button>
      </div>
    `,i.insertAdjacentElement("afterend",t);//! підтвердження змінення
t.addEventListener("submit",d=>{d.preventDefault();try{const c=new FormData(t),f=Object.fromEntries(c.entries());s[e]=f,u(JSON.stringify(s))}catch(c){console.error(c)}finally{i.id="student-info-form",t.remove()}});//! скасування змінення
t.querySelector(".cancel-edit").addEventListener("click",()=>{i.id="student-info-form",t.remove()})}});
