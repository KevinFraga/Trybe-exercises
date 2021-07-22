/**
 * Atividade 1:
 * Rota: /login
 * Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.
 *
 * Atividade 2:
 * Rota: /btc/price
 * Objetivo: Receber uma requisição com um token e verificar se ele está correto. O formato do token deve ser uma string de 12 caracteres contendo letras e números. Caso o formato do token esteja incorreto, devolva um erro com a mensagem invalid token. como resposta. Caso o formato do token esteja correto, faça um fetch em uma API externa de sua preferência e retorne os dados da API como resposta. (sugestão de API: https://api.coindesk.com/v1/bpi/currentprice/BTC.json ) O token será passado pelo header da seguinte forma: Authorization: asd65asd5sd8
 *
 * Atividade 3:
 * Rotas: /posts/:id e /posts
 * Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id . Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem id not found. . A rota /posts deve trazer todos os posts cadastrados.
 * posts
 *
 * Atividade 4:
 * Rota: /user/:name
 * Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os comentários feitos por ele. Caso não exista, deve retornar um status de erro com uma mensagem user not found. .
 * users
 * 
 * Atividade 5:
 * Rota: /:operacao/:numero1/:numero2
 * Objetivo: Deve validar e retornar o resultado da operação. As operações podem ser soma , subtração , divisão ou multiplicação . Regra: Um middleware deve ser usado para cada operação. A operação deve ser recebida como parâmetro na rota.
 * 
 * Atividade 6:
 * Rota: /recipe/:id
 * Objetivo: Deletar a receita no banco de dados e retornar a receita deletada. Caso o id fornecido não exista, retorne um erro recipe not found .
 * Use o array abaixo para simular o banco de dados:
 * recipes
 *
 * Atividade 7:
 * Rota: /recipe/:id
 * Objetivo: Deve receber uma requisição com name e ingredients de uma receita, e substituir no banco de dados a receita que possua o id passado na requisição retornando a receita com a nova alteração. Caso o id fornecido não exista, retorne um erro recipe not found .
 * Use o array abaixo para simular o banco de dados:
 * recipes
 *
 * Atividade 8:
 * Rota: /comments
 * Objetivo: Deve retornar todos os comentários. Se houver um query param filter na requisição, deve retornar apenas os comentários que incluem o filtro.
 * Use o array abaixo para simular o banco de dados:
 * users
 *
 * Atividade 9:
 * Rota: /user/:id
 * Objetivo: Deve receber no campo status um booleano e alterar o status do usuário correspondente retornando o usuário em específico. Se o campo status não for um booleano, deve retornar o error "status isn't a boolean". Caso não exista usuário correspondente, deve retornar o error "user isn't found".
 * Use o array abaixo para simular o banco de dados:
 * users2
 *
 * Atividade 10:
 * Rota: /recipe/:id/ingredients
 * Objetivo: Deve receber uma requisição com os campos remove e/ou insert . O valor deve ser um array de ingredientes para remover ou adicionar na receita correspondente. Caso o id fornecido não exista, retorne um erro recipe not found .
 * Use o array abaixo para simular o banco de dados:
 * recipes
 *
 */

const btcAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: 'Hoje o dia está maneiro!',
  },
  {
    id: 3,
    author: 'Rodrigo Garga',
    comment: 'To aqui também',
  },
];

const users = [
  {
    id: 2,
    user: 'Antonio',
    comments: ['Hoje o dia está maneiro!', 'Agora não está muito'],
  },
  {
    id: 3,
    user: 'Rodrigo',
    comments: ['Tô aqui também', 'Agora não tô'],
  },
];

const recipes = [
  {
    id: 12345,
    name: 'farofa de bacon',
    ingredients: ['farofa', 'bacon'],
  },
  {
    id: 12346,
    name: 'ovo mexido',
    ingredients: ['ovo'],
  },
];

const users2 = [
  {
    id: 2,
    user: 'marcos',
    isActive: true,
  },
  {
    id: 3,
    user: 'paulo',
    isActive: true,
  },
  {
    id: 4,
    user: 'roger',
    isActive: false,
  },
];

const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

function emailValidator(email) {
  const emailRegex = /^[0-9a-zA-Z\._\-]+@[a-z]*mail\.com(\.[a-z]{2})?$/;
  return emailRegex.test(email);
}

function passwordValidator(password) {
  const passwordRegex = /^[0-9]{4,8}$/;
  return passwordRegex.test(password);
}

function tokenValidator(token) {
  const tokenRegex = /^[0-9a-z]{12}$/i;
  return tokenRegex.test(token);
}

