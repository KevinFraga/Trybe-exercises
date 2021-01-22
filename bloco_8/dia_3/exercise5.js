
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => acc + curr.match(/a/gi).length, 0);
}

assert.deepStrictEqual(containsA(), 20);