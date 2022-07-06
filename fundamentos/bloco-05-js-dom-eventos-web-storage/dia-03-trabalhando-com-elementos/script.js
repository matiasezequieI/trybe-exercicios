function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  const unorderedDays = document.getElementById('days');

  for (let i = 0; i < decemberDaysList.length; i++) {
    const numberedDay = decemberDaysList[i];
    const numberedDayListItem = document.createElement('li');
    numberedDayListItem.classList.add('day');
    numberedDayListItem.innerText = numberedDay;
    if (numberedDay === 24 || numberedDay === 31) {
      numberedDayListItem.classList.add('holiday');
    } else if (numberedDay === 4 || numberedDay === 11 || numberedDay === 18) {
      numberedDayListItem.classList.add('friday');
    } else if (numberedDay === 25) {
      numberedDayListItem.className = 'day holiday friday';
    }
    unorderedDays.appendChild(numberedDayListItem);
  }
}

createDaysOfTheMonth();

function createButton(nomeBotão) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = nomeBotão;
  buttonContainer.appendChild(button);
}

createButton('Feriados');

function changeBackgroundColorHolidays() {
  const holidayButton = document.getElementById('btn-holiday');
  const holidays = document.querySelectorAll('.holiday');
  const originalBackgroundColor = 'rgb(238,238,238)';

  holidayButton.addEventListener('click', function () {
    for (let i = 0; i < holidays.length; i++) {
      if (holidays[i].style.backgroundColor !== 'white') {
        holidays[i].style.backgroundColor = 'white';
      } else {
        holidays[i].style.backgroundColor = originalBackgroundColor;
      }
    }
  });
}

changeBackgroundColorHolidays();

function createFridayButton(nomeBotão) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = nomeBotão;
  buttonContainer.appendChild(button);
}

createFridayButton('Sexta-feira');

function changeFridaysText(decemberFridays) {
  const fridayButton = document.getElementById('btn-friday');
  const fridays = document.querySelectorAll('.friday');
  const newText = 'SEXTOU o/';
  fridayButton.addEventListener('click', function () {
    for (let i = 0; i < fridays.length; i++) {
      if (fridays[i].innerText !== newText) {
        fridays[i].innerText = newText;
      } else {
        fridays[i].innerText = decemberFridays[i];
      }
    }
  });
}

const days = document.querySelectorAll('.day');

changeFridaysText([4, 11, 18, 25]);

function zoomIn() {
  for (let day of days) {
    day.addEventListener('mouseenter', function (event) {
      event.target.style.fontSize = '30px';
    });
  }
}

function zoomOut() {
  for (let day of days) {
    day.addEventListener('mouseleave', function (event) {
      event.target.style.fontSize = '20px';
    });
  }
}

const listTasks = document.querySelector('.my-tasks');
const submitNewTask = document.getElementById('btn-add');

function addTask() {
  submitNewTask.addEventListener('click', function () {
    const task = document.getElementById('task-input').value;
    const newTask = document.createElement('span');
    newTask.innerText = task;
    listTasks.appendChild(newTask);
  });
}

addTask();
zoomIn();
zoomOut();
