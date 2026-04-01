const prompt = require("prompt-sync")();

let saldo = 1000;
let valorSaque;

do{
    valorSaque = Number(prompt('Digite a quantia que deseja retirar: '));
    if(valorSaque <= saldo){
        saldo = saldo - valorSaque;
        console.log(`Você possui R$ ${saldo} de saldo!`);
    } else if (saldo <= 0) {
        console.log('Você não possui mais saldo.');
    } else {
        console.log('Você não possui saldo suficiente, retire uma quantia menor.');
    }
} while (saldo > 0);