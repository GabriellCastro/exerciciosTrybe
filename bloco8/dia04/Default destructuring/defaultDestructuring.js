// definindo valor padrão para uma propriedade que não exista em um obj.
const person = {
  name: "João",
  lastName: "Jr",
  age: 34
};

const { nationality = 'Brazil' } = person;
console.log(nationality);

// tambem podemos definir um valor padrão para uma propriedade que talvez não exita no array.
const position = ['cima', 'baixo', 'direita'];
const [c, b, d, e = 'esquerda'] = position;
console.log(c, b, d, e);

// fazer a função retorna jão is Brazilian.
const nation = ({ myName, myNacao = 'Brazilian' }) => `${myName} is ${myNacao}`;
const personG = {
  myName: 'Gabriel',
}
const personP = {
  myName: 'Pedro',
  myNacao: 'Beazilian',
}

console.log(nation(personG));
console.log(nation(personP));
