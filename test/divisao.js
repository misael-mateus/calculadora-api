const chai = require('chai');
const expect = chai.expect;
const dividirNumeros = (a , b) => {
   if(typeof a === "number" && typeof b  === "number") return  a /  b;
   else return  undefined;
}
describe('Divisao' , () =>{
   it('Divisao dos valores   10  e 2', (done) =>{
      const resultado = dividirNumeros(10,2);
      expect(resultado).be.equal(5);
      done();
   })

      it('Divisao dos valores -  2  e 2', (done) =>{
         const resultado = dividirNumeros(2,2);
         expect(resultado).be.equal(1);
         done();
      })

      it('Divisao dos valores - "teste  e 3', (done) =>{
         const resultado = dividirNumeros("teste",3);
         expect(resultado).be.equal(undefined);
         done();
      })
}) 