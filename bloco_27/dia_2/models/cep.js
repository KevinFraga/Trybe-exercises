const connection = require('./connection');

const ping = () => ({ message: 'pong!' });

const getAll = async () => {
  const [data] = await connection.execute('SELECT * FROM ceps');

  return data;
};

const getByCep = async (cep) => {
  const [data] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);

  return data[0];
}

const postCep = async (cepData) => {
  const { cep, logradouro, bairro, localidade, uf } = cepData;

  const [_data] = await connection.execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [cep, logradouro, bairro, localidade, uf],
  );
  
  return cepData;
}

module.exports = {
  ping,
  getAll,
  getByCep,
  postCep,
};
