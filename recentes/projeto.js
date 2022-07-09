function toWord(numero)

const nums = {
  'zero' : 0,
    'um' : 1,
  'dois' : 2,
  'três' : 3
}

const exi = numero.indexOf(Object.keys) //checa se o que foi digitado existe no array mãe e retorna o index do valor correspondente;
return Object.values(nums)[exi]

module.exports