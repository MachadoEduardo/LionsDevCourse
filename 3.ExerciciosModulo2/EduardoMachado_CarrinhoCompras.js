const prompt = require("prompt-sync")();

let listaProdutos = [];
let decisaoUsuario;

do{
    menu();
    decisaoUsuario = prompt('Selecione uma das opções do menu! R: ');
    switch(decisaoUsuario){
        case '1':
            cadastrarProduto();
            break;
        case '2':
            exibirProdutos();
            break;
        case '0':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção inválida, tente novamente!');
            break;
    }
} while(decisaoUsuario != '0')


function menu() {
    console.log(' ==== MENU ====');
    console.log('1 - Cadastrar Produto');
    console.log('2 - Exibir Produtos');
    console.log('0 - Sair');
}

function cadastrarProduto() {
    let nome = prompt('Qual o nome do produto? ');
    let preco = Number(prompt('Qual o preço do produto? '));
    let quantidade = Number(prompt('Qual a quantidade do produto? '));
  
    let produto = { nome, preco, quantidade }; 
  
    listaProdutos.push(produto);
    
    console.clear();
    console.log(`Prodto ${nome} criado com sucesso!`);
}

function exibirProdutos(){
    console.clear();
    console.table(listaProdutos);
}