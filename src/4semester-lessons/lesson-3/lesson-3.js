//! знаходимо всі зображення
const pictures = document.querySelectorAll(".picture");

const loadImage = (img) => { 
    img.src = img.dataset.src;
};


//! callback функція для IntersectionObserver
const loadsPictures = (entries) => {

    entries.forEach((entry) => {

      //! перевірка чи зображення є в полі зору
      if (entry.isIntersecting) {
          const img = entry.target;
          

          //! припинення стеження за елементом
          observer.unobserve(img);

        //! Завантажуємо зображення
          loadImage(entry.target);

        console.log("Зображення в полі зору:", img.dataset.src);
      }
    });
};

//! Створення обсерверу
const observer = new IntersectionObserver(loadsPictures, {
  rootMargin: "30px", //! Трохи раніше починає завантаження
  threshold: 0.7,
});

//! спостереження за зображеннями
pictures.forEach((img) => observer.observe(img));