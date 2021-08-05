/**
 * 
 * 1 - Crie o endpoint POST /upload
 *    O endpoint deve receber apenas um arquivo no campo file ;
 *    O arquivo deve ser armazenado na pasta uploads ;
 *    O arquivo armazenado deve ter o timestamp do upload (obtido com Date.now() ) seguido do nome original do arquivo.
 *    Exemplo, para o arquivo profile.png , o nome armazenado deve ser algo como 1616691266095-profile.png , já que o timestamp será diferente a cada vez.
 *    Retorne status 200 OK se der tudo certo.
 * 
 * 2 - Altere o endpoint POST /upload para que atenda os seguintes critérios:
 *    Apenas aceite arquivos cuja extensão seja .png ; Caso o arquivo tenha outro tipo de extensão, retorne o status 403 Forbidden com o JSON a seguir:
 *        {
 *            "error": { "message": "Extension must be `png`" }
 *        }
 *    Não aceite um arquivo cujo nome (ignorando o timestamp) já exista na pasta uploads . Caso o arquivo já exista, retorne o status 409 Conflict com o seguinte JSON:
 *        {
 *            "error": { "mesage": "File already exists" }
 *        }
 *    Dica: procure sobre fileFilter no multer, pode ajudar.
 * 
 * 3 - Torne a pasta uploads pública de forma que seja possível baixar os arquivos enviados anteriormente.
 * 
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/uploads`));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => callback(null, 'uploads'),
  filename: (_req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`),
});

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);

  return files.some((file) => file.split('-')[1] === fileName);
};

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png') {
      req.fileExtensionError = true;

      return callback(null, false);
    }

    if (fileExists(file.originalname)) {
      req.fileDuplicated = true;

      return callback(null, false);
    }

    callback(null, true);
  },
});

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), controllers.upload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
