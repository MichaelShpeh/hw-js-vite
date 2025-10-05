//! імпортування бібліотеки HandeBars
import Handlebars from "handlebars";
import news from "../template-news-data.hbs";

Handlebars.registerHelper("addOne", function (index) {
    return index + 1;
});

const newsTemplate = Handlebars.compile(news);

//! знаходимо всі елементи з розмітки
const modal = document.querySelector(".backdrop");
const confirmButton = document.querySelector(".confirm-button");
const deleteButton = document.querySelector(".delete-button");
const form = document.getElementById("news-info-form");
const list = document.querySelector(".news-list");
const btnOpn = document.querySelector(".buttonOpn");
const backdrop = document.querySelector(".backdrop-1");
const closeBtn = document.querySelector(".formCloseBtn");
const editBackdrop = document.querySelector(".backdrop-edit");
const editForm = document.getElementById("edit-news-form");

const fetchButton = document.getElementById("fetch");
const perPageInput = document.querySelector(".per-page");
const pageInput = document.querySelector(".page");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const newsSpan = document.getElementById("news-num");
const pageNum = document.getElementById("page-num");
const totalPagesSpan = document.getElementById("total-pages");

let page = 1;
let dataArray = [];
const baseUrl = "http://localhost:3000/";
const endPoint = "articles?";
let perPage;

function getPerPage() {
    return perPage = perPageInput.value || 5;
}

function getPage() {
    return Number(pageInput.value);
}

//! завантажуємо дані з сервера
function fetchPosts() {
    const perPage = getPerPage();
    page = getPage();
    fetch(`${baseUrl}${endPoint}_page=${page}&_limit=${perPage}`)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Помилка при завантаженні даних");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const articles = Array.isArray(data) ? data : [];
            dataArray = articles.map((article, index) => ({
                _index: index,
                author: article.author || "Невідомо",
                title: article.title || "Без назви",
                description: article.description || "Немає опису",
                content: article.content || "—",
            }));

            renderList(dataArray);

            totalResults = data.totalResults || 0;
            const perPage = getPerPage();
            totalPages = Math.ceil(totalResults / perPage);
            totalPagesSpan.textContent = totalPages;
            pageNum.textContent = page;
            newsSpan.textContent = totalResults;


            console.log(getPerPage());
            console.log(`${baseUrl}${endPoint}_page=${page}&_limit=${perPage}`)
        })
        .catch(function (error) {
            console.error("Помилка завантаження:", error);
        });
    ;
}
console.log(`${baseUrl}${endPoint}_page=${page}&_limit=${perPage}`)


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
        const markup = newsTemplate(item);
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

        const newss = dataArray[index];
        editIndex = index;

        editForm.elements["author"].value = newss.author;
        editForm.elements["title"].value = newss.title;
        editForm.elements["description"].value = newss.description;
        editForm.elements["content"].value = newss.content;

        editBackdrop.classList.remove("is-hidden");
    }
});

editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
        const formData = new FormData(editForm);
        const updatedNews = Object.fromEntries(formData.entries());

        if (editIndex !== null) {
            dataArray[editIndex] = updatedNews;
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

let totalResults = 0;
let totalPages = 1;

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

fetchButton.addEventListener("click", fetchPosts);
prevButton.addEventListener("click", fetchPostsPrev);
nextButton.addEventListener("click", fetchPostsNext);

function fetchPostsPrev() {
    if (page <= 1) return;
    page--;
    pageInput.value = page;
    fetchPosts();
}

function fetchPostsNext() {
    if (page >= totalPages) return;
    page++;
    pageInput.value = page;
    fetchPosts();
}
