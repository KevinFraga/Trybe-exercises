const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { MONGO_DB_URL } = process.env;

let db = 'jwt_exercise';

const connection = () => MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => conn.db(db))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

module.exports = connection;
