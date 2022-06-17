/*roman.js -- converts arabic numbers
to roman and vice-versa*/

const table = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM']
];

function toRoman(num) {
    const result = [];
    const digits = (num+'').split('');
    for (item of table) {
        const i = digits.pop();
        result.unshift(item[i]) //!
    }
    return result.join('')
}
//const symbols = ['I','V','X','L','C','D','M'];
//const values = [ 1 , 5 , 10 , 50 , 100 , 500 , 1000 ];

const s2v = {
    'I' :1,
    'V' :5,
    'X' :10,
    'L' :50,
    'C' :100,
    'D' :500,
    'M' :1000  
};

function toArabic(num) {
    let result = 0;
    let previous = 0;
    const not = ['A','B','E','F','G','H','J','K','N','O','P','Q','R','S','T','U','W','Y','Z','i','v','x','l','c','d','m']

    for(let a = 0; a < not.length; a++){
        if (num.includes(not[a]) || num.includes(not[a].toLowerCase()))
        {
            throw('Apenas dígitos romanos!');
        }
    }
    const digits = (num+'').split('')
     for (digit of digits) {
         const v = s2v[digit];
         result = result + v - (v > previous? 2*previous : 0 );
         previous = v;
        }
        
     }
 return result;
module.exports = {toRoman,toArabic};

//const i = Object.keys(s2v).indexOf(digit);
if ( i < 0 ) {throw "erro :("}
const v = Object.keys(s2v)[i];
result = result + v - (v > previous? 2*previous : 0 );
previous = v;