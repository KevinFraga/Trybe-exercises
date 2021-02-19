const string = require('./string.js');

/*
Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
*/

test('spyon', () => {
  const spy = jest.spyOn(string, 'upperCase');
  expect(spy('teste')).toBe('TESTE');

  spy.mockImplementation((string) => string.toLowerCase());
  expect(spy('TESTE')).toBe('teste');

  spy.mockRestore();
  expect(string.upperCase('Teste')).toBe('TESTE');
});
