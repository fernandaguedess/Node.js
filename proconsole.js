algo = 1

//console.log(se aparecer isso,e pq algo esta errado)
//console.log("Este foi o numero escolhido:", algo)
//console.log("Nicee! aspas duplas utilizadas")
//console.log('Agora vamos repetir o numero com aspas simples:',algo)
//console.log('Mandou bem demais,hein! Dessa vez as aspas simples foram utilizadas')

//precisa dar espaco antes do concat pra que ele nao de concat sem espaco
//console.log("Process com aspas duplas e concat agr: " + algo)

//usando o comando process.stdout.write
//nao funcionou as aspas duplas nem as simples com a var por meio da virgula
//so funcionou com o concat
process.stdout.write('Sera que funciona agora ' + algo + '\n')
process.stdout.write("Com aspas duplas agr " + algo + "\n")
//o console.log manda a resposta da funcao para a prox linha,enquanto o processtdout continua na mesma.

//Depois de tudo isso, a melhor forma para que um comando com variavel digite algo na tela de forma suscinta e rapid>
let i = 'Hello World'