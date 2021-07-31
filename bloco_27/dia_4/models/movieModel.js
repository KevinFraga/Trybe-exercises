const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const getByID = async (id) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));
  
  const movie = await moviesCollection.findOne({ _id: ObjectId(id) });

  return movie;
}

module.exports = {
  create,
  getAll,
  getByID,
};
