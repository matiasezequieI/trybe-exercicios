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

//exercicio1
const updateLesson2 = (objeto, chave, valor) => {
  objeto[chave] = valor;
};

updateLesson2(lesson2, 'turno', 'noite');
console.log(lesson2);

// //exercicio2
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

// //exericio3
const sizeOfObject = (objeto) => Object.keys(objeto).length;
console.log(sizeOfObject(lesson3));

// //exericio4
const valuesOfObject = (objeto) => Object.values(objeto);
console.log(valuesOfObject(lesson3));

//exercicio5
const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

//exericio6
const sumTotalStudens = (objeto) => {
  let total = 0;
  const array = Object.keys(allLessons);

  for (index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};

console.log(sumTotalStudens(allLessons));

//exercicio7
const getValueByNumber = (objeto, numero) => Object.values(objeto)[numero];
console.log(getValueByNumber(lesson1, 1));

//exercicio8
const verifyPair = (objeto, chave, valor) => {
  const array = Object.entries(objeto);
  let find = false;
  for (let index in array) {
    if (array[index][0] === chave && array[index][1] === valor) {
      find = true;
    }
  }
  return find;
};

console.log(verifyPair(lesson2, 'professor', 'Carlos'));
