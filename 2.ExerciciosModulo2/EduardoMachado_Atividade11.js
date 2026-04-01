const prompt = require("prompt-sync")();

function calcularMedia(){
    let media = 0;
    let resultado = 0;
    for(i = 0; i < listaNumeros.length; i++){
        media = listaNumeros[i] + media;
    };
    
    resultado = media/listaNumeros.length;

    return resultado;
}

let listaNumeros = [];
let inputUsuario;

do{
    inputUsuario = Number(prompt("Digite um número que deseja adicionar a lista, caso queira parar, digite 0: "));
    if(inputUsuario != 0 )
        listaNumeros.push(inputUsuario);
} while (inputUsuario != 0);

let resultado = 0;
resultado = calcularMedia();

console.log(`A média desse vetor é ${resultado}!`);