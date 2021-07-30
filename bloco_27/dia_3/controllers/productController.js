/**
 * 
 * Exercício 1 : Pense qual é o recurso que estamos trabalhando e altere os endpoints para que fiquem padronizados.
 * 
 * Exercício 2 : Padronize todos os retornos para JSON.
 * 
 * Exercício 3 : Utilize os verbos (POST, PUT, GET etc.) corretos para cada ação do CRUD.
 * 
 * Exercício 4 : Garanta que todos os endpoints tenham as respostas (status code) corretas, ou seja, código para quando der tudo certo, código pra quando ocorrer erro etc.
 * 
 */

const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/get-by-id/:id', async (req, res, _next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: 'product not found' });

  res.status(200).send(product);
});

router.post('/add-user', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: 'As chaves name e brand são obrigatórias' });

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/delete-user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (Object.keys(products).length === 0) return res.status(404).json({ message: 'product not found' });

  res.status(200).json(products);
});

router.put('/update-user/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: 'As chaves name e brand são obrigatórias' });

  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: 'product not found' });
  
  await ProductModel.update(req.params.id, name, brand);

  res.status(204).end();
});

module.exports = router;
