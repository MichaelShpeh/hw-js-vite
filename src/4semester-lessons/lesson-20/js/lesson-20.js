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

const infoSection = document.querySelector(".info-section");
const searchDiv = document.querySelector(".search-div");
const search = document.querySelector(".search");
const confirmDelete = document.querySelector(".confirm-delete");
const cancelDelete = document.querySelector(".cancel-delete");
const comForm = document.getElementById("coment-form")
const confCom = document.querySelector(".conf-com");
const addBackdrop = document.querySelector(".backdrop-2");
const editFormCom = document.getElementById("edit-com-form");
const editComBackdrop = document.querySelector(".backdrop-edit-com");
const deleteComBackdrop = document.querySelector(".backdrop-delete");
const closeModal = document.getElementById("formCloseBtn");

const fetchButton = document.getElementById("fetch");
const perPageInput = document.querySelector(".per-page");
const pageInput = document.querySelector(".page");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const newsSpan = document.getElementById("news-num");
const pageNum = document.getElementById("page-num");
const totalPagesSpan = document.getElementById("total-pages");
const pages = document.querySelector(".pages");

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
        const data = await response.json();
        const articles = Array.isArray(data.data) ? data.data : [];

        dataArray = articles.map((article, index) => ({
            _index: index,
            id: article.id,
            author: article.author || "Невідомо",
            title: article.title || "Без назви",
            description: article.description || "Немає опису",
            content: article.content || "—",
            comments: Array.isArray(article.comments) ? article.comments : []
        }));

        renderList(dataArray);

        search.addEventListener("input", inputFilterData)

        function inputFilterData(e) {
            const value = e.target.value.toLowerCase().trim();
            filterCards(value);
        }

        function filterCards(value) {
            const filteredData = dataArray.filter(item =>
                item.title.toLowerCase().includes(value)
            );
            renderList(filteredData);
        }

        pages.classList.remove("is-hidden");
        infoSection.classList.remove("is-hidden");
        searchDiv.classList.remove("is-hidden");
        totalResults = data.items || 0;
        totalPages = Math.ceil(totalResults / perPage);
        totalPagesSpan.textContent = totalPages;
        pageNum.textContent = page;
        newsSpan.textContent = totalResults;
        pageInput.max = totalPages;
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
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const response = await fetch("http://localhost:3000/articles");
        const articles = await response.json();
        data.id = articles.length + 1;
        data.comments = [];
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
    pages.classList.remove("is-hidden");
    infoSection.classList.remove("is-hidden");
    searchDiv.classList.remove("is-hidden");
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
        const id = article.id;
        if (!id) {
            console.error("❌ Помилка: елемент не має id, тому його не можна видалити із сервера.");
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
    } catch (error) {
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

// async function addCommentsToServer() {
//     // Отримуємо всі статті з сервера
//     const response = await fetch("http://localhost:3000/articles");
//     const existingArticles = await response.json();

//     // Визначаємо наступний ID для нових статей
//     let nextId = existingArticles.length + 1;

//     for (const article of existingArticles) {
//         // Якщо стаття вже має id, залишаємо його, інакше присвоюємо новий
//         const articleId = article.id ? article.id : String(nextId++);

//         // Створюємо оновлену статтю з коментарем
//         const updatedArticle = {
//             ...article,
//             id: articleId,
//             comments: [
//                 {
//                     id: 1,
//                     user: "John Doe",
//                     text: "Цікава стаття!",
//                     date: new Date().toISOString()
//                 }
//             ]
//         };

//         // Відправляємо оновлення на сервер
//         // Якщо стаття мала id — PATCH, якщо нова — POST
//         if (article.id) {
//             await fetch(`http://localhost:3000/articles/${article.id}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(updatedArticle)
//             });
//         } else {
//             await fetch("http://localhost:3000/articles", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(updatedArticle)
//             });
//         }
//     }

//     console.log("✅ Статті оновлені або додані з коментарями на сервер");
// }
  

// await addCommentsToServer();

//! Додавання коментаря
async function addComment(newsId, newComment) {
    try {
        const res = await fetch(`${baseUrl}articles/${newsId}`);
        if (!res.ok) throw new Error("Не вдалося отримати новину");
        const article = await res.json();

        const updatedComments = Array.isArray(article.comments)
            ? [...article.comments, newComment]
            : [newComment];

        const response = await fetch(`${baseUrl}articles/${newsId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ comments: updatedComments }),
        });
        const updatedArticle = await response.json();

        dataArray = dataArray.map(item => item.id === newsId ? {
            ...item,
            comments: updatedArticle.comments
        } : item);
        renderList(dataArray)
    } catch (error) {
        console.error("Помилка при додаванні коментаря:", error);
    }
}

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("coments-button")) {
        const newsId = e.target.dataset.id;
        confCom.dataset.newsId = newsId;

        addBackdrop.classList.remove("is-hidden");
    }
});

closeModal.addEventListener("click", () => {
    comForm.reset();
    addBackdrop.classList.add("is-hidden");})

confCom.addEventListener("click", async function (e) {
    e.preventDefault();

    const newsId = e.target.dataset.newsId;
    if (!newsId) return;

    const user = comForm.user.value;
    const text = comForm.text.value;

    if (!text) return alert("Введіть коментар");

    const newComment = {
        id: Date.now(),
        user: user || "Анонім",
        text,
        date: new Date().toISOString()
    };
    await addComment(newsId, newComment);

    comForm.reset();
    addBackdrop.classList.add("is-hidden");
});



let currentArticleIndex;
let currentCommentId;

//! Видалення коментаря

list.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-cmnt")) {
        const articleItem = e.target.closest("[data-index]");
        const articleIndex = Number(articleItem.dataset.index);
        const commentItem = e.target.closest("[data-comment-id]");
        const commentId = Number(commentItem.dataset.commentId);
        currentArticleIndex = articleIndex;
        currentCommentId = commentId;
        deleteComBackdrop.classList.remove("is-hidden");
    }
});

confirmDelete.addEventListener("click", async (e) => {
    console.log("Perevirka")
    e.preventDefault();

    try {
        const article = dataArray[currentArticleIndex];
        const commentIndex = article.comments.findIndex(
            (comment) => comment.id === currentCommentId
        );

        article.comments.splice(commentIndex, 1);

        renderList(dataArray);

        const url = `${baseUrl}articles/${article.id}`;
        await fetch(url, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article),
        });

        deleteComBackdrop.classList.add("is-hidden");
        currentArticleIndex = null;
        currentCommentId = null;
    } catch (error) {
        console.error("Помилка при видаленні коментаря:", error);
    }
});

cancelDelete.addEventListener("click", () => {
    deleteComBackdrop.classList.add("is-hidden");
});


// //! Редагування коментаря
list.addEventListener("click", async (e) => {
    if (e.target.classList.contains("edit-cmnt")) {
        const articleItem = e.target.closest("[data-index]");
        const articleIndex = Number(articleItem.dataset.index);
        const commentItem = e.target.closest("[data-comment-id]");
        const commentId = Number(commentItem.dataset.commentId);

        const article = dataArray[articleIndex];
        const comment = article.comments.find(comment => comment.id === commentId);


        editFormCom.elements["user"].value = comment.user;
        editFormCom.elements["text"].value = comment.text;

        currentArticleIndex = articleIndex;
        currentCommentId = commentId;

        editComBackdrop.classList.remove("is-hidden");
    }
});

editFormCom.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(editFormCom);
        const updatedComment = Object.fromEntries(formData.entries());

        const article = dataArray[currentArticleIndex];
        const commentIndex = article.comments.findIndex(comment => comment.id === currentCommentId);

        article.comments[commentIndex] = {
            ...article.comments[commentIndex],
            ...updatedComment,
            date: new Date().toISOString(),
        };

        renderList(dataArray);

        const url = `${baseUrl}articles/${article.id}`;
        await fetch(url, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article),
        });

        editFormCom.reset();
        editComBackdrop.classList.add("is-hidden");
        currentArticleIndex = null;
        currentCommentId = null;
    } catch (error) {
        console.error("Помилка при оновленні коментаря:", error);
    }
});

// //! Кнопка скасувати
editFormCom.querySelector(".cancel-edit").addEventListener("click", () => {
    editFormCom.reset();
    editComBackdrop.classList.add("is-hidden");
});