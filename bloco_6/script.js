const nome = document.querySelector('#name-input');
const email = document.querySelector('#email-input');
const endereco = document.querySelector('#endereco-input');
const cidade = document.querySelector('#cidade-input');
const estado = document.querySelector('#estado-input');
const resumoCv = document.querySelector('#resumo-cv');
const divDad = document.querySelector('#container-cv');
const enviarButton = document.querySelector('#enviar');

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
  const createNome = document.createElement('h1');
  createNome.innerHTML = nome.value;
  divDad.appendChild(createNome);

  const createEmail = document.createElement('p');
  createEmail.innerHTML = email.value;
  divDad.appendChild(createEmail);

  const createEndereco = document.createElement('p');
  createEndereco.innerHTML = endereco.value;
  divDad.appendChild(createEndereco);

  const createCidade = document.createElement('p');
  createCidade.innerHTML = cidade.value;
  divDad.appendChild(createCidade);

  const createEstado = document.createElement('p');
  createEstado.innerHTML = estado.value;
  divDad.appendChild(createEstado);

  const createResumoCv = document.createElement('p');
  createResumoCv.innerHTML = resumoCv.value;
  divDad.appendChild(createResumoCv);
}

enviarButton.addEventListener('click', craeteCv);
