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

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let nome = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function longo(array) {
  let answer = 0;
  for (let index in array) {
    if (array[index].length > array[answer].length) {
      answer = index;
    }
  }
  return array[answer];
}

console.log(longo(nome));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repete(array) {
  let helper,
    max = 0,
    answer;
  for (let index in array) {
    helper = 0;
    for (let counter in array) {
      if (array[counter] === array[index]) {
        helper += 1;
      }
    }
    if (helper > max) {
      max = helper;
      answer = array[index];
    }
  }
  return answer;
}

console.log(repete([2, 3, 2, 5, 8, 2, 3, 3, 3, 3]));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(number) {
  let answer = 0;
  for (let index = 1; index <= number; index += 1) {
    answer += index;
  }
  return answer;
}

console.log(somatorio(4));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word

function verificaFimPalavra(word, ending) {
  let answer = true,
    helper = 0;
  for (
    let index = word.length - ending.length;
    index < word.length;
    index += 1
  ) {
    if (word[index] != ending[helper]) {
      answer = false;
    }
    helper += 1;
  }
  return answer;
}

console.log(verificaFimPalavra("trybe", "be"));
