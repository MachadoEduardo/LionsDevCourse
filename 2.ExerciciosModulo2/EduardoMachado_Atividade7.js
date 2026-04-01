const prompt = require("prompt-sync")();

let inputUsuario = Number(prompt("Digite um nuḿero para verificar se é par ou ímpar: "));

if(inputUsuario % 2 === 0){
    console.log("O número é par!");
} else {
    console.log("O número é ímpar!");
}