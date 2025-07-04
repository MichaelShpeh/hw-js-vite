import Handlebars from "handlebars";
import student from "../template-student-data.hbs";

const studentTemplate = Handlebars.compile(student);

const form = document.getElementById("student-info-form");
const list = document.getElementById("students-list");

let dataArray = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  dataArray.push(data);

  const dataJSON = JSON.stringify(dataArray);

  renderList(dataJSON); // будуємо тільки з JSON

  form.reset();
});

function renderList(json) {
  const parsedData = JSON.parse(json);

  list.innerHTML = ""; // очищаємо старий список

  parsedData.forEach((studentData) => {
    const markup = studentTemplate(studentData);
    list.insertAdjacentHTML("beforeend", markup);
  });
}