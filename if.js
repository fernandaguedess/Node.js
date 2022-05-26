
nome = "Maria";
genero = "feminino";

console.log("Caso 1: if usando blocos bem delimitados");

if (genero == "feminino"){
console.log(`Bom dia, Sra. ${nome}`);
} else {
     if (genero == "masculino") {
console.log(`Bom dia,Sr. ${nome}`);
} else {
   console.log(`Desculpe, nao sei como te chamar`);
    }
}

console.log("Caso 2: If em 'cascata'");

if (genero == "feminino")
    console.log(`Bom dia, Sra. ${nome}`);
else if (genero == 'masculino')
    console.log(`Bom dia, Sr. ${nome}`);
else
  console.log(`Desculpe, ainda n sei como te tratar`);