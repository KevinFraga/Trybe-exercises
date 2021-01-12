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
