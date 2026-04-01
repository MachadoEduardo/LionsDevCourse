const prompt = require("prompt-sync")();

let dtNascimento = Number(prompt('Digite seu ano de nascimento: '));

function calculaIdade(anoNascimento){
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let idade = anoAtual - anoNascimento;

    console.log(`Você possui ${idade} anos!`);
}

calculaIdade(dtNascimento);