require('rootpath')();

const propi = require('proprio')
const resp = process.argv[2]   //roman.toRoman(2) ;o return está contido no resp

console.log(propi(resp))