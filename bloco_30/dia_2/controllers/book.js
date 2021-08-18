const express = require('express');
const { Books } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Books.findAll();

    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Books.findByPk(req.params.id);

    if (!book) return res.status(404).json({ message: 'Não encontrado' });

    return res.status(200).json(book);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const newBook = await Books.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.post('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    await Books.update({ title, author, pageQuantity }, { where: { id } });

    const updatedBook = await Books.findByPk(id)

    return res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const updatedBook = await Books.findByPk(id)

    await Books.destroy({ where: { id } });

    return res.status(200).json(updatedBook);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Algo deu errado' });
  };
});

module.exports = router;
