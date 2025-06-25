const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two");
const buttonThree = document.querySelector(".three");
const list = document.querySelector(".list");

buttonOne.addEventListener("click", (event) => {
  console.log("Це подія 1");
  event.stopPropagation(); //! перешкоджає просуванню події далі
});

buttonTwo.addEventListener("click", (event) => {
  console.log("Це подія 2");
  event.stopPropagation(); //! перешкоджає просуванню події далі
});
buttonThree.addEventListener("click", (event) => {
  console.log("Це подія 3");
  event.stopPropagation(); //! перешкоджає просуванню події далі
});

list.addEventListener("click", (event) => {
  console.log("Це подія списку");
});
