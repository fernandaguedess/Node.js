/*roman.js -- converts arabic numbers
to roman and vice-versa
versao1(Lista4)*/


const table = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM','\n__\nIV','\n_\nV','\n__\nVI','\n___\nVII','\n____\nVIII','\n__\nIX'],  
    ['','\n_\nX','__\nXX','___\nXXX','__\nXL', '_\nL', '__\nLX','\n___\nLXX','\n____\nLXXX','__\nXC']
];


//minha ideia: colocar o character especial em todos os emlementos necessários, e depois dentro do for colocar um if pra dizer que se está na repetição 5 ou 4ele não deve contar o \n da segunda ordem
//nanda, essa ordem é do bg de numerais, de ordens e classes
//\n
/*,'_\nV','__\nVI','___\nVII','____\nVIII','__\nIX'],
    ['','_\nX','__\nXX','___\nXXX'*/
// usar \u203EV ou \u203E entre cada algarismo

function toRoman(num) { //argumento a ser pedido em arábico
    const result = [];   
    const digits = (num+'').split(''); //transforma em string e divide cada algarismo do num p array
    for (item of table) { 
        const i = digits.pop(); 
        
        result.unshift(item[i]) 
    }
    return result.join('')
}


const symbols = ['I','V','X','L','C','D','M'];
const values = [ 1 , 5 , 10 , 50 , 100 , 500 , 1000 ];

function toArabic(num) {  //argumento a ser pedido em romano = IV
    let result = 0;
    let previous = 0;
    const digits = num.split('') //numero divido por caractere agora dentro de um array

     for (digit of digits) { 
        const i = symbols.indexOf(digit);
        const v = values[i];
        let a = digits.every(digits => digits.includes(symbols))
    if (a == true) {

    throw 'erro'
    }


        result = result + v - (v > previous? 2*previous : 0 ); 
        
        previous = v; 

     }
 return result;
}

module.exports = {toRoman,toArabic};
