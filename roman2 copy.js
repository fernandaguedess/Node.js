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
        result.push(item[i]) 
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

function toArabic(num){
    let result = 0;        
    let previous = 0;
    const digits = (num+'').split('');
    for (digit of digits){
      const i = Object.keys(s2v).indexOf(digit);
      if (i < 0) {
          throw "ERRO"}
      const v = Object.values(s2v)[i];
      result = result + v - (v > previous ? 2*previous : 0);
      previous = v;
     }
 return result;
}

module.exports = {toRoman,toArabic};