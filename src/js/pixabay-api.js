const API_KEY = '47026899-90f4472111ba4dcf335a9f60a';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(request) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${searchParams}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topLeft',
      });
      console.error('There was a problem with the fetch operation:', error);
    });
}
