const { toRoman, toArabic } = require('./rom');

function proper_name(full_name)
{
  const result = []
  const names  = full_name.toLowerCase().split(" ");
  for (let name of names) {
    name = ajeita_nomes_com_apostrofo(name);
    name = ajeita_nomes_com_traco(name);
    switch (name) {
      case 'de':
      case 'do':
      case 'da':
      case 'dos':
      case 'das':
      case 'e':
      case 'van':
      case 'von':
      case 'der':
      case '-':
         break;
      case '':
         continue;
      default:
        const u_name = name.toUpperCase();
        const value  = toArabic(u_name);
        const new_roman = toRoman(value);
        if (new_roman == u_name) {
          name = u_name;
          break;
        }
        // Coloca só a primeira letra maiúscula
        name = name[0].toUpperCase() + name.slice(1)
        break;
    }
    result.push(name);
  }
  return result.join(" ");
}

function ajeita_nomes_com_traco(name)
{
  const parts = name.split('-'); 
  const new_parts = [];
  // Se o nome só tem uma parte (ou seja,
  // não tem traço), retorna direto sem alteração
  if (parts.length==1) return name;
  // Caso contrário, vá de parte em parte e
  // ajeite cada parte
  for (part of parts) {
    //part = 'da'
    part = part[0].toUpperCase() + part.slice(1); 
    //part = 'Da'
    new_parts.push(part);
  }
  name = new_parts.join('-');
  return name;
}

function ajeita_nomes_com_apostrofo(name)
{
  let apost = name.indexOf("'");
  if (apost > 0) {
    let apostro = name.slice(apost);
    name = name[0].toUpperCase() + name.slice(1, apost) + "'" + apostro[1].toUpperCase() + apostro.slice(2);
  }
  return name;
}
module.exports = proper_name;
