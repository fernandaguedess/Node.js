//r2a text program

require('rootpath')();
const arabic = require('myroman');

const num = process.argv[2];
console.log(arabic.toRoman(num));
