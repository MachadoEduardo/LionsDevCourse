const prompt = require("prompt-sync")();

let listaNotas = [];
let prova1, prova2, media = 0;

console.log(' === BEM VINDO ===');
prova1 = parseFloat(prompt('Digite a nota da primeira prova: '));
listaNotas.push(prova1);
prova2 = parseFloat(prompt('Digite a nota da segunda prova: '));
listaNotas.push(prova2);

for(i = 0; i < listaNotas.length; i++){
    media = listaNotas[i] + media;
}

media = media/listaNotas.length;

console.log(`A média das notas é ${media}!`)
