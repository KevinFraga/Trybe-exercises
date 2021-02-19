const dogpic = require('./dogpictures');

/*
Crie uma função que faça requisição para a api dog pictures .
Mocke a requisição e crie dois testes.
O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess".
O segundo deve interpretar que a requisição falhou e ter como valor "request failed".
Crie todos os testes que achar necessário.
*/

describe('dogpic spy', () => {
  const spy = jest.spyOn(dogpic, 'dogPics');

  test('resolves', () => {
    spy.mockResolvedValue('request sucess');
    expect(spy()).resolves.toBe('request sucess');
  });

  test('rejects', () => {
    spy.mockRejectedValue('request failed');
    expect(spy()).rejects.toBe('request failed');
  });
});
