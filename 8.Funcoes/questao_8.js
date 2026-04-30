const prompt = require("prompt-sync")();

function menuPrincipal() {
    let opcao;
    do {
        console.log("\n=== MENU ===");
        console.log("1 - Cálculo de Fatorial");
        console.log("2 - Identificar Número Primo");
        console.log("3 - Sequência de Fibonacci");
        console.log("4 - O `N`-ésimo Termo de Fibonacci");
        console.log("5 - Tabuada");
        console.log("6 - Sequência de Collatz (O Problema 3x + 1)");
        console.log("7 - Simulador de Dados (A busca pelo 6)");
        console.log("0 - Sair");

        opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1: {
                let numero = lerNumero();
                console.log("\nResultado:", calculoFatorial(numero));
                break;
            }

            case 2: {
                let numero = lerNumero();
                console.log(ePrimo(numero) ? "É primo" : "Não é primo");
                break;
            }

            case 3: {
                let numero = lerNumero();
                console.log("\nResultado:", sequenciaFibonacci(numero));
                break;
            }

            case 4: {
                let numero = lerNumero();
                console.log("\nResultado:", fibonacci(numero));
                break;
            }

            case 5: {
                let numero = lerNumero();
                tabuada(numero);
                break;
            }

            case 6: {
                let numero = lerNumero();
                console.log("\nResultado:", collatz(numero));
                break;
            }

            case 7:
                console.log(rolarDadoAte6());
                break;

            case 0:
                console.log("Saindo...");
                break;

            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== 0);
}

function calculoFatorial(numero) {
    if (numero === 0) return 1;

    let resultado = 1;
    for (let i = numero; i > 0; i--) {
        resultado *= i;
    }
    return resultado;
}

function ePrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

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

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

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

function rolarDadoAte6() {
    let tentativas = 0;
    let resultado;

    do {
        resultado = Math.floor(Math.random() * 6) + 1;
        tentativas++;
    } while (resultado !== 6);

    return `Foram necessárias ${tentativas} tentativas para tirar o número 6.`;
}

function lerNumero() {
    let numero;

    do {
        numero = Number(prompt("Digite um número: "));
        if (isNaN(numero)) {
            console.log("Entrada inválida!");
        }
    } while (isNaN(numero));

    return numero;
}

menuPrincipal();