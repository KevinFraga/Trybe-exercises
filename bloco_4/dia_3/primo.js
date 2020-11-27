// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

let x = 336351681651687,
  primo = true;

for (let index = 2; index < x; index += 1) {
  if (x % index === 0) {
    primo = false;
    break;
  }
}
console.log("O número", x, "é primo? ", primo);
