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
  const buttonHoliday = document.querySelector(".buttons-container");
  const createButton = document.createElement("button");

  createButton.id = "btn-holiday";
  createButton.innerText = "Feriados";
  buttonHoliday.appendChild(createButton);
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
