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

module.exports = {
    fatorial
}