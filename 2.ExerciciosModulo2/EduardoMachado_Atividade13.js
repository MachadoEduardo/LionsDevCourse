const prompt = require("prompt-sync")();

let listaLivros = [];

let decisaoUsuario;

do{
    console.log('== MENU ==');
    console.log('1 - Adicionar novo livro');
    console.log('2 - Buscar livro por titulo');
    console.log('3 - Exibir todos os livros');
    console.log('4 - Sair');
    decisaoUsuario = prompt('Selecione uma das opções do menu: ');
    switch(decisaoUsuario){
        case '1':
            cadastrarLivro();
            break;
        case '2':
            buscarLivro();
            break;
        case '3':
            exibirLivros();
            break;
        case '4':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida.')
            break;
    }    
} while (decisaoUsuario != '4')

function cadastrarLivro(){
    let titulo = prompt('Digite o titulo do livro: ');
    let genero = prompt('Digite o gênero do livro: ');
    let paginas = prompt('Digite a quantidade de páginas do livro: ');

    let livro = {titulo, genero, paginas};

    listaLivros.push(livro);

    exibirLivros();
}

function buscarLivro(){
    let livroBuscado = prompt('Digite o titulo do livro: ');

    console.clear();
    if(listaLivros.some(element => element.titulo == livroBuscado)){
        console.log('Achamos o seu livro!');
        console.table(listaLivros);
    } else {
        console.log('Não encontramos seu livro.')
    }
}

function exibirLivros(){
    console.clear();
    console.log('=== LISTA DE LIVROS ===');
    console.table(listaLivros);
}


