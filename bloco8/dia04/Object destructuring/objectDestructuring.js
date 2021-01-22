// object destructuring = é uma forma de imprimir os valores do objeto de forma menos verbosa ou trabalhosa.
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas'
};

const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a:nome, b:turma, c:materia } = student;
console.log(nome);
console.log(turma);
console.log(materia);

// passando o valor do obj como parametro de uma função
const productTv = {
  modelo: 'Smart TV',
  valor: '1899.05',
  local: 'Casas de Minas'
};

const detailsProduct = ({ modelo, valor, local }) => {
  console.log(`Promoção! ${modelo} por apenas ${valor} é só aqui: ${local}.`)
};

detailsProduct(productTv);
