var http = require('http');
var app = require("./config/express")();

http.createServer(app)
  
.listen(3000, function(){
   console.log("Express server executando na porta: 3000 ");
})
 