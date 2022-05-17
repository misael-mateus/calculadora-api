module.exports = subtracao;
function subtracao(arguments){
  var total = arguments[0];
  for (var i =0 ; i < arguments.length-1; i++){
    total -=arguments[i+1]
  }
  return total;
}