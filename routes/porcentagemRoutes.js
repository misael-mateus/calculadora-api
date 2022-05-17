module.exports = function(app){
   var porcentagemController = app.controller.porcentagemController;
   app.route("/porcentagem").post(porcentagemController.porcentagem);
   
   }