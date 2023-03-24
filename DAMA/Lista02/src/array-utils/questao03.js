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
    matrizMax
}