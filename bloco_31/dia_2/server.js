const net = require('net');

const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.on('data', (data) => {
    console.log(`O cliente disse: ${data}`);
  });

  connection.write('Mensagem do servidor!!\n');

  server.getConnections((_err, count) => {
  console.log(count);
  });
});

server.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
});
