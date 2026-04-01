const prompt = require("prompt-sync")();

let nome = prompt('Digite seu nome: ');
let idade = prompt('Digite sua idade: ');
let CNH = prompt('Você possui CNH? (Sim/Não): ');

let pessoa = {nome, idade, CNH};

console.log('=== EXIBINDO INFORMAÇÕES ===')
console.log(`Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nPossui CNH (SIM/NÃO)? ${pessoa.CNH}`);

