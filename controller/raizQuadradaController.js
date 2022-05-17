var raiz= require('../domain/raizQuadrada');
module.exports = function(app){
var raizController = {
}
raizController.raiz= function(req ,res){

 var elementos = req.body.elementos;
var resultado = raiz(elementos);
res.json(resultado);

}
return raizController ;
}