/* 1) 
A função sum(a, b) retorna a soma do parâmetro a com o b
  Teste se o retorno de sum(4, 5) é 9
  Teste se o retorno de sum(0, 0) é 0
  Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
  Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {sum(4, '5'), 9});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);

/* 2) 
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Verifique se o array passado por parâmetro não sofreu alterações
  Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 4 ]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [ 1, 2, 3, 4 ]);

const array2 = [1, 2, 3, 4, 5];
myRemove(array2, 5);
assert.deepStrictEqual(array2, [1, 2, 3, 4, 5]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

/* 3)
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

const array3 = [1, 2, 3, 4];
myRemoveWithoutCopy(array3, 3);
assert.notDeepStrictEqual(array3, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

/* 4)
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
  Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz');
assert.strictEqual(myFizzBuzz(17), 17);
assert.strictEqual(myFizzBuzz('Q'), false);

// 5) Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);

// 6) Escreva a função addOne para passar nos testes já implementados.

// escreva a função addOne aqui
function addOne(array) {
  let answer = [];
  for (let index = 0; index < array.length; index += 1) {
    answer[index] = array[index] + 1;
  }
  return answer;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected1 = [32, 58, 13, 6];
const output1 = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output1, expected1);
assert.deepStrictEqual(myArray, unchanged);

// 7) Escreva a função wordLengths para passar nos testes já implementados.

// escreva a função wordLengths aqui
function wordLengths(word) {
  let answer = [];
  for (let index = 0; index < word.length; index += 1) {
    answer[index] = word[index].length;
  }
  return answer;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected2 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output2 = wordLengths(words);
assert.deepStrictEqual(output2, expected2);
