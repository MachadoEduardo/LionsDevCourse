const prompt = require('prompt-sync')();

function divisivelPorCinco(inputUsuario){
    if(inputUsuario % 5 === 0){
        console.log(`O número ${inputUsuario} é divisível por 5.`);
    } else {
        console.log(`O número ${inputUsuario} não é divisível por 5.`);
    }
}

let inputUsuario = Number(prompt('Insira um número: '));
divisivelPorCinco(inputUsuario);