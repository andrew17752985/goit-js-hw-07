import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryDivs = galleryItems.map(({original, preview, description }) => {
     return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
 });
gallery.insertAdjacentHTML('afterbegin', galleryDivs.join(''));


new SimpleLightbox('.gallery a', {
    captionsData: "alt", 
    captionDelay: 250,
});

   
    
     