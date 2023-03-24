// questao 04. Elabore um algoritmo que leia 10 números, e imprima quantos números maiores que 30 foram digitados.
const prompt = require('prompt-sync')();
function numerosMaioresq30(){
    let contador = 0 ;
    for (let n = 1 ; n <= 10 ; n++) {
        const num = parseInt(prompt(`Digite o ${n}º numero: `))
        if (num > 30) {
            contador++
        }  
    }
    return contador
}

module.exports = {
    numerosMaioresq30
}

