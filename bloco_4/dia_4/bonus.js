// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function converteRomanos(number) {
  let answer = 0,
    first,
    second;
  for (let index = 0; index < number.length; index += 1) {
    for (let counter in romanos) {
      if (number[index] === counter) {
        first = romanos[counter];
        for (let marker in romanos) {
          if (number[index + 1] === marker) {
            second = romanos[marker];
          }
        }
        if (second > first) {
          answer -= first;
        } else {
          answer += romanos[counter];
        }
      }
    }
  }
  return answer;
}

console.log(converteRomanos("MMMCMXCIX"));
