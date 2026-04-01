let vetorInicial = [];
let vetorImpar = [];

for(i = 0; i <= 10; i++){
    vetorInicial[i] = i;
    if(i % 2 !== 0){
        vetorImpar.push(i); 
    }
}

console.log(vetorImpar);