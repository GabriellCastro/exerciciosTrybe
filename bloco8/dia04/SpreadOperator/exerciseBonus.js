// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'abacate', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite moça', 'aveia'];

const fruitSalad = () => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));