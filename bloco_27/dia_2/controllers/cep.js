const joi = require('joi');
const rescue = require('express-rescue');
const CEP = require('../services/cep');

const ping = rescue((_req, res, _next) => {
  const message = CEP.ping();

  res.status(200).json(message);
});

const getAll = rescue(async (_req, res, _next) => {
  const ceps = await CEP.getAll();

  res.status(200).send(ceps);
});

const getByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const valid = await CEP.validatorCep(cep);

  if (valid.error) return next(valid.error);

  const data = await CEP.getByCep(cep);

  if (data.error) return next(data.error);

  res.status(200).json(data);
});

const postCep = rescue(async (req, res, next) => {
  const { error } = joi.object({
    cep: joi.string().not().empty().required(),
    logradouro: joi.string().not().empty().required(),
    bairro: joi.string().not().empty().required(),
    localidade: joi.string().not().empty().required(),
    uf: joi.string().not().empty().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const valid = await CEP.validatorCep(cep);

  if (valid.error) return next(valid.error);

  const data = await CEP.postCep({ cep, logradouro, bairro, localidade, uf });

  if (data.error) return next(data.error);

  res.status(201).json(data);
});

module.exports = {
  ping,
  getAll,
  getByCep,
  postCep,
};
