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

/*
2 - Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . 
Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. 
Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. 
Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
*/

const number_promise = new Promise((resolve, reject) => {
  const numbers = [];
  let sum;
  for (let index = 0; index < 10; index += 1) numbers[index] = Math.ceil(Math.random() * 50);
  sum = numbers.map(number => number * number).reduce((acc, cur) => acc + cur);
  if (sum < 8000) resolve(sum);
  else reject(sum);
})
  .then(response => multiplier.map(mult => response/mult))
  .then(response => response.reduce((acc, cur) => acc + cur))
//  .then(response => console.log(`A Promessa deu certo, a soma foi ${response}`))
//  .catch(response => console.log(`A promessa falhou, a soma foi ${response}`));
  .catch(response => console.log(`(${response}) É mais de oito mil! Essa promise deve estar quebrada!`));

// 3 - Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
const multiplier = [2, 3, 5, 10];

// 4 - Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

// 5 - Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

window.onload = () => fetchJoke();
