const prompt = require("prompt-sync")();

function menu() {
    console.log('\n==== MENU ====');
    console.log('1 - Cadastrar Aluno');
    console.log('2 - Buscar Aluno');
    console.log('3 - Listar Alunos');
    console.log('4 - Excluir Aluno');
    console.log('5 - Maior Nota');
    console.log('6 - Média das Notas');
    console.log('0 - Sair');
  }
  
  function cadastrarAluno() {
    let nome = prompt('Qual o nome do aluno? ');
    let idade = Number(prompt('Qual a idade do aluno? '));
    let curso = prompt('Qual o curso do aluno? ');
    let nota = Number(prompt('Qual a nota do aluno? '));
  
    let aluno = { nome, idade, curso, nota }; 
  
    alunos.push(aluno);
    
    console.clear();
    console.log(`Aluno ${nome} criado com sucesso!`);
  }
  
  function buscarAluno(){
      let chaveBusca = prompt('Qual o nome do aluno? ');
      let alunoEncontrado = alunos.find(a => a.nome === chaveBusca)
      
      if(alunoEncontrado){
          console.log(`Aluno encontrado: ${alunoEncontrado.nome}, de ${alunoEncontrado.idade} anos com sucesso!`);
      } else {
          console.log('Aluno não encontrado!')
      }
  }
  
  function listarAlunos() {
    console.clear();
    if (alunos.length === 0) {
      console.log("Nenhum aluno cadastrado.");
      return;
    }
    
    console.log('=== Lista de Alunos ===');
    console.table(alunos);
  }
  
  function excluirAluno(){
      let chaveBusca = prompt('Qual o nome do aluno? ');
      alunos = alunos.filter(a => a.nome !== chaveBusca);
      
      if(alunos.filter(a => a.nome === chaveBusca)){
          console.log(`Aluno deletado com sucesso!`);
      } else {
          console.log('Aluno não encontrado!')
      }
  }
  
  function maiorNota(){
      if (alunos.length === 0) {
          console.log("Nenhum aluno cadastrado.");
          return;
      }
  
      const notas = alunos.map(aluno => aluno.nota);
      const maior = Math.max(...notas);
      
      console.log(`A maior nota da turma é: ${maior}`);
  }
  
  function mediaNotas(){
      if (alunos.length === 0) {
          console.log("Nenhum aluno cadastrado.");
          return;
      }
      
      let somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
      let media = somaNotas / alunos.length;

      console.clear();
      console.log(`A média das notas dos alunos é ${media}!`);
  }
  
  let alunos = [];
  let opcaoMenu; 
  
  do {
    console.clear();
    menu();
    opcaoMenu = prompt("Selecione a opção que deseja: ");
    
    switch (opcaoMenu) {
      case '1':
        cadastrarAluno();
        break;
      case '2':
        buscarAluno();
        break;
      case '3':
        listarAlunos();
        break;
      case '4':
        excluirAluno();
        break;
      case '5':
        maiorNota();
        break;
      case '6':
        mediaNotas();
        break;
      case '0':
        console.log("Saindo...");
        break;
      default:
        console.log('Opção inválida!');
        break;
    }
    
    if (opcaoMenu !== '0') {
      prompt("\nPressione ENTER para voltar ao menu... "); 
    }
  } while (opcaoMenu !== '0');