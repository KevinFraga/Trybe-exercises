const string = require('./string.js');

/*
Dentro de um mesmo arquivo, crie três funções.
A primeira deve receber uma string e retorná-la em caixa alta.
A segunda deve também receber uma string e retornar só a primeira letra.
A terceira deve receber duas strings e concatená-las.
Faça o mock do arquivo.
Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
A terceira deve receber três strings e concatená-las.
*/

jest.mock('./string.js');

test('mock implementations', () => {
  string.upperCase.mockImplementation((string) => string.toLowerCase());
  string.firstLetter.mockImplementation((string) => string.slice(-1));
  string.concat.mockImplementation(
    (string1, string2, string3) => `${string1}${string2}${string3}`
  );
  expect(string.upperCase('Teste')).toBe('teste');
  expect(string.firstLetter('teste')).toBe('e');
  expect(string.concat('a', 'b', 'c')).toBe('abc');
});
