const prompt = require("prompt-sync")()

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

let numero = Number(prompt("Digite um número: "));
tabuada(numero);