const numero = require('numero-por-extenso');

b=12
let n = numero.porExtenso(b)

let symbols = [
    'zero',
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove'
]

let valores = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

function words2num(n) {
  let result = 0;
  let previous = 0;
  const digits = n.split('') 
   for (digit of digits) { 
     console.log(digit)
      //const i = symbols.indexOf(digit);
      //if ( i < 0 ) {throw "erro :("}
      //const v = values[i];
      //result = result + v - (v > previous? 2*previous : 0 );
      //previous = v;
   }
return digitt;
}