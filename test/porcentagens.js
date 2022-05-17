const chai = require('chai');
const expect = chai.expect;
const porcentagens = (a, b) => {
   if(typeof a === "number" && typeof b === "number") return  (b / 100) * a;
   else return  undefined;
}
describe(' Porcentagens dos Números' , () =>{
   it('Pocentagens dos valores', (done) =>{
      const resultado = porcentagens(100, 10);
      expect(resultado).be.equal(10);
      done();
   })

      it('Pocentagens dos valores', (done) =>{
         const resultado = porcentagens( 300, 5);
         expect(resultado).be.equal(15);
         done();
      })

      it('Pocentagens dos valores', (done) =>{
         const resultado = porcentagens("teste", 50);
         expect(resultado).be.equal(undefined);
         done();
      })
      it('Pocentagens dos valores ', (done) =>{
         const resultado = porcentagens( 600, 15);
         expect(resultado).be.equal(90);
         done();
      })
}) 