import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function renderImgEl (arr, container) {
    const markup = arr.map(
        (img) => `<li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>`  
    )
    .join("");

  container.insertAdjacentHTML("beforeend", markup);
};

renderImgEl(galleryItems, galleryEl);

const gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250" });
