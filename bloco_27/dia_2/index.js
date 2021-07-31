/**
 * Crie uma nova API utilizando o express
 * A aplicação deve ser um pacote Node.js
 * Dê ao pacote o nome de cep-lookup
 * Utilize o express para gerenciar os endpoints da sua aplicação
 * A aplicação deve escutar na porta 3000
 * Deve ser possível iniciar a aplicação através do comando npm start .
 * 
 * 
 * 1 - A aplicação deve ter a rota GET /ping , que retorna o status 200 OK e o seguinte JSON:
 *        { "message": "pong!" }
 * 
 * 
 * 2 - Crie o endpoint GET /cep/:cep
 *    O endpoint deve receber, no parâmetro :cep , um número de CEP válido.
 *    O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.
 *    Dica Utilize o regex \d{5}-?\d{3} para validar o CEP.
 *    Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:
 *        { "error": { "code": "invalidData", "message": "CEP inválido" } }
 *    Caso o CEP seja válido, realize uma busca no banco de dados.
 *    Caso o CEP não exista no banco de dados, retorne o status 404 Not Found e o seguinte JSON:
 *        { "error": { "code": "notFound", "message": "CEP não encontrado" } }
 *    Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:
 *        {
 *          "cep": "01001-000",
 *          "logradouro": "Praça da Sé",
 *          "bairro": "Sé",
 *          "localidade": "São Paulo",
 *          "uf": "SP",
 *         }
 * 
 * 
 * 3 - Crie o endpoint POST /cep
 *    O endpoint deve receber a seguinte estrutura no corpo da requisição:
 *        {
 *          "cep": "01001-000",
 *          "logradouro": "Praça da Sé",
 *          "bairro": "Sé",
 *          "localidade": "São Paulo",
 *          "uf": "SP",
 *         }
 *    Todos os campos são obrigatórios
 *    Utilize o Joi para realizar a validação. Em caso de erro, retorne o status 400 Bad Request , com o seguinte JSON:
 *        { "error": { "code": "invalidData", "message": "<mensagem do Joi>" } } 
 *    O CEP deve ser composto por 9 dígitos com traço.
 *    Dica : Utilize o seguinte regex para validar o CEP: \d{5}-\d{3}
 *    Se o CEP já existir, retorne o status 409 Conflict com o seguinte JSON:
 *        {
 *          "error": { "code": "alreadyExists", "message": "CEP já existente" }
 *         }
 *    Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status 201 Created com os dados do novo CEP no seguinte formato:
 *        {
 *          "cep": "01001-000",
 *          "logradouro": "Praça da Sé",
 *          "bairro": "Sé",
 *          "localidade": "São Paulo",
 *          "uf": "SP",
 *         }
 * 
 */

const express = require('express');
const bodyParser = require('body-parser');
const CEP = require('./controllers/cep');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/ping', CEP.ping);
app.get('/cep', CEP.getAll);
app.get('/cep/:cep', CEP.getByCep);
app.post('/cep', CEP.postCep);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
