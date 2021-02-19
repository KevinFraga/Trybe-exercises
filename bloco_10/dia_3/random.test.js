/*
Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função.
Utilizando o mock, defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
*/

function random() {
  return Math.floor(Math.random() * 100);
}

test('mocking random', () => {
  random = jest.fn().mockReturnValue(10);
  random();
  expect(random).toHaveBeenCalled();
  expect(random).toHaveBeenCalledTimes(1);
  expect(random()).toBe(10);
  expect(random).toHaveBeenCalledTimes(2);
});

/*
Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
*/

test('mock implementation once', () => {
  random = jest.fn(() => 10).mockImplementationOnce((a, b) => a / b);
  expect(random(15, 3)).toBe(5);
  expect(random()).toBe(10);
});

/*
Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.
Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.
Faça os testes necessários.
*/

test('multiple mock implementations', () => {
  random = jest.fn().mockImplementation((a, b, c) => a * b * c);
  expect(random(1, 2, 3)).toBe(6);

  random.mockReset().mockImplementation((a) => 2 * a);
  expect(random(2)).toBe(4);
});
