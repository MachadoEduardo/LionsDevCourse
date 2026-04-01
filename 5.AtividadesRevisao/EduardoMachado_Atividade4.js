const prompt = require('prompt-sync')();

let vetorNotas = [];

for(i = 0; i < 10; i++){
    vetorNotas[i] = Math.floor(Math.random() * (10 - 1)) + 1;
}

function menu(){
    console.log('\n=== MENU ===');
    console.log('1 - Calcular Media');
    console.log('2 - Calcular Minimo e Máximo');
    console.log('3 - Ver quantidade de notas acima da média');
    console.log('4 - Incluir nota');
    console.log('5 - Ver quantidade de notas reprovadas');
    console.log('0 - Sair');
}

function calcularMedia(){
    let total = 0;
    let media = 0;
    for(i = 0; i < vetorNotas.length; i++){
        total += vetorNotas[i];
    }

    media = total/vetorNotas.length;
    return media;
}

function minMaxNota(){
    let maxNota = 0;
    let minNota = vetorNotas[0];
    for(i = 0; i <= vetorNotas.length; i++){
        if(vetorNotas[i] > maxNota)
            maxNota = vetorNotas[i];
        
        if (minNota > vetorNotas[i]) 
            minNota = vetorNotas[i];
    }

    console.log(`A maior das notas é ${maxNota} e a menor é ${minNota}!`);
}

function notasAcimaMedia(){
    let media = calcularMedia();
    let contagem = 0;
    
    for(i = 0; i < vetorNotas.length; i++){
        if(vetorNotas[i] > media){
            contagem = contagem + 1;
        }
    }

    console.log(`A quantidade de notas acima da média é ${contagem}!`);
}

function atualizarNotas(){
    let notaAdicionada = prompt('Digite a nota que deseja adicionar: ');
    vetorNotas.push(notaAdicionada);

    console.log(`A nova lista de notas é ${vetorNotas}!`);
}

function notasReprovadas(){
    let contagem = 0;
    for(i = 0; i < vetorNotas.length; i++){
        if(vetorNotas[i] < 8){
            contagem += 1;
        }
    }
    console.log(`A quantidade de notas reprovadas é ${contagem}!`);
}

console.log('=== LISTA DE NOTAS ===');
console.log(vetorNotas);

let decisaoUsuario;

do{
    menu();
    decisaoUsuario = prompt('\nCom base na lista de notas, selecione uma das opções: ')

    switch(decisaoUsuario){
        case '1':
            let media = calcularMedia();
            console.log(`A média é ${media}!`);
            break;
        case '2':
            minMaxNota();
            break;
        case '3':
            notasAcimaMedia();
            break;
        case '4':
            atualizarNotas();
            break;
        case '5':
            notasReprovadas();
            break;
        case '0':
            console.log('Saindo...');
            break;    
        default:
            console.log('Selecione uma das opções do Menu: ');
    }
} while (decisaoUsuario != '0');

