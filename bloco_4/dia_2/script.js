let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// 2- Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let somatorio = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somatorio += numbers[index];
}
console.log(somatorio);

// 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media;
media = somatorio / numbers.length;
console.log(media);

// 4- Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior);

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 != 0) {
    impar += 1;
  }
}
if (impar === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(impar);
}

// 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 99999999;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);

// 8- Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let array = [];
for (let index = 1; index < 26; index += 1) {
  array.push(index);
}
console.log(array);

// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2;

for (let index = 0; index < array.length; index += 1){
    console.log(array[index]/2)
}
