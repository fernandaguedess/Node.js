const num = 60;

const table = [
    ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
    ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    ['','M','MM','MMM']
];


    let result = [];
    const digits = (num+'').split(''); //transforma em string e divide cada algarismo do num p string
    for (item of table) {
        const i = digits.pop();
        result.unshift(item[i]) //!
    }
    result = result.join('')

console.log(result)