module.exports = function(app){
var somarController = app.controller.somarController;
app.route("/somar").post(somarController.somar);

}