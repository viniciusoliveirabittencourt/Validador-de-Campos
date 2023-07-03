import validator from 'validator';
import './style.css';

const UUID_VERSION = 4;

const button = document.getElementById('button');
const typeToValid = document.getElementById('type-to-valid');
const value = document.getElementById('value');
const answer = document.getElementById('resposta');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const fields = {
    email: validator.isEmail(value.value),
    cpf: validator.isTaxID(value.value, 'pt-BR'),
    uuid: validator.isUUID(value.value, UUID_VERSION),
    hexcolor: validator.isHexColor(value.value),
    url: validator.isURL(value.value),
  };

  answer.innerHTML = `O validador retornou ${fields[typeToValid.value]}`;
});
