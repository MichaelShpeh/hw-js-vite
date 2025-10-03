import"./modulepreload-polyfill-3cfb730f.js";fetch("https://jsonplaceholder.typicode.com/users").then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{//! Data handling
console.log("data:",o);//! масив об'єктів з користувачами
}).catch(o=>{//! Error handling
console.log("error:",o)});
