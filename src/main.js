import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

let lightbox;
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const request = input.value.trim();
  if (!request) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query...',
      position: 'topLeft',
    });
    return;
  }
  loader.style.display = 'block';
  fetchImages(request)
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        gallery.innerHTML = '';
        iziToast.info({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topLeft',
          timeout: 3000,
        });
        form.reset();
        return;
      }
      createMarkup(data.hits);
      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery a', {
          captions: true,
          captionDelay: 300,
          captionSelector: 'img',
          captionType: 'attr',
          captionsData: 'alt',
        });
      }
    })
    .catch(error => {
      loader.style.display = 'none';
      console.error(error);
    });
}
