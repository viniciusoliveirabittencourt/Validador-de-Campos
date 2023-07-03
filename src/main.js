import validator from 'validator';
import './style.css';

console.log("test");
const button = document.getElementById('button');
const typeToValid = document.getElementById('type-to-valid');
const value = document.getElementById('value');
const answer = document.getElementById('resposta');

button.addEventListener('click', (e) => {
  e.preventDefault();

  const fields = {
    email: validator.isEmail(value.value),
    cpf: validator.isTaxID(value.value, 'pt-BR'),
    uuid: validator.isUUID(value.value, 4),
    hexcolor: validator.isHexColor(value.value),
    url: validator.isURL(value.value)
  }

  console.log(value.value)
  answer.innerHTML = `O validador retornou ${fields[typeToValid.value]}`;
});
