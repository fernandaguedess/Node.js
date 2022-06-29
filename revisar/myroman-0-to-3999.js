for ( i = 0 ; i < 4001 ; i++ ) {


    require('rootpath')();

    const arabic = require('myroman');
    
    //const resp = i; //roman.toRoman(2) ;o return está contido no resp
    
    
    //console.log(arabic.toRoman(resp));


    console.log(`numero em arabico: ${i} ; numero em romano: ${arabic.toRoman(i)}`)
}

//console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEWWW")