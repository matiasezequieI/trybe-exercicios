const myFizzBuzz = require('./myFizzBuzz');

describe('testa a função myFizzBuzz', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('verifica se retorna numero caso o parâmetro passado para a função não seja um número divisivel por 3 ou 5', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });
  it('verifica se retorna falso caso o parâmetro passado para a função não seja um número', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});
