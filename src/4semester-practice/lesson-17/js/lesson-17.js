const fetchButton = document.getElementById("fetch");
const list = document.querySelector(".data-list");
const perPageInput = document.querySelector(".per-page");
const pageInput = document.querySelector(".page");
// const prevButton = document.querySelector(".prev-button");
// const nextButton = document.querySelector(".next-button");

let page = 1;

fetchButton.addEventListener("click", fetchPosts);
// prevButton.addEventListener("click", fetchPostsPrev);
// nextButton.addEventListener("click", fetchPostsNext);

function fetchPosts() {
  fetchData()
    .then((posts) => {
      renderposts(posts);
      page += 1;
      if (page > 1) {
        fetchButton.textContent = "Заватажити ще"
      }
    })
    .catch((error) => console.log("error:", error));
}

function fetchData() {
  const baseUrl = "https://jsonplaceholder.typicode.com/";
  const endPoint = "posts";
  const perPage = Number(perPageInput.value);

  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  }); //! ЕКЗЕПЛЯР КЛАСУ
  return fetch(
    // `https://jsonplaceholder.typicode.com/posts?_limit=${perPageInput.value}&_page=${pageInput.value}`
    `${baseUrl}${endPoint}?${params}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  // .then((data) => {
  //   //! Data handling
  //   console.log("data:", data); //! масив об'єктів з користувачами
  // });
  //   .catch((error) => {
  //     //! Error handling
  //     console.log("error:", error);
  //   });
}

function renderposts(posts) {
  console.log(posts);
  const markUp = posts
    .map((post) => {
      return `
        <li>
        <h2>Title: ${post.title}</h2>
        <p>postID: ${post.postId}</p>
        <p>ID: ${post.id}</p>
        <p>body: ${post.body}</p>
        </li>
        `;
    })
    .join("");

  list.innerHTML += markUp; // або insetr agastment
}

// function fetchPostsPrev() {
//   if (page <= 1) return;
//   page--;
//   pageInput.value = post;
//   fetchPosts();
// }

// function fetchPostsNext() {
//   if (page >= totalPages) return;
//   page++;
//   pageInput.value = page;
//   fetchPosts();
// }