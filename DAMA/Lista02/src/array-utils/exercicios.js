//questao 01 

function fatorial(num){
    if ( num === 0) {
        return 1;
    }
    for (let f = num -1 ; f >= 1; f--) {
        num *= f
    }
    return num;
}

//questao02

function palindromo(palavra){
    contrario = '';

    for (let p = palavra.length - 1; p >= 0 ; p--) {
       contrario += palavra[p]   
    }

    return contrario == palavra
}

//questao 03

function matrizMax (matriz){
    let max =  matriz[0][0]

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]> max) {
                max = matriz[i][j];
            }
        }
    }
        return max;

}

module.exports = {
    fatorial,
    palindromo,
    matrizMax
    
}