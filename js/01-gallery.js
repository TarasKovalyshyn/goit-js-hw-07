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
// // додаємо слухача подій на контейнер
galleryRef.addEventListener("click",  handleClick);
function  handleClick(evt) {
// // обмеження стандартних дій браузера
  evt.preventDefault();
//   //   перевірка кліку _ якщо не "IMG", виходимо з функції
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  // Заміна значення атрибута src елемента <img> в модальному вікні
  const newImgRef = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<div class="modal">
    <img src ="${newImgRef}" width="800" height="600"> </div>
    `,
    {
      // закриття модального вікна після натискання клавіші Escape, Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
      onShow: (instance) => {
        document.addEventListener("keydown", onEscape);
      },

      onClose: (instance) => {
        document.removeEventListener("keydown", onEscape);
      },
    }
  );
  // Callback функція для зикривання модалки при кліку на esc 
  function onEscape(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
  instance.show();
}

