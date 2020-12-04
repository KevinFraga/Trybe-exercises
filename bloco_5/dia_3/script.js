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
    day.className = "day";
    day.innerText = dezDaysList[index];
    if (index - 1 === 24 || index - 1 === 25 || index - 1 === 31) {
      day.className += " holiday";
    }
    if (
      index - 1 === 4 ||
      index - 1 === 11 ||
      index - 1 === 18 ||
      index - 1 === 25
    ) {
      day.className += " friday";
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
function holidayButton() {
  let btnHoliday = document.createElement("button");
  let btnContainer = document.querySelector(".buttons-container");
  btnHoliday.innerText = "Feriados";
  btnHoliday.className = "btn-holiday";
  btnContainer.appendChild(btnHoliday);
}
holidayButton();

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
function fridayButton() {
  let btnFriday = document.createElement("button");
  let btnContainer = document.querySelector(".buttons-container");
  btnFriday.innerText = "Sexta-feira";
  btnFriday.id = "btn-friday";
  btnContainer.appendChild(btnFriday);
}
fridayButton();