const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

const findAnimalByName = (name) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const answer = Animals.find((animal) => animal.name === name);
      if (answer) return resolve(answer);
      return reject('Nenhum animal com esse nome!');
    }, 100);
  });
};

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then((animal) => animal);
};

/*
Adicione uma nova funcionalidade para buscar pela idade dos animais. 
O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. 
Escreva tanto a função como o seu teste.
*/

const findAnimalsByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const answer = Animals.filter((animal) => animal.age === age);
      if (!answer.length) return reject('Nenhum animal com essa idade!');
      return resolve(answer);
    }, 100);
  });
};

const getAnimalsByAge = (age) => {
  return findAnimalsByAge(age).then((list) => list);
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando getAnimalsByAge', () => {
  test('Retorna a lista de animais', () => {
    expect.assertions(1);
    return getAnimalsByAge(1).then((list) =>
      expect(list).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
    );
  });

  test('Retornando erro', () => {
    expect.assertions(1);
    return getAnimalsByAge(17).catch((error) =>
      expect(error).toEqual('Nenhum animal com essa idade!')
    );
  });
});
