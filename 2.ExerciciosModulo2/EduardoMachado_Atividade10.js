const prompt = require("prompt-sync")();

let listaNumeros = [];
let inputUsuario;

do{
    inputUsuario = Number(prompt("Digite um número que deseja adicionar a lista, caso queira parar, digite 0: "));
    if(inputUsuario != 0 )
        listaNumeros.push(inputUsuario);
} while (inputUsuario != 0);

inputUsuario = Number(prompt("Digite um número que deseja verificar se está presente na lista: "));

if(listaNumeros.includes(inputUsuario)){
    console.log(`O número ${inputUsuario} está presente na lista!`);
} else {
    console.log(`O número ${inputUsuario} não está presente na lista!`)
}