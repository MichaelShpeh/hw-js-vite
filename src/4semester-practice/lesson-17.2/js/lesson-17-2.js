const elementsPerPageInput = document.getElementById('per-page');
const elementAfterWhichInput = document.getElementById('element-after-which');

const fetchElementsBtn = document.querySelector(".fetch-btn");

const infoNumberElements = document.querySelector(".number-elements");
const infoPage = document.querySelector(".page");
const infoNumberOfPages = document.querySelector(".number-of-pages");

const elementsList = document.querySelector(".elements-list");

const fetchElementsPrevBtn = document.getElementById("prev");
const fetchElementsNextBtn = document.getElementById("next");


//! Кількість елементів N у групі (на сторінці):
// let perPage;

//! Кількість елементів після якого показуємо наступні N элементів:
let elementAfterWhich;

//! Кількість елементів у колекції:
// const numberElements = 367;
let numberElements;

//! Номер сторінки
let page;

//! Кількість груп (сторінок):
let numberPages;

//! url-адреса попередньої сторінки
let urlPrev = "";

//! url-адреса наступної сторінки
let urlNext = "";

//! Лічильник для гортання сторінок
let countPage = 0;

let previousUrl;
let nextUrl;

let perPage = Number(elementsPerPageInput.value);

fetchElementsBtn.addEventListener("click", fetchElements);
fetchElementsPrevBtn.addEventListener("click", fetchElementsPrev);
fetchElementsNextBtn.addEventListener("click", fetchElementsNext);

//! Функція, яка викликає функції, які роблять запит та рендерять пости
function fetchElements() {
    fetchData()
        .then((posts) => {
            renderposts(posts);
        })
        .catch((error) => console.log("error:", error));
    
    if (elementAfterWhichInput.value !== "") {
        elementAfterWhich = Number(elementAfterWhichInput.value);
        page = Math.floor(elementAfterWhich / perPage) + 1;
    } else {
        elementAfterWhich = 0;
        page = 1;
        }
}

//! Функція, яка робить запит на сервер
function fetchData() {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const endPoint = "pokemon";

    

    if (elementAfterWhichInput.value !== "") {
        elementAfterWhich = Number(elementAfterWhichInput.value);
    } else {
        elementAfterWhich = (page - 1) * perPage;
    }

    const params = new URLSearchParams({
        limit: perPage,
        offset: elementAfterWhich,
    });

    return fetch(`${baseUrl}${endPoint}?${params}`)
        .then((response) => {

            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}




//! Функція для "Рендеру" постів
function renderposts(data) {
    console.log(data);


    const markUp = data.results
        .map((pokemon) => {
            return `
                <li>
                    <h2>${pokemon.name}</h2>
                    <a>${pokemon.url}</a>
                </li>
            `;
        })
        .join("");

    elementsList.innerHTML = markUp;

    //! Оновлюємо кількість елементів і сторінок
    numberElements = data.count;
    numberPages = Math.ceil(numberElements / Number(elementsPerPageInput.value));

    infoNumberElements.textContent = numberElements;
    infoPage.textContent = page;
    infoNumberOfPages.textContent = numberPages;

    previousUrl = data.previous;
    nextUrl = data.next;
}

//! Код кнопки назад
function fetchElementsPrev() {
    if (!previousUrl) return;
    page--
    fetch(previousUrl)
        .then((response) => response.json())
        .then((data) => renderposts(data))
        .catch((error) => console.error(error));
}

function fetchElementsNext() {
    if (!nextUrl) return;
    page++
    fetch(nextUrl)
        .then((response) => response.json())
        .then((data) => renderposts(data))
        .catch((error) => console.error(error));
}