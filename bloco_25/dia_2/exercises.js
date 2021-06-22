/* Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
      arredonde para baixo o valor da idade;
      calcule a idade usando a diferença entre a data corrente e a data de nascimento;
      1 dia é igual a 86400000 milissegundos.
*/
db.clientes
  .aggregate([
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ['$$NOW', '$dataNascimento'] },
              365 * 24 * 3600 * 1000,
            ],
          },
        },
      },
    },
  ])
  .pretty();

// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ['$$NOW', '$dataNascimento'] },
            365 * 24 * 3600 * 1000,
          ],
        },
      },
    },
  },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $count: 'clientes' },
]);

// Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .
db.clientes
  .aggregate([
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ['$$NOW', '$dataNascimento'] },
              365 * 24 * 3600 * 1000,
            ],
          },
        },
      },
    },
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
  ])
  .pretty();

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ['$$NOW', '$dataNascimento'] },
            365 * 24 * 3600 * 1000,
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
  {
    $match: {
      'compras.dataVenda': {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31'),
      },
    },
  },
]);

// Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.
db.clientes
  .aggregate([
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              { $subtract: ['$$NOW', '$dataNascimento'] },
              365 * 24 * 3600 * 1000,
            ],
          },
        },
      },
    },
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
    {
      $match: {
        'compras.dataVenda': {
          $gte: ISODate('2019-06-01'),
          $lte: ISODate('2020-03-31'),
        },
      },
    },
  ])
  .itcount();

// Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ['$$NOW', '$dataNascimento'] },
            365 * 24 * 3600 * 1000,
          ],
        },
      },
    },
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
  {
    $match: {
      'compras.dataVenda': {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31'),
      },
    },
  },
  { $unwind: '$compras' },
  { $group: { _id: '$endereco.uf', totalCompras: { $sum: 1 } } },
  { $sort: { totalCompras: -1 } },
  { $limit: 5 },
]);

/* Exercício 7 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
} */
db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
  { $unwind: '$compras' },
  { $unwind: '$compras.itens' },
  { $match: { 'compras.itens.nome': 'QUEIJO PRATO' } },
  {
    $group: {
      _id: { nome: '$nome', uf: '$endereco.uf' },
      totalConsumido: { $sum: '$compras.itens.quantidade' },
    },
  },
  { $sort: { totalConsumido: -1 } },
  { $limit: 1 },
  {
    $project: {
      _id: 0,
      nomeCliente: '$_id.nome',
      uf: '$_id.uf',
      totalConsumido: 1,
    },
  },
]);

// Exercício 8 : Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista .
db.clientes.aggregate([
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    },
  },
  { $unwind: '$compras' },
  {
    $match: {
      'compras.status': 'EM SEPARACAO',
      'compras.dataVenda': {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31'),
      },
    },
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ['$compras.dataVenda', 3 * 24 * 3600 * 1000],
      },
    },
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: '$compras.dataVenda',
      dataEntregaPrevista: 1,
    },
  },
]);
