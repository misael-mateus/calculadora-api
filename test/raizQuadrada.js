const chai = require('chai');
const res = require('express/lib/response');
const expect = chai.expect;
const raizQuadrada = (a) => {
   if (typeof a === "number") return Math.sqrt(a);
   else return undefined;
}
describe('Raiz Quadrada', () => {
   it('Raiz Quadrada do número 5', (done) => {
      const resultado = raizQuadrada(5);
      expect(2).be.equal(parseInt(resultado));
      done();
   })

   it('Raiz Quadrada do número 9', (done) => {
      const resultado = raizQuadrada(9);
      expect(resultado).be.equal(3);
      done();
   })

   it('Raiz Quadrada do número 10', (done) => {
      const resultado = raizQuadrada("teste", );
      expect(resultado).be.equal(undefined);
      done();
   })
   it('Raiz Quadrada do número -4', (done) => {
      const resultado = raizQuadrada(-4);
      expect(isNaN(resultado)).be.equal(true);
      done();
   })
})