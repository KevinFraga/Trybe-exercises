/**
 * Exercício 1 : Crie uma API simples no node utilizando express .
 *    No arquivo index.js , crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!".
 *    Faça o deploy no Heroku utilizando o CLI.
 * 
 * Exercício 2 : Agora, modifique a API para responder a uma nova mensagem:
 *    Crie uma nova variável de ambiente com um texto qualquer;
 *    Modifique o código da sua API para que ela responda na rota get / com o mesmo texto contido na variável criada no passo anterior.
 * 
 * Exercício 3 : Agora vamos criar um Procfile.
 *    Crie uma cópia do arquivo index.js com o nome indexProcfile.js ;
 *    No novo arquivo, altere a mensagem de resposta da API para "Procfile funciona mesmo!" ;
 *    Crie um Procfile para iniciar sua aplicação a partir do novo arquivo de indexProcfile.js .
 * 
 * Exercício 4 . Simule o deploy em multiambientes (produção e homologação). Para isso:
 *    Renomeie o remote do deploy dos exercícios anteriores para homolog ;
 *    Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod ;
 *    Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.
 * 
 * Exercício 5 : Faça deploy de uma aplicação React.
 *    Crie uma aplicação React utilizando create-react-app ;
 *    Crie um novo app utilizando o buildpack mars/create-react-app;
 *    Então, faça o deploy do app no Heroku.
 * 
 */

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_req, res, _next) => {
  res.send('Está vivo!!!');
});

app.listen(PORT, () => {
  console.log(`funcionando na porta ${PORT}`);
});
