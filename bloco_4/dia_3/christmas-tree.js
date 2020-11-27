// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let n = 27,
  scene = "",
  counter = Math.ceil(n / 2),
  pass = 0;

for (let index = 0; index < counter - 1; index += 1) {
  scene = "";
  for (let helper = 0; helper <= n; helper += 1) {
    if (helper === counter - pass || helper === counter + pass) {
      scene += "*";
    } else {
      scene += " ";
    }
  }
  console.log(scene);
  pass += 1;
}
scene = " ";
for (let index = 0; index < n; index += 1) {
  scene += "*";
}
console.log(scene);
