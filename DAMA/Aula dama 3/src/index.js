const {somarVetores, lerArray} = require('./array');

const vetorA = lerArray(3)
const vetorB = lerArray(3)

const soma = somarVetores(vetorA, vetorB)

console.log(soma);