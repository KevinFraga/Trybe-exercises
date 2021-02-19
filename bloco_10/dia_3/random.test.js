/*
Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função.
Utilizando o mock, defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
*/

function random() {
  return Math.floor(Math.random() * 100);
}

test('testing random', () => {
  random = jest.fn().mockReturnValue(10);
  random();
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
  expect(random()).toBe(10);
  expect(random).toHaveBeenCalledTimes(2);
});
