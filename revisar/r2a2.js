require('rootpath')();
const roman = require ('roman');


const num = process.argv[2];
const ro = [ 'I' ,'V','X','L','C', 'D']
const lis = num.split('');
const len = lis.every(elem => ro.includes(elem))

if (len == true) {
console.log(roman.toArabic(num));
} else {
    throw 'Erro: tem que ser em romano'
}