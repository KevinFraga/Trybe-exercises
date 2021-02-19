const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

test('testing callback', (done) => {
  uppercase('test', (result) => {
    expect(result).toBe('TEST');
    done();
  });
});
