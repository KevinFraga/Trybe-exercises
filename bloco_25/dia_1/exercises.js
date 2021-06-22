// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .
db.clientes.aggregate([{ $match: { sexo: 'MASCULINO' } }]).pretty();

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .
db.clientes.aggregate([
  {
    $match: {
      sexo: 'FEMININO',
      dataNascimento: { $gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31') },
    },
  },
]).pretty();

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .
db.clientes.aggregate([
  {
    $match: {
      sexo: 'FEMININO',
      dataNascimento: { $gte: ISODate('1995-01-01'), $lte: ISODate('2005-12-31') },
    },
  },
  { $limit: 5 },
]).pretty();

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
db.clientes.aggregate([
  { $group: { _id: "$endereco.uf", total: { $sum: 1 } } },
  { $match: { _id: "SC" } },
]);

// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .
db.clientes.aggregate([{ $group: { _id: "$sexo", total: { $sum: 1 } } }]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .
db.clientes.aggregate([
  { $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 } } }
]);

/* Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
{
  "estado": "SP",
  "sexo": "MASCULINO",
  "total": 100
} */
db.clientes.aggregate([
  { $group: { _id: { sexo: "$sexo", uf: "$endereco.uf" }, total: { $sum: 1 } } },
  { $project: { _id: 0, estado: "$_id.uf", sexo: "$_id.sexo", total: 1 } },
]);

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.
db.vendas.aggregate([
  { $group: { _id: "$clienteId", totalComprado: { $sum: "$valorTotal" } } },
  { $sort: { totalComprado: -1 } },
  { $limit: 5 },
]);

// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") } } },
  { $group: { _id: "$clienteId", totalComprado: { $sum: "$valorTotal" } } },
  { $sort: { totalComprado: -1 } },
  { $limit: 10 },
]);

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
db.vendas.aggregate([
  { $group: { _id: "$clienteId", qtdCompras: { $sum: 1 } } },
  { $match: { qtdCompras: { $gte: 5 } } },
  { $group: { _id: 1, clientes: { $sum: 1 } } },
  { $project: { _id: 0 } },
]);

// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-03-31") } } },
  { $group: { _id: "$clienteId", qtdCompras: { $sum: 1 } } },
  { $match: { qtdCompras: { $lt: 3 } } },
  { $count: "clientes" },
]);

/* Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:
{
  "totalVendas": 10,
  "uf": "SP"
} */
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2020-01-01"), $lte: ISODate("2020-12-31") } } },
  { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "cliente" } },
  { $unwind: "$cliente" },
  { $group: { _id: "$cliente.endereco.uf", totalVendas: { $sum: 1 } } },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 },
  { $project: { _id: 0, totalVendas: 1, uf: "$_id" } },
]);

/* Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:
{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
} */
db.vendas.aggregate([
  { $match: { dataVenda: { $gte: ISODate("2019-01-01"), $lte: ISODate("2019-12-31") } } },
  { $lookup: { from: "clientes", localField: "clienteId", foreignField: "clienteId", as: "cliente" } },
  { $unwind: "$cliente" },
  { $group: { _id: "$cliente.endereco.uf", totalVendas: { $sum: 1 }, mediaVendas: { $avg: "$valorTotal" } } },
  { $sort: { _id: 1 } },
]);
