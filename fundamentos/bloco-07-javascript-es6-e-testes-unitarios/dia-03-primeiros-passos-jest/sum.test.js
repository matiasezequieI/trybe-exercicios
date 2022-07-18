const sum = require('./sum');

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve retornar erro caso um dos parâmetro não seja número', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
