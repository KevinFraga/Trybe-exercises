// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let a = 45,
  b = 90,
  c = 45;
let triangulo;
if (a + b + c <= 180) {
  triangulo = true;
} else {
  triangulo = false;
}
console.log(triangulo);
