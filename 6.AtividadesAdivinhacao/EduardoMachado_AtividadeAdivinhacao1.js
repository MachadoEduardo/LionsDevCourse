const prompt = require("prompt-sync")()

console.log("=== BEM VINDO ===");
let inputUsuario = Number(prompt("Qual o número de lados do dado? R: "));

let valorDado = Math.floor((Math.random() * inputUsuario) + 1);

console.log(`Você lançou o dado, o número que caiu foi ${valorDado}!`)