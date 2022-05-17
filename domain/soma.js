module.exports = soma;
function soma(arguments){
  var total = 0; 
  for (var x of arguments) {
      total+= x;
  }
  return total;
}
