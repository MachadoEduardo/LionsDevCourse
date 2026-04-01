const prompt = require("prompt-sync")()

let numeroSorteado = Math.floor((Math.random() * 100) + 1);
let chuteUsuario, qtdTentativas = 0;

console.log("Seja bem vindo ao === JOGO DE ADIVINHAÇÃO ===");
console.log("O sistema gerou um número aleatório entre 1 e 100, tente adivinhar!")
do{
    chuteUsuario = Number(prompt(`Você possui ${7 - qtdTentativas} tentativas R: `));
    if(isNaN(chuteUsuario)){
        console.log("Número inválido, recomece.")
        break;
    }

    palpiteUsuario(chuteUsuario);

    if(qtdTentativas >= 7){
        console.log("Acabaram suas tentativas.")
        break;
    }
} while((chuteUsuario != numeroSorteado) && (qtdTentativas < 7))

function palpiteUsuario(chuteUsuario){
    let resultado = '';
    qtdTentativas = qtdTentativas + 1;
    switch(true){
        case (chuteUsuario < numeroSorteado):
            resultado = "Chute um número maior!";
            break;
        case (chuteUsuario > numeroSorteado):
            resultado = "Chute um número menor!";
            break;
        default:
            resultado = `Parabéns, você acertou! Foram necessárias ${qtdTentativas} tentativas.`;
    }

    console.log(resultado)
}