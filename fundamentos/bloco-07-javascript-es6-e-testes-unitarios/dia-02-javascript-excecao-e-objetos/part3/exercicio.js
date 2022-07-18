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

//exercicio2
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

//exericio3
const sizeOfObject = (objeto) => Object.keys(objeto).length;
console.log(sizeOfObject(lesson3));

//exericio4
const valuesOfObject = (objeto) => Object.values(objeto);
console.log(valuesOfObject(lesson3));
