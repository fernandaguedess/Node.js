const a = [10, 20 , 30, 35, 35, 35, 35, 35, 20]

//const a = [10, 20 , 30, 35, 35, 35, 35, 35, 20, 'um texto', true, 10+100, 'a media eh: ' + ( (5+7)/2) ]

a[8] = -20

console.log(a)
console.log(`Temos ao todo ${a.length} elemento${a.length>1?'s':''}`)
console.log(`O decimo elemento eh: ${a[8]}`)

if (a.length > 0 ) {
        console.log('tem coisa')
} else {
        console.log('ta vazio')
}

//usar for e for of para descrever os elementos do array!

//array2

let a = [ 10, 20, 30, 40, 50, ( (15*2) + 30), 70, 'dezenove', 90, 100, 'a media eh: ' + (4*3)*12]
//        0    1   2   3   4        5         6        7      8    9         10

a[11] = -6

if (a.length > 0) {
        console.log(`O array tem coisa dentro`)
        console.log(`Temos ao todo ${a.length} elemento${a.length > 1?'s':''}`)
        console.log(`E este eh o array: ${a}`)
        console.log(`vamos ver qual eh o elemento de index 4: ${a[4]}`)
} else {
        console.log(`O array ta vazio`)
}

/*for ( index = 0 ; index < a.length ; index++ ) {

        console.log(`O elemento de index ${index} do array eh: ${a[index]}`)

}*/



        for (el in a){

        console.log("O elemento eh: ", el)
}
