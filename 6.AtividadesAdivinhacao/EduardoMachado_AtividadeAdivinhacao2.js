const prompt = require("prompt-sync")()

let opcoes = ['Pedra', 'Papel', 'Tesoura', 'Lagarto', 'Spock'];
let escolhaComputador, escolhaUsuario, resultado;

console.log("=== BEM VINDO ===");
escolhaUsuario = prompt("Escolha entre Pedra, Papel ou Tesoura. R: ");

escolhaComputador = opcoes[Math.floor(Math.random() * 5)];

if(escolhaComputador === escolhaUsuario){
    resultado = "Empate";
} else if((escolhaUsuario === "Tesoura" && escolhaComputador === "Papel")
            || (escolhaUsuario === "Tesoura" && escolhaComputador === "Lagarto")
            || (escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura")
            || (escolhaUsuario === "Pedra" && escolhaComputador === "Lagarto") 
            || (escolhaUsuario === "Papel" && escolhaComputador === "Pedra")
            || (escolhaUsuario === "Papel" && escolhaComputador === "Spock")
            || (escolhaUsuario === "Lagarto" && escolhaComputador === "Spock")
            || (escolhaUsuario === "Lagarto" && escolhaComputador === "Papel")
            || (escolhaUsuario === "Spock" && escolhaComputador === "Tesoura")
            || (escolhaUsuario === "Spock" && escolhaComputador === "Pedra"))
            {
               resultado = "Você ganhou!"; 
            }
else{
    resultado = "Você perdeu!";
};

console.log(`A escolha do oponente foi ${escolhaComputador}!`)
console.log(`O resultado foi: ${resultado}`);
