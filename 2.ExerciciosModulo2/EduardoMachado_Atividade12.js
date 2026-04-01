const prompt = require("prompt-sync")();

let listaAlunos = [];

let decisaoUsuario;

do{
    console.log('== MENU ==');
    console.log('1 - Cadastrar Aluno');
    console.log('2 - Sair');
    decisaoUsuario = prompt('Selecione uma das opções do menu: ');
    switch(decisaoUsuario){
        case '1':
            cadastrarAluno();
            break;
        case '2':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida.')
            break;
    }    
} while (decisaoUsuario != '2')

function cadastrarAluno(){
    let nome = prompt('Digite o nome do aluno: ');
    let idade = prompt('Digite a idade do aluno: ');
    let curso = prompt('Digite o curso do aluno: ');

    let aluno = {nome, idade, curso};

    listaAlunos.push(aluno);

    mostrarAluno();
}

function mostrarAluno(){
    console.clear();
    console.log('=== LISTA DE ALUNOS ===');
    console.table(listaAlunos);
}


