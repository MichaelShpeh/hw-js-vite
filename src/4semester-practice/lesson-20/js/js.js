const input = document.querySelector(".input");
let list = document.querySelector(".list");

const data = [
    {
        userId: 4,
        id: "37",
        title: "provident vel ut sit ratione est",
        body: "debitis et eaque non officia sed nesciunt pariatur vel..."
    },
    {
        userId: 4,
        id: "38",
        title: "explicabo et eos deleniti nostrum ab id repellendus",
        body: "animi esse sit aut sit nesciunt assumenda eum voluptas..."
    },
    {
        userId: 4,
        id: "39",
        title: "eos dolorem iste accusantium est eaque quam",
        body: "corporis rerum ducimus vel eum accusantium..."
    },
    {
        userId: 4,
        id: "40",
        title: "enim quo cumque",
        body: "ut voluptatum aliquid illo tenetur nemo sequi quo facilis..."
    }
];

function renderCards(data) {
    const markup = data.map((item) => {
        return `
    <li>
    <p><b>${item.title}</b></p> 
    <p>${item.body}</p>
    </li>
    `
    }).join("")

    list.innerHTML = markup;
}

renderCards(data)

input.addEventListener("input", inputFilterData)


function inputFilterData(e) {
    const value = e.target.value.toLowerCase().trim()
    filterCards(value)
}

function filterCards(value) {
    const filteredData = data.filter(item => item.title.toLowerCase().includes(value))

  renderCards(filteredData)
}