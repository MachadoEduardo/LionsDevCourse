const prompt = require("prompt-sync")()

function sequenciaFibonacci(numero) {
    let a = 0, b = 1;
    let vetorFibonacci = [];

    for (let i = 0; i < numero; i++) {
        vetorFibonacci.push(a);
        let proximo = a + b;
        a = b;
        b = proximo;
    }

    return vetorFibonacci;
}

let numero = Number(prompt("Digite um número: "));
console.log(sequenciaFibonacci(numero));