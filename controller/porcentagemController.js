var porcentagem= require('../domain/porcentagem');
module.exports = function(app){
var porcentagemController = {
}
porcentagemController.porcentagem= function(req ,res){

 var elementoA = req.body.elementos[0];
 var elementoB = req.body.elementos[1];
var resultado = porcentagem(elementoA, elementoB);
res.json(resultado);

}
return porcentagemController ;
}