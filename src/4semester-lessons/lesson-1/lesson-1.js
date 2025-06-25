const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryContainer = document.querySelector(".js-gallery");
const lightboxImage = document.querySelector(".lightbox__image");
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".lightbox");
const closeButton = document.querySelector(".lightbox__button");
const overlay = document.querySelector(".lightbox__overlay");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
const currentPhotoText = document.querySelector(".current-photo");
const descriptionText = document.querySelector(".description");

const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
      
  })
  .join("");

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  if (!target.classList.contains("gallery__image")) return;

  const originalSrc = target.dataset.source;
  const altText = target.alt;

  lightboxImage.src = originalSrc;
  lightboxImage.alt = altText;
});

gallery.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    modal.classList.add("is-open");
  }

  const originalSrc = target.dataset.source;
  const altText = target.alt;

  currentIndex = galleryItems.findIndex(
    (item) => item.original === originalSrc
  );

  updateModalImage(currentIndex);
});

closeButton.addEventListener("click", (event) => {
  modal.classList.remove("is-open");
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

let currentIndex = 0;

function updateModalImage(index) {
  const { original, description } = galleryItems[index];
  lightboxImage.src = original;
  lightboxImage.alt = description;
}

rightButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateModalImage(currentIndex);
});

leftButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateModalImage(currentIndex);
});

document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateModalImage(currentIndex);
    } else if (event.key === "ArrowLeft") {
        currentIndex =
            (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalImage(currentIndex);
    }
});

function closeModal() {
  console.log("Закриваємо модалку");
  modal.classList.remove("is-open");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

function updateModalImage(index) {
  const item = galleryItems[index];
  lightboxImage.src = item.original;
  lightboxImage.alt = item.description;

  currentPhotoText.textContent = `Фото ${index + 1} з ${galleryItems.length}`;
  descriptionText.textContent = item.description;
}