var multiplicacao = require('../domain/multiplicacao');
module.exports = function(app){
var multiplicarController = {
}
multiplicarController.multiplicacao  = function(req ,res){

   var elementos = req.body.elementos;
   console.log(elementos)
   var resultado = multiplicacao(elementos);
   
   res.json(resultado);

}
return multiplicarController;
}