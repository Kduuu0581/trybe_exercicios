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
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let getDaysList = document.querrySelector("days");
  // Este loop vai ocorrer enquanto o index for menor que o tamanho do decemberDaysList
  // A cada iteração do _loop for_ selecione o dia atual armazenado-o na variável `day`,  ao mesmo tempo em que a variável `dayItem` armazena a criação de novas `<li>`;
  for (let index = 0; index < decemberDaysList.length; index += 1);
  let day = decemberDaysList[index];
  let dayItem = document.createElement("li");
  dayItem.innerHTML = day;
  // Adicione o valor do dia atual para cada <li> criado.
  
}
