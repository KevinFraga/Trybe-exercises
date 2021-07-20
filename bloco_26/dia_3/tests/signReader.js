const { expect } = require('chai');

const sign = require('../signReader');

describe('Função signReader', () => {
  describe('Número positivo', () => {
    const resp = sign(7);

    describe('a resposta', () => {
      it('é uma string', () => {
        expect(resp).to.be.a('string');
      });

      it('é positivo', () => {
        expect(resp).to.be.equal('positivo');
      });
    });
  });

  describe('Número negativo', () => {
    const resp = sign(-3);

    describe('a resposta', () => {
      it('é uma string', () => {
        expect(resp).to.be.a('string');
      });

      it('é negativo', () => {
        expect(resp).to.be.equal('negativo');
      });
    });
  });

  describe('Número 0', () => {
    const resp = sign(0);

    describe('a resposta', () => {
      it('é uma string', () => {
        expect(resp).to.be.a('string');
      });

      it('é neutro', () => {
        expect(resp).to.be.equal('neutro');
      });
    });
  });

  describe('Não é um número', () => {
    const resp = sign('teste');

    it('a resposta é uma string de erro', () => {
      expect(resp).to.be.equal('o valor deve ser um número');
    });
  });
});
