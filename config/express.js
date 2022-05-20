var express = require("express");
var bodyParser = require("body-parser");
var expressLoad = require('express-load');

module.exports = function () {
    var cors = require('cors');
    var app = express();

    const corsOpts = {
        origin: '*',

        methods: [
            'GET',
            'POST',
        ],

        allowedHeaders: [
            'Content-Type',
        ],
    };

    app.use(cors(corsOpts));
    app.set("port", 3000);
    app.use(express.static("@/public"));
    app.set('view engine', 'ejs');
    app.set('views', 'app/views');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

    expressLoad("controller")
        .then('routes')
        .into(app);

    var somarController = app.controller.somarController;
    app.post("/somar",
        somarController.somar)
    app.get('*', function (req, res) { //tratamento da pagina 404
        res.status(404).send('404');
    });
    return app;
}

