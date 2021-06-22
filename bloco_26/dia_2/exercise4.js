/* 4 - Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
*/

const fs = require('fs').promises;

const simpsons = './simpsons.json';
const simpsonFamily = './simpsonsFamily.txt';

function reader() {
  fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data))
    .then((json) => json.map(({ id, name }) => `${id} - ${name}`))
    .then((array) => array.forEach((char) => { console.log(char); }));
}

reader();

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

 async function finder(wantedId) {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
  const answer = simpson.find(({ id }) => parseInt(id) === wantedId);
  if (!answer) throw new Error("id não encontrado");
  return answer;
}

finder(1);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function filterer() {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
  const filtered = simpson.filter(({ id }) => id !== "10" && id !== "6");
  await fs.writeFile(simpsons, JSON.stringify(filtered));
}

filterer();

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

async function family() {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
  const filtered = simpson.filter(({ id }) => parseInt(id) < 5);
  await fs.writeFile(simpsonFamily, JSON.stringify(filtered));
}

family();

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

async function addNelson() {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
  const nelson = simpson.find(({ name }) => name === "Nelson Muntz");
  const family = await fs.readFile(simpsonFamily, 'utf-8')
    .then((data) => JSON.parse(data));
  family.push(nelson);
  await fs.writeFile(simpsonFamily, JSON.stringify(family));
}

addNelson();

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

async function Nelson_Maggie() {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((data) => JSON.parse(data));
  const maggie = simpson.find(({ name }) => name === "Maggie Simpson");
  const family = await fs.readFile(simpsonFamily, 'utf-8')
    .then((data) => JSON.parse(data));
  const noNelson = family.filter(({ name }) => name !== "Nelson Muntz");
  noNelson.push(maggie);
  await fs.writeFile(simpsonFamily, JSON.stringify(noNelson));
}

Nelson_Maggie();
