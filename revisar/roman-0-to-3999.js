require('rootpath')();
const roman = require('roman');

for ( i = 0 ; i <= 399; i++) {
        let num = roman.toRoman(i);
        let num2 = roman.toArabic(num);
        if (roman.toRoman(num2) != num)
        {
            console.log('Numero em romano: ' + num + 'Numero em arabico: ' + num2);
        }
}