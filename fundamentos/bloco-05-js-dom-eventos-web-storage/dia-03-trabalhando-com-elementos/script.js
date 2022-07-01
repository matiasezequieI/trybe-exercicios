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

const unorderedDays = document.getElementById('days');

for (let i = 0; i < decemberDaysList.length; i++) {
  const numberedDay = decemberDaysList[i];
  const numberedDayListItem = document.createElement('li');
  numberedDayListItem.classList.add('day');
  numberedDayListItem.innerText = numberedDay;
  if (numberedDay === 24 || numberedDay === 25 || numberedDay === 31) {
    numberedDayListItem.classList.add('holiday');
  } else if (
    numberedDay === 4 ||
    numberedDay === 11 ||
    numberedDay === 18 ||
    numberedDay === 25
  ) {
    numberedDayListItem.classList.add('friday');
  }
  unorderedDays.appendChild(numberedDayListItem);
}

function createButton(nomeBotão) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = nomeBotão;
  buttonContainer.appendChild(button);
}

createButton('Feriados');
