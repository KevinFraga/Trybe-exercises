// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 12;
let b = 7;
let c = 4;
if (a > b && a > c) {
  console.log("O maior número é " + a);
} else if (b > a && b > c) {
  console.log("O maior número é " + b);
} else {
  console.log("O maior número é " + c);
}
