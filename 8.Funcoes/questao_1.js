const prompt = require("prompt-sync")()

function calculoFatorial(numero){
    if (numero === 0) return 1;

    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}

let numero = Number(prompt("Digite um número: "));
console.log(calculoFatorial(numero));