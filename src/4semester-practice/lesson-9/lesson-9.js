import Handlebars from "handlebars";
import templateStudentCard from "./lesson-9.hbs?raw";
import studentsJSON from "./lesson-9.json";

const compileStudentCard = Handlebars.compile(templateStudentCard);

console.log(templateStudentCard);

console.log("studentsJSON: ", studentsJSON);

let dataArray = [];
let dataJSON = "";
dataArray = studentsJSON;

console.log("dataArray: ", dataArray);

localStorage.setItem("students", JSON.stringify(dataArray));

const dataArrayLocalStorage = localStorage.getItem("students", dataArray);

console.log("dataArrayLocalStorage: ", dataArrayLocalStorage);

const list = document.querySelector(".students-list");

// list.innerHTML = dataArray.map((student) => {
//     return `
//     <li class="item">
//     <p>Ім'я: ${student.firstName}</p>
//     <p>Прізвище: ${student.lastName}</p>
//     <p>Вік: ${student.age}</p>
//     <p>Курс: ${student.course}</p>
//     <p>Факультет: ${student.faculty}</p>
//     </li>
//      `;
// }).join("");

dataArray = JSON.parse(localStorage.getItem("students"));

dataArray[0].firstName = "Newname";

dataArray.splice(2, 1);

console.log(dataArray);

list.innerHTML = dataArray
  .map((student, index) => {
    const markupObj = { ...student, index }; //! Об'єкт для створення розмітки картки студента
    const markupStudentCard = compileStudentCard(markupObj); //! HTML-розмітка картки студента
    return markupStudentCard;
  })
  .join("");
