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

let values = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

  let result = 0;
  let previous = 0;
  const digits = n.split('')//.replace('e','+')
   for (digit of digits) { 
     
      const i = symbols.indexOf(digit);
      if ( i < 0 ) {throw "erro :("}
      else { console.log(symbols[i])}
      //colocar com um switch e substituir o 'e' por uma soma
      //const v = values[i];
      //result = result + v - (v > previous? 2*previous : 0 );
      //previous = v;
   }

