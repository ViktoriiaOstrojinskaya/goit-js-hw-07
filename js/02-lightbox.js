import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCards = document.querySelector('.gallery');
const markup = createImagesMarkup(galleryItems);
galleryCards.insertAdjacentHTML('beforeend', markup);

function createImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
