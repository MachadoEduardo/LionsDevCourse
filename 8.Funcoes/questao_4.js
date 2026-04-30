const prompt = require("prompt-sync")()

function fibonacci(n) {
    if (n <= 0) return null; // inválido
    if (n === 1 || n === 2) return 1;

    let a = 1, b = 1;

    for (let i = 3; i <= n; i++) {
        let proximo = a + b;
        a = b;
        b = proximo;
    }

    return b;
}

let numero = Number(prompt("Digite um número: "));
console.log(fibonacci(numero));