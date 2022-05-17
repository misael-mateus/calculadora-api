   module.exports = function(app){
      var subtracaoController = app.controller.subtracaoController;
      app.route("/subtrair").post(subtracaoController.subtrair);
      
      }