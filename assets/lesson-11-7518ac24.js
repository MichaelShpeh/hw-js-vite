import"./modulepreload-polyfill-3cfb730f.js";const g=document.getElementById("form"),y=document.getElementById("shownTime"),n=document.getElementById("submitBtnContainer"),i=document.getElementById("cancelBtn"),I=document.getElementById("hours"),b=document.getElementById("minutes"),B=document.getElementById("seconds");let S,a="initial";//! initial | running | paused
let e=0,p=0;//! зупинка таймера при виході
window.addEventListener("beforeunload",()=>{a==="running"&&(u(),a="paused",localStorage.setItem("timerData",JSON.stringify({totalSeconds:e,timerState:"paused"})))});//! завантаження таймера при вході на сайт
window.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("timerData");if(!t){l();return}const{totalSeconds:s,timerState:o}=JSON.parse(t);e=s,a=o,d(e),a==="running"&&e>0?(f(),i.style.color="gray",i.disabled=!0,n.innerHTML="",n.appendChild(r("Зупинити","stopBtn"))):a==="paused"?(i.style.color="#fff",i.disabled=!1,n.innerHTML="",n.appendChild(r("Продовжити","resumeBtn"))):l()});//! форматування часу 0 → 00
function m(t){return String(t).padStart(2,"0")}//! оновити відображення часу
function d(t){const s=Math.floor(t/3600),o=Math.floor(t%3600/60),c=t%60;y.textContent=`${m(s)}:${m(o)}:${m(c)}`}//! створення нової кнопки
function r(t,s){const o=document.createElement("button");return o.type="submit",o.id=s,o.textContent=t,o}//! старт таймера
function f(){S=setInterval(()=>{e>0?(e--,d(e)):(u(),l(),alert("Час вийшов!"))},1e3)}//! зупинка таймера
function u(){clearInterval(S)}//! скидання до початкового стану
function l(){a="initial",i.disabled=!1,d(0),n.innerHTML="";const t=r("Підтвердити","submitBtn");n.appendChild(t),g.reset(),localStorage.removeItem("timerData")}//! додавання слухача на форму
g.addEventListener("submit",function(t){t.preventDefault();//! якщо таймер не запущений
if(a==="initial"){const s=Number(I.value)||0,o=Number(b.value)||0,c=Number(B.value)||0;if(e=s*3600+o*60+c,e<=0){alert("Введіть час більший за 0");return}p=e,localStorage.setItem("timerData",JSON.stringify({totalSeconds:p,timerState:"running"})),d(e),f(),a="running",i.style.color="gray",i.disabled=!0,n.innerHTML="",n.appendChild(r("Зупинити","stopBtn"))}else if(a==="running"){//! таймер запущений
u(),a="paused",i.style.color="#fff",i.disabled=!1,localStorage.setItem("timerData",JSON.stringify({totalSeconds:e,timerState:"paused"})),n.innerHTML="",n.appendChild(r("Продовжити","resumeBtn"))}else if(a==="paused"){//! таймер зупинений
f(),a="running",i.style.color="gray",i.disabled=!0,localStorage.setItem("timerData",JSON.stringify({totalSeconds:e,timerState:"running"})),n.innerHTML="",n.appendChild(r("Зупинити","stopBtn"))}});i.addEventListener("click",function(){u(),l()});
