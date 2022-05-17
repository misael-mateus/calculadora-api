const chai = require('chai');
const expect = chai.expect;
const subtrairNumeros = (a , b) => {
   if(typeof a === "number" && typeof b  === "number") return  a -  b;
   else return  undefined;
}
describe('Subtracao' , () =>{
   it('subtracao dos valores   -5  e 1', (done) =>{
      const resultado = subtrairNumeros(150,20);
      expect(130).be.equal(resultado);
      done();
   })

      it('subtracao dos valores -  -2  e -2', (done) =>{
         const resultado = subtrairNumeros(-2,-2);
         expect(0).be.equal(resultado);
         done();
      })

      it('subtracao dos valores - "teste  e 3', (done) =>{
         const resultado = subtrairNumeros("teste",3);
         expect(undefined).be.equal(resultado);
         done();
      })
}) 