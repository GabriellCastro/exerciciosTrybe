
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra (a) maiúscula ou minúscula.

function containsA() {
  return names.map(name => name.split('')
    .filter(name => name === 'A' || name === 'a'))
      .map(name => name.length)
        .reduce((acumulador, element) => acumulador + element, 0);
}

assert.deepStrictEqual(containsA(), 20);
console.log(containsA());
