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

let dataArray = [];

//! спроба завантажити з localStorage при старті
const saved = localStorage.getItem("students");
if (saved) {
  try {
    dataArray = JSON.parse(saved);
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

    localStorage.setItem("students", JSON.stringify(dataArray));

    renderList(JSON.stringify(dataArray));

    form.reset();
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
    localStorage.setItem("students", JSON.stringify(dataArray));
    renderList(JSON.stringify(dataArray));
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
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index) || !dataArray[index]) return;

    const student = dataArray[index];

    form.id = "hidden-form";

    const editForm = document.createElement("form");
    editForm.className = "edit-form";

    editForm.innerHTML = `
      <div class="form-text">
        <h2>Редагування картки</h2>
        <input type="text" name="name" value="${student.name}" required />
        <input type="text" name="second-name" value="${student["second-name"]}" required />
        <input type="number" name="age" value="${student.age}" required />
        <input type="text" name="course" value="${student.course}" required />
        <input type="text" name="faculty" value="${student.faculty}" required />
      </div>
      <div class="form-buttons">
        <button type="submit">Підтвердити</button>
        <button type="button" class="cancel-edit">Скасувати</button>
      </div>
    `;

    form.insertAdjacentElement("afterend", editForm);

    //! підтвердження змінення
    editForm.addEventListener("submit", (event) => {
      event.preventDefault();
      try {
        const formData = new FormData(editForm);
        const updatedStudent = Object.fromEntries(formData.entries());

        dataArray[index] = updatedStudent;
        localStorage.setItem("students", JSON.stringify(dataArray));
        renderList(JSON.stringify(dataArray));
      } catch (error) {
        console.error(error);
      } finally {
        form.id = "student-info-form";
        editForm.remove();
      }
    });

    //! скасування змінення
    editForm.querySelector(".cancel-edit").addEventListener("click", () => {
      form.id = "student-info-form";
      editForm.remove();
    });
  }
});
