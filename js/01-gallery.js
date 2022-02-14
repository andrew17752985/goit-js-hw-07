import { galleryItems } from './gallery-items.js';

// Change code below this line


const gallery = document.querySelector('.gallery');

 const galleryDivs = galleryItems.map(item => {
     return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
 });

gallery.insertAdjacentHTML('afterbegin', galleryDivs.join(''));

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const picture = event.target;
    if (picture.nodeName !== 'IMG') {
        return;
    };
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${picture.getAttribute("data-source")}" width="800" height="600">
        <a>Close</a>
    </div>
`, {
        onShow: (instance) => {
        instance.element().querySelector('.modal').onclick = instance.close;
      
    }
    
    })
    instance.show(); 
    function onEscapeClick(event) {
      if (event.keyCode === 27) { 
          instance.close(() => document.removeEventListener("keydown", onEscapeClick));
        }
    }

    document.addEventListener("keydown", onEscapeClick) ;
})


   
    
     