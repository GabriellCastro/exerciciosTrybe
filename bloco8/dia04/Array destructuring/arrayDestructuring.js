// acessando o valor de um array versão verbosa e custosa.
const arrayVerbose = ['Gabriel', 'Fernando'];
const firstName = arrayVerbose[0];
const secondName = arrayVerbose[1];
console.log(firstName, secondName);

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [ brasil, japao, ...rest ] = arrayCountries;
console.log(brasil, japao, ...rest);
