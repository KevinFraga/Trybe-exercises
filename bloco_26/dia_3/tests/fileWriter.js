const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writer = require('../fileWriter');

const nameArc = 'Arq_Testes';
const content = 'YAY!!!';

sinon.stub(fs, 'writeFileSync');

describe('Função fileWriter', () => {
  const resp = writer(nameArc, content);

  describe('a resposta é', () => {
    it('uma string', () => {
      expect(resp).to.be.a('string');
    });

    it('ok', () => {
      expect(resp).to.be.equal('ok');
    });
  });
});
