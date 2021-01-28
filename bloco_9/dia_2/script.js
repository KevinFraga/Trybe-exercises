const API_URL = 'https://icanhazdadjoke.com/';


// 1 - Como o primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! . Como? Vamos fazer juntos!

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
  };
  
  // A partir daí, faça a piada aparecer no DOM da sua página!
  const joke_container = document.getElementById('jokeContainer');
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(response => joke_container.innerText = response.joke);
};

window.onload = () => fetchJoke();
