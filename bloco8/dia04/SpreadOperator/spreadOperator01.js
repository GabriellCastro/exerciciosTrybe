const conhecimentoTrybe = {
  softSills: true,
  hardSkills: true,
}
const pessoa = {
  nome: 'Gabriel',
  idade: '20',
  cidade: 'AM',
}
const pessoaTrybe = {
  ...pessoa,
  ...conhecimentoTrybe,
}
console.log(pessoaTrybe);
console.log('-------- os objetos bases: ---------');
console.log(conhecimentoTrybe);
console.log(pessoa);

console.log('---------- Exemplos com numeros ----------');
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];

console.log('------------- Exemplos com ARRAYS --------------');
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];
const months = [...summer, ...fall, ...winter, ...spring];
console.table(months); /* [
  'JAN', 'FEV', 'MAR',
  'ABR', 'MAI', 'JUN',
  'JUL', 'AGO', 'SET',
  'OUT', 'NOV', 'DEZ'
] */

console.log('------------------ Exemplo com CALULADORA IMC ------------------');
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const pacientInfor = [60, 1.7];
console.log(imc(...pacientInfor));

console.log('---------------- Exemplo Math.max e Math.min --------------------');
const randomNumbers = [57, 55, 88, 90, 9, 3, 2, 1];
console.log(Math.max(...randomNumbers)); // 90
console.log(Math.min(...randomNumbers)); // 1
