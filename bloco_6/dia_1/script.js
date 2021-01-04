const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
const stateDropdown = document.getElementById('state');

function statesSetup() {
  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    option.value = states[index];
    option.innerText = states[index];
    stateDropdown.appendChild(option);
  }
}

statesSetup();
