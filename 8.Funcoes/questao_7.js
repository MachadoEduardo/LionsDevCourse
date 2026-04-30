const prompt = require("prompt-sync")()

function rolarDadoAte6() {
    let tentativas = 0;
    let resultado;

    do {
        resultado = Math.floor(Math.random() * 6) + 1;
        tentativas++;
    } while (resultado !== 6);

    return `Foram necessárias ${tentativas} tentativas para tirar o número 6.`;
}

console.log(rolarDadoAte6());