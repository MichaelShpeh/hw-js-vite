import"./modulepreload-polyfill-3cfb730f.js";//!
//!
//! КРОК-2.3.Додамо інтерфейс керування таймером:
//!  - введення інтервалу до зупинення таймеру (у секундах),
//!  - кнопки старту та зупинення таймеру.
const l=1e3;//! час між відліками
let n=null;//! кількість інтервалів до зупинення таймеру - умова зупинення таймеру
let s=null;//! для видалення ідентифікатора кнопкою
document.getElementById("info-input");document.getElementById("stop-counter");const c=document.getElementById("start-set-interval");//! кнопка <Start setInterval>
const r=document.getElementById("stop-set-interval");//! кнопка <Stop setInterval>
n=5;//! кількість інтервалів до зупинення таймеру - умова зупинення таймеру
function o(){let t=0;//! початковий стан лічильник часу
const e=setInterval(()=>{t++,console.log("⏱️",t,"- відлік часу в секундах, id:",e);//! Умова зупинення таймеру:
t>=n&&(clearInterval(e),console.error("🛑⏱️ Інтервал з ідентифікатором",e,"зупинено!"))},l)}c.addEventListener("click",o);r.addEventListener("click",clearInterval(o),console.warn(`⚠️⏱️Інтервал з ідентифікатором ${s} зупинено повністю!`));
