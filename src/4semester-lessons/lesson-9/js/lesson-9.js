//! імпортування бібліотеки HandeBars
import Handlebars from "handlebars";
import student from "../template-student-data.hbs";

Handlebars.registerHelper("addOne", function (index) {
  return index + 1;
});

const studentTemplate = Handlebars.compile(student);

//! знаходимо всі елементи з розмітки
const modal = document.querySelector(".backdrop");
const confirmButton = document.querySelector(".confirm-button");
const deleteButton = document.querySelector(".delete-button");
const form = document.getElementById("student-info-form");
const list = document.getElementById("students-list");
const btnOpn = document.querySelector(".buttonOpn");
const backdrop = document.querySelector(".backdrop-1");
const closeBtn = document.querySelector(".formCloseBtn");
const editBackdrop = document.querySelector(".backdrop-edit");
const editForm = document.getElementById("edit-student-form");
const cancelEditBtn = document.querySelector(".cancel-edit-modal");

btnOpn.addEventListener("click", function () {
  backdrop.classList.remove("is-hidden");
});

closeBtn.addEventListener("click", function () {
  backdrop.classList.add("is-hidden");
});

let dataArray = [];

//! завантаження з localstorage або students.json
if (!localStorage.getItem("students")) {
  fetch("students.json")
    .then((res) => res.json())
    .then((data) => {
      dataArray = data;
      const dataJSON = JSON.stringify(dataArray);
      localStorage.setItem("students", dataJSON);
      renderList(dataJSON);
    })
    .catch((err) => console.error("Помилка завантаження JSON:", err));
} else {
  try {
    dataArray = JSON.parse(localStorage.getItem("students"));
    renderList(JSON.stringify(dataArray));
  } catch (e) {
    console.error("Помилка при зчитуванні з localStorage:", e);
  }
}

//! додаємо студента
form.addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    dataArray.push(data);

    updateLocalStorage();

    renderList(localStorage.getItem("students"));

    form.reset();

    backdrop.classList.add("is-hidden");
  } catch (error) {
    console.error(error);
  }
});

//! функція яка додає студента в список
function renderList(json) {
  try {
    const parsedData = JSON.parse(json);

    list.innerHTML = '<li class="item">Список студентів:</li>';

    parsedData.forEach((studentData, index) => {
      studentData._index = index;

      try {
        const markup = studentTemplate(studentData);
        list.insertAdjacentHTML("beforeend", markup);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

//! оновлюємо localstorage
function updateLocalStorage() {
  try {
    const dataJSON = JSON.stringify(dataArray);
    localStorage.setItem("students", dataJSON);
  } catch (error) {
    console.error("Помилка JSON.stringify:", error);
  }
}

//! відкриття модалки
let deleteIndex = null;

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index)) return;

    deleteIndex = index;
    modal.classList.remove("is-hidden");
  }
});

//! підтвердити видалення
confirmButton.addEventListener("click", () => {
  if (deleteIndex !== null) {
    dataArray.splice(deleteIndex, 1);
    updateLocalStorage();
    renderList(localStorage.getItem("students"));
    deleteIndex = null;
  }
  modal.classList.add("is-hidden");
});

//! скасувати видалення
deleteButton.addEventListener("click", () => {
  deleteIndex = null;
  modal.classList.add("is-hidden");
});

//! редагування студента
let editIndex = null;

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index) || !dataArray[index]) return;

    const student = dataArray[index];
    editIndex = index;

    editForm.elements["name"].value = student.name;
    editForm.elements["second-name"].value = student["second-name"];
    editForm.elements["age"].value = student.age;
    editForm.elements["course"].value = student.course;
    editForm.elements["faculty"].value = student.facult;
    
    editForm.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const formData = new FormData(editForm);
        const updatedStudent = Object.fromEntries(formData.entries());
        updatedStudent.age = Number(updatedStudent.age);

        console.log("updatedStudent:", updatedStudent);

        dataArray[editIndex] = updatedStudent;
        updateLocalStorage();
        renderList(localStorage.getItem("students"));
      } catch (error) {
        console.error(error);
      } finally {
        editForm.reset();
        editBackdrop.classList.add("is-hidden");
        editIndex = null;
      }
    });

    
    editForm.querySelector(".cancel-edit").addEventListener("click", () => {
      form.id = "student-info-form";
      editForm.remove();
    });
  }
});


list.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index) || !dataArray[index]) return;

    const student = dataArray[index];
    editIndex = index;

    editForm.elements["name"].value = student.name;
    editForm.elements["second-name"].value = student["second-name"];
    editForm.elements["age"].value = student.age;
    editForm.elements["course"].value = student.course;
    editForm.elements["faculty"].value = student.faculty;

  
    editBackdrop.classList.remove("is-hidden");
  }
});

//! підтвердження змінення
editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const formData = new FormData(editForm);
    const updatedStudent = Object.fromEntries(formData.entries());

    dataArray[editIndex] = updatedStudent;
    updateLocalStorage();
    renderList(localStorage.getItem("students"));
  } catch (error) {
    console.error(error);
  } finally {
    editForm.reset();
    editBackdrop.classList.add("is-hidden");
    editIndex = null;
  }
});

//! скасування змінення
document.querySelector(".cancel-edit").addEventListener("click", () => {
  editForm.reset();
  editBackdrop.classList.add("is-hidden");
  editIndex = null;
});