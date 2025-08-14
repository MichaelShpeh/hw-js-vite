import"./modulepreload-polyfill-3cfb730f.js";//! Promise.race()
//! Promise.any()
const c=3e3,n=(e,o)=>new Promise((t,r)=>{setTimeout(()=>{o<=c?t(e):r("❌ Error!")},o)}),i=n("promiseA value",3e3),m=n("promiseB value",1e3),s=Date.now();Promise.any([i,m]).then(e=>{const o=Date.now();console.log("Проміс закінчив роботу за: ",o-s,"мс"),console.log("✅ Promise.race([promiseA, promiseB]).then(value):",e)}).catch(e=>{const o=Date.now();console.log("Проміс закінчив роботу за: ",o-s,"мс"),console.log(e)});
