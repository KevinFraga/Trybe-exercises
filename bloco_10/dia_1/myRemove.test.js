const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

/*
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

test('removes an item', () => {
  const array = [1, 2, 3, 4];
  expect(myRemove(array, 3)).toEqual([1, 2, 4]);
  expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
  const array2 = myRemove(array, 3);
  expect(array).toEqual([1, 2, 3, 4]);
  expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
});