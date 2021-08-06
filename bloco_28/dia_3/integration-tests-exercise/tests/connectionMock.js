const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getConnection = async () => {
  const DBServer = await MongoMemoryServer.create();
  const URLMock = DBServer.getUri();

  return MongoClient.connect(URLMock, OPTIONS);
};

module.exports = getConnection;
