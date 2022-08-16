const API_URL = 'https://icanhazdadjoke.com/';

const append = (joke) => {
  const h2 = document.querySelector('#jokeContainer');
  const p = document.createElement('p');
  p.innerText = joke;
  h2.appendChild(p);
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      const joke = data.joke;
      append(joke);
    });
};

window.onload = () => fetchJoke();
