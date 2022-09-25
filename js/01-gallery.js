import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryCards = document.querySelector('.gallery');
const galleryImagesItems = createImagesMarkup(galleryItems);
galleryCards.insertAdjacentHTML('beforeend', galleryImagesItems);

function createImagesMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>
`;
    })
    .join('');
}

galleryCards.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const activeImages = event.target;
  const instance = basicLightbox.create(
    `
      <div class="modal">
          <img src="${activeImages.dataset.source}"/>
      </div>
    `
  );
  instance.show();

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
}

console.log(galleryItems);
