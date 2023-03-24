const prompt = require('prompt-sync')()

function lerArray(n){
    const array = []
    for (let i = 0; i < n; i++){
        const valor = prompt(` array[{${i}}]: `)
        array[i] = Number(valor)
    }
    return array
}

function somarVetores(vetorA,vetorB){
    const soma = []

    for(let i = 0; i<vetorA.length;i++){
        soma[i] = vetorA[i] + vetorB[i];
    }
    return soma;
}

module.exports = {
    somarVetores,lerArray
}