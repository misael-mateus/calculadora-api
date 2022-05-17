var express = require("express");
var bodyParser = require("body-parser");

var expressLoad = require('express-load');
module.exports = function(){
var app = express();
app.set("port", 3000);
app.use(express.static("../Interfaces"));
    app.set('view engine', 'ejs');
    app.set('views', 'app/views');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());

expressLoad("controller")
  .then('routes')
  .into(app);
  app.get("/", function(req, res){
     res.send("");
  })
  app.get('*',function(req,res){ //tratamento da pagina 404
   res.status(404).send('404');
});
return app;
}

