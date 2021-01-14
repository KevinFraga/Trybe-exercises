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

/*
Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  Note que o parâmetro da função já está sendo passado na chamada da função.
*/

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const answer = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`;
  console.log(answer);
}

customerInfo(order);

/*
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

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addKey(object, key, value) {
  object[key] = value;
}

addKey(lesson2, 'turno', 'manhã');

console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function keyList(object) {
  return Object.keys(object);
}

console.log(keyList(order));

//Crie uma função para mostrar o tamanho de um objeto.

function objectLength(object) {
  return Object.entries(object).length;
}

console.log(objectLength(order));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function objectEntries(object) {
  return Object.entries(object);
}

console.log(objectEntries(lesson1));

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.

function lessons() {
  let answer = {};
  answer.lesson1 = Object.assign({}, lesson1);
  answer.lesson2 = Object.assign({}, lesson2);
  answer.lesson3 = Object.assign({}, lesson3);
  return answer;
};

const allLessons = lessons();

console.log(allLessons);
