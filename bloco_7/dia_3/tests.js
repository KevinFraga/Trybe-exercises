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

const array = [1, 2, 3, 4, 5];
const array2 = myRemove(array, 5);
assert.deepStrictEqual(array, [1, 2, 3, 4, 5]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
