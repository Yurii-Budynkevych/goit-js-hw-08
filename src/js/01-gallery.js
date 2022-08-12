import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const elements = galleryItems
  .map(element => {
    return `<li><a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a></li>`;
  })
  .join('');
galleryEl.insertAdjacentHTML('afterbegin', elements);
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
