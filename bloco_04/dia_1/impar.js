// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false 

let a = 6,
  b = 8,
  c = 13,
  check = false;

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
  check = true;
}

console.log(check);
