var dividir = require('../domain/divisao');
module.exports = function(app){
var dividirController = {
   
}
dividirController.dividir= function(req ,res){

 var elementos = req.body.elementos;
var resultado = dividir(elementos);
res.json(resultado);

}
return dividirController;
}