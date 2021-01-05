const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
const stateDropdown = document.getElementById('state');
const submitBtn = document.getElementById('submit');
const clearBtn = document.getElementById('reset');
const inputList = document.getElementsByClassName('input');
const cvShowcase = document.getElementById('cv');

function statesSetup() {
  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = states[index];
    option.innerText = states[index];
    stateDropdown.appendChild(option);
  }
}

statesSetup();

function readFormValues() {
  let label = [];
  let value = [];
  for (let index = 0; index < inputList.length; index += 1) {
    if (inputList[index].type === 'radio' && !inputList[index].checked) {
      continue;
    }
    label[index] = inputList[index].name;
    value[index] = inputList[index].value;
  }
  label = label.filter(string => string);
  value = value.filter(string => string);
  for (let index = 0; index < label.length; index += 1) {
    let div = document.createElement('div');
    div.innerText = `${label[index]}: ${value[index]}`;
    cvShowcase.appendChild(div);
  }
}

submitBtn.addEventListener('click', readFormValues);
