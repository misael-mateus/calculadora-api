var somar = require('../domain/soma');
module.exports = function (app) {
    var somarController = {}
    somarController.somar = function (req, res) {

        var elementos = req.body.elementos;
        var resultado = somar(elementos);
        res.json(resultado);

    }
    return somarController;
}