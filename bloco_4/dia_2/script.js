let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let somatorio = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somatorio += numbers[index];
}
console.log(somatorio);
