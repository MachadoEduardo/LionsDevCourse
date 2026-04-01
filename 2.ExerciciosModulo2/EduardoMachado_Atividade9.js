const prompt = require("prompt-sync")();

let fraseUsuario = prompt("Digite sua frase, iremos contar a quantidade de caracteres: ");
let qtdCaracteres = fraseUsuario.replace(/\s/g, '').length;

console.log(`Sua frase possui ${qtdCaracteres} caracteres!`)
