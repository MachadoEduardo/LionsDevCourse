let lotes = [];
let totalIngressos = 0;

for(i = 0; i < Math.floor(Math.random() * 15) + 1; i++){
    lotes[i] = Math.floor(Math.random() * 100) + 1;
}

for(i = 0; i < lotes.length; i++){
    totalIngressos = totalIngressos + lotes[i];
}

console.log(`O total de ingressos vendidos foi ${totalIngressos}!`);