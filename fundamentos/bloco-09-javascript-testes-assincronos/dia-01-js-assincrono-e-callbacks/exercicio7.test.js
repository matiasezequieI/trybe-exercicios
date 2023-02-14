const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('testa a função uppercase', () => {
  it('uppercase "trybe" deve retornar "TRYBE"', (done) => {
    uppercase('trybe', (callback) => {
      try {
        expect(callback).toBe('TRYBE');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
