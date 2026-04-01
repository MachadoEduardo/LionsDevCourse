const prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 15) + 1;
let decisaoUsuario = 0;

console.log('Bem-vindo ao Desafio de Adivinhação!');

do{
    console.log('== QUAL SEU CHUTE? ==');
    decisaoUsuario = Number(prompt('R: '));

    if(decisaoUsuario === numeroAleatorio){
        console.log('Acertou!');
    } else {
        console.log('Tente novamente!')
    }    
} while(decisaoUsuario != numeroAleatorio);
