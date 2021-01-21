// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'abacate', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite moça', 'aveia'];

const fruitSalad = () => [...specialFruit, ...additionalItens];

console.log(fruitSalad());

const point = [0.1, 2.2, -6.6];
const otherPoint = [1.0, 3.5, -99.8];

cordenadas = (x, y, z) => `Cordenadas de position x = ${x}, y = ${y}, z = ${z}`;
console.log(cordenadas(...point));
