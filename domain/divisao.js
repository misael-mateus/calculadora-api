module.exports = divisao;
function divisao(arguments){
  var total = arguments[0];
  for (var  i = 0; i < arguments.length-1; i++) {
    if(arguments[i + 1] === 0){
      return total;
    }
     total /= arguments[i + 1];
}
return total;
}