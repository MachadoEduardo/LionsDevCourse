const prompt = require('prompt-sync')();

let nome = prompt('Digite seu nome: ');
let decisaoUsuario = prompt('Você possui CNH? Digite 1 para SIM ou digite 2 para NÃO: ');

switch(decisaoUsuario){
    case '1':
        console.log(`${nome}, você tem permissão para dirigir!`);
        break;
    case '2':
        console.log(`${nome}, você não tem permissão para dirigir!`);
        break;
    default:
        console.log('Opção inválida.')
        break;
}