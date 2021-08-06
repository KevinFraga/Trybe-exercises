/**
 * Utilizando o processo de TDD, você irá implementar, a partir de testes, um endpoint para busca de dados de um usuário a partir do seu ID: GET /users/:userId . Cada exercício conterá um dos requisitos a ser implementado.
 * Lembre-se de utilizar os conceitos visto até aqui:
 * Utilize TDD , ou seja, inicie um requisito escrevendo as asserções necessárias para validar aquele cenário, em seguida implemente o código necessário e por fim, faça os ajustes necessários para que o teste fique compatível com sua implementação.
 * Nos testes, isole o IO utilizando a técnica de subir o banco de dados em memória.
 * Utilize o plugin do chai de requests HTTP para consumir seus endpoint diretamente em seus testes.
 * 
 * Exercício 1 : O endpoint deverá ser autenticado, exigindo o envio de um token no header da requisição. Caso não seja passado um token, o endpoint deverá retornar:
 * Código de status 400 - Not Found ;
 * Mensagem de erro no body da response com o texto Token não encontrado ou informado .
 * Lembre-se de utilizar o middleware de autenticação para validação do JWT.
 * 
 * Exercício 2 : O usuário poderá ver somente os seus próprios dados. Ou seja, ao receber uma request, deverá ser comparado se o ID vindo no parâmetro é o mesmo do armazenado no token. Para isso, utilize o middleware de autenticação para recuperar o ID dentro do token. Caso não seja, a API deverá retornar:
 * Código de status 401 - Unauthorized ;
 * Mensagem no body da response com o texto Acesso negado .
 * 
 * Exercício 3 : Caso o usuário esteja autenticado corretamente e esteja solicitando os dados de seu próprio usuário, o sistema deverá retornar:
 * Os dados da pessoa usuária em um objeto no corpo ( body ) da resposta ( response );
 * Código de status 200 - OK .
 * 
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/users', controllers.createUser);

app.post('/login', controllers.login);

app.get('/users/:userId', middlewares.auth.auth_jwt, middlewares.auth.auth_id, controllers.findUserById);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
