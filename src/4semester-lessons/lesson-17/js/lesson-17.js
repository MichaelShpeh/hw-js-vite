const fetchButton = document.getElementById("fetch");
const list = document.querySelector(".data-list");
const perPageInput = document.querySelector(".per-page");
const pageInput = document.querySelector(".page");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const newsSpan = document.getElementById("news-num");
const pageNum = document.getElementById("page-num");

function updatePageNum() {
  pageNum.textContent = page;
}

let totalResults = 0;
let page = 1;

updatePageNum();

fetchButton.addEventListener("click", fetchPosts);
prevButton.addEventListener("click", fetchPostsPrev);
nextButton.addEventListener("click", fetchPostsNext);

function fetchPosts() {
  page = Number(pageInput.value);

  fetchData()
    .then((data) => {
      totalResults = data.totalResults;
      renderPosts(data.articles);
      newsSpan.textContent = totalResults;
    })
    .catch((error) => console.log("error:", error));

  updatePageNum();
}
function fetchData() {
  const baseUrl = "https://newsapi.org/v2/";
  const endPoint = "top-headlines?country=us&";
  const perPage = perPageInput.value;
  page = Number(pageInput.value);
  const apiKey = "apiKey=56b82358896449f994f5fabbc62ff5f5";


  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });
  return fetch(
    // `https://jsonplaceholder.typicode.com/posts?_limit=${perPageInput.value}&_page=${pageInput.value}`
    `${baseUrl}${endPoint}pageSize=${perPage}&page=${page}&${apiKey}`
  ).then((response) => {
    if (response.status === 426) {
      alert(
        "Отакої, відправити запит можна тільки з локального хоста (помилка 426)"
      );
    }
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderPosts(posts) {
  console.log(posts);
  const markUp = posts
    .map((post) => {
      return `
        <li>
        <h2>Title: ${post.title}</h2>
        <p>ID: ${post.id}</p>
        <p>body: ${post.body}</p>
        <a href="${post.url}" target="_blank">Читати далі</a>
        </li>
        `;
    })
    .join("");

  list.innerHTML = markUp;
}

function fetchPostsPrev() {
  if (page > 1) {
    page -= 1;
    pageInput.value = page;
    fetchData()
      .then((data) => {
        renderPosts(data.articles);
        newsSpan.textContent = totalResults;
      })
      .catch((error) => console.log("error:", error));
  }

  updatePageNum();
}

function fetchPostsNext() {
  if (page >= 100) return;

  page += 1;
  pageInput.value = page;
  fetchData()
    .then((data) => {
      renderPosts(data.articles);
      newsSpan.textContent = totalResults;
    })
    .catch((error) => console.log("error:", error));

  updatePageNum();
}