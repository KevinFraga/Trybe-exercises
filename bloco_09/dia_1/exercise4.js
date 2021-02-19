const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

/*
Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. 
O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. 
Crie a função sendMarsTemperature , que imprime a temperatura em Marte.
*/

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () =>
  setTimeout(() => console.log(getMarsTemperature()), messageDelay());

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo