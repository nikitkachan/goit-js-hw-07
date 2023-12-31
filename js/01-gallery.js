import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function renderImgEl (arr, container) {
    const markup = arr.map(
        (img) => `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`
    )
    .join("");

  container.insertAdjacentHTML("beforeend", markup);
};

function modalInstance(event) {
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" alt="${event.target.alt}" />`, {
    onShow: (instance) => window.addEventListener("keydown", modalClose), 
		onClose: (instance) => window.removeEventListener("keydown", modalClose),
	});
  instance.show();
  
  function modalClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  };
};

function handleClick (event) {
  event.preventDefault();
  if (event.target.nodeName !==  "IMG") {
    return;
  };

  modalInstance(event);
}


galleryEl.addEventListener("click", handleClick);
renderImgEl(galleryItems, galleryEl);