function quantosParams(...args1) {
  console.log('parâmetros:', args1)
  return `Você passou ${args.length} parâmetros para a função.`;
};

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams("string", null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

const dateInfor = ['2000','07','30','22','40'];
const formatDate = (ano, mes, dia, ...rest) => `${dia}/${mes}/${ano}`;
console.log(formatDate(...dateInfor));
