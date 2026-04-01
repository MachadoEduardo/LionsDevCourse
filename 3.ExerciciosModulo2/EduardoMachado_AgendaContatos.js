const prompt = require("prompt-sync")();

let listaContatos = [];

console.log('== BEM VINDO ==');
console.log('Digite seus contatos!');

for(i = 0; i < 3; i++){
    let nome = prompt('Nome: ');
    let telefone = prompt('Telefone: ');
    let cidade = prompt('Cidade: ');

    let contato = {nome, telefone, cidade};
    listaContatos.push(contato);
    console.clear();
}

console.log('== LISTA DE CONTATOS ==');
console.table(listaContatos);