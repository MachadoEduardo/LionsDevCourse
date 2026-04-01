const prompt = require("prompt-sync")();

let listaNotas = [];

console.log('== BEM VINDO ==');
console.log('Digite as notas do aluno!');

for(i = 0; i < 4; i++){
    let nota = Number(prompt('Nota: '));
    listaNotas.push(nota);
}

calcularMedia();

function calcularMedia(){
    let media = 0;
    for(i = 0; i < 3; i++){
        media = media + listaNotas[i];
    }
    media = media/4;

    return mostrarResultado(media);
}

function mostrarResultado(media){
    if(media >= 7){
        console.log('Aprovado!');
    } else if(media < 5) {
        console.log('Reprovado!');
    } else {
        console.log('Recuperação!');
    }
}
