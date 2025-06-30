// import Handlebars from "handlebars";
// import product from "./products.hbs";
// console.log(product)

// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 1500,
//     description: "A high-performance laptop for all your needs.",
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 700,
//     description: "A modern smartphone with an excellent camera.",
//   },
//   {
//     id: 3,
//     name: "Headphones",
//     price: 200,
//     description: "Noise-cancelling headphones for better focus.",
//   },
// ];
  
// const element = document.getElementById('element')

// const productTemplate = Handlebars.compile(product)

// products.forEach(productItem => {
//     const markup = productTemplate(productItem)

//     element.innerHTML += markup;
// })


import Handlebars from "handlebars";
import productTemplateText from "./products.hbs";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1500,
    description: "A high-performance laptop for all your needs.",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 700,
    description: "A modern smartphone with an excellent camera.",
  },
  {
    id: 3,
    name: "Headphones",
    price: 200,
    description: "Noise-cancelling headphones for better focus.",
  },
];

const element = document.getElementById("element");

// 🔧 Компілюємо шаблон з тексту
const productTemplate = Handlebars.compile(productTemplateText);

// 🔁 Рендеримо весь список одним шматком (ефективніше)
const markup = products
  .map((productItem) => productTemplate(productItem))
  .join("");

element.innerHTML = markup;
