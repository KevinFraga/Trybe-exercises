// 3- Agora inverta o lado do triângulo.

let n = 6,
  scene = "",
  counter = n - 1;

for (let index = 0; index < n; index += 1) {
  scene = "";
  for (let helper = 0; helper < counter; helper += 1) {
    scene += " ";
  }
  for (let helper = n; helper > counter; helper -= 1) {
    scene += "*";
  }
  console.log(scene);
  counter -= 1;
}
