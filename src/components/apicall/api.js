const apiUrl = 'https://myamazon.onrender.com/';

export function fetchApi(endpoint) {
  return fetch(`${apiUrl}${endpoint}`)
    .then(response => response.json())
    .catch(error => console.error(error));
}