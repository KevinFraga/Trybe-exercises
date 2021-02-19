const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

/*
Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro.
*/

describe('Testing with promises', () => {
  test('Finding user name', () => {
    return getUserName(4).then((answer) => expect(answer).toBe('Mark'));
  });

  test('Not finding', () => {
    return getUserName(17).catch((error) => {
      expect(error).toEqual({ error: 'User with ' + 17 + ' not found.' });
    });
  });
});

describe('Testing with async/await', () => {
  test('Finding', async () => {
    const test = await getUserName(4);
    expect(test).toBe('Mark');
  });

  test('Not Finding', async () => {
    try {
      await getUserName(17);
    } catch (error) {
      expect(error).toEqual({ error: 'User with ' + 17 + ' not found.' });
    }
  });
});
