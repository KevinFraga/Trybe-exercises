// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(palavra) {
  let answer = true,
    helper = palavra.length;
  for (let index = 0; index < helper / 2; index += 1) {
    if (palavra[index] != palavra[helper - 1 - index]) {
      answer = false;
    }
  }
  return answer;
}

console.log(palindromo("Testeee"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function Maior(array) {
  let helper = array[0],
    answer = 0;
  for (let index in array) {
    if (array[index] > helper) {
      helper = array[index];
      answer = index;
    }
  }
  return answer;
}

console.log(Maior([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function Menor(array) {
    let helper = array[0],
      answer = 0;
    for (let index in array) {
      if (array[index] < helper) {
        helper = array[index];
        answer = index;
      }
    }
    return answer;
  }

  console.log(Menor([2, 4, 6, 7, 10, 0, -3]));