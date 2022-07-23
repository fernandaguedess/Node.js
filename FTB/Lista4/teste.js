const result = "Fulano de  Tal dos anzois pereira"
const names = result.toLowerCase().split(" ");

console.log(names)

/*

function proper_name(full_name=process.argv)
//funçao declarada e seu argumento, ok
{
	const result = []
	const names = full_name.toLowerCase().split(" ");
    
    /*Funcionando ok  hehe :)
	//o fullname agr é dividido de acordo com os seus espaços
	//se tornando um array onde cada índice é uma parte do nome, respectivamente.
	for (let name of names) {
        switch (name){
           case 'de':
           case 'do':
           case 'da':
           case 'dos':
           case 'das':
            break;
            default:
           //[]name e slice funcionam em strings também! (:
           //colocar os joins sem o espaço entre os parenteses 
           //fez retornar tudo sem espaço,cuidado
           name = name[0].toUpperCase()+name.slice(1)
           //para cada partinha do nome, a sua primeira letra fica maiúscula, enquanto 
           // o que sobra continua "minúsculo".
           break;
   }
   
   result.push(name);
   }
   return result.join(" ");
   }
   const name = process.argv.slice(2).join(" ")
   console.log(`Nome original: ${name}`);
   console.log(`Nome embelezado: ${proper_name(name)}`);
   
   return names;}
   full_name = process.argv
*/