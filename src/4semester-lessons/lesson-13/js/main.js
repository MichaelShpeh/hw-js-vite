document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const scriptName = btn.getAttribute("data-script");

    // Динамічний імпорт повертає проміс
    import(`./${scriptName}`)
      .then((module) => {
        alert(`${scriptName} завантажено`);
        if (module.run) module.run();
      })
      .catch((error) => {
        console.error(`Помилка при завантаженні модуля ${scriptName}:`, error);
      });
  });
});
