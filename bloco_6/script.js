function creatOption() {
  const statesAll = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia','Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const estatesDad = document.querySelector('#estado-input');
  for (let index = 0; index < statesAll.length; index += 1) {
    const optionCreate = document.createElement('option');
    optionCreate.innerText = statesAll[index];
    estatesDad.appendChild(optionCreate);
  }
}
creatOption();

function craeteCv() {
  const nome = document.querySelector('#name-input');
  const email = document.querySelector('#email-input');
  const cpf = document.querySelector('#cpf-input');
  const endereco = document.querySelector('#endereco-input');
  const cidade = document.querySelector('#cidade-input');
  const estado = document.querySelector('#estado-input');
  const resumoCv = document.querySelector('#resumo-cv');
  
}