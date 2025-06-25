const buttonBox = document.querySelector("#buttons-box"); //! 🔸1️⃣

buttonBox.addEventListener("click", (event) => {
  //! 🔸2️⃣
  console.log("event.target:", event.target); //! 🔸3️⃣

  console.log("event.target.tagName = ", event.target.tagName);

  console.log(`Клік в ${event.target.textContent}`);

  switch (event.target.tagName) {
    case "DIV":
      console.log(`Клік в ${event.target.tagName} - Buttons box`);
      break;
    case "BUTTON":
      console.log(`Клік в ${event.target.textContent}`);
      break;
    default:
      console.warn("НЕ спрацював ЖОДЕН блок!"); //! інструкції default блока;
  }

  event.target.classList.toggle("active"); //! додаємо/прибираємо клас для стилізації активного елемента;
});