const prompt = require("prompt-sync")()

let decisaoUsuario, funcionarios = [];

function exibirMenu(){
    console.log(`
    Menu
    1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exibir funcionário com maior salário
    4. Exibir funcionário com menor salário
    5. Sair
    `)
    decisaoUsuario = Number(prompt("Escolha uma das opções. R: "));
    switch(decisaoUsuario){
        case 1:
            cadastrarFuncionario();
            break;
        case 2:
            listarFuncionarios();
            break;
        case 3:
            exibirFuncionarioMaiorSalario();
            break;
        case 4:
            exibirFuncionarioMenorSalario();
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

function cadastrarFuncionario(){
    let nome = prompt("Qual é o nome do funcionário? R: ");
    let cargo = prompt("Qual o cargo do funcionário? R: ");
    let salario = Number(prompt("Qual o salário do funcionário? R: "));

    if(isNaN(salario)){
        console.clear()
        console.log("Salário inválido, tente novamente.")
        return exibirMenu();
    }

    let novoFuncionario = {nome, cargo, salario};

    funcionarios.push(novoFuncionario);

    console.clear()
    console.log("Funcionário cadastrado com sucesso!");
    exibirMenu()
}

function listarFuncionarios(){
    console.clear()
    if(funcionarios.length < 1){
        console.clear()
        console.log("Não existem funcionários cadastrados.");
        return exibirMenu()
    }
    console.log("Lista dos funcionários cadastrados abaixo.");
    
    for(i = 0; i < funcionarios.length; i++){
        console.log(`${i + 1}. Nome: ${funcionarios[i].nome} | Cargo: ${funcionarios[i].cargo} | Salário: R$${funcionarios[i].salario.toFixed(2)}`)
    }
    decisaoUsuario = prompt("Aperte enter para continuar...");
    console.clear()
    exibirMenu()
}

function exibirFuncionarioMaiorSalario(){
    if (funcionarios.length < 0) {
        console.clear();
        console.log("Não existem funcionários cadastrados.");
        return exibirMenu();
    }

    const salarios = funcionarios.map(funcionario => funcionario.salario);
    const maior = Math.max(...salarios);

    console.clear()
    console.log(`O maior salário dentre os funcionários é: R$${maior.toFixed(2)}`);
    decisaoUsuario = prompt("Aperte enter para continuar...");
    exibirMenu();
}

function exibirFuncionarioMenorSalario(){
    if (funcionarios.length < 0) {
        console.clear();
        console.log("Não existem funcionários cadastrados.");
        return exibirMenu();
    }

    const salarios = funcionarios.map(funcionario => funcionario.salario);
    const menor = Math.min(...salarios);

    console.clear()
    console.log(`O menor salário dentre os funcionários é: R$${menor.toFixed(2)}`);
    decisaoUsuario = prompt("Aperte enter para continuar...");
    exibirMenu();
}

exibirMenu()