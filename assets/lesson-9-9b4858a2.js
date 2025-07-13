import"./modulepreload-polyfill-3cfb730f.js";import{H as f}from"./handlebars-aa0ac26f.js";const y='<li class="student-item" data-index="{{_index}}"><h2 class="student-title">Студент №{{addOne _index}}</h2><div class="student-text"><p>{{name}}</p><p>{{second-name}}</p><p>{{age}}</p><p>{{course}}</p><p>{{faculty}}</p></div><div class="student-actions"><button class="edit-btn" data-index="{{_index}}">Edit</button><button class="delete-btn" data-index="{{_index}}">Delete</button></div></li>';//! імпортування бібліотеки HandeBars
f.registerHelper("addOne",function(t){return t+1});const v=f.compile(y);//! знаходимо всі елементи з розмітки
const u=document.querySelector(".backdrop"),b=document.querySelector(".confirm-button"),g=document.querySelector(".delete-button"),i=document.getElementById("student-info-form"),d=document.getElementById("students-list");let n=[];//! спроба завантажити з localStorage при старті
const m=localStorage.getItem("students");if(m)try{n=JSON.parse(m),c(JSON.stringify(n))}catch(t){console.error("Помилка при зчитуванні з localStorage:",t)}//! додаємо студента
i.addEventListener("submit",function(t){t.preventDefault();try{const e=new FormData(i),s=Object.fromEntries(e.entries());n.push(s),localStorage.setItem("students",JSON.stringify(n)),c(JSON.stringify(n)),i.reset()}catch(e){console.error(e)}});//! функція яка додає студента в список
function c(t){try{const e=JSON.parse(t);d.innerHTML='<li class="item">Список студентів:</li>',e.forEach((s,r)=>{s._index=r;try{const a=v(s);d.insertAdjacentHTML("beforeend",a)}catch(a){console.error(a)}})}catch(e){console.error(e)}}//! відкриття модалки
let o=null;d.addEventListener("click",function(t){if(t.target.classList.contains("delete-btn")){const e=parseInt(t.target.dataset.index,10);if(isNaN(e))return;o=e,u.classList.remove("is-hidden")}});//! підтвердити видалення
b.addEventListener("click",()=>{o!==null&&(n.splice(o,1),localStorage.setItem("students",JSON.stringify(n)),c(JSON.stringify(n)),o=null),u.classList.add("is-hidden")});//! скасувати видалення
g.addEventListener("click",()=>{o=null,u.classList.add("is-hidden")});//! редагування студента
d.addEventListener("click",t=>{if(t.target.classList.contains("edit-btn")){const e=parseInt(t.target.dataset.index,10);if(isNaN(e)||!n[e])return;const s=n[e];i.id="hidden-form";const r=document.createElement("form");r.className="edit-form",r.innerHTML=`
      <div class="form-text">
        <h2>Редагування картки</h2>
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
    `,i.insertAdjacentElement("afterend",r);//! підтвердження змінення
r.addEventListener("submit",a=>{a.preventDefault();try{const l=new FormData(r),p=Object.fromEntries(l.entries());n[e]=p,localStorage.setItem("students",JSON.stringify(n)),c(JSON.stringify(n))}catch(l){console.error(l)}finally{i.id="student-info-form",r.remove()}});//! скасування змінення
r.querySelector(".cancel-edit").addEventListener("click",()=>{i.id="student-info-form",r.remove()})}});
