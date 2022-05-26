require('rootpath')();

const roman = require('roman')
const resp = process.argv[2]   //roman.toRoman(2) ;o return está contido no resp

console.log(roman.toRoman(resp))
    
    //"O número é:\n ",resp)
//process.stdout.write(`O número é:\n${resp}`)