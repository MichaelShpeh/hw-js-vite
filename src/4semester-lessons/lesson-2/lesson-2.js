const slideBar = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

const newSize = _.debounce(() => {
  const size = slideBar.value;
  img.style.width = size + 'px';
}, 300);

slideBar.addEventListener("input", newSize);

const parentBox = document.querySelector(".parent-box");
const box = document.getElementById("box");

const movebox = _.debounce((e) => {
  const rect = parentBox.getBoundingClientRect();
  const boxSize = box.offsetWidth;
  
  let x = e.clientX - rect.left - boxSize / 2;
  let y = e.clientY - rect.top - boxSize / 2;

  x = Math.max(0, Math.min(x, rect.width - boxSize));
  y = Math.max(0, Math.min(y, rect.height - boxSize));

  box.style.transform = `translate(${x}px, ${y}px)`;
}, 10);

parentBox.addEventListener("mousemove", movebox);