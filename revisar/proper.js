function proper_name(full_name) //nome da função,ok
{
 const result = [] 
 const names = full_name.toLowerCase().split(" ");  /*quebra a string em uma array.o que vai definir a divisao vai ser o separador,que no caso eh um espaço.
 names =  array com o nome completo separadinho*/

 for (let name of names) { /*o name aqui vai resgatar o valor de cada componente do array names*/
  switch (name) {
    case '': continue;
    case " D'": name = name.toUpperCase()+name.slice(2)
    case 'de':
    case 'do':
    case 'da':
    case 'dos':
    case 'das':
    break;
   default:

   name = name[0].toUpperCase()+name.slice(1) /*cada name do names que nao for um conectivo vai: ficar uppercase na primeira letra(posicao) e vai ser adicionado ao name original da posicao 1 ate o fim(sem contar com essa primeira opcao,obviamente)*/
    break;
  }
result.push(name); /*o push vai add na array result a string name */
 }
return result.join(" "); /* o join vai criar uma grande string juntando todos os elementos do array result, que tamembem sao strings kk*/
}
const name= process.argv.slice(2).join(" ")
console.log(`Nome original: ${name}`);
console.log(`Nome embelezado: ${proper_name(name)}`);