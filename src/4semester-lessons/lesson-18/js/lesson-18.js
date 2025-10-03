//! імпортування бібліотеки HandeBars
import Handlebars from "handlebars";
import news from "../template-student-data.hbs";

Handlebars.registerHelper("addOne", function (index) {
    return index + 1;
});

const studentTemplate = Handlebars.compile(news);

//! знаходимо всі елементи з розмітки
const modal = document.querySelector(".backdrop");
const confirmButton = document.querySelector(".confirm-button");
const deleteButton = document.querySelector(".delete-button");
const form = document.getElementById("student-info-form");
const list = document.querySelector(".news-list");
const btnOpn = document.querySelector(".buttonOpn");
const backdrop = document.querySelector(".backdrop-1");
const closeBtn = document.querySelector(".formCloseBtn");
const editBackdrop = document.querySelector(".backdrop-edit");
const editForm = document.getElementById("edit-student-form");

let dataArray = [];
const API_URL = "http://localhost:3000/articles";

//! завантажуємо дані з сервера
fetch(API_URL)
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Помилка при завантаженні даних");
        }
        return response.json();
    })
    .then(function (data) {
        const articles = Array.isArray(data) ? data : data.articles;

        dataArray = articles.map(function (article, index) {
            return {
                _index: index,
                author: article.author || "Невідомо",
                title: article.title || "Без назви",
                description: article.description || "Немає опису",
                content: article.content || "—",
            };
        });
        renderList(dataArray);
    })
    .catch(function (error) {
        console.error("Помилка завантаження:", error);
    });

//! відкриття модалки для додавання
btnOpn.addEventListener("click", function () {
    backdrop.classList.remove("is-hidden");
});

closeBtn.addEventListener("click", function () {
    backdrop.classList.add("is-hidden");
});

//! додаємо статтю/студента вручну
form.addEventListener("submit", function (e) {
    e.preventDefault();

    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        dataArray.push(data);

        updateLocalStorage();
        renderList(dataArray);

        form.reset();
        backdrop.classList.add("is-hidden");
    } catch (error) {
        console.error(error);
    }
});

//! функція яка рендерить список
function renderList(data) {
    list.innerHTML = "";

    data.forEach((item, index) => {
        item._index = index;
        const markup = studentTemplate(item);
        list.insertAdjacentHTML("beforeend", markup);
    });
}

//! видалення
let deleteIndex = null;
list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const index = parseInt(e.target.dataset.index, 10);
        if (isNaN(index)) return;

        deleteIndex = index;
        modal.classList.remove("is-hidden");
    }
});

confirmButton.addEventListener("click", () => {
    if (deleteIndex !== null) {
        dataArray.splice(deleteIndex, 1);
        renderList(dataArray);
        deleteIndex = null;
    }
    modal.classList.add("is-hidden");
});

deleteButton.addEventListener("click", () => {
    deleteIndex = null;
    modal.classList.add("is-hidden");
});

//! редагування
let editIndex = null;

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-btn")) {
        const index = parseInt(e.target.dataset.index, 10);
        if (isNaN(index) || !dataArray[index]) return;

        const student = dataArray[index];
        editIndex = index;

        editForm.elements["author"].value = student.author;
        editForm.elements["title"].value = student.title;
        editForm.elements["description"].value = student.description;
        editForm.elements["content"].value = student.content;

        editBackdrop.classList.remove("is-hidden");
    }
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
        const formData = new FormData(editForm);
        const updatedStudent = Object.fromEntries(formData.entries());

        if (editIndex !== null) {
            dataArray[editIndex] = updatedStudent;
            renderList(dataArray);
        }
    } catch (error) {
        console.error(error);
    } finally {
        editForm.reset();
        editBackdrop.classList.add("is-hidden");
        editIndex = null;
    }
});

editForm.querySelector(".cancel-edit-modal").addEventListener("click", () => {
    editForm.reset();
    editBackdrop.classList.add("is-hidden");
    editIndex = null;
});



// const fetchButton = document.getElementById("fetch");
// const perPageInput = document.querySelector(".per-page");
// const pageInput = document.querySelector(".page");
// const prevButton = document.querySelector(".prev-button");
// const nextButton = document.querySelector(".next-button");
// const newsSpan = document.getElementById("news-num");
// const pageNum = document.getElementById("page-num");
// const totalPagesSpan = document.getElementById("total-pages");

// let totalResults = 0;
// let totalPages = 1;
// let page = 1;

// function computePerPage() {
//     return Number(perPageInput.value) || 5;
// }

// function updatePageNum() {
//     pageNum.textContent = page;
//     const perPage = computePerPage();
//     const capped = Math.min(totalResults, 100);
//     totalPages = Math.max(1, Math.ceil(capped / perPage));

//     totalPagesSpan.textContent = totalPages;
//     pageInput.min = 1;
//     pageInput.max = totalPages;

//     prevButton.disabled = page <= 1;
//     pageInput.disabled = page >= totalPages;
// }

// fetchButton.addEventListener("click", fetchPosts);
// prevButton.addEventListener("click", fetchPostsPrev);
// nextButton.addEventListener("click", fetchPostsNext);

// function fetchPosts() {
//     page = Number(pageInput.value) || 1;

//     fetchData()
//         .then((data) => {
//             totalResults = data.totalResults || 0;
//             renderPosts(data.articles || []);
//             newsSpan.textContent = totalResults;
//             updatePageNum();
//         })
//         .catch((error) => {
//             console.log("error:", error);
//             updatePageNum();
//         });
// }

// function fetchData() {
//     const baseUrl = "https://newsapi.org/v2/";
//     const endPoint = "top-headlines?country=us&";
//     const perPage = computePerPage();
//     const apiKey = "apiKey=56b82358896449f994f5fabbc62ff5f5";

//     return fetch(`${baseUrl}${endPoint}pageSize=${perPage}&page=${page}&${apiKey}`)
//         .then((response) => {
//             if (!response.ok) throw new Error(response.status);
//             return response.json();
//         });
// }

// function renderPosts(posts) {
//     const markUp = posts
//         .map((post) => {
//             return `
//         <li>
//           <h2>Title: ${post.title}</h2>
//           <p>${post.description || "Без опису"}</p>
//           <a href="${post.url}" target="_blank">Читати далі</a>
//         </li>
//       `;
//         })
//         .join("");

//     list.innerHTML = markUp || "<li>Новин немає</li>";
// }

// function fetchPostsPrev() {
//     if (page <= 1) return;
//     page--;
//     pageInput.value = page;
//     fetchPosts();
// }

// function fetchPostsNext() {
//     if (page >= totalPages) return;
//     page++;
//     pageInput.value = page;
//     fetchPosts();
// }
