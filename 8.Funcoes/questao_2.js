const prompt = require("prompt-sync")()

function ePrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

let numero = Number(prompt("Digite um número: "));
console.log(ePrimo(numero) ? "É primo" : "Não é primo");