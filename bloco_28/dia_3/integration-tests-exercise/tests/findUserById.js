const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const { MongoClient } = require('mongodb');
const db = 'jwt_exercise';
const server = require('../index');
const Model = require('../models/user');
const getConnection = require('./connectionMock');

const HTTP_OK_STATUS = 200;
const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_UNAUTHORIZED_STATUS = 401;

const ID_EXAMPLE = '604cb554311d68f491ba5781';

describe('GET /users/:userId', () => {
  const payload = { username: "Testy", password: "abcde" };

  describe('quando não é passado um JWT', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .get(`/users/${ID_EXAMPLE}`);
    });

    after(() => {
    
    });

    it('retorna status 400', () => {
      expect(response).to.have.status(HTTP_BAD_REQUEST_STATUS);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
    });

    it('a propriedade "error" possui a mensagem correta', () => {
        expect(response.body.error.message).to.be.equal('Token não encontrado ou informado');
    });
  });
  
  describe('quando o id no parâmetro é diferente da id no token', () => {
    let response;

    before(async () => {
      const connectionMock = await getConnection();

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      await connectionMock.db(db).collection('users').insertOne(payload);

      const token = await chai.request(server)
        .post('/login').send({ username: "Testy", password: "abcde" })
        .then((res) => res.body.token);

      response = await chai.request(server)
        .get(`/users/${ID_EXAMPLE}`)
        .set('authorization', token);
    });

    after(() => {
      MongoClient.connect.restore();
    });

    it('retorna status 401', () => {
      expect(response).to.have.status(HTTP_UNAUTHORIZED_STATUS);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
    });

    it('a propriedade "error" possui a mensagem correta', () => {
        expect(response.body.error.message).to.be.equal('Acesso negado');
    });
  });

  describe('com token e parâmetro válidos', () => {
    let response;

    before(async () => {
      const connectionMock = await getConnection();

      sinon.stub(MongoClient, 'connect').resolves(connectionMock);

      const { insertedId: id } = await connectionMock.db(db).collection('users').insertOne(payload);

      const token = await chai.request(server)
        .post('/login').send({ username: "Testy", password: "abcde" })
        .then((res) => res.body.token);

      response = await chai.request(server)
        .get(`/users/${id}`)
        .set('authorization', token);
    });

    after(() => {
      MongoClient.connect.restore();
    });

    it('retorna status 200', () => {
      expect(response).to.have.status(HTTP_OK_STATUS);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui a propriedade "username"', () => {
        expect(response.body).to.have.property('username');
    });

    it('objeto de resposta possui a propriedade "password"', () => {
      expect(response.body).to.have.property('password');
    });

    it('a propriedade "username" possui o conteúdo correto', () => {
        expect(response.body.username).to.be.equal(payload.username);
    });

    it('a propriedade "password" possui o conteúdo correto', () => {
      expect(response.body.password).to.be.equal(payload.password);
    });
  });
});
