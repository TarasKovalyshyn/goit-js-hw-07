import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createListGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
// стоврює морозмітку для картинок
function createListGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
    })
    .join("");
}
// додаємо слухача подій на контейнер
galleryRef.addEventListener("click", onGalleryRefClick);
// обмеження стандартних дій браузера
function onGalleryRefClick(evt) {
  evt.preventDefault();
  //   перевірка кліку _ якщо не "IMG", виходимо з функції
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // додаємо розмітку для модалки
  const newImgRef = evt.target.dataset.source;
  const instance = basicLightbox.create(`<div class="modal">
<img src ="${newImgRef}" width="800" height="600"> </div>
`);
  instance.show();
  // додаємо слухача подій длязакриттямодалки через клавішу "ESC"
  galleryRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
};
