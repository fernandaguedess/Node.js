//r2a(roman-to-arabic) test program

require('rootpath')();
const roman = require('roman');

const num = process.argv[2];
const num2 = process.argv[3];


//const num = 'X'
console.log(roman.toArabic(num));
//console.log(roman.toArabic(num2));