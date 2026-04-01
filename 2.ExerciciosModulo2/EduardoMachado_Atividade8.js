const prompt = require("prompt-sync")();

let hobbies = [];
let hobbieUsuario;

do{
    hobbieUsuario = prompt("Digite o hobbie que deseja inserir na lista, caso deseja sair, pressione 0: ");
    if(hobbieUsuario != '0')
        hobbies.push(hobbieUsuario);
} while (hobbieUsuario != '0');

console.table(hobbies);