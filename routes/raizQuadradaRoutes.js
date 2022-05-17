module.exports = function(app){
   var raizController = app.controller.raizQuadradaController;
   app.route("/raiz").post(raizController.raiz);
   }
