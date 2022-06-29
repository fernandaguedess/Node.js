//r2a text program

require('rootpath')();
const roman = require('myroman');

const num = process.argv[2];
console.log(roman.toArabic(num));
