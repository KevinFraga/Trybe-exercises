const connection = require('./connection');
const { ObjectId } = require('mongodb');

function emailValidator(email) {
  const emailRegex = /^[0-9a-zA-Z\._\-]+@[a-z]*mail\.com(\.[a-z]{2})?$/;
  return emailRegex.test(email);
}

function passwordValidator(password) {
  const passwordRegex = /^[0-9a-zA-Z]{6,}$/;
  return passwordRegex.test(password);
}

const isValid = (userData) => {
  const { firstName, lastName, email, password } = userData;
  let message = null;
  if (!firstName) message = 'O campo "firstName" é obrigatório';
  if (!lastName) message = 'O campo "lastName" é obrigatório';
  if (!emailValidator(email)) message = 'O campo "email" deve ser um email válido';
  if (!email) message = 'O campo "email" é obrigatório';
  if (!passwordValidator(password)) message = 'O campo "password" deve ter pelo menos 6 caracteres';
  if (!password) message = 'O campo "password" é obrigatório';
  return message;
}

const newUser = (userData) => {
  const { firstName, lastName, email } = userData;
  return connection()
    .then((db) => db.collection('users').insertOne(userData))
    .then(({ insertedId }) => ({ id: insertedId, firstName, lastName, email }));
};

const allUsers = () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((data) => data.map(({ _id, firstName, lastName, email }) => ({
      id: _id,
      firstName,
      lastName,
      email,
    })));
};

const findUserById = (id) => {
  return connection()
    .then((db) => db.collection('users').findOne({ _id: ObjectId(id) }))
    .then(({ _id, firstName, lastName, email }) => ({
      id: _id,
      firstName,
      lastName,
      email,
    }))
    .catch(() => null);
};

const updateUser = (updatedData, userId) => {
  const { firstName, lastName, email } = updatedData;
  return connection()
    .then((db) => db.collection('users').updateOne({ _id: ObjectId(userId) }, { $set: updatedData }))
    .then(() => ({
      id: userId,
      firstName,
      lastName,
      email,
    }));
}

module.exports = {
  newUser,
  isValid,
  allUsers,
  findUserById,
  updateUser,
};
