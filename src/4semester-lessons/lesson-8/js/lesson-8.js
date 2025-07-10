//! імпортування бібліотеки HandeBars
import Handlebars from "handlebars";
import student from "../template-student-data.hbs";
const studentTemplate = Handlebars.compile(student);

//! Знаходимо всі елементи з ррозмітки
const modal = document.querySelector(".backdrop");
const confirmButton = document.querySelector(".confirm-button");
const deleteButton = document.querySelector(".delete-button");
const form = document.getElementById("student-info-form");
const list = document.getElementById("students-list");

let dataArray = [];

//! додаємо студента
form.addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    dataArray.push(data);

    const dataJSON = JSON.stringify(dataArray);

    renderList(dataJSON);

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
  try {
    if (e.target.classList.contains("delete-btn")) {
      const card = e.target.closest(".student-item");
      const index = parseInt(card.dataset.index, 10);

      if (isNaN(index)) return;

      deleteIndex = index;

      modal.classList.remove("is-hidden");
    }
  } catch (error) {
    console.error(error);
  }
});

//! підтвердити видалення
confirmButton.addEventListener("click", () => {
  if (deleteIndex !== null) {
    dataArray.splice(deleteIndex, 1);
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
  try {
    const card = e.target.closest(".student-item");

    if (e.target.classList.contains("edit-btn")) {
      const index = parseInt(card.dataset.index, 10);

      if (isNaN(index) || !dataArray[index]) return;

      if (e.target.classList.contains("delete-btn")) {
        dataArray.splice(index, 1);
        renderList(JSON.stringify(dataArray));
        return;
      }

      const student = dataArray[index];

      card.innerHTML = `
        <form class="edit-inline-form">
        <div class="form-text">
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
        </form>
      `;

      const editForm = card.querySelector(".edit-inline-form");

      editForm.addEventListener("submit", (event) => {
        event.preventDefault();
        try {
          const formData = new FormData(editForm);
          const updatedStudent = Object.fromEntries(formData.entries());

          dataArray[index] = updatedStudent;

          renderList(JSON.stringify(dataArray));
        } catch (error) {
          console.error(error);
        }
      });

      card.querySelector(".cancel-edit").addEventListener("click", () => {
        try {
          renderList(JSON.stringify(dataArray));
        } catch (error) {
          console.error(error);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
});
