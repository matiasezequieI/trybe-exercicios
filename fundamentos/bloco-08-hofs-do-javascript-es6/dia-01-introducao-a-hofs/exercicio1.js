const newEmployees = (createNewEmployee) => {
  const employees = {
    id1: createNewEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createNewEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createNewEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const createNewEmployee = (nome) => {
  const email = `${nome.toLowerCase().split(' ').join('_')}@trybe.com`;
  return email;
};

console.log(newEmployees(createNewEmployee));
