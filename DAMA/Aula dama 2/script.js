const prompt = require('prompt-sync') ();
const vetor = [];
const vetor2 =[];
var vetorSoma = [];
var media;

for (i = 0; i < 3; i++){
    const numeroA = prompt(`Vetor A na posição ${i}: `)
    const numeroB = prompt(`Vetor B na posição ${i}: `)
    
    vetor.push(Number(numeroA))
    vetor2.push(Number(numeroB))
    vetorSoma.push(vetor[i] + vetor2[i])
   
}

 
   
console.log(vetor,vetor2,vetorSoma);
console.log(media)






