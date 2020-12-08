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

//Exercício 1
function createDezDaysList() {
  const dezDays = [
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
  const dezDaysList = document.querySelector("#days");

  for (let index = 0; index < dezDays.length; index += 1) {
    const dayNumber = dezDays[index];
    const daysListItem = document.createElement("li");

    daysListItem.innerHTML = dayNumber;
    daysListItem.className = "day";
    if (index === 25 || index === 26 || index === 32) {
      daysListItem.className += " holiday";
    }
    if (index === 5 || index === 12 || index === 26) {
      daysListItem.className += " friday";
    }
    dezDaysList.appendChild(daysListItem);
  }
}
createDezDaysList();

//Exercício 2
function holidays() {
  const divDadHolidays = document.querySelector(".buttons-container");
  const createButton = document.createElement("button");

  createButton.id = "btn-holiday";
  createButton.innerText = "Feriados";
  divDadHolidays.appendChild(createButton);
}
holidays("Feriados");

//Exercício 3
function clickHoliday() {
  const buttonEvent = document.querySelector("#btn-holiday");
  const clickHoliday = document.querySelectorAll(".holiday");
  buttonEvent.addEventListener("click", backgroundHoliday);
  function backgroundHoliday() {
    for (let index = 0; index < clickHoliday.length; index += 1) {
      if (clickHoliday[index].style.backgroundColor === "green") {
        clickHoliday[index].style.backgroundColor = "rgb(238,238,238)";
        clickHoliday[index].style.color = "#777";
      } else {
        clickHoliday[index].style.backgroundColor = "green";
        clickHoliday[index].style.color = "white";
      }
    }
  }
}
clickHoliday();

//Exercício 4
function fridays(str) {
  const divDadFridays = document.querySelector(".buttons-container");
  const createButton = document.createElement("button");

  createButton.id = "btn-friday";
  createButton.innerText = str;
  divDadFridays.appendChild(createButton);
}
fridays("Sexta-feira");

//Exercícios 5
function clickFriday() {
  const buttonEvent = document.querySelector("#btn-friday");
  const clickFriday = document.querySelectorAll(".friday");
  buttonEvent.addEventListener("click", backgroundFriday);
  function backgroundFriday() {
    for (let index = 0; index < clickFriday.length; index += 1) {
      if (clickFriday[index].style.backgroundColor === "red") {
        clickFriday[index].style.backgroundColor = "rgb(238,238,238)";
        clickFriday[index].style.color = "#777";
      } else {
        clickFriday[index].style.backgroundColor = "red";
        clickFriday[index].style.color = "white";
      }
    }
  }
}
clickFriday();

//Exercício 6
function zoomEffectInput(event) {
  event.target.style.transform = "scale(2)";
  event.target.style.transition = "0.5s";
}
function zoomEffectExit(event) {
  event.target.style.transform = "scale(1)";
  event.target.style.transition = "0.5s";
}
function mouseZoomEffect() {
  const day = document.querySelectorAll(".day");
  for (let index = 0; index < day.length; index += 1) {
    day[index].addEventListener("mouseover", zoomEffectInput);
    day[index].addEventListener("mouseout", zoomEffectExit);
  }
}
mouseZoomEffect();

//Exercício 7
function addTask(task) {
  const spanTask = document.createElement("span");
  const divTaskDad = document.querySelector(".my-tasks");
  spanTask.innerText = task;
  divTaskDad.appendChild(spanTask);
}
addTask("comida");

//Exercício 8
function ColorTask(color) {
  const addDivTask = document.createElement("div");
  const divTask = document.querySelector(".my-task");
  addDivTask.className = "task";
  addDivTask.style.backgroundColor = color;
  divTask.appendChild(addDivTask);
}
ColorTask("black");
