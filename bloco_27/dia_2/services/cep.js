const CEP = require('../models/cep');

const ping = () => CEP.ping();

const getAll = async () => await CEP.getAll();

const validatorCep = (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;

  const test = cepRegex.test(cep);

  if (!test) return { "error": { "code": "invalidData", "message": "CEP inválido" } };

  return test;
};

const getByCep = async (cep) => {
  const dashRegex = /\d{5}-\d{3}/;

  const newCep = dashRegex.test(cep) ? cep.split('-').join('') : cep;

  const data = await CEP.getByCep(newCep);

  if (!data) return { "error": { "code": "notFound", "message": "CEP não encontrado" } };

  return data;
};

const postCep = async (cepData) => {
  const { cep, logradouro, bairro, localidade, uf } = cepData;

  const dashRegex = /\d{5}-\d{3}/;

  const newCep = dashRegex.test(cep) ? cep.split('-').join('') : cep;

  const alreadyExists = await CEP.getByCep(newCep);

  if (alreadyExists) return { "error": { "code": "alreadyExists", "message": "CEP já existente" } };

  return CEP.postCep({ cep: newCep, logradouro, bairro, localidade, uf });
}

module.exports = {
  ping,
  getAll,
  validatorCep,
  getByCep,
  postCep,
};
