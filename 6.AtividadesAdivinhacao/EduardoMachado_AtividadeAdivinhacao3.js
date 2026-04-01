const prompt = require("prompt-sync")()

let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let senha = '', comprimentoSenha;

comprimentoSenha = Number(prompt("Qual será o tamanho da senha? R: "));

for(i = 0; i < comprimentoSenha; i++){
    let indiceCaracteres = Math.floor((Math.random() * caracteres.length) + 1);
    senha = senha + caracteres.charAt(indiceCaracteres);
};

console.log(`A sua senha é: ${senha}`);