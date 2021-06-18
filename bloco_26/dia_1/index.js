/* 
8- Crie um arquivo index.js que pergunta qual script deve ser executado
  O script deve ser acionado através do comando npm start .
  Utilize o readline-sync para realizar o input de dados
  Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
  Ao digitar o número de um script e pressionar enter , o script deve ser executado.
  Você pode utilizar o require para executar o script em questão.
*/

const readline = require('readline-sync');

function index() {
  const scripts = [
    { name: 'IMC', script: './imc.js' },
    { name: 'Velocidade', script: './velocidade.js' },
    { name: 'Sorteio', script: './sorteio.js' },
  ];
  const scriptName = scripts.map((script) => script.name);
  const selection = readline.keyInSelect(scriptName, 'Qual script executar? ');
  require(`${scripts[selection].script}`);
}

index();
