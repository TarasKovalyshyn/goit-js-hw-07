
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
      return `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
  />
</a>
</li>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' , captionDelay: 250});







