// Parte 1

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

/* 1)
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  Note que o parâmetro da função já está sendo passado na chamada da função.
*/

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const answer = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`;
  console.log(answer);
}

customerInfo(order);

/* 2)
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  Modifique o nome da pessoa compradora.
  Modifique o valor total da compra para R$ 50,00.
*/

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const answer = `Olá ${order.name}, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$${order.payment.total},00.`;
  console.log(answer);
}

orderModifier(order);

// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1) Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addKey(object, key, value) {
  object[key] = value;
}

addKey(lesson2, 'turno', 'manhã');

console.log(lesson2);

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function keyList(object) {
  return Object.keys(object);
}

console.log(keyList(order));

// 3) Crie uma função para mostrar o tamanho de um objeto.

function objectLength(object) {
  return Object.entries(object).length;
}

console.log(objectLength(order));

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function objectEntries(object) {
  return Object.entries(object);
}

console.log(objectEntries(lesson1));

// 5) Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.

function lessons() {
  let answer = {};
  answer.lesson1 = Object.assign({}, lesson1);
  answer.lesson2 = Object.assign({}, lesson2);
  answer.lesson3 = Object.assign({}, lesson3);
  return answer;
};

const allLessons = lessons();

console.log(allLessons);

// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function numberOfStudents(school) {
  let answer = 0;
  for (const lesson in school) {
    answer += school[lesson].numeroEstudantes;
  }
  return answer;
}

console.log(numberOfStudents(allLessons));

// 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function keyValue(object, keyIndex) {
  return Object.values(object)[keyIndex];
}

console.log(keyValue(lesson1, 0));

// 8) Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifyPair(object, key, value) {
  const keyList = Object.keys(object);
  const valueList = Object.values(object);
  let answer = false;
  for (let index = 0; index < keyList.length; index += 1) {
    if (keyList[index] === key && valueList[index] === value) {
      answer = true;
    }
  }
  return answer;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Bônus

// 1) Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

function classGoers(school, subject) {
  let answer = 0;
  for (const lesson in school) {
    if (school[lesson].materia === subject) {
      answer += school[lesson].numeroEstudantes;
    }
  }
  return answer;
}

console.log(classGoers(allLessons, 'Matemática'));

// 2) Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

function createReport(school, teacher) {
  let answer = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  };
  for (const lesson in school) {
    if (school[lesson].professor === teacher) {
      answer.aulas.push(school[lesson].materia);
      answer.estudantes += school[lesson].numeroEstudantes;
    }
  }
  return answer;
}

console.log(createReport(allLessons, 'Maria Clara'));
