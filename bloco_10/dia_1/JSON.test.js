const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Compare dois objetos (JSON) para verificar se são idênticos ou não

test('JSON comparison', () => {
  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
});
