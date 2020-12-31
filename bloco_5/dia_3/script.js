function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
/* Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
    Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
    Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
    Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

function createMonthDays() {
  let month = document.querySelector("#days");
  let day;
  for (let index = 0; index < dezDaysList.length; index += 1) {
    day = document.createElement("li");
    day.classList.add("day");
    day.innerText = dezDaysList[index];
    if (index - 1 === 24 || index - 1 === 25 || index - 1 === 31) {
      day.classList.add("holiday");
    }
    if (
      index - 1 === 4 ||
      index - 1 === 11 ||
      index - 1 === 18 ||
      index - 1 === 25
    ) {
      day.classList.add("friday");
    }
    month.appendChild(day);
  }
}

createMonthDays();

/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function holidayButton(holiday) {
  let btnHoliday = document.createElement("button");
  let btnContainer = document.querySelector(".buttons-container");
  btnHoliday.innerText = holiday;
  btnHoliday.classList.add("btn-holiday");
  btnContainer.appendChild(btnHoliday);
}

holidayButton("Feriados");

/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function holidayButtonClick() {
  let btnHoliday = document.querySelector(".btn-holiday");
  btnHoliday.addEventListener("click", changeColor);
}

function changeColor() {
  let helper = document.querySelectorAll(".holiday");
  let newColor = "rgb(76, 164, 109)";
  let oldColor = "rgb(238, 238, 238)";
  for (let index = 0; index < helper.length; index += 1) {
    if (helper[index].style.backgroundColor === newColor) {
      helper[index].style.backgroundColor = oldColor;
    } else {
      helper[index].style.backgroundColor = newColor;
    }
  }
}

holidayButtonClick();

/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function fridayButton(friday) {
  let btnFriday = document.createElement("button");
  let btnContainer = document.querySelector(".buttons-container");
  btnFriday.innerText = friday;
  btnFriday.id = "btn-friday";
  btnContainer.appendChild(btnFriday);
}

fridayButton("Sexta-feira");

/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function fridayButtonClick() {
  let btnFriday = document.querySelector("#btn-friday");
  btnFriday.addEventListener("click", changeText);
}

function changeText() {
  let helper = document.getElementsByClassName("friday");
  let newText = "FRIDAY!!";
  let oldText = [4, 11, 18, 25];
  for (let index = 0; index < helper.length; index += 1) {
    if (helper[index].innerText === newText) {
      helper[index].innerText = oldText[index];
    } else {
      helper[index].innerText = newText;
    }
  }
}

fridayButtonClick();

/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

function zoomUp(event) {
  let day = event.target;
  day.style.fontSize = "33px";
}

function zoomDown(event) {
  let day = event.target;
  day.style.fontSize = "20px";
}

function zoomSetup() {
  let month = document.getElementById("days");
  month.addEventListener('mouseover', zoomUp);
  month.addEventListener('mouseout', zoomDown);
}

zoomSetup();

/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function addTask(task) {
  let span = document.createElement('span');
  let tasks = document.querySelector(".my-tasks");
  span.innerText = task;
  tasks.appendChild(span);
}

addTask("Teste");

/* Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function colorCode(color) {
  let task = document.createElement('div');
  let tasks = document.querySelector(".my-tasks");
  task.classList.add('task');
  task.style.backgroundColor = color;
  tasks.appendChild(task);
}

colorCode("blue");

/* Exercício 9:
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

function selectedColor(event) {
  let color = event.target;
  if (color.classList.contains('selected')) {
    color.classList.remove('selected');
  } else {
    color.classList.add('selected');
  }
}

function colorSelection() {
  let tasks = document.querySelector(".my-tasks");
  tasks.addEventListener('click', selectedColor);
}

colorSelection();
