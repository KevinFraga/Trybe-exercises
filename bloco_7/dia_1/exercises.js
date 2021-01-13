/* 
Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
  Modifique a estrutura da função para que ela seja uma arrow function .
  Modifique as concatenações para template literals .
*/

const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

 testingScope(true);

/*
Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
  Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
  Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function sort(array) {
  let holder = 0;
  let answer = 'Os números';
  for (let index = 0; index < array.length - 1; index += 1) {
    for (let helper = 0; helper < array.length - index - 1; helper += 1) {
      if (array[helper] > array[helper + 1]) {
        holder = array[helper];
        array[helper] = array[helper + 1];
        array[helper + 1] = holder;
      }
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    answer += ` ${array[index]},`;
  }
  answer += ` se encontram ordenados de forma crescente!`;
  return answer;
}

console.log(sort(oddsAndEvens));

const oneLiner = array => array.sort((a, b) => a - b);

console.log(oneLiner(oddsAndEvens));

/*
Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.
*/

const factorial = number => {
  let answer = 1;
  for (let index = number; index > 0; index -= 1) {
    answer *= index;
  }
  return answer;
}

console.log(factorial(4));

const factorialOneLiner = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorialOneLiner(5));

/*
Crie uma função que receba uma frase e retorne qual a maior palavra.
*/

const longestWord = word => {
  let helper = word.split(' ');
  let answer = helper[0];
  for (let index = 1; index < helper.length; index += 1) {
    if (helper[index].length > answer.length) {
      answer = helper[index];
    }
  }
  return answer;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'

const longestOneLiner = word => word.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestOneLiner("Antônio foi no banheiro e não sabemos o que aconteceu"));
