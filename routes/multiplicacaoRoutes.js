module.exports = function(app){
   var multiplicarController = app.controller.multiplicacaoController;
   app.route("/multiplicacao").post(multiplicarController.multiplicacao);
   
   }