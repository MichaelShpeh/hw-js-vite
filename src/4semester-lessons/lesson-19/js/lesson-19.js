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
async function fetchPosts() {
    try {
        const perPage = getPerPage();
        page = getPage();
        const response = await fetch(`${baseUrl}${endPoint}_page=${page}&_per_page=${perPage}`);
        if (!response.ok) throw new Error("Помилка при завантаженні даних");
        const data = await response.json();
        console.log(data)
        const articles = Array.isArray(data.data) ? data.data : [];

        dataArray = articles.map((article, index) => ({
            _index: index,
            id: article.id,
            author: article.author || "Невідомо",
            title: article.title || "Без назви",
            description: article.description || "Немає опису",
            content: article.content || "—",
        }));

        renderList(dataArray);

        totalResults = data.items || 0;
        totalPages = Math.ceil(totalResults / perPage);
        totalPagesSpan.textContent = totalPages;
        pageNum.textContent = page;
        newsSpan.textContent = totalResults;
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}



//! відкриття модалки для додавання
btnOpn.addEventListener("click", function () {
    backdrop.classList.remove("is-hidden");
});

closeBtn.addEventListener("click", function () {
    backdrop.classList.add("is-hidden");
});

//! додаємо статтю/новину вручну
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch("http://localhost:3000/articles");
        if (!response.ok) throw new Error("Помилка при надсиланні даних на сервер");
        const articles = await response.json();
        const lastItem = articles[articles.length - 1];
        console.log("Останній елемент:", lastItem);
        const lastId = lastItem ? Number(lastItem.id) : 0;
        data.id = lastId + 1;

        const postResponse = await fetch(`${baseUrl}${endPoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const newItem = await postResponse.json();
        console.log("Успішно створена новина на сервер:", newItem);

        dataArray.push(newItem);
        renderList(dataArray);

        form.reset();
        backdrop.classList.add("is-hidden");


    } catch (error) {
        console.error("Помилка:", error);
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

confirmButton.addEventListener("click", async () => {
    try {
        if (deleteIndex === null) return;

        const article = dataArray[deleteIndex];
        const id = article.id; // Беремо справжній id із масиву

        if (!id) {
            console.error("❌ Помилка: елемент не має id, тому його не можна видалити із сервера.");
            // все одно видаляємо з масиву локально
            dataArray.splice(deleteIndex, 1);
            renderList(dataArray);
            modal.classList.add("is-hidden");
            deleteIndex = null;
            return;
        }

        const url = `${baseUrl}articles/${id}`;

        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Не вдалося видалити запис із сервера");
        }
        console.log(`✅ Стаття з id=${id} видалена`);

                

    } catch (error)
    {
        console.error("❌ Помилка DELETE:", error);
        
    } finally {
        dataArray.splice(deleteIndex, 1);
        renderList(dataArray);
        modal.classList.add("is-hidden");
        deleteIndex = null;
    }
});

deleteButton.addEventListener("click", () => {
    deleteIndex = null;
    modal.classList.add("is-hidden");
});

//! редагування
let editIndex = null;

list.addEventListener("click", async (e) => {
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

editForm.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();
        const formData = new FormData(editForm);
        const updatedNews = Object.fromEntries(formData.entries());
        const newsItem = dataArray[editIndex];
        const id = newsItem.id;
        dataArray[editIndex] = { ...newsItem, ...updatedNews };
        renderList(dataArray);
        const url = `${baseUrl}articles/${id}`;
        const response = await fetch(url, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedNews),
        })
        if (!response.ok) throw new Error("Не вдалося оновити сервер");
        editForm.reset();
        editBackdrop.classList.add("is-hidden");
        editIndex = null;
        
            return response.json();
        
     } catch (error) { console.error("Помилка:", error) }

    
});

editForm.querySelector(".cancel-edit-modal").addEventListener("click", () => {
    editForm.reset();
    editBackdrop.classList.add("is-hidden");
    editIndex = null;
});

let totalResults = 0;
let totalPages = 1;

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