function toWord(input)

const nums = {
  'zero' : 0,
    'um' : 1,
  'dois' : 2,
  'três' : 3
}

const exi = input.indexOf(Object.keys) //checa se o que foi digitado existe no array mãe e retorna o index do valor correspondente;
return Object.values(nums)[exi] //pesquisa o indexof nos values e retorna ele

module.exports = { toWord}