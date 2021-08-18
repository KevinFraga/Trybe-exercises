/**
 * Exercício : Crie os controllers do seu projeto com as seguintes rotas:
 *    GET /books - lista todos os livros;
 *    GET /book/:id - pega o livro com o id especificado;
 *    POST /book - cria um novo livro;
 *    POST /book/:id - sobrescreve o livro com ID selecionado;
 *    DELETE /book/:id - deleta um livro;
 *    
 * Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.
 * 
 */

const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/book');

const app = express();

app.use(bodyParser.json());

app.use('/book', bookController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
