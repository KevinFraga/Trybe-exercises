const myRemoveWithoutCopy = (arr, item) => {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
};

/*
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/

let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('removing 3', () => {
  expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4]);
});

test('checking functionality', () => {
  expect(myRemoveWithoutCopy(array, 3)).not.toEqual([1, 2, 3, 4]);
});

test('checking parameter array', () => {
  const array2 = myRemoveWithoutCopy(array, 3);
  expect(array).not.toEqual([1, 2, 3, 4]);
});

test('trying to remove 5', () => {
  expect(myRemoveWithoutCopy(array, 5)).toEqual([1, 2, 3, 4]);
});
