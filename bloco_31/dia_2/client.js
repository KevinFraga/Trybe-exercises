const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente conectado ao servidor!')
  client.write('Cliente número 1');
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('Desconectado do servidor');
});
