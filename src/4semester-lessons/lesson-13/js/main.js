document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const scriptName = btn.getAttribute("data-script");

    //! Динамічний імпорт з папки js
    const module = await import(`./${scriptName}`);
    alert(`${scriptName} завантажено`);

    //! Викликаємо експортовану функцію, якщо є
    if (module.run) module.run();
  });
});
