// 1 - Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function calc(a, b, c) {
  return new Promise((resolve, reject) => {
    const paramTypes = [a, b, c].map((param) => typeof param);
    paramTypes.forEach((param) => {
      if(param !== "number") reject(Error("Informe apenas números"));
    });
    const answer = (a + b) * c;
    answer >= 50 ? resolve(answer) : reject(Error("Valor muito baixo"));
  });
}

/* 
2 - Escreva um código para consumir a função construída no exercício anterior.
Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe.
Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
Utilize then e catch para manipular a Promise retornada pela função:
Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
*/

function random() {
  return Math.floor(Math.random() * 100 + 1);
}

function exec() {
  const a = random();
  const b = random();
  const c = random();
  const answer = calc(a, b, c)
    .then((ans) => console.log(ans))
    .catch((error) => console.log(error.message));
}

exec();

// 3 - Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

async function execAsync() {
  const a = random();
  const b = random();
  const c = random();
  try {
    const answer = await calc(a, b, c);
    console.log(answer);
  } catch (err) {
    console.error(err);
  }
}

execAsync();
