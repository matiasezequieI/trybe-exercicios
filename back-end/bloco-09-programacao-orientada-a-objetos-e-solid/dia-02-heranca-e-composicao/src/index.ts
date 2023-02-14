import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));

carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];

// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);

// console.log(carolina);
// console.log('media do lucas', lucas.sumAverageGrades());

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

// console.log(matematica);

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher(
  'João Antônio da Costa',
  new Date('1982/04/21'),
  2000,
  history
);
const lucio = new Teacher(
  'Lucio Teixeira',
  new Date('1986/01/29'),
  2000,
  philosophy
);
