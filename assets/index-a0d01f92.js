import"./modulepreload-polyfill-3cfb730f.js";import{H as p}from"./handlebars-aa0ac26f.js";const e=`<div>
    <p>{{id}}</p>
    <p>{{name}}</p>
    <p>{{price}}</p>
    <p>{{description}}</p>
</div>`;console.log(e);const r=[{id:1,name:"Laptop",price:1500,description:"A high-performance laptop for all your needs."},{id:2,name:"Smartphone",price:700,description:"A modern smartphone with an excellent camera."},{id:3,name:"Headphones",price:200,description:"Noise-cancelling headphones for better focus."}],t=document.getElementById("element"),c=p.compile(e);r.forEach(n=>{const o=c(n);t.innerHTML+=o});
