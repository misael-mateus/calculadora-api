var subtrair= require('../domain/subtracao');

module.exports = function(app){
var subtrairController= {

}
subtrairController.subtrair = function(req ,res){
 
 var elementos = req.body.elementos;

var resultado = subtrair(elementos);
console.log(res.json(resultado));
res.json(resultado);

}
return subtrairController;
}