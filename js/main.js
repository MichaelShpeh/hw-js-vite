// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '../public/vite.svg'
// import { setupCounter } from './counter.js'
// import Handlebars from "handlebars";
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

// // document.querySelector('#app').innerHTML = `
// //   <div>
// //     <a href="https://vite.dev" target="_blank">
// //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// //     </a>
// //     <h1>Hello Vite!</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite logo to learn more
// //     </p>
// //   </div>
// // `

// // setupCounter(document.querySelector('#counter'))

// // Handlebars.registerHelper('loud', function(string) {
// //   return string.toUpperCase()
// // });

// // {
// //   firstname: "Yehuda",
// //   lastname: "Katz",
// // }

// import Handlebars from "handlebars";
// import userCardTemplate from "./template.hbs?raw"; // 👈 ?raw імпортує як текст

// const template = Handlebars.compile(userCardTemplate);
// console.log(template);

// const data = {
//   name: "Марія",
//   age: 24,
//   isAdmin: false
// };

// const html = template(data);
// console.log(html);
// document.body.innerHTML = html;
