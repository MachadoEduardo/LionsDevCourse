const prompt = require("prompt-sync")()

function collatz(numero) {
    if (numero <= 0 || !Number.isInteger(numero)) {
        return null;
    }

    let passos = 0;

    while (numero !== 1) {
        if (numero % 2 === 0) {
            numero = numero / 2;
        } else {
            numero = numero * 3 + 1;
        }
        passos++;
    }

    return passos;
}

let numero = Number(prompt("Digite um número: "));
console.log(collatz(numero));