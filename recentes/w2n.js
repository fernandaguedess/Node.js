function toWord(input){
//recebe o valor do p2.js

//const result = []
const nums = {
    //keys  //values
  'zero' : 0,
    'um' : 1,
  'dois' : 2,
  'três' : 3
  //difernetemente de arrays,os objetos n começam com o index=0; seus indexes dependem da chave que foi digitada
}
//obj com as possiblidades de conversão

//console.log(Object.keys(nums)) 

/*const exi = input.indexOf(Object.keys(nums)) //checa se o que foi digitado existe no obj mãe e retorna o index do valor correspondente;
  if (exi == -1) 
   console.log("Valor inválido!")
return Object.values(nums)[exi] //pesquisa o indexof nos values e retorna ele*/

newinput = (input+'').split(' ') //ajeita o input, colocando ele como string e dividindo a cada spaço digitado
for (element of newinput){
const check = element.indexOf(Object.keys(nums))//checa se o que foi digitado existe no obj mãe e retorna o index do valor correspondente;
  if (check == -1) {
    console.log("Valor inválido!")
  } else {
    const result = nums[newinput]
    return result
  }
//for (num of Object.values(nums)){
  //pegar o check e setar o elemento referente a ele no object values.
  //Object.values(nums)
}

//pegar o check e ver se o elemento existe. 
//Depois disso, se o elemento existir, pega o input2 dele e pesquisa no objeto, usando ele de index.
//fazer isso criando uma variável, obviamente kkkk
//dar o return nessa variável
}





module.exports = {toWord}