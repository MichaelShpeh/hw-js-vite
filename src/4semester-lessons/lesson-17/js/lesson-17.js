const fetchButton = document.getElementById("fetch");
const list = document.querySelector(".data-list");
const perPageInput = document.querySelector(".per-page");
const pageInput = document.querySelector(".page");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const newsSpan = document.getElementById("news-num");
const pageNum = document.getElementById("page-num");
const totalPagesSpan = document.getElementById("total-pages");

let totalResults = 0;
let totalPages = 1;
let page = 1;

function computePerPage() {
  return Number(perPageInput.value) || 5;
}

function updatePageNum() {
  pageNum.textContent = page;
  const perPage = computePerPage();
  const capped = Math.min(totalResults, 100);
  totalPages = Math.max(1, Math.ceil(capped / perPage));

  totalPagesSpan.textContent = totalPages;
  pageInput.min = 1;
  pageInput.max = totalPages;

  prevButton.disabled = page <= 1;
  pageInput.disabled = page >= totalPages;
}

fetchButton.addEventListener("click", fetchPosts);
prevButton.addEventListener("click", fetchPostsPrev);
nextButton.addEventListener("click", fetchPostsNext);

function fetchPosts() {
  page = Number(pageInput.value) || 1;

  fetchData()
    .then((data) => {
      totalResults = data.totalResults || 0;
      renderPosts(data.articles || []);
      newsSpan.textContent = totalResults;
      updatePageNum();
    })
    .catch((error) => {
      console.log("error:", error);
      updatePageNum();
    });
}

function fetchData() {
  const baseUrl = "https://newsapi.org/v2/";
  const endPoint = "top-headlines?country=us&";
  const perPage = computePerPage();
  const apiKey = "apiKey=56b82358896449f994f5fabbc62ff5f5";

  return fetch(`${baseUrl}${endPoint}pageSize=${perPage}&page=${page}&${apiKey}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    });
}

function renderPosts(posts) {
  const markUp = posts
    .map((post) => {
      return `
        <li>
          <h2>Title: ${post.title}</h2>
          <p>${post.description || "Без опису"}</p>
          <a href="${post.url}" target="_blank">Читати далі</a>
        </li>
      `;
    })
    .join("");

  list.innerHTML = markUp || "<li>Новин немає</li>";
}

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
