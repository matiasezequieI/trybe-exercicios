const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = () => {
  const studentsAverage = students.map((item, index) => ({
    name: item,
    average:
      grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }));
  return studentsAverage;
};

console.log(studentAverage());
