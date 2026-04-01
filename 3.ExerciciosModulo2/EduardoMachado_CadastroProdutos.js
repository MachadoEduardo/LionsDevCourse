const prompt = require("prompt-sync")();

let produtos = [];
let opcaoMenu;

function criarProduto(){
    let nome = prompt('Qual o nome do produto? ');
    let preco = Number(prompt('Qual o preço do produto? ').replace(',', '.'));
    let quantidade = Number(prompt('Qual a quantidade do produto? '));
    
    if (isNaN(preco) || isNaN(quantidade)) {
        console.error("Erro: Preço ou Quantidade inválidos. Produto não cadastrado.");
        return;
    }
    
    let produto = {nome, preco: preco.toFixed(2), quantidade};
    
    produtos.push(produto);
    console.clear();
    console.log('Produto cadastrado com sucesso!');
}

console.log('Bem-vindo ao sistema de cadastro de produtos!')

do{
    console.log("Você deseja cadastrar um produto? 1 - SIM | 2 - NÃO");
    opcaoMenu = prompt('R: ')
    switch(opcaoMenu){
        case '1':
            criarProduto();
            break;
        case '2':
            console.log("Saindo...");
            break;
    };
} while (produtos.length < 3 && opcaoMenu != 2);

if(produtos.length > 0){
    console.clear();
    console.log('\n--- RELATÓRIO DE ESTOQUE ---');
    console.table(produtos);
}