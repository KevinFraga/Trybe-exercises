const code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const encode = (message) => {
  let answer = '';
  let helper;
  [...message].forEach((letter) => {
    helper = true;
    Object.keys(code).forEach((value) => {
      if (value === letter) {
        answer += `${code[value]}`;
        helper = false;
      }
    });
    if (helper) answer += `${letter}`;
  });
  return answer;
};

const decode = (message) => {
  let answer = '';
  let helper;
  [...message].forEach((letter) => {
    helper = true;
    Object.entries(code).forEach((value) => {
      if (value[1] == letter) {
        answer += `${value[0]}`;
        helper = false;
      }
    });
    if (helper) answer += `${letter}`;
  });
  return answer;
};

/*
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
Teste se as demais letras/números não são convertidos para cada caso;
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/

test('checking typeof function', () => {
  expect(typeof(encode)).toBe('function');
  expect(typeof(decode)).toBe('function');
});

test('testing functionality', () => {
  expect(encode('aeiou')).toBe('12345');
  expect(decode('12345')).toBe('aeiou');
  expect(encode('teste')).toBe('t2st2');
  expect(decode('t2st2')).toBe('teste');
});

test('checking length', () => {
  expect(encode('aeiou').length).toBe(5);
  expect(decode('12345').length).toBe(5);
});
