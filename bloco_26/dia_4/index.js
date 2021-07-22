/**
 * 1- Crie uma rota GET /ping
 *  Sua rota deve retornar o seguinte JSON: { message: 'pong' }
 *
 * 2- Crie uma rota POST /hello
 *  Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
 *  Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
 *
 * 3- Crie uma rota POST /greetings
 *  Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
 *  Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
 *  Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
 *
 * 4- Crie uma rota PUT /users/:name/:age .
 *  Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
 * 
 * 5- Crie uma API de dados das personagens de Simpsons
 *  Crie um arquivo chamado simpsons.json e popule
 *  Utilize o modulo fs do Node para ler/escrever arquivos.
 *  Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
 *  Caso dê tudo certo, a resposta deve voltar com status 200 OK .
 *  Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .
 * 
 * 6- Crie um endpoint GET /simpsons
 *  O endpoint deve retornar um array com todos os simpsons.
 * 
 * 7- Crie um endpoint GET /simpsons/:id
 *  O endpoint deve retornar o personagem com o id informado na URL da requisição.
 *  Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
 * 
 * 8- Crie um endpoint POST /simpsons .
 *  Este endpoint deve cadastrar novos personagens.
 *  O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
 *  Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
 *  Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
 *  
 */

const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

app.use(bodyParser.json());

function getSimpsons() {
  return fs
    .readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));
}

function newSimpson(array) {
  fs.writeFile('./simpsons.json', JSON.stringify(array));
}

app.get('/ping', (_req, res, _next) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res, _next) => {
  res.status(200).json({ message: `Hello, ${req.body.name}!` });
});

app.post('/greetings', (req, res, _next) => {
  req.body.age > 17
    ? res.status(200).json({ message: `Hello, ${req.body.name}!` })
    : res.status(401).json({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res, _next) => {
  res.status(200).json({
    message: `Seu nome é ${req.params.name} e você tem ${req.params.age} anos de idade`
  });
});

app.get('/simpsons', rescue(async (_req, res, _next) => {
  const file = await getSimpsons();
  res.status(200).send(file);
}));

app.get('/simpsons/:id', rescue(async (req, res, _next) => {
  const array = await getSimpsons();
  const simpson = array.find(({ id }) => id === req.params.id);
  simpson
  ? res.status(200).send(simpson)
  : res.status(404).json({ message: "simpson not found" });
}));

app.post('/simpsons', rescue(async (req, res, _next) => {
  const array = await getSimpsons();
  let helper = true;
  array.forEach((simpson) => {
    if(simpson.id === req.body.id) {
      res.status(409).json({ message: "id already exists" });
      helper = false;
    }
  });
  if(helper) {
    array.push({ id: req.body.id, name: req.body.name });
    newSimpson(array);
  }
  res.status(204).end();
}))

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
})

app.listen(3000, () => console.log('OK'));
