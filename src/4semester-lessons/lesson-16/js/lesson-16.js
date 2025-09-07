const fetchButton = document.getElementById("fetch");
const list = document.querySelector(".data-list");
const input = document.querySelector(".input");

fetchButton.addEventListener("click", fetchNews);

function fetchNews() {
    const count = input.value;
    if (!count) return;

  fetchData(count)
    .then((articles) => renderNews(articles))
    .catch((error) => console.log("error:", error));
}

function fetchData(count) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${count}&apiKey=56b82358896449f994f5fabbc62ff5f5`;

  return fetch(url)
    .then((response) => {
      if (response.status === 426) {
        alert(
          "Отакої, відправити запит можна тільки з локального хоста (помилка 426)"
        );
      }

      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => data.articles)
    .catch((error) => {
      alert("Помилка при завантаженні новин: " + error.message);
    });
}

function renderNews(articles) {
  const markUp = articles
    .map((article) => {
      return `
        <li>
          <h2>${article.title}</h2>
          <p>${article.description || "Без опису"}</p>
          <a href="${article.url}" target="_blank">Читати далі</a>
        </li>
      `;
    })
    .join("");

  list.innerHTML = markUp;
}
