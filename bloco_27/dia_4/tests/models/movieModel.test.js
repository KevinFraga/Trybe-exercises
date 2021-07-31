const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const MoviesModel = require('../../models/movieModel');
const { getConnection } = require('../connectionMock');

describe('Busca todos os filmes no BD', () => {
  describe('quando não existe nenhum filme criado', () => {
    before(async () => {
      const connectionMock = await getConnection();

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
    });

    after(() => {
      MongoClient.connect.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.empty;
    });

  });

  describe('quando existem filmes criados', () => {
    before(async () => {
      const connectionMock = await getConnection();

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      const moviesCollection = await connectionMock.db('model_example').collection('movies');

      await moviesCollection.insertOne({
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
    });

    after(() => {
      MongoClient.connect.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesModel.getAll();

      expect(response).to.be.not.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.be.an('object');
    });

    it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const [ item ] = await MoviesModel.getAll();

      expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });

  });
});

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const connectionMock = await getConnection();

    sinon.stub(MongoClient, 'connect')
      .resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Procurar filme por ID', () => {
  describe('quando não encontrado', () => {
    before(async () => {
      const connectionMock = await getConnection();

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);
    });

    after(() => {
      MongoClient.connect.restore();
    });
    
    it('o retorno é null', async () => {
      const TEST_ID = '61054b0fd01e81140a7d5c2c';

      const response = await MoviesModel.getByID(TEST_ID);

      expect(response).to.not.be.ok;
    })
  });

  describe('quando encontrado', () => {
    after(() => {
      MongoClient.connect.restore();
    });
    
    it('retorna um objeto', async () => {
      const connectionMock = await getConnection();
    
      sinon.stub(MongoClient, 'connect')
       .resolves(connectionMock);

      const moviesCollection = await connectionMock.db('model_example').collection('movies');

      const { insertedId: TEST_ID } = await moviesCollection.insertOne({
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      });
      
      const response = await MoviesModel.getByID(TEST_ID);

      expect(response).to.be.a('object');
    });
  });

});
