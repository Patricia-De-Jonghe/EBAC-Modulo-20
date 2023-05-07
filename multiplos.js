somar(1000);

function somar(limite){
  let multiplos3 = 0;
  let multiplos5 = 0;
    for(i =0;i <= limite;i++){
       if(i % 3 === 0)
       multiplos3 += i;    
       if(i % 5 === 0)
       multiplos5 += i;
    }

var resultado = (multiplos3 + multiplos5);

console.log(resultado)

module.exports = { resultado }
}
