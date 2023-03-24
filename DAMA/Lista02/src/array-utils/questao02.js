//questao02

function palindromo(palavra){
    contrario = '';

    for (let p = palavra.length - 1; p >= 0 ; p--) {
       contrario += palavra[p]   
    }

    return contrario == palavra
}

module.exports ={
    palindromo
} 