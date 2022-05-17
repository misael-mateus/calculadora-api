module.exports = function(app){
   var divisaoController = app.controller.dividirController;
   app.route("/dividir").post(divisaoController.dividir);
   
   }