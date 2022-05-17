const chai = require('chai');
const expect = chai.expect;
const multiplicarNumeros= (a , b) => {
   if(typeof a === "number" && typeof b  === "number") return  a *  b;
   else return  undefined;
}
describe('Multiplicacao' , () =>{
   it('Multiplicacao dos numeros   5  e 1', (done) =>{
      const resultado = multiplicarNumeros(5,1);
      expect(resultado).be.equal(5);
      done();
   })

      it('Multiplicacao dos numeros -  2  e 2', (done) =>{
         const resultado = multiplicarNumeros(2,2);
         expect(resultado).be.equal(4);
         done();
      })

      it('Multiplicacao dos numeros - "teste  e 3', (done) =>{
         const resultado = multiplicarNumeros("teste",3);
         expect(resultado).be.equal(undefined);
         done();
      })
}) 