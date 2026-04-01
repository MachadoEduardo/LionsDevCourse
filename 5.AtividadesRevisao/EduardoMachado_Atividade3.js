const prompt = require('prompt-sync')();

let vetorInicial = [];
let vetorImpar = [];
let vetorPar = [];

for(i = 0; i <= 10; i++){
    vetorInicial[i] = Math.floor(Math.random() * (30 - 1)) + 1;
}

let inputUsuario = prompt('Adicione sua idade no vetor: ');

vetorInicial.push(inputUsuario);

for(i = 0; i < vetorInicial.length; i++){
    if(vetorInicial[i] % 2 !== 0){
        vetorImpar.push(vetorInicial[i]); 
    } else {
        vetorPar.push(vetorInicial[i]); 
    }
}

console.log('=== VETOR INICIAL ===');
console.log(vetorInicial);
console.log('=== VETOR PAR ===');
console.log(vetorPar);
console.log('=== VETOR ÍMPAR ===');
console.log(vetorImpar);