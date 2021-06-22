/* 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt .
Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior,
armazene essa informação e escreva em um arquivo chamado fileAll.txt .
O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .
*/

const fs = require('fs').promises;
const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

function oneToMany() {
  array.forEach((string, index) => {
    fs.writeFile(`./file${index + 1}.txt`, string);
  })
}

// oneToMany();

function manyToOne() {
  Promise.all([
    fs.readFile('./file1.txt', 'utf-8'),
    fs.readFile('./file2.txt', 'utf-8'),
    fs.readFile('./file3.txt', 'utf-8'),
    fs.readFile('./file4.txt', 'utf-8'),
    fs.readFile('./file5.txt', 'utf-8'),
  ]).then(([f1, f2, f3, f4, f5]) => {
    const answer = `${f1} ${f2} ${f3} ${f4} ${f5}`;
    fs.writeFile('./fileAll.txt', answer);
  });
}

manyToOne();