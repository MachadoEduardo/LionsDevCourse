const prompt = require("prompt-sync")()

let decisaoUsuario, jogos = [];

function exibirMenu(){
    console.log(`
    Menu
    1. Cadastrar jogo
    2. Listar todos os jogos
    3. Editar jogo
    4. Excluir jogo
    5. Sair
    `)
    decisaoUsuario = Number(prompt("Escolha uma das opções. R: "));
    switch(decisaoUsuario){
        case 1:
            cadastrarJogo();
            break;
        case 2:
            listarJogos();
            break;
        case 3:
            editarJogo();
            break;
        case 4:
            excluirJogo();
            break;
        case 5:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            exibirMenu();
            break;
    }
}

function cadastrarJogo(){
    let nome = prompt("Qual é o nome do jogo? R: ");
    let tema = prompt("Qual o tema do jogo? R: ");
    let preco = Number(prompt("Qual o preço do jogo? R: "));

    if(isNaN(preco)){
        console.clear()
        console.log("Preço inválido, tente novamente.")
        return exibirMenu();
    }

    let novoJogo = {nome, preco, tema};

    jogos.push(novoJogo);

    console.clear()
    console.log("Jogo cadastrado com sucesso!");
    exibirMenu()
}

function listarJogos(){
    console.clear()
    if(jogos.length < 1){
        console.clear()
        console.log("Não existem jogos cadastrados.");
        return exibirMenu()
    }
    console.log("Lista dos jogos cadastrados abaixo.");
    
    for(i = 0; i < jogos.length; i++){
        console.log(`${i + 1}. Nome: ${jogos[i].nome} | Preço: R$${jogos[i].preco.toFixed(2)} | Tema: ${jogos[i].tema}`)
    }
    decisaoUsuario = prompt("Aperte enter para continuar...");
    console.clear()
    exibirMenu()
}

function excluirJogo(){
    let jogoParaExcluir = prompt("Digite o nome do jogo que deseja excluir. R: ");
    if(jogos.find(jogo => jogo.nome === jogoParaExcluir)){
        jogos = jogos.filter(jogo => jogo.nome !== jogoParaExcluir);   
    } else {
        console.clear();
        console.log("Esse jogo não está cadastrado.");
        return exibirMenu();
    }

    console.clear();
    console.log("Jogo excluído com sucesso!");
    exibirMenu();
}

function imprimirLista() {
    if (jogos.length < 1) {
        console.clear();
        console.log("Não existem jogos cadastrados.");
        return false;
    }
    console.log("Lista dos jogos cadastrados:");
    for (let i = 0; i < jogos.length; i++) {
        console.log(`${i + 1}. Nome: ${jogos[i].nome} | Preço: R$${jogos[i].preco.toFixed(2)} | Tema: ${jogos[i].tema}`);
    }
    return true;
}

function editarJogo(){
    if(!imprimirLista()){
        return exibirMenu();
    }
    let posicao = Number(prompt("Selecione qual dos jogos deseja editar, para isso, escreva a posiçaõ do jogo na lista. Ex.: 3. R: "))

    if(posicao > 0 && posicao <= jogos.length){
        let nome = prompt("Digite o nome do jogo. R: ");
        let preco = Number(prompt("Digite o preço do jogo. R: "));
        let tema = prompt("Digite o tema do jogo. R: ");

        let jogoEditado = {nome, preco, tema}

        jogos[posicao - 1] = jogoEditado;
        console.clear()
        console.log("Jogo editado com sucesso!");
        exibirMenu(); 
    } else {
        console.clear();
        console.log("Selecione um jogo da lista.");
        editarJogo();
    }
}

exibirMenu()