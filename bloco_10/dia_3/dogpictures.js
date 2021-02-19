function dogPics() {
  const api = 'https://dog.ceo/api/breeds/image/random';
  return fetch(api)
    .then((response) => response.json())
    .then(({ message }) => message);
}

module.exports = { dogPics };
