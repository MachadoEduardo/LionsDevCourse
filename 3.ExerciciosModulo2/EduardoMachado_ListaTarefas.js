const prompt = require("prompt-sync")();

let listaTarefas = [];

console.log('== BEM VINDO ==');
console.log('Liste suas tarefas do dia!');
for(i = 0; i < 5; i++){
    let tarefa = prompt('Tarefa: ');
    listaTarefas.push(tarefa);
}

console.clear();
console.log('== LISTA DE TAREFAS ==');
for(i = 0; i < 5; i++){
    console.log(`${i} - ${listaTarefas[i]}`);
}