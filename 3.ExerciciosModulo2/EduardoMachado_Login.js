const prompt = require("prompt-sync")();

let decisao;

let usuario = 'usuariodeacesso';
let senha = 'senhadeacesso';

let usuarioInput;
let senhaInput;

console.log('====BEM-VINDO====');
do{
    usuarioInput = prompt('Digite seu usuário: ');
    senhaInput = prompt('Digite sua senha: ');
    if(usuario === usuarioInput && senha === senhaInput){
        console.log('Login realizado com sucesso!');
        break;
    } else {
        console.clear();
        console.log('Credenciais erradas ou o login não existe.');
        console.log('Deseja tentar novamente? 1 - SIM | 2 - NÃO');
        decisao = prompt('R: '); 
    }    
} while (decisao == '1');