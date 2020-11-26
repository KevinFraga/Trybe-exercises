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
