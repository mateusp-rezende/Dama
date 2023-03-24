const {fatorial} = require('./array-utils/questao01')
const {palindromo} = require('./array-utils/questao02')
const {matrizMax} = require('./array-utils/questao03')
const { numerosMaioresq30} = require('./array-utils/questao04')




console.log(' Questão 01. O fatorial é : ' +  fatorial(1))

console.log(' Questão 02. É um palindro (true ou false) : ' +  palindromo('ana'))

console.log(' Questão 03. O valor maximo da matriz é : ' + matrizMax([[1,2],[3,4],[5,6]]))

console.log(numerosMaioresq30())