app.post('/login', (req, res, _next) => {
  const validEmail = emailValidator(req.body.email);
  const validPassword = passwordValidator(req.body.password);
  if (!validEmail || !validPassword) return res.status(401).json({ message: "email or password is incorrect" });
  const token = Math.floor(Math.random()*16777215*16777215).toString(16);
  return res.status(200).send(token);
});

app.get('/btc/price', async (req, res, _next) => {
  const validToken = tokenValidator(req.body.token);
  if(!validToken) return res.status(401).json({ message: "invalid token" });
  const btc = await axios.get(btcAPI).then(({ data }) => data);
  return res.status(200).send(btc);
});

app.get('/posts', (_req, res, _next) => {
  return res.status(200).send(posts);
});

app.get('/posts/:id', (req, res, _next) => {
  const post = posts.find(({ id }) => id === parseInt(req.params.id));
  if(!post) return res.status(404).json({ message: "id not found" });
  return res.status(200).send(post);
});

app.get('/user/:name', (req, res, _next) => {
  const answer = users.find(({ user }) => user === req.params.name);
  if(!answer) return res.status(404).json({ message: "user not found" });
  return res.status(200).send(answer);
});

const soma = (a1, a2) => a1 + a2;
const subtracao = (a1, a2) => a1 - a2;
const multiplicacao = (a1, a2) => a1 * a2;
const divisao = (a1, a2) => a1 / a2;

app.get('/:operacao/:numero1/:numero2', (req, res, _next) => {
  const { operacao } = req.params;
  const numero1 = parseInt(req.params.numero1);
  const numero2 = parseInt(req.params.numero2);
  let answer;
  if(operacao === 'soma') answer = soma(numero1, numero2);
  if(operacao === 'subtracao') answer = subtracao(numero1, numero2);
  if(operacao === 'multiplicacao') answer = multiplicacao(numero1, numero2);
  if(operacao === 'divisao') answer = divisao(numero1, numero2);
  if(!answer) return res.status(404).json({ message: "operation not found" });
  return res.status(200).json(answer);
});

app.delete('/recipe/:id', (req, res, _next) => {
  const recipe = recipes.find(({ id }) => id === parseInt(req.params.id));
  if(!recipe) return res.status(404).json({ message: "recipe not found" });
  recipes.splice(recipes.indexOf(({ id }) => id === parseInt(req.params.id)), 1);
  return res.status(200).send(recipe);
});

app.get('/recipe', (_req, res, _next) => {
  return res.status(200).send(recipes);
});

app.put('/recipe/:id', (req, res, _next) => {
  const recipe = recipes.find(({ id }) => id === parseInt(req.params.id));
  if(!recipe) return res.status(404).json({ message: "recipe not found" });
  const newRecipe = { id: parseInt(req.params.id), name: req.body.name, ingredients: req.body.ingredients };
  recipes.splice(recipes.indexOf(({ id }) => id === parseInt(req.params.id)), 1, newRecipe);
  return res.status(200).send(newRecipe);
});

app.get('/comments', (req, res, _next) => {
  const { filter } = req.query;
  const posts = users.reduce((acc, { comments }) => [...acc, ...comments], []);
  if(filter) {
    const filtered = posts.filter((comment) => comment.includes(filter));
    return res.status(200).send(filtered);
  }
  return res.status(200).send(posts);
});

app.put('/user/:id', (req, res, _next) => {
  const { status } = req.body;
  if(status !== 'true' && status !== 'false') return res.status(400).json({ message: "status isn't a boolean" });
  const foundUser = users2.find(({ id }) => id === parseInt(req.params.id));
  if(!foundUser) return res.status(404).json({ message: "user not found" });
  const newUser = { id: foundUser.id, user: foundUser.user, isActive: status === 'true' ? true : false };
  users2.splice(users2.indexOf(({ id }) => id === parseInt(req.params.id)), 1, newUser);
  return res.status(200).send(newUser);
});

app.put('/recipe/:id/ingredients', (req, res, _next) => {
  const { remove, insert } = req.body;
  const recipe = recipes.find(({ id }) => id === parseInt(req.params.id));
  if(!recipe) return res.status(404).json({ message: "recipe not found" });
  const newIngredients = recipe.ingredients;
  if(remove) {
    newIngredients.splice(newIngredients.indexOf((ing) => ing === remove), 1);
  }
  if(insert) newIngredients.push(insert);
  const newRecipe = { id: recipe.id, name: recipe.name, ingredients: newIngredients };
  recipes.splice(recipes.indexOf(({ id }) => id === parseInt(req.params.id)), 1, newRecipe);
  return res.status(200).send(newRecipe);
});

app.listen(3000, () => console.log('OK'));
