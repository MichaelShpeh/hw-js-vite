const data = {
  title: "Create content from Template and Data!",
  items: [
    "LoDash",
    "NanoID",
    "PNotify",
    "Chart.js",
    "BasicLightbox",
    "Handlebars",
  ],
};

import Handlebars from "handlebars";
// import сardTemplate from "./template.hbs?raw";
import сardTemplate from "./template.hbs";

const template = Handlebars.compile(сardTemplate);

const markup = template(data);

console.log(markup);

const container = document.querySelector("#menu-container");
container.innerHTML = markup